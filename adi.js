// "use strict"

// let ground = document.querySelector('.ground');
// let img__adidas = document.querySelector('.img__adidas');
// let text = document.querySelector('.text');
// let sizes = document.querySelector('.sizes');
// let order = document.querySelector('.order');
// let container = document.querySelector('.container');

// ground.addEventListener('mousemove',function(event){
//     let boxWidth = ground.clientWidth;
//     let boxHeight = ground.clientHeight;
//     let vertical = Math.floor((45/boxHeight * (event.clientY - ground.offsetParent.offsetTop - boxHeight/2)) );
//     let horizontal = Math.floor((45/boxWidth * (event.clientX - ground.offsetParent.offsetLeft - boxWidth/2)) );
//     ground.style.transform = `rotateY(${horizontal}deg) rotateX(${vertical}deg)`;
// });
// ground.addEventListener('mouseenter',function(){
//     img__adidas.style.transform = "rotate(45deg) translateZ(100px)";
//     container.style.perspective = "2000px";
//     text.style.transform = "translateZ(100px)";
//     sizes.style.transform = "translateZ(100px)";
//     order.style.transform = "translateZ(100px)";
//     ground.style.transform = "translateZ(100px)"

// });
// ground.addEventListener('mouseleave',function(){
//     img__adidas.style.transform = "rotate(0deg)";
//     container.style.perspective = "none";
//     text.style.transform = "rotate(0deg)";
//     sizes.style.transform = "rotate(0deg)";
//     order.style.transform = "rotate(0deg)";
//     ground.style.transform = "rotate(0deg)";



// });

let container   = document.querySelector('.container'),
    ground      = container.querySelector('.ground'),
    img         = container.querySelector('img'),
    h1text      = container.querySelector('.text'),
    sizes       = container.querySelector('.sizes'),
    order       = container.querySelector('.order');



container.addEventListener('mousemove', function(e){
    let osX = (window.innerWidth / 2 - e.clientX ) / 15 ;
    let osY = (window.innerWidth / 2 - e.clientY ) / 15 ;
    ground.style.transform = `rotateX(${osY}deg) rotateY(${osX}deg)`;

    

    
})

container.addEventListener('mouseenter', function(){
        img.style.transform = 'translateZ(100px) rotate(-45deg)';

        h1text.style.transform ='translateZ(70px)';
        sizes.style.transform ='translateZ(50px)';
        order.style.transform ='translateZ(50px)';

    })

    container.addEventListener('mouseleave', function(){
        img.style.transform = 'translateZ(0)';
        h1text.style.transform ='translateZ(0)';
        sizes.style.transform ='translateZ(0)';
        order.style.transform ='translateZ(0)';
        ground.style.transform =`rotateX(0) rotateY(0)`;


    })
