import $ from 'jquery'
window.jQuery = window.$ = $

import './main.scss'

$(function navActiveToggle() {
  const navItem = $('.header .menu__link')
  $(navItem).on('click', ((event) => {

    $(navItem).each(() => {
      $(navItem).removeClass('menu__link--active')
    })
    $(event.target).addClass('menu__link--active')

  }))
})
