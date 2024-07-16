
let preveiwContainer = document.querySelector('.login-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.login-container .login').forEach(login =>{
  login.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = login.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
