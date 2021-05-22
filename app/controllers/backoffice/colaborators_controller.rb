class Backoffice::ColaboratorsController < ApplicationController
  layout 'backoffice'

  def show
    @colaborator = Colaborator.find(params[:id])
  end

  def new
    @colaborator = Colaborator.new
  end

  def edit
    @colaborator = Colaborator.find(params[:id])
  end

  private

  def colaborator_params
    params.require(:colaborator).permit(:name, :avatar, :description)
  end
end
