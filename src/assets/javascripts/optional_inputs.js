function toggleDiv(event){
  let date = new Date(event.target.value);
  let monthsDiff = Date.now() - date.getTime();
  let ageDate = new Date(monthsDiff);
  let year = ageDate.getUTCFullYear();
  let age = Math.abs(year - 1970);

  const optionInputs = document.getElementsByClassName('optional-inputs')[0];
  const nomeResponsavel = document.getElementsByName('nome_responsavel')[0];
  const cpfResponsavel = document.getElementsByName('cpf_responsavel')[0];
  const cpf = document.getElementsByName('cpf')[0];

  if(age < 18){
    optionInputs.classList.add('show');
    nomeResponsavel.setAttribute('required', '');
    cpfResponsavel.setAttribute('required', '');
    cpf.removeAttribute('required');
  } else {
    optionInputs.classList.remove('show');
    nomeResponsavel.removeAttribute('required');
    nomeResponsavel.value = '';
    cpfResponsavel.removeAttribute('required');
    cpfResponsavel.value = '';
    cpf.setAttribute('required', '');
  }
}