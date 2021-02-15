Rails.application.routes.draw do
  root 'pages#home'
  get '/colaboradores', to: 'pages#colaboradores'
  get '/contacto', to: 'pages#contacto'
  post '/contacto', to: 'pages#email'
  devise_for :users, controllers: { registrations: 'registrations' }
  devise_scope :user do
    patch 'confirm_user', to: 'registrations#confirm_user'
    patch 'admin_user', to: 'registrations#admin_user'
  end
  resources :artigos
  get '/backoffice', to: 'backoffice#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
