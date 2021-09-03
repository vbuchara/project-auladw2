function toggleDiv(event){
  let date = new Date(event.target.value);
  let monthsDiff = Date.now() - date.getTime();
  let ageDate = new Date(monthsDiff);
  let year = ageDate.getUTCFullYear();
  let age = Math.abs(year - 1970);

  if(age < 18){
    document.getElementsByClassName('optional-inputs')[0].classList.add('show');
    document.getElementsByName('responsible_name')[0].setAttribute('required', '');
    document.getElementsByName('responsible_cpf')[0].setAttribute('required', '');
    document.getElementsByName('cpf')[0].removeAttribute('required');
  } else {
    document.getElementsByClassName('optional-inputs')[0].classList.remove('show');
    document.getElementsByName('responsible_name')[0].removeAttribute('required');
    document.getElementsByName('responsible_cpf')[0].removeAttribute('required');
    document.getElementsByName('cpf')[0].setAttribute('required', '');
  }
}