const links = document.querySelectorAll('a');
console.log(links)
// const link = document.querySelectorAll('.link');
// console.log(link) >> returns div.link




links.forEach((links) => {

    // and for each one we add a 'click' listener
    links.addEventListener('mouseover', () => {
        //alert("work");
        links.classList.add('red')
    });
    links.addEventListener('mouseout', () => {

        links.classList.remove('red')
    });

})

const img = document.querySelectorAll('.aboutme img')
console.log(img);

img.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.classList.add('fader')
    })

    img.addEventListener('mouseout', () => {
        img.classList.remove('fader')
    })
})
////////////////////

let div = document.querySelectorAll('.aboutme img')
console.log(div);

div.forEach((div) => {
    div.addEventListener('mouseover', () => {
        let section = document.createElement("p");
        let sectiontext = document.createTextNode("please workkkkkkkkkkkkkkkkkkkkkkkkk");
        section.appendChild(sectiontext);
        div.appendChild(section);

    })

})
///////////////////

// let chose = document.querySelector('.group3')
// console.log(chose)
// // let delete = document.createElement("p1");
// // let deleteme = document.createTextNode("added");
