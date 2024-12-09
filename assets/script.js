let areas = {
    a: null,
    b: null,
    c: null
};

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart); // Quando começa a arrastar
    item.addEventListener('dragend', dragEnd); // Ao soltar o clique do mouse
});

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver); // Vai rodar sempre que um item passar por cima da área a qual o evento foi adicionado
    area.addEventListener('dragleave', dragLeave); // Sempre que sair
    area.addEventListener('drop', drop);
})

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

// Functions item
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

// Functions Area

function dragOver(e) {
    if(e.currentTarget.querySelector('.item') === null) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}

function drop(e) {
    e.currentTarget.classList.remove('hover');

    if(e.currentTarget.querySelector('.item') === null) {
        let dragItem = document.querySelector('.item.dragging');
        e.currentTarget.appendChild(dragItem);
        updateAreas();
    }
}

// Functions Neutral Area

function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover');
}

function dropNeutral(e) {
    e.currentTarget.classList.remove('hover');

    console.log(e.currentTarget)

    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();
}

// TODO: Logic Functions
// function updateAreas() {
//     document.querySelectorAll('.area').forEach(area => {
//         let name = area.getAttribute('data-name');

//         if(area.querySelector('.item') !== null) {
//             areas[name] = document.querySelector('.item').innerHTML;
//         } else {
//             areas[name] = null;
//         }
//     });

//     if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
//         document.querySelector('.areas').classList.add('correct');
//     } else {
//         console.log('Não parou no if');
//         console.log(areas);
//     }
// }