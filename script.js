const build =document.getElementById('build')
const cross=document.getElementById('cross')
var homepage =document.getElementById('homepage')
var aboutpage =document.getElementById('aboutus')
var ownpackage =document.getElementById('ownpackage')
var packarc = document.getElementById('packages-archive')
var pacdet=document.getElementById('packages-detail')
var mainbtn= document.getElementById('mainbtn')
showpg= function x() {
    homepage.style.display='none'
        ownpackage.style.display='none';
        aboutpage.style.display='none';
        packarc.style.display='block'
}
mainbtn.addEventListener("click",showpg) 
mainbtn.style.cursor='pointer'






var homea=document.getElementById('homea')
var home1=document.getElementById('home1')
var home2=document.getElementById('home2')
var home3=document.getElementById('home3')
var home4=document.getElementById('home4')
var home7=document.getElementById('home7')
var home6=document.getElementById('home6')




var about1 = document.getElementById('about1')
var about2 = document.getElementById('about2')
var about3 = document.getElementById('about3')
// var about4=document.getElementById('about4')
// var about5 = document.getElementById('about5')
// var about6 = document.getElementById('about6')
// var about7 = document.getElementById('about7')
// var about8 = document.getElementById('about8')



cross.style.cursor='pointer'
about1.style.cursor='pointer'
about2.style.cursor='pointer'
about3.style.cursor='pointer'
about4.style.cursor='pointer'
about5.style.cursor='pointer'
about6.style.cursor='pointer'
about7.style.cursor='pointer'
about8.style.cursor='pointer'

home.style.cursor='pointer'
home1.style.cursor='pointer'
home2.style.cursor='pointer'
home3.style.cursor='pointer'
home4.style.cursor='pointer'
home7.style.cursor='pointer'
home6.style.cursor='pointer'




var pack= function x() {
        homepage.style.display='none';
        ownpackage.style.display='block';
    }
    build.addEventListener("click", pack);
    
    
    var crosed= function x() {
        homepage.style.display='block';
        ownpackage.style.display='none';
        
    }
    cross.addEventListener("click", crosed);
    
    var homes =function x(){
        homepage.style.display='block'
        ownpackage.style.display='none';
        aboutpage.style.display='none';
        
        
        
    }
    homea.addEventListener("click",homes)
    home1.addEventListener("click",homes)
    
    
    var abouts =function x(){
        homepage.style.display='none'
        aboutpage.style.display='block';
        ownpackage.style.display='none';
    }
    about1.addEventListener("click",abouts)
    about2.addEventListener("click",abouts)
    about3.addEventListener("click",abouts)

    
    var travel=function x(){
        homepage.style.display='block'
        ownpackage.style.display='none';
        packarc.style.display='none';

}
home2.addEventListener("click", travel)

var pacdets=function x(){
    homepage.style.display='block'
    ownpackage.style.display='none';
    pacdet.style.display='none';
    
}
home3.addEventListener("click", pacdets)
home4.addEventListener("click", pacdets)
home6.addEventListener("click", pacdets)
home7.addEventListener("click", pacdets)

var pacdetsabout=function (){
    homepage.style.display='none';
    aboutpage.style.display='block';
    ownpackage.style.display='none';
    pacdet.style.display='none';
}

// about4.addEventListener("click",pacdetsabout)
// about5.addEventListener("click",pacdetsabout)
// about6.addEventListener("click",pacdetsabout)
// about7.addEventListener("click",pacdetsabout)
// about8.addEventListener("click",pacdetsabout)








var infopg= document.querySelector(".Information")
var in2= document.getElementById('in2')
var in3= document.getElementById('in3')
var in4= document.getElementById('in4')



var tour=document.getElementById('tour')
var t2= document.getElementById('t2')
var t3= document.getElementById('t3')
var t1= document.getElementById('t1')


var gallar=document.getElementById('gallar')
var g2= document.getElementById('g2')
var g3= document.getElementById('g3')
var g1= document.getElementById('g1')

var locationa=document.getElementById('locationa')
var l2= document.getElementById('l2')
var l3= document.getElementById('l3')
var l1= document.getElementById('l1')



function showt() {
    infopg.style.display='none'
    tour.style.display='block'
    gallar.style.display='none'
    locationa.style.display='none'

}

t1.addEventListener("click",showt)
t2.addEventListener("click",showt)
t3.addEventListener("click",showt)
t1.style.cursor='pointer'
t2.style.cursor='pointer'
t3.style.cursor='pointer'


function showg() {
    infopg.style.display='none'
    tour.style.display='none'
    gallar.style.display='block'
    locationa.style.display='none'

}
g1.addEventListener("click",showg)
g2.addEventListener("click",showg)
g3.addEventListener("click",showg)
g1.style.cursor='pointer'
g2.style.cursor='pointer'
g3.style.cursor='pointer'





function showl() {
    infopg.style.display='none'
    tour.style.display='none'
    gallar.style.display='none'
    locationa.style.display='block'

}
l1.addEventListener("click",showl)
l2.addEventListener("click",showl)
l3.addEventListener("click",showl)
l1.style.cursor='pointer'
l2.style.cursor='pointer'
l3.style.cursor='pointer'





function showi() {
    infopg.style.display='block'
    tour.style.display='none'
    gallar.style.display='none'
    locationa.style.display='none'

}
in2.addEventListener("click",showi)
in3.addEventListener("click",showi)
in4.addEventListener("click",showi)
in2.style.cursor='pointer'
in3.style.cursor='pointer'
in4.style.cursor='pointer'










// const x = document.querySelector('#btn');
// const y = document.querySelector('#btn2');
// const z = document.querySelector('#btn3');
// const l = document.querySelector('#btn4');
// const m = document.querySelector('#btn5');


// var aboutus =document.getElementById('aboutus')
// var packagesarchive =document.getElementById('packages-archive')
// var packagesdetail =document.getElementById('packages-detail')

    // about= function x() {
        //     ownpackage.style.display='none';
        //     aboutus.style.display='block';
        
        // }
        // y.addEventListener("click", about);
        // pacser= function x() {
            //     aboutus.style.display='none';
            //     packagesarchive.style.display='block';
            
            // }
            // z.addEventListener("click", pacser);
            // packdet= function x() {
                //     packagesarchive.style.display='none';
//     packagesdetail.style.display='block';

// }
// l.addEventListener("click", packdet);
// home= function x() {
    //     homepage.style.display='block';
    //     ownpackage.style.display='none';
//     packagesdetail.style.display='none';
// }
// m.addEventListener("click",home)


// // array=[homepage,ownpackage,aboutus,packagesarchive,packagesdetail]
// // const x = document.querySelector('#btn');

// //     own=function k() {
    // //         for (let index =[0]; index < array.length; index++) {
        // //         array[index].style.display='none';
        // //     for (let j = 0; j < index; j++) {
            // //         array[index].style.display='block';
            // //     }
            // //     };
            // // }
            // // x.addEventListener("click", own); 

// servicedropdown
const service=document.querySelector('.services')
const servicebar=document.querySelector('.service-options')

function hide() {
    servicebar.style.visibility='hidden';
};
function show() {
    servicebar.style.visibility='visible';
};
hz= function() {
    if (servicebar.style.visibility == 'visible') {
        hide();
    }
    else{
        show();
    }
}
service.addEventListener("click",hz);

// reviews

var para=document.createElement('p')
var peps=document.getElementById("people-pics")
var s=['./Assets/people/1.png','./Assets/people/2.png','./Assets/people/3.png','./Assets/people/4.png','./Assets/people/5.png','./Assets/people/6.png','./Assets/people/7.png']
peps.style.display='flex';
peps.style.alignItems='center';
for (let index = 0; index < s.length; index++) {
    var img= document.createElement("img");
    peps.appendChild(img);
    img.src=s[index];
    peps.style.marginTop='20px';
    img.style.marginRight = "-10px";
    img.style.height='30px';
    img.style.width='30px';
}
peps.appendChild(para);
para.innerHTML= '2,500 people booked Tommorowland Event in last 24 hours';
para.style.marginLeft="20px";
para.style.fontSize="18px";
para.style.color="white";


// airlines home
var airlines = document.getElementById("airlines")
var airlineslist=['./Assets/airlines/1.png','./Assets/airlines/2.png','./Assets/airlines/3.png','./Assets/airlines/4.png','./Assets/airlines/5.png']
for (let num = 0; num < airlineslist.length; num++) {
    var listimgs= document.createElement("img");
    airlines.appendChild(listimgs);
    listimgs.src=airlineslist[num];
    airlines.style.display = 'flex'
    airlines.style.backgroundColor = '#F7F7F7'
    airlines.style.height = '100px'
    airlines.style.zIndex = '5'
    airlines.style.alignItems ='center'
    airlines.style.justifyContent='space-evenly'
    listimgs.style.zIndex='5'
    listimgs.style.width='160px'
    listimgs.style.height='50px'
}


// category services
// var container= document.getElementById("class-container")
// var cardn=(4)
// var catimg=['./Assets/cat-imgs/hands.png','./Assets/cat-imgs/medical-team.png','./Assets/cat-imgs/tour-guide.png','./Assets/cat-imgs/travelling.png',]
// for (let cardno = 0; cardno < cardn; cardno++) {
//     var card= document.createElement('div')
//     var cimg=document.createElement('img')
//     cimg.src=catimg[cardno]
//     container.appendChild(card)
//     card.appendChild(cimg)
//     card.setAttribute('id', `card${cardno + 1}`);
//     card.style.border='1px solid red'
//     card.style.width= '250px'
//     card.style.height= '280px'
//     card.style.borderRadius= '30px'
//     container.style.display='flex'
//     container.style.justifyContent='space-evenly'
//     container.style.width='90%'
//     container.style.marginTop='30px'
//     container.style.flexWrap='wrap'
//     container.style.gap='50px'
//     cimg.style.display='flex'
//     cimg.style.margin='auto'

// }



var container = document.getElementById("class-container");
var cardn = 4;
var cards = [];
var under=[];
var cparas=["sunt qui repellat saepe quo velit aperiam id aliquam placeat.","sunt qui repellat saepe quo velit aperiam id aliquam placeat.","sunt qui repellat saepe quo velit aperiam id aliquam placeat.","sunt qui repellat saepe quo velit aperiam id aliquam placeat."]
var cheadings=["Guided Tours","Best Flights Options","Religious Tours","Medical insurance"]
var catimg=['./Assets/cat-imgs/hands.png','./Assets/cat-imgs/travelling.png','./Assets/cat-imgs/medical-team.png','./Assets/cat-imgs/tour-guide.png',]

for (let cardno = 0; cardno < cardn; cardno++) {
    var card = document.createElement('div');
    var inblock=document.createElement('div')
    var head=document.createElement('h1')
    var para=document.createElement('p')
    var unblock=document.createElement('div')
    card.setAttribute('id', `card${cardno + 1}`);
    var cimg=document.createElement('img')
    cimg.src=catimg[cardno]
    container.appendChild(card);
    card.appendChild(cimg)
    card.appendChild(inblock)
    card.appendChild(unblock)
    card.appendChild(head)
    card.appendChild(para)
    para.innerHTML=cparas[cardno]
    head.innerHTML=cheadings[cardno]
    card.style.zIndex = '999'
    // unblock.style.zIndex = '-100';
    card.style.width = '280px';
    card.style.height = '320px';
    card.style.position = 'relative';
    card.style.borderRadius = '30px';
    card.style.display='flex';
    card.style.flexDirection='column';
    card.style.alignItems = 'center';
    card.style.justifyContent = 'center';
    card.style.gap='30px';
    para.style.lineHeight='1.5'
    para.style.width='200px'
    para.style.zIndex='2'

    para.style.textAlign='center'
    para.style.fontSize='20px';


    cimg.style.display='flex';
    cimg.style.margin='0 auto';
    cimg.style.width='70px';
    cimg.style.height='60px';

    inblock.style.zIndex='-1';
    inblock.style.width='50px';
    inblock.style.height='50px';
    inblock.style.borderRadius='20px 0 20px 0';
    inblock.style.position='absolute';
    inblock.style.top='50px';
    inblock.style.left=' 50%';
    inblock.style.backgroundColor='#FFF1DA';


    unblock.style.width='100px';
    unblock.style.height='100px';
    unblock.style.borderRadius='20px';
    unblock.style.position='absolute';
    unblock.style.bottom='-30px';
    unblock.style.left='-40px';
    unblock.style.backgroundColor='#DF6951';
    // unblock.style.visibility = 'hidden';

    
    cards.push(card); 
}

container.style.display = 'flex';
container.style.justifyContent = 'space-evenly';
container.style.width = '90%';
container.style.marginTop = '30px';
container.style.flexWrap = 'wrap';
container.style.gap = '50px';

function enter(card) {
        var clickedCard = card.target; 
        clickedCard.style.transform ="scale(1.2)"
        clickedCard.style.boxShadow="2.5px 2.5px 5px grey"


    } 
    
    function leave(card) {
    var clickedCard = card.target; 
    clickedCard.style.transform ="scale(1)"
    clickedCard.style.boxShadow="0px 0px 0px"


}   

cards.forEach(function(card) {
    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);

});




var bhs=["Choose Destination","Check Availability","Let’s Go"]
var bps=['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "]
var bimgs=['./Assets/Group 11.png','./Assets/Group 12.png','./Assets/Group 7.png'];
for (let k = 0; k < bimgs.length; k++){;
    var bookt = document.querySelector(".booking-tags");
    var tags = document.createElement("div");
    var btcon =document.createElement('div')
    var bhead=document.createElement("h4")
    var bpara=document.createElement("p")
    bookt.appendChild(tags)
    var bimg =document.createElement("img")
    tags.appendChild(bimg)
    tags.appendChild(btcon)
    btcon.appendChild(bhead)
    btcon.appendChild(bpara)


    bimg.src=bimgs[k];
    bhead.innerHTML=bhs[k]
    bpara.innerHTML=bps[k]
    tags.style.display= 'flex'
    tags.style.gap= '10px'
    tags.style.width='max-content'
    bpara.style.width='280px'
    bpara.style.opacity='.6'

    bookt.style.gap='50px'
    bookt.style.display= 'flex'
    bookt.style.flexDirection= 'column'
    bookt.style.marginTop= '20px'

}



var promocards=document.getElementById("promo-dest")
var pp=['100','500','230','453']
var plist=[]
var ptags=[]
var pimgs=["./Assets/pd1.png","./Assets/pd2.png","./Assets/pd3.png","./Assets/pd4.png"]

for (let pcard = 0; pcard < pimgs.length; pcard++) {
    var pcd= document.createElement('img')
    var pimgcon =document.createElement('div')
    var ptag= document.createElement('div')
    pimgcon.setAttribute('id', `pimgcon${pcard + 1}`);
    ptag.setAttribute('id', `ptag${pcard + 1}`);
    pcd.src = pimgs[pcard]
    pimgcon.appendChild(pcd)
    promocards.appendChild(pimgcon)
    pimgcon.appendChild(ptag)
    plist.push(pimgcon)
    ptags.push(ptag)
    plist[pcard].appendChild(ptag)
    ptags[pcard].innerHTML=pp[pcard]
    ptags[pcard].style.height='20px'
    ptags[pcard].style.width='40px'
    ptags[pcard].style.backgroundColor='Orange'
    ptags[pcard].style.zIndex='2'
    ptags[pcard].style.position='absolute'
    ptags[pcard].style.top='10px'
    ptags[pcard].style.marginLeft='150px' 
    ptags[pcard].style.color='white'
    ptags[pcard].style.width='40px'
    ptags[pcard].style.textAlign='center'
    ptags[pcard].style.borderRadius='20px'




}
promocards.style.position='absolute';
promocards.style.bottom ='15%'
promocards.style.display ='flex'
promocards.style.gap ='30px'
promocards.style.left ='15%'
promocards.style.zIndex='2'








var imgn = 12;
var listofimgz=['./Assets/people/i (1).png','./Assets/people/i (2).png','./Assets/people/i (3).png','./Assets/people/i (4).png','./Assets/people/i (5).png','./Assets/people/i (6).png','./Assets/people/i (7).png','./Assets/people/i (8).png','./Assets/people/i (9).png','./Assets/people/i (10).png','./Assets/people/i (11).png','./Assets/people/hm4.png']
var imgcont =document.getElementById('abtimgcont')
for (let imgz = 0; imgz < imgn; imgz++) {
var imgcard = document.createElement('img')
imgcard.src = listofimgz[imgz]
imgcard.style.height='300px'
imgcard.style.width='300px'

imgcont.appendChild(imgcard)
}





var destin = 6;
var listofdestin=['./Assets/des/des (1).png','./Assets/des/des (2).png','./Assets/des/des (3).png','./Assets/des/des (1).png','./Assets/des/des (5).png','./Assets/des/des (6).png']
var destincont =document.getElementById('images')

var disp = function () {
    packarc.style.display='none'
    pacdet.style.display='block'
}

for (let des = 0; des < destin; des++) {
var destcard = document.createElement('img')
destcard.src = listofdestin[des]
destcard.style.height='350px'
destcard.style.width='275px'

destcard.addEventListener("click", disp)
destincont.appendChild(destcard)
}




