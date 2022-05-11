Rails.application.routes.draw do
  
  resources :game_objects, only: [:show, :index]
  resources :backpack_items
  resources :plots
  resources :crops
  resources :items
  resources :boxes
  resources :plants
  resources :users, only: [:show, :create]


  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # get "/play", to: "???"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
