class CategoryPhotosController < ApplicationController
  respond_to :html, :json

  skip_before_action :verify_authenticity_token

  inherit_resources

  def create
    if p = CategoryPhoto.create(photo_params)
      render json: p
    else
      render json: p.errors, status: :unprocessable_entity
    end
  end

protected

  def photo_params
    {category_id: params[:category_id], image: params[:file]}
  end
end