const dataPicker = $('#data-range')
const arrowLeft = $('#data-range-arrow-left')
const arrowRight = $('#data-range-arrow-right')
const dateSelect = $('#date-select')
const dateSelectCustomOption = $('#date-select option[value="7"]')
let dataPickerFormat = 'MMMM D, YYYY'

dataPicker.daterangepicker({
  linkedCalendars: true,
  locale: {
    format: dataPickerFormat
  }
})

dateSelect.on('change', event => {
  switch (event.target.value) {
    case '1':
      return handleDataPickerSelect(moment(), moment())
    case '2':
      return handleDataPickerSelect(moment().subtract(1, 'days'), moment().subtract(1, 'days'))
    case '3':
      return handleDataPickerSelect(moment().subtract(6, 'days'), moment())
    case '4':
      return handleDataPickerSelect(moment().subtract(29, 'days'), moment())
    case '5':
      return handleDataPickerSelect(moment().startOf('month'), moment().endOf('month'))
    case '6':
      return handleDataPickerSelect(moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month'))
    case '7':
      return dataPicker.trigger('click')
  }
})

$(function setInitialDate() {
  return handleDataPickerSelect(moment(), moment())
})

$('.hero-top__data-picker').on('click', function () {
  dateSelectCustomOption.attr('selected', true)
})

function handleDataPickerSelect(start, end) {
  dataPicker.data('daterangepicker').setStartDate(start.format("MMMM D, YYYY"))
  dataPicker.data('daterangepicker').setEndDate(end.format("MMMM D, YYYY"))
}

arrowLeft.on('click', function () {
  let oldStartDate = moment(dataPicker.val().split('-')[0])
  dataPicker.data('daterangepicker').setStartDate(oldStartDate.subtract(10, 'days').format("MMMM D, YYYY"))
})

arrowRight.on('click', function () {
  let oldEndDate = moment(dataPicker.val().split('-')[1])
  dataPicker.data('daterangepicker').setEndDate(oldEndDate.add(10, 'days').format("MMMM D, YYYY"))
})

$(function dataPickerOnload () {
  if (window.innerWidth < 450) {
    dataPicker.daterangepicker({
      locale: {
        format: 'MMM D, YYYY'
      }
    })

    let oldStartDate = moment(dataPicker.val().split('-')[0])
    dataPicker.data('daterangepicker').setStartDate(oldStartDate.format("M D, YYYY"))

    let oldEndDate = moment(dataPicker.val().split('-')[1])
    dataPicker.data('daterangepicker').setEndDate(oldEndDate.format("M D, YYYY"))
  }
})

addEventListener('resize', (event) => {
  if (event.target.innerWidth < 450) {

    dataPicker.daterangepicker({
      locale: {
        format: 'MMM D, YYYY'
      }
    })

    let oldStartDate = moment(dataPicker.val().split('-')[0])
    dataPicker.data('daterangepicker').setStartDate(oldStartDate.format("M D, YYYY"))

    let oldEndDate = moment(dataPicker.val().split('-')[1])
    dataPicker.data('daterangepicker').setEndDate(oldEndDate.format("M D, YYYY"))
  }
});

addEventListener('resize', (event) => {
  if (event.target.innerWidth > 450) {

    dataPicker.daterangepicker({
      locale: {
        format: 'MMMM D, YYYY'
      }
    })
  }
});