Codergirl::Application.routes.draw do
  # The priority is based upon order of creation:
  # first created -> highest priority.
  
  root :to => "pages#index"
  
  match 'sandbox' => "pages#sandbox"


end
