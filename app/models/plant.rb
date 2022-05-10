class Plant < ApplicationRecord
    belongs_to :crop
    belongs_to :plot
    belongs_to :item
end
