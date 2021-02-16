class Backoffice::ArtigosController < ApplicationController
  layout 'backoffice'
  before_action :find_artigo, only: %I(show edit update)
  before_action :check_user, except: %I(publish)
  before_action :check_admin_user, only: %I(publish)
  before_action :check_correct_user, only: %I(show edit update)

  def index
    @artigos = Artigo.where(user: current_user).reverse
  end

  def show
    @artigo1 = ArtigoSerializer.new(@artigo).serializable_hash[:data]
  end

  def new
    @artigo = Artigo.new
  end

  def create
    @artigo = Artigo.new(artigo_params)
    @artigo.user = current_user
    if @artigo.save
      redirect_to backoffice_artigos_path, notice: 'Artigo criado' 
    else
      render json: { error: 'Artigo não criado' }
    end
  end

  def edit; end

  def update
    if @artigo.update(artigo_params)
      redirect_to backoffice_artigo_path(@artigo), notice: 'Artigo criado'
    else
      render json: { error: 'Artigo não criado' }
    end
  end

  def publish
    artigo = Artigo.find(params[:artigo_id])
    if artigo.published
      artigo.toggle!(:published)
    else
      artigo.update(published: !artigo.published, published_at: Time.current)
    end
    redirect_to backoffice_admin_artigos_path
  end

  private

  def find_artigo
    @artigo = Artigo.find(params[:id])
  end

  def check_user
    redirect_back(fallback_location: backoffice_artigos_path) if !user_signed_in? || !current_user.confirmed?
  end

  def check_admin_user
    redirect_back(fallback_location: backoffice_artigos_path) if !user_signed_in? || !current_user.confirmed? || !current_user.admin?
  end

  def check_correct_user
    redirect_back(fallback_location: backoffice_artigos_path) unless @artigo.user == current_user || current_user.admin
  end

  def artigo_params 
    params.require(:artigo).permit(:title, :categoria, :contents, :user)
  end
end
