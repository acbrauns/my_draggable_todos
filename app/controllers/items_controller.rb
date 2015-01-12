class ItemsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def index
    @user = User.find(params['user_id'])
    @items = @user.items
  end

  def update
    p "******************************************"
    p params
  end
end

#these are params for update:
# {"controller"=>"items", "action"=>"update", "user_id"=>"1", "id"=>"12"}
