class PagesController < ApplicationController
  def home
    @artigo = ArtigoSerializer.new(Artigo.published.last).serializable_hash[:data]
  end

  def colaboradores
    @colaboradores = UserSerializer.new(Colaborator.all.sort_by(&:name)).serializable_hash[:data]
  end

  def contacto; end

  def email
    ContactMailer.with(params: params).new_contact_email.deliver_now
    render json: { notice: 'Obrigado por nos contactares! Vamos responder assim que possível!' }
  end
end
