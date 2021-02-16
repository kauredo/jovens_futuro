Rails.application.routes.draw do
  namespace :backoffice do
    get 'admin/users'
    get 'admin/artigos'
  end
  root 'pages#home'
  get '/colaboradores', to: 'pages#colaboradores'
  get '/contacto', to: 'pages#contacto'
  post '/contacto', to: 'pages#email'
  devise_for :users, controllers: { registrations: 'registrations' }
  devise_scope :user do
    patch 'confirm_user', to: 'registrations#confirm_user'
    patch 'admin_user', to: 'registrations#admin_user'
  end
  resources :artigos, only: [:index, :show]
  namespace :backoffice do
    get '/', to: 'artigos#index'
    resources :artigos do
      patch 'publish', to: 'artigos#publish'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
