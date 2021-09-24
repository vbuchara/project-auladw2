async function validateForm(event){
  let valid_form = true;
  // Campo do CPF
  let cpf = document.forms['album_form']['cpf'].value.toString();
  let cpf_label =  document.getElementById('cpf_message');
  // Campo do Email
  let email = document.forms['album_form']['email'].value;
  let email_label = document.getElementById('email_message');
  // Campo do Telefone
  let phone = document.forms['album_form']['telwhats'].value.toString();
  let phone_label = document.getElementById('phone_message');
  //Campo do CPF do responsável
  let cpf_res = document.forms['album_form']['cpf_responsavel'].value.toString();
  let cpf_res_label =  document.getElementById('cpf_res_message');

  if(cpf.length !== 11 && document.getElementsByName('cpf')[0].hasAttribute("required")){
    cpf_label.innerHTML = 'CPF deve conter 11 dígitos. Exemplo: 09182736455';
    document.getElementById('nome').scrollIntoView();
    cpf_label.classList.add('error-message');
    cpf_label.classList.remove('animation');

    window.requestAnimationFrame(() => {
      cpf_label.classList.add('animation');
    });
    
    valid_form = false;
  } else{
    cpf_label.innerHTML = 'Exemplo: 09182736455';
    cpf_label.classList.remove('animation');
    cpf_label.classList.remove('error-message');
  }

  if(!email.includes('.com')){
    email_label.innerHTML = 'Email Invalido. Exemplo: fulano.ciclano@email.com';
    document.getElementById('nome').scrollIntoView();
    email_label.classList.add('error-message');
    email_label.classList.remove('animation');

    window.requestAnimationFrame(() => {
      email_label.classList.add('animation');
    });
    
    valid_form = false;
  } else{
    email_label.innerHTML = 'Exemplo: fulano.ciclano@email.com';
    email_label.classList.remove('animation');
    email_label.classList.remove('error-message');
  }

  if(phone.length < 8 || !/^\d+$/.test(phone)){
    phone_label.innerHTML = 'Telefone Invalido, insira exatamente como no exemplo. Exemplo: 67998765432';
    document.getElementById('nome').scrollIntoView();
    phone_label.classList.add('error-message');
    phone_label.classList.remove('animation');

    window.requestAnimationFrame(() => {
      phone_label.classList.add('animation');
    });
    
    valid_form = false;
  } else{
    phone_label.innerHTML = 'Exemplo: 67998765432';
    phone_label.classList.remove('animation');
    phone_label.classList.remove('error-message');
  }

  if(cpf_res.length !== 11 && document.getElementsByName('cpf_responsavel')[0].hasAttribute("required")){
    cpf_res_label.innerHTML = 'CPF deve conter 11 dígitos. Exemplo: 09182736455';
    document.getElementById('nome').scrollIntoView();
    cpf_res_label.classList.add('error-message');
    cpf_res_label.classList.remove('animation');

    window.requestAnimationFrame(() => {
      cpf_res_label.classList.add('animation');
    });
    
    valid_form = false;
  } else{
    cpf_res_label.innerHTML = 'Exemplo: 09182736455';
    cpf_res_label.classList.remove('animation');
    cpf_res_label.classList.remove('error-message');
  }

  if(!valid_form){
    event.preventDefault();
  }

  return valid_form;
}