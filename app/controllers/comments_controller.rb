class CommentsController < ApplicationController
  def create
    @artigo = Artigo.friendly.find(params[:artigo_slug])

    if params[:reply]
      @comment = Comment.new(reply_params)
      @comment.artigo_id = @artigo.id
    else
      @comment = Comment.new(comment_params)
      @comment.artigo_id = @artigo.id
    end

    if !comment_params[:name].strip.empty? && @comment.save
      render json: { notice: 'Obrigado pelo teu comentário!', comment: @comment }
    else
      render json: { error: 'Houve um erro com a criação do teu comentário, verifica se inseriste um nome válido e por favor tenta novamente' }
    end
  end

  private

  def comment_params
    params.permit(:name, :email, :comment)
  end

  def reply_params
    params.permit(:name, :email, :comment, :parent_id)
  end
end
