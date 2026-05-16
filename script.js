const h1 = document.querySelector('h1');
const p = document.querySelector('p');

h1.addEventListener('click', () => {
    alert('You clicked the heading!');
});
p.addEventListener('click', () => {
    alert('You clicked the paragraph!');
});