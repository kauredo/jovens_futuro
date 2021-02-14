class ArtigosController < ApplicationController
  before_action :check_user, except: [:index]
  def index
    @artigos = ArtigoSerializer.new(Artigo.published).serializable_hash[:data]
  end

  def show
    @artigo = ArtigoSerializer.new(Artigo.find(params[:id])).serializable_hash[:data]
  end

  def new
    @artigo = Artigo.new
    @artigo.user = current_user
    @artigo = ArtigoSerializer.new(@artigo).serializable_hash[:data]
  end

  def create
    @artigo = Artigo.new(artigo_params)
    @artigo.user = current_user
    if @artigo.save
      render json: { notice: 'Artigo criado' }
    else
      render json: { error: 'Artigo não criado' }
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def artigo_params 
    params.require(:artigo).permit(:title, :content, :published, :user)
  end

  def check_user
    redirect_to artigos_path if !user_signed_in?
  end
end
