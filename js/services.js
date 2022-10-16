import '../scss/pages/services.scss'

$(function servicesTabActiveToggle() {
  const btn = $('.services__list-service-item-buttons-button--arrow')

  $(btn).on('click', function () {
    $(this).closest('.services__list-service').toggleClass('services__list-service--active')
  })

})