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
