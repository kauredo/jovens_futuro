class RegistrationsController < Devise::RegistrationsController
  after_action :advise_confirm, only: [:create]

  def confirm_user
    user = User.find(params[:id])
    user.toggle!(:confirmed)
    redirect_to backoffice_admin_users_path
  end

  def admin_user
    user = User.find(params[:id])
    user.toggle!(:admin)
    redirect_to backoffice_admin_users_path
  end

  private

  def sign_up_params
    params.require(:user).permit(:avatar, :name, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:avatar, :name, :email, :password, :password_confirmation, :current_password)
  end

  def advise_confirm
    flash[:notice] = 'A tua conta vai ser confirmada brevemente'
  end
end
