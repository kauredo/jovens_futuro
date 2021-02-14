class ArtigosController < ApplicationController
  before_action :check_user, except: [:index]
  def index
    @artigos = ArtigoSerializer.new(Artigo.published).serializable_hash
  end

  def new
    
    user_signed_in?
    @artigo = ArtigoSerializer.new(Artigo.new(user_id: current_user.id)).serializable_hash
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def check_user
    if !user_signed_in?
      redirect_to artigos_path
    end
  end
end
