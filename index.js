const angel = document.querySelector('.angel')

const devil = document.querySelector('.devil')

angel.addEventListener('click', () => {
  devil.classList.add('active')
  angel.classList.remove('active')
})

devil.addEventListener('click', () => {
  angel.classList.add('active')
  devil.classList.remove('active')
})
