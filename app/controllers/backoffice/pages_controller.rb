class Backoffice::PagesController < ApplicationController
  layout 'backoffice'

  def index
    redirect_back(fallback_location: root_path) if !user_signed_in? || !current_user.confirmed? || !current_user.admin?
    @users = User.all
  end
end
