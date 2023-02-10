var photho = ["./img/img01.jpg","./img/img02.jpg","./img/img03.jpg","./img/img04.jpg"];
let imgTag = document.querySelector("img");
 let count = 0;
 function right(){
     count++;
     if(count >= photho.length){
          count = 0;
          imgTag.src = photho[count];
     }else{
          imgTag.src = photho[count];
     }
 }

 function left(){
     count--;
     if(count < 0){
          count= photho.length - 1;
          imgTag.src = photho[count];
     }else{
          imgTag.src = photho[count];
     }
 }