function getmain(){
   const main = document.getElementById('main');

if (!main){
    console.log('未输入文本');
    return;
}
else{
    console.log(main.value);
}
}

let photo = document.getElementById('photo');
let aa="test.jpg";
let bb="aa.jpg";

photo.onclick = function photo_change(){

    photo.src = aa;
    aa = bb;
    bb = photo.src;
}