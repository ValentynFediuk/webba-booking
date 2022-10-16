import '../scss/pages/pricing.scss'

$(function priceBtnActiveToggle () {
  const btn = $('.plans .plans__buttons-button')

  $(btn).on('click', ((event) => {
    $(btn).each(() => {
      $(btn).removeClass('plans__buttons-button--active')
    })
    $(event.target).addClass('plans__buttons-button--active')
  }))
})

$(function faqTabActiveToggle () {
  const faqTab = $('.faq .faq__tab')

  $(faqTab).on('click', function () {

    if ($(this).hasClass('faq__tab--active')) {
      $(faqTab).each(() => {
        $(faqTab).removeClass('faq__tab--active')
      })
      return
    }

    $(faqTab).each(() => {
      $(faqTab).removeClass('faq__tab--active')
    })

    $(this).addClass('faq__tab--active')

  })
})
