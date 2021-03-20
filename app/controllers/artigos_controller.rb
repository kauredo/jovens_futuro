class ArtigosController < ApplicationController
  before_action :check_user, except: %i(index show)
  before_action :find_artigo, only: %I(show update)
  before_action :check_approved_user, only: %I(update)

  def index
    @page = params[:page]&.to_i || 1

    @q = Artigo.published.ransack(params[:q])
    result = @q.result
    @pages = result.pages
    @total = result.count
    @artigos = result.paginate(page: @page)

    @artigos1 = ArtigoSerializer.new(@artigos).serializable_hash[:data]
  end

  def show
    @artigo1 = ArtigoSerializer.new(@artigo).serializable_hash[:data]
    @comments = CommentSerializer.new(Comment.main_comments.where(artigo: @artigo)).serializable_hash[:data]
  end

  def create
    @artigo = Artigo.new(artigo_params.except(:colaborators))
    associate_colaborators()
    if @artigo.save
      redirect_to backoffice_path, notice: 'Artigo criado'
    else
      render 'backoffice/artigos/new'
    end
  end

  def update
    unless @colaborator_ids == artigo_params[:colaborators]&.map(&:to_i)
      @artigo.artigos_colaborator.map(&:destroy!)
      associate_colaborators()
    end
    @artigo.slug = nil if @artigo.title != params[:title]
    if @artigo.update(artigo_params.except(:colaborators))
      redirect_to backoffice_artigo_path(@artigo), notice: 'Artigo criado'
    else
      render 'backoffice/artigos/edit'
    end
  end

  private

  def associate_colaborators
    colaborators = Colaborator.where(id: artigo_params[:colaborators])
    colaborators.each do |c|
      ArtigosColaborator.create(artigo: @artigo, colaborator: c)
    end
  end

  def find_artigo
    @artigo = Artigo.friendly.find(params[:slug])
    @colaborator_ids = @artigo.colaborators.map(&:id)
  end

  def check_user
    redirect_back(fallback_location: artigos_path) if !user_signed_in? || !current_user.confirmed?
  end

  def check_approved_user
    redirect_back(fallback_location: backoffice_path) unless current_user.admin
  end

  def artigo_params
    params.require(:artigo).permit(:title, :categoria, :contents, colaborators: [])
  end
end
