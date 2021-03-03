class Backoffice::AdminController < ApplicationController
  layout 'backoffice'
  before_action :check_user

  def users
    @users = Colaborator.all.order({ created_at: :desc }) 
  end

  private

  def check_user
    redirect_back(fallback_location: root_path) if !user_signed_in? || !current_user.confirmed? || !current_user.admin?
  end
end
