class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :stage_1, :stage_2, :stage_3, :stage_4, :days_to_1, :days_to_2, :days_to_3, :days_to_4, :days_to_5
end
