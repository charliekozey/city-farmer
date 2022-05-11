class GameObjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :x_coord, :y_coord, :sprite_url, :is_interactive
end
