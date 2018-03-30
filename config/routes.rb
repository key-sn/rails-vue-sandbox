Rails.application.routes.draw do
  root to: "home#index"
  get '/task/about',   to: 'task#index'
  get '/task/contact', to: 'task#index'
  resources :home
  resources :todo
  resources :task

  namespace :api, format: 'json' do
    resources :tasks, only: [:index, :create, :update]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
