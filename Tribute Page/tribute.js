const imgChange = document.querySelector("#sectionOne");
const imgNext = document.querySelector("#sectionOne> .next");
const quoteChange = document.querySelector("#sectionTwo>div>p");




const allPhotos = ["url(yellow.jpg)","url(circle.png)", "url(family.jpg)" , "url(Anime.jpg)","url(WW-bottom.jpg)"];

const Quotes = [`You clearly don’t know who you’re talking to,
                so let me clue you in. I am not in danger, Skyler.
                I am the danger. A guy opens his door and gets
                shot, and you think that of me? 
                No! I am the one who knocks!`,

                `If you don’t know who I am, then maybe your best course would be to tread lightly.`,

                `I did it for me. I liked it. I was good at it. And, I was really…I was alive.`,

                `Jesse, you asked me if I was in the meth business, or the money business… Neither. 
                I’m in the empire business.`,

                `Say my name.`];
let count = 0;
imgNext.onclick = function(){
    count++
    if(count === allPhotos.length){
        count= 0;
    }
    imgChange.style.backgroundImage = allPhotos[count];
    
     quoteChange.textContent = Quotes[count];
}