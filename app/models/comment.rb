class Comment < ApplicationRecord
  belongs_to :artigo
  belongs_to :parent, class_name: 'Comment', optional: true
  has_many :replies, class_name: 'Comment', foreign_key: 'parent_id'
  validates :name,  presence: true, length: { minimum: 5 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :comment, presence: true, length: { minimum: 5 }
  validate :duplicate_comment

  scope :main_comments, -> { where(parent_id: nil) }

  private

  def duplicate_comment
    return unless Comment.where(name: name, email: email, comment: comment, artigo_id: artigo_id, parent_id: parent_id).exists?

    errors.add(:duplicate, 'duplicate comment')
  end
end
