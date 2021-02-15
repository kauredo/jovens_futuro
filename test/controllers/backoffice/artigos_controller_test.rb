require "test_helper"

class Backoffice::ArtigosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get backoffice_artigos_index_url
    assert_response :success
  end
end
