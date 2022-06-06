function addTask(){

    if(document.getElementById('task').value == '')
    { alert('insira uma tarefa!'); return;}

    let tasks = document.getElementById('to-do-list')

    let text = document.createElement('span')

    text.textContent = document.getElementById('task').value

    let check = document.createElement('input')

    check.type = 'checkbox'
    check.addEventListener('change', function()  {
        if(this.checked){
            text.style.textDecoration = 'line-through';      
        }else{
            text.style.textDecoration = 'none';   
        }
    })

    let task = document.createElement('div')

    task.appendChild(check);
    task.appendChild(text)

    tasks.appendChild(task)
    
}