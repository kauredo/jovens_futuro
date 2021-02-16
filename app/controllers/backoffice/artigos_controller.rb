class Backoffice::ArtigosController < ApplicationController
  layout 'backoffice'
  before_action :check_user

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

  private

  def check_user
    redirect_back(fallback_location: root_path) if !user_signed_in? || !current_user.confirmed? || !current_user.admin?
  end
end
