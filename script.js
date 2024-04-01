var slideIndice=1;
afficherSlide(slideIndice);
function Slide(n){
    afficherSlide(slideIndice=slideIndice+n);

}
/*function currentSlide(n){
    afficherSlide(slideIndice=n)
}*/
function afficherSlide(n){
    var i;
    var slides = document.getElementsByClassName("MySlide");
    //var points = document.getElementsByClassName("circle");
    if(n>slides.length){
        slideIndice=1;
    }
    if(n<1){
        slideIndice=slides.length;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    /*for(i=0;i<points.length;i++){
        points[i].className=points[i].className.replace("active","");
    }*/
    slides[slideIndice-1].style.display="block";
    //points[slideIndice-1].className += "active";
}

// slide automatique
/*var slideIndice=0;
afficherSlide();
function afficherSlide(){
    setTimeout(afficherSlide,4000);
    var i;
    var slides=document.getElementsByClassName("MySlide");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndice++;
    if(slideIndice>slides.length){
        slideIndice=1;
    }
    slides[slideIndice-1].style.display="block";
}
afficherSlide();*/