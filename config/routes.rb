Rails.application.routes.draw do
  resources :products do
    resources :photos
  end

  resources :categories do
  	resources :photos
  end

  resources :orders do
    resources :invoice_items
  end

  resources :shippings, :addresses

  root 'test#index'

  get '*path' => redirect('/#!/%{path}')
end
