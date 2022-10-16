document.addEventListener("DOMContentLoaded", function () {
  const paginationWrapper = document.querySelector('.pagination-content')
  const paginationButtons = document.querySelector('.pagination-buttons')
  const nextButton = document.querySelector('.pagination-buttons__next')
  const previousButton = document.querySelector('.pagination-buttons__previous')
  const itemsPerPage = 6
  let currentPage = 1

  const createButton = (textContent) => {
    let button = document.createElement(`button`)
    button.addEventListener('click', function () {
      currentPage = +this.textContent
      changePage(+this.textContent)
    })
    button.textContent = textContent
    return button
  }

  const createDots = () => {
    let dots = document.createElement(`span`)
    dots.classList.add('pagination-buttons__dots')
    dots.innerText = `...`
    return dots
  }

  const paginate = () => {
    paginationButtons.innerHTML = ''
    const prevButton = document.createElement('button')
    prevButton.classList.add('pagination-buttons__previous')
    prevButton.textContent = 'previous'
    prevButton.innerHTML =
      `<svg class="pagination-buttons-icon pagination-buttons__previous-icon">
        <use xlink:href="../images/sprite.svg#pagination-arrow"></use>
      </svg>`
    prevButton.addEventListener('click', () => {
      currentPage--
      if (currentPage < 1) {
        currentPage = 1
      }
      changePage(currentPage)
    })
    paginationButtons.appendChild(prevButton)

    const nextButton = document.createElement('button')
    nextButton.classList.add('pagination-buttons__next')
    nextButton.textContent = 'next'
    nextButton.innerHTML =
      `<svg class="pagination-buttons-icon pagination-buttons__next-icon">
        <use xlink:href="../images/sprite.svg#pagination-arrow"></use>
       </svg>`
    nextButton.addEventListener('click', () => {
      currentPage++
      if (currentPage > buttonsCount) {
        currentPage = buttonsCount
      }
      changePage(currentPage)
    })
    paginationButtons.appendChild(nextButton)

    for (let i = 0; i < buttonsCount; i++) {
      paginationButtons.insertBefore(createButton(`${i + 1}`), nextButton)
    }
  }

  for (let i = 0; paginationWrapper.children.length > i; i++) {
    let paginationItem = paginationWrapper.children[i]
    paginationItem.classList.add('pagination-item')
  }

  const paginationItems = document.querySelectorAll('.pagination-item')

  for (let i = 0; i < itemsPerPage; i++) {
    paginationItems[i]?.classList.add('pagination-item--active')
  }


  let buttonsCount = Math.ceil(paginationWrapper.children.length / itemsPerPage)

  if (buttonsCount > 4) {
    for (let i = 0; i < 3; i++) {
      paginationButtons.insertBefore(createButton(`${i + 1}`), nextButton)
    }
    paginationButtons.insertBefore(createDots(), nextButton)
    paginationButtons.insertBefore(createButton(buttonsCount), nextButton)
  } else {
    for (let i = 0; i < buttonsCount; i++) {
      paginationButtons.insertBefore(createButton(`${i + 1}`), nextButton)
    }
  }

  const setActiveButton = (page) => {
    for (let i = 0; paginationButtons.children.length > i; i++) {
      paginationButtons.children[i].classList.remove('active')
    }

    return paginationButtons.children[page].classList.add('active')
  }

  setActiveButton(1)

  const rerenderButtons = (page) => {
    const dots = document.querySelector('.pagination-buttons__dots')
    let beforeDots = 3
    let afterDots = buttonsCount - page
    if (dots) {
      let DotsPreviousButton = +dots.previousSibling.textContent

      if (afterDots === 3) {
        paginate()
      } else if (page === DotsPreviousButton) {
        paginationButtons.insertBefore(createButton(page + 1), dots)
        beforeDots++
      } else if (page === buttonsCount) {
        paginate()
      }
    }
  }

  const changePage = (page) => {
    rerenderButtons(page)
    paginationItems.forEach((element, index) => {
      element.classList.remove('pagination-item--active')
    })

    let active = itemsPerPage * page - itemsPerPage
    for (let i = active; active + itemsPerPage > i; i++) {
      paginationWrapper.children[i]?.classList.add('pagination-item--active')
    }

    setActiveButton(page)
  }

  previousButton.addEventListener('click', () => {
    currentPage--
    if (currentPage < 1) {
      currentPage = 1
    }
    changePage(currentPage)
  })

  nextButton.addEventListener('click', () => {
    currentPage++
    if (currentPage > buttonsCount) {
      currentPage = buttonsCount
    }
    changePage(currentPage)
  })


});

