class PagesController < ApplicationController
  def home; end

  def artigos
  end

  def colaboradores; end

  def contacto; end

  def email
    name = params[:name]
    email = params[:email]
    phone = params[:phone]
    message = params[:message]
    if name.present? && email.present? && phone.present? && message.present?
      ContactMailer.with(params: params).new_contact_email.deliver_now
      flash[:success] = "Obrigado por nos contactares! Vamos responder assim que possível!"
    else
      flash[:error] = 'Por favor insere todos os campos'
    end
  end
end
