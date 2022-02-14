class Api::GreetingsController < ApplicationController
  def index
    offset = rand(Message.count)
    @random_record = Message.offset(offset).first
  end
end