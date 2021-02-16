require "test_helper"

class Backoffice::AdminControllerTest < ActionDispatch::IntegrationTest
  test "should get users" do
    get backoffice_admin_users_url
    assert_response :success
  end

  test "should get artigos" do
    get backoffice_admin_artigos_url
    assert_response :success
  end
end
