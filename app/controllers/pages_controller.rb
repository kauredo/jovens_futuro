class PagesController < ApplicationController
  def home; end

  def artigos
  end

  def colaboradores; end

  def contacto; end

  def email
    ContactMailer.with(params: params).new_contact_email.deliver_now
    render json: { notice: 'Obrigado por nos contactares! Vamos responder assim que possível!' }
  end
end
