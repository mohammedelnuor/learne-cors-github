
var searchicon1 = document.getElementById("searchicon1");

var serch = document.getElementById("serch");
var serch1 =document.getElementById("serchinpout1");


searchicon1.addEventListener("click", function(){
    serch1.style.display = "flex";
    searchicon1.style.display ='none';
})


var searchicon2 = document.getElementById("searchicon2");
var serchicon2 = document.querySelector("searchicon");
var search2 =document.getElementById("serchinpout2");

searchicon2.addEventListener("click", function(){
    search2.style.display = "flex";
    searchicon2.style.display ='none';
})


var bar = document.getElementById("bar");
var cross = document.getElementById("hdcross");
var headerbar = document.querySelector(".headerbar");

bar.addEventListener("click" , function(){
    setTimeout(()=>{
        cross.style.display = "block";
    },20);
    headerbar.style.right= "0%";

})

cross.addEventListener("click", function(){
    cross.style.display ="none";
    headerbar.style.right = "-100%";
})


//select all links

 var About= document.querySelector('.About'),
        Home   =  document.querySelector('.main-slide'),
        Products =  document.querySelector('.main-slide3'),
        Customer=    document.querySelector('.main-slide');


var AllLinks = document.querySelectorAll('.link  a ');

function scroollToSomth(elements){

    elements.forEach(ele => {

        ele.addEventListener('click', (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
            });
        });
        
    });
}



console.log(AllLinks);

scroollToSomth(AllLinks);


