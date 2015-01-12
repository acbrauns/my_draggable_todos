class ItemsController < ApplicationController
  def index
    @user = User.find(params['user_id'])
    @items = @user.items
  end
end
