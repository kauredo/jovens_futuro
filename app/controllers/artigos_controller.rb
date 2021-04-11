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
    if @page <= @pages
      @artigos = result.paginate(page: @page)
    else
      redirect_to artigos_path(page: @pages)
    end

    @artigos1 = ArtigoSerializer.new(@artigos).serializable_hash[:data]
  end

  def show
    @artigo.update_page_views!
    @artigo1 = ArtigoSerializer.new(@artigo).serializable_hash[:data]
    @meta_image = generate_meta_image()
    @comments = CommentSerializer.new(Comment.main_comments.where(artigo: @artigo)).serializable_hash[:data]
    @count = 0
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

  def generate_meta_image
    case @artigo.colaborators.count
    when 2
      [
        { width: 1200, crop: 'scale' },
        { border: '50px_solid_rgb:57b2f2', flags: 'clip', gravity: 'center', height: 450, width: 450, overlay: @artigo.colaborators.first.avatar.file.public_id, radius: 'max', crop: 'thumb' },
        { flags: 'layer_apply', width: 450, x: -200 },
        { border: '50px_solid_rgb:57b2f2', flags: 'clip', gravity: 'center', height: 450, width: 450, overlay: @artigo.colaborators.last.avatar.file.public_id, radius: 'max', crop: 'thumb' },
        { flags: 'layer_apply', width: 450, x: 200 }
      ]
    when 3
      [
        { width: 1200, crop: 'scale' },
        { border: '35px_solid_rgb:57b2f2', flags: 'clip', gravity: 'center', height: 350, width: 350, overlay: @artigo.colaborators.first.avatar.file.public_id, radius: 'max', crop: 'thumb' },
        { flags: 'layer_apply', width: 350, x: -300 },
        { border: '35px_solid_rgb:57b2f2', flags: 'clip', gravity: 'center', height: 350, width: 350, overlay: @artigo.colaborators[1].avatar.file.public_id, radius: 'max', crop: 'thumb' },
        { flags: 'layer_apply', width: 350 },
        { border: '35px_solid_rgb:57b2f2', flags: 'clip', gravity: 'center', height: 350, width: 350, overlay: @artigo.colaborators.last.avatar.file.public_id, radius: 'max', crop: 'thumb' },
        { flags: 'layer_apply', width: 350, x: 300 }
      ]
    else
      [
        { width: 1200, crop: 'scale' },
        { border: '50px_solid_rgb:57b2f2', flags: 'clip', gravity: 'center', height: 501, width: 501, overlay: @artigo.colaborators.first&.avatar.file.public_id, radius: 'max', crop: 'thumb' },
        { flags: 'layer_apply', width: 501 }
      ]
    end
  end

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
    params.require(:artigo).permit(:title, :categoria, :contents, :has_slider, colaborators: [])
  end
end
