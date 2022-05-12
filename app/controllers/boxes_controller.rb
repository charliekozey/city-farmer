class BoxesController < ApplicationController

    def index
        boxes = Box.all
        render json: boxes
    end

    def show
        box = Box.find(params[:id])
        render json: box, include: ['items', 'items.image'], status: :ok
    end

    private

    def boxes_param
        params.permit(:name, :items)
    end
end
