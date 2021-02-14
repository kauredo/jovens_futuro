# Preview all emails at http://localhost:3000/rails/mailers/contact_mailer
class ContactMailerPreview < ActionMailer::Preview
  def new_contact_email
    params = {
      name: 'Vasco Teste',
      email: 'abc@mail.com',
      phone: '917778899',
      message: 'Olá, isto é uma mensagem de teste'
    }

    ContactMailer.with(params: params).new_contact_email
  end
end
