class RegistrationsController < Devise::RegistrationsController
  after_action :logout_if_not_confirmed, only: [:create]

  private

  def sign_up_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :current_password)
  end

  def logout_if_not_confirmed
    flash[:notice] = "A tua conta vai ser confirmada brevemente"
    sign_out current_user
  end
end
