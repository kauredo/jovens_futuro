class CommentsController < ApplicationController
  def create
    if params[:reply]
      @comment = Comment.new(reply_params)
    else
      @comment = Comment.new(comment_params)
    end

    if @comment.save
      render json: {notice: 'Obrigado pelo teu comentário!', comment: @comment}
    else
      render json: {error: 'Houve um erro com a criação do teu comentário, por favor tenta novamente'}
    end
  end

  private

  def comment_params
    params.permit(:name, :email, :comment, :artigo_id)
  end
  
  def reply_params
    params.permit(:name, :email, :comment, :artigo_id, :parent_id)
  end
end
