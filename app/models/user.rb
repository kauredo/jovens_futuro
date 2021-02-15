class User < ApplicationRecord
  has_many :artigos
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  scope :confirmed, -> { where(confirmed: true) }
  scope :not_confirmed, -> { where(confirmed: false) }

  def confirmed?
    confirmed
  end

  def admin?
    admin
  end
end
