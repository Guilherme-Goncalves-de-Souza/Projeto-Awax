window.onload = function () {
  document.querySelector('.menu-opener').addEventListener('click', function () {
    if (document.querySelector('nav').style.display == 'flex') {
      document.querySelector('nav').style.display = 'none'
    } else {
      document.querySelector('nav').style.display = 'flex'
    }
  })
}

/* Vai ver se o menu está sendo exibido, se sim vai dar um display none
Se não ai vai dar um display: flex; */
