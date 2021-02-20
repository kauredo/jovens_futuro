class Comment < ApplicationRecord
  belongs_to :artigo
  belongs_to :parent, :class_name => 'Comment', optional: true
  has_many :replies, :class_name => 'Comment', :foreign_key => 'parent_id'

  scope :main_comments, -> { where(parent_id: nil) }
end
