require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module LectureRequester
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  
    config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components')
    
    # Allowing Devise to respond to JSON

    config.to_prepare do
      DeviseController.respond_to :html, :json
    end

  end
end
