function image1(){
    document.getElementById("img1").disabled=false;
    document.getElementById("img2").disabled=true;
    document.getElementById("img3").disabled=true;
    document.getElementById("img4").disabled=true;

}
function image2(){
    document.getElementById("img2").disabled=false;
    document.getElementById("img1").disabled=true;
    document.getElementById("img3").disabled=true;
    document.getElementById("img4").disabled=true;

}
function image3(){
    document.getElementById("img3").disabled=false;
    document.getElementById("img2").disabled=true;
    document.getElementById("img1").disabled=true;
    document.getElementById("img4").disabled=true;


}
function image4(){
    document.getElementById("img4").disabled=false;
    document.getElementById("img2").disabled=true;
    document.getElementById("img3").disabled=true;
    document.getElementById("img1").disabled=true;

}