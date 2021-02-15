class User < ApplicationRecord
  has_many :artigos
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  scope :confirmed, -> { where(confirmed: true) }

  def is_confirmed?
    self.confirmed
  end
end
