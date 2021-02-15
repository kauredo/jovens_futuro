class BackofficeController < ApplicationController
  def index
    redirect_to root_path if !user_signed_in? || !current_user.confirmed? || !current_user.admin?
    @users = User.all
  end
end
