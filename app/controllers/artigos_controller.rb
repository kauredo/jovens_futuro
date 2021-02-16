class ArtigosController < ApplicationController
  before_action :check_user, except: %i(index show)

  def index
    @page = params[:page]&.to_i || 1

    @q = Artigo.published.ransack(params[:q])
    result = @q.result
    @pages = result.pages
    @total = result.count
    @artigos = result.paginate(page: @page)

    # @artigos = Artigo.published.paginate(page: @page)
    @artigos1 = ArtigoSerializer.new(@artigos).serializable_hash[:data]
  end

  def show
    @artigo = Artigo.find(params[:id])
    @artigo1 = ArtigoSerializer.new(@artigo).serializable_hash[:data]
  end
end
