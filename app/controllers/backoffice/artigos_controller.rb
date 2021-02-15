class Backoffice::ArtigosController < ApplicationController
  layout 'backoffice'

  def index
    @artigos = Artigo.all
  end

  def publish
    artigo = Artigo.find(params[:artigo_id])
    if artigo.published
      artigo.toggle!(:published)
    else
      artigo.update(published: !artigo.published, published_at: Time.now)
    end
    redirect_to backoffice_artigos_path
  end
end
