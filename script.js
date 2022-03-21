const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')
//How I did it.
// listItems.forEach((btn, idx) => {
//   btn.addEventListener('click', (e) => {
//     listItems.forEach((el) => el.classList.remove('active'))
//     contents.forEach((item) => item.classList.remove('show'))
//     contents[idx].classList.add('show')
//     btn.classList.add('active')
//   })
// })

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents()
    hideAllItems()
    contents[idx].classList.add('show')
    item.classList.add('active')
  })
})

function hideAllContents() {
  contents.forEach((content) => {
    content.classList.remove('show')
  })
}

function hideAllItems() {
  listItems.forEach((item) => {
    item.classList.remove('active')
  })
}
