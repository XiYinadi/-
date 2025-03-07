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