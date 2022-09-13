import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

//= require 'greensock/TweenLite'
//= require 'greensock/easing/EasePack'
//= require 'greensock/TimeLineLite'
//= require 'greensock/plugins/CSSPlugin'
//= require 'greensock/plugins/BezierPlugin'
