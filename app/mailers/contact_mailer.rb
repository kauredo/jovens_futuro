class ContactMailer < ApplicationMailer
  def new_contact_email
    @params = params[:params]

    mail(to: 'jovenseofuturo2021@gmail.com', subject: 'Novo contacto via site')
  end
end
