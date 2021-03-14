class ColaboratorsController < ApplicationController
  def create
    @colaborator = Colaborator.new(colaborator_params)
    if @colaborator.save
      redirect_to backoffice_path, notice: 'colaborator criado' 
    else
      render json: { error: 'colaborator não criado' }
    end
  end

  def update
    @colaborator = Colaborator.find(params[:id])
    if @colaborator.update(colaborator_params)
      redirect_to backoffice_admin_users_path, notice: 'colaborator criado'
    else
      render json: { error: 'colaborator não criado' }
    end
  end

  private

  def colaborator_params
    params.require(:colaborator).permit(:name, :avatar)
  end
end
