class Backoffice::AdminController < ApplicationController
  layout 'backoffice'
  before_action :check_user

  def users
    @users = User.all.order({ created_at: :desc }) 
  end

  def artigos
    @artigos = Artigo.last_first
  end

  private

  def check_user
    redirect_back(fallback_location: root_path) if !user_signed_in? || !current_user.confirmed? || !current_user.admin?
  end
end