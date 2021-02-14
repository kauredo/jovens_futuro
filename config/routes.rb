Rails.application.routes.draw do
  root 'pages#home'
  get '/colaboradores', to: 'pages#colaboradores'
  get '/contacto', to: 'pages#contacto'
  post '/contacto', to: 'pages#email'
  devise_for :users, controllers: { registrations: 'registrations' }
  resources :artigos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
