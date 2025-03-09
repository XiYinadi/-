
let hide=0;

function getmain(){
   const main = document.getElementById('main');

   hide++;

if (!main){
    console.log('未输入文本');
    return;
}
else{
    console.log(main.value);
    if (main.value == 'hide' || main.value == 'HIDE' || hide == 4){
        hide_event();
        alert('触发了隐藏图片');
    }
}
}

let photo = document.getElementById('photo');
let aa="test.jpg";
let bb="aa.jpg";

function hide_event(){
    photo.src = "hide_photo.jpg";
}



photo.onclick = function photo_change(){

    photo.src = aa;
    aa = bb;
    bb = photo.src;
}