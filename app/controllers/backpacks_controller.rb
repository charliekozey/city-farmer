class BackpacksController < ApplicationController

    def index
        backpacks = Backpack.all
        render json: backpacks
    end

    def show
        backpack = Backpack.find(params[:id])
        render json: backpack, status: :ok
    end

    def update
        backpack = Backpack.find_by(id: params[:id])
        if backpack
          backpack.update(backpack)
          render json: backpack
        else
          render json: { error: "Backpack not found" }, status: :not_found
        end
    end

    private

    def backpacks_param
        params.permit(:item_1, :item_2, :item_3, :item_4, :item_5)
    end

    def update_backpack_param
        params.permit(:item_1, :item_2, :item_3, :item_4, :item_5)
    end
      

end
