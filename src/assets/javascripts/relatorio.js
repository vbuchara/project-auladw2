document.getElementById("search").addEventListener('change', getAlbuns);
document.getElementById("search").addEventListener('keydown', getAlbuns);

function getAlbuns(event){
  console.log(event.key); return;
  const ajax_album = new XMLHttpRequest();

  ajax_album.open('GET', `getRelatorios?filter=${event.target.value}`, true);

  ajax_album.send();

  ajax_album.onreadystatechange = () => {
    if(ajax_album.readyState == 4 && ajax_album.status == 200){
      console.log(JSON.parse(ajax_album.response));
    }
  };
};