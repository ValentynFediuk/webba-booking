
import '../scss/pages/dashboard.scss'
$(() => {
  const btn = $('.graphic__top-buttons-button')

  $(btn).on('click', ((event) => {
    $(btn).each(() => {
      $(btn).removeClass('graphic__top-buttons-button--active')
    })
    $(event.target).addClass('graphic__top-buttons-button--active')
  }))
})

$(function clientTabActiveToggle () {
  const btn = $('.bookings-list .client-status__buttons-button--arrow')

  $(btn).on('click', function () {
    let btnId = $(this).data('tab')
    let tab = $(`.bookings-list__client-tab[data-tab=${btnId}]`)
    let currentBooking = $(this).closest('tr')

    currentBooking.toggleClass('bookings-list__client--active')
    $(tab).toggleClass('bookings-list__client-tab--active')
  })

})

$(function clientTabActiveToggleMobile () {
  const btn = $('.booking-mobile .booking-mobile__buttons-button--arrow')

  $(btn).on('click', function () {
    let btnId = $(this).data('tab')
    let tab = $(`.bookings-list__client-tab[data-tab=${btnId}]`)
    let currentBooking = $(this).closest('table')

    currentBooking.toggleClass('booking-mobile--active')
    $(tab).toggleClass('bookings-list__client-tab--active')
  })
})

$(function bookingListEmpty() {
  const bookingListLength = $('.bookings-list tbody tr').length
  const bookingListEmpty = $('.bookings-list__empty')

  !bookingListLength && bookingListEmpty.addClass('bookings-list__empty--active')
})

$(function graphicEmpty() {
  const graphicEmptyLength = $('.graphic__graphic canvas').length
  const graphicEmpty = $('.graphic__graphic-empty')

  !graphicEmptyLength && graphicEmpty.addClass('graphic__graphic-empty--active')
})