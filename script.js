document.querySelectorAll('#btn').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      console.log('clicked');
      item.nextElementSibling.classList.toggle('open');
    });
  });