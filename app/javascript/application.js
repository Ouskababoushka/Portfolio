// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbo.start()
// ActiveStorage.start()

import "@hotwired/turbo-rails"

import { Application } from "@hotwired/stimulus"
window.Stimulus = Application.start()

import "controllers"
