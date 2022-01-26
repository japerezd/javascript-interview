// 1. first get all div with class=animal
const animals = document.querySelectorAll('.animal');
const mammals = document.querySelector('.only-mammals');
// 2. iterate over those divs ans search for span with class mammal-value
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    animals.forEach(animal => {
        const span = animal.querySelector('.mammal-value');
        if (span.innerHTML === 'true') {
            mammals.appendChild(animal);
        }
    })
})
