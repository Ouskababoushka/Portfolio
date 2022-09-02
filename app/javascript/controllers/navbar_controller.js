import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    /* navbar scroll color */

    const [red, green, blue] = [225, 223, 221]
    const navbar = document.querySelector('.navbar')
    const anchor = document.querySelectorAll('a[href^="#"]')

    window.addEventListener('scroll', () => {
      navbar.classList.add('hidden');
      let y = 1 + (window.scrollY || window.pageYOffset) / 150
      y = y < 1 ? 1 : y
      const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
      // navbar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

      if (y >= 3.5) {
        anchor.forEach( a => {
          a.style.color = `rgb(${255}, ${255}, ${255})`
          // console.log(a)
        })
      } else {
        anchor.forEach( a => {
          a.style.color = `rgb(${0}, ${0}, ${0})`
        })
      }

      if (y <= 7.5) {
        navbar.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${0.6})`
      } else {
        navbar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
      }
    });

    /* scroll smooth to anchor */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });
  }
}
