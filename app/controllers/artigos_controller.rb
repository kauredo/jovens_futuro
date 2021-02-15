class ArtigosController < ApplicationController
  before_action :check_user, except: [:index, :show]
  def index
    @artigos = Artigo.published
    @artigos1 = ArtigoSerializer.new(@artigos).serializable_hash[:data]
  end

  def show
    @artigo = Artigo.find(params[:id])
    @artigo1 = ArtigoSerializer.new(@artigo).serializable_hash[:data]
  end

  def new
    @artigo = Artigo.new
  end

  def create
    @artigo = Artigo.new(artigo_params)
    @artigo.user = current_user
    if @artigo.save
      redirect_to artigos_path, notice: 'Artigo criado' 
    else
      render json: { error: 'Artigo não criado' }
    end
  end

  def edit
    @artigo = Artigo.find(params[:id])
  end

  def update
    @artigo = Artigo.find(params[:id])
    if @artigo.update(artigo_params)
      redirect_to artigos_path, notice: 'Artigo criado' 
    else
      render json: { error: 'Artigo não criado' }
    end
  end

  def destroy
  end

  private

  def artigo_params 
    params.require(:artigo).permit(:title, :content, :contents, :published, :user)
  end

  def check_user
    redirect_to artigos_path if !user_signed_in? || !current_user&.is_confirmed?
  end
end
