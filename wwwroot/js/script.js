IMask(document.querySelector('#phone'), {
    mask: '+{7}(000)000-00-00'
  }, 
);

IMask(document.querySelector("#sum"), {
    mask: Number,  // enable number mask

    // other options are optional with defaults below
    scale: 2,  // digits after point, 0 for integers
    thousandsSeparator: '',  // any single char
    padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
    normalizeZeros: true,  // appends or removes zeros at ends
    radix: '.',  // fractional delimiter
    mapToRadix: [','],  // symbols to process as radix
    min: 0,
    max: 1000000000
  }
);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const form = document.querySelector('.needs-validation')

  // Loop over them and prevent submission
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
})()