class GameObjectsController < ApplicationController
    def index
        game_objects = GameObject.all
        render json: game_objects
    end
end
