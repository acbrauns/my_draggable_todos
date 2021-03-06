class ItemsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def index
    @user = User.find(params['user_id'])
    @items = @user.items
  end

  def update
    user = User.find(params['user_id'])
    @item = user.items.find(params['id'])
    p "******************************************"
    p params
    @item.update(status: params['status'])
    p @item
  end

  def destroy
    user = User.find(params['user_id'])
    Item.find(params['id']).destroy
    redirect_to user_items_path(user)
  end
end

#these are params for update:
# {"controller"=>"items", "action"=>"update", "user_id"=>"1", "id"=>"12"}
