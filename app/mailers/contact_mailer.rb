class ContactMailer < ApplicationMailer
  def new_contact_email
    @params = params[:params]

    mail(to: 'vasco.kf@gmail.com', subject: 'Novo contacto via site')
  end
end
