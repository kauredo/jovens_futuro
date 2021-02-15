class RegistrationsController < Devise::RegistrationsController
  after_action :advise_confirm, only: [:create]

  private

  def sign_up_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :current_password)
  end

  def advise_confirm
    flash[:notice] = "A tua conta vai ser confirmada brevemente"
  end
end
