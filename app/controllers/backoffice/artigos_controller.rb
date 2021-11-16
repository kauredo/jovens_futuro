class Backoffice::ArtigosController < ApplicationController
  layout 'backoffice'
  before_action :find_artigo, only: %I(show edit)
  before_action :check_user, except: %I(publish)
  before_action :check_admin_user, only: %I(publish)

  def index
    @page = params[:page]&.to_i || 1
    @path = backoffice_path

    @q = Artigo.last_first.ransack(params[:q])
    result = @q.result
    @pages = result.pages
    @total = result.count

    @last_page = @pages

    if @page <= @pages && !@pages.zero? || @page == 1
      @artigos = result.paginate(page: @page)
    else
      redirect_to backoffice_path(page: @pages)
      flash[:error] = "Página #{@page} está vazia"
    end
  end

  def show
    @artigo1 = ArtigoSerializer.new(@artigo).serializable_hash[:data]
    @comments = Comment.main_comments.where(artigo: @artigo)
    @count = 0
  end

  def new
    @artigo = Artigo.new
    @colaborator_ids = []
  end

  def edit; end

  def publish
    artigo = Artigo.friendly.find(params[:artigo_slug])
    if artigo.published
      artigo.toggle!(:published)
    else
      artigo.update(published: !artigo.published, published_at: Time.current)
    end
    redirect_to backoffice_path
  end

  private

  def find_artigo
    @artigo = Artigo.friendly.find(params[:slug])
    @colaborator_ids = @artigo.colaborators.map(&:id)
    redirect_back(fallback_location: backoffice_path) unless current_user.admin?
  end

  def check_user
    redirect_back(fallback_location: new_user_session_path) if !user_signed_in? || !current_user.confirmed?
  end

  def check_admin_user
    redirect_back(fallback_location: backoffice_path) if !user_signed_in? || !current_user.confirmed? || !current_user.admin?
  end
end
