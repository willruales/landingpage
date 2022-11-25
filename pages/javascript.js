const timeline = document.querySelector('.timeline');

const li = timeline.querySelectorAll('li')

const colombia = document.querySelector('#colombia')
const qa = document.querySelector('#qa')
const post = document.querySelector('#post')

function toggleMenu(e) {
    if (e.target.id == "colombia") {
        const div1 = document.createElement('div1');
        div1.classList.add('div1');
        timeline.appendChild(div1);

        const ul = document.createElement('ul')
        div1.appendChild(ul);

        function list1() {
            let colombia = ul.insertAdjacentHTML("beforeend", `
            <li>Colombia</li>
            <li>QA Bootcamp</li>
            <li>Present</li>
            `)
            return colombia;

        }
        list1()
    }
}

li.forEach((li) => {
    li.addEventListener('mouseover', toggleMenu, false);

});


// const colombia = document.querySelector('#colombia');
// console.log(colombia)

// colombia.addEventListener("mouseover", () => {

//     const div1 = document.createElement('div1');
//     div1.classList.add('div1');
//     timeline.appendChild(div1);

//     const ul = document.createElement('ul')
//     div1.appendChild(ul);

//     ul.insertAdjacentHTML("beforeend", `
//     <li>Colombia</li>
//     <li>QA Bootcamp</li>
//     <li>Present</li>
//     `);

// });

// const div2 = document.createElement('div2')
// timeline.appendChild(div2);