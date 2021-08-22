const delay = ms => new Promise(res => setTimeout(res, ms));

async function toggle_menu(){
  if(document.getElementsByClassName('menu-content')[0].classList.contains('show')){
    document.getElementsByClassName('menu-content')[0].classList.toggle('closing');
    await delay(500);
  }
  document.getElementsByClassName('menu-content')[0].classList.toggle('show');
  document.getElementsByClassName('menu-content')[0].classList.remove('closing');
}