import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ['email']


  /* Copy text into clipboard */
  connect() {
    navigator.clipboard.writeText
    ("bonjour@valentinchauveau.com");

    var email = document.querySelectorAll("button")[0];
    email.addEventListener('click', function() {
      if (email.getAttribute("data-text-swap") == email.innerHTML) {
        email.innerHTML = email.getAttribute("data-text-original");
      } else {
        email.setAttribute("data-text-original", email.innerHTML);
        email.innerHTML = email.getAttribute("data-text-swap");
      }
        setTimeout(function(){
          email.setAttribute("data-text-swap", email.innerHTML);
          email.innerHTML = email.getAttribute("data-text-original");;
        }, 1500);
    }, false);
  }
}
