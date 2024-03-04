let addButton = document.querySelector('#add_btn')

let Input = document.querySelector('#to_do')

let parentContainer = document.querySelector('#listItem')


addButton.addEventListener('click',()=>{
    let userInput = Input.value.trim(' ');//trim removes the spaces before the input an after the input text

    if(userInput.length !== 0){
        //creating container to hold the task and delete button
        let container = document.createElement('div');
        container.setAttribute('id', 'task_container')
        parentContainer.append(container)

        //creating the label and input
        let completed = document.createElement('input');
        completed.type = 'radio';
        completed.setAttribute('id', 'task_completed');
        container.append(completed)

        //creating the label
        let toDoText = document.createElement('label');
        toDoText.setAttribute('for', 'task_completed');
        toDoText.innerText = userInput;
        container.append(toDoText)
        // console.log(toDoText)

        //creating the delete img
        let deleteImage = document.createElement('img')
        deleteImage.setAttribute('src', 'images/delete_btn.jpeg')
        deleteImage.setAttribute('class', 'delete_btn')
        container.append(deleteImage)
        //add the delete event 
        deleteImage.addEventListener('click', (event)=>{
            let listitem = event.target.parentElement;
            listitem.remove()
        })
        completed.addEventListener('change', ()=>{
            let rect = container.clientWidth;// instead of clientWidth u can use getBoundingClientect()
            let width = Math.floor(rect.width);
            container.setAttribute('class', 'line-through')
            container.style.width = width+'px';
        })
        

    } else{
        alert('type something pls')
    }
    Input.value = ''
    // console.log(toDoText.attributes)
})

