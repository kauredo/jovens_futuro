class Backoffice::ArtigosController < ApplicationController
  layout 'backoffice'

  def index
    @artigos = Artigo.all
  end

  def publish
    artigo = Artigo.find(params[:artigo_id])
    artigo.toggle!(:published)
    redirect_to backoffice_artigos_path
  end
end
