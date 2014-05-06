Codergirl::Application.routes.draw do
  # The priority is based upon order of creation:
  # first created -> highest priority.
  
  root "pages#index"
  
  get '/sandbox', to: "pages#sandbox"


end
