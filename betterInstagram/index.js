const draggables = document.querySelectorAll('img').forEach((draggables)=>{
    draggables.addEventListener('dragstart',()=>{
        draggables.classList.add('draggable');
    })

    draggables.addEventListener('dragend',()=>{
        draggables.classList.remove('draggable');
    })
})

const containers = document.querySelectorAll('.parent').forEach((containers)=>{
    containers.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })

    containers.addEventListener('drop',(e)=>{
        e.preventDefault();
        const draggable = document.querySelector('.draggable');
        const container = draggable.parentNode;
        const changeContainerChild = containers.firstElementChild;
        containers.replaceChild(draggable, changeContainerChild);
        container.appendChild(changeContainerChild);
    })
})