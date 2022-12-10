const todosContainer = document.getElementById("to-do");

const add = document.getElementById("bt");
let index = 0;
add.addEventListener('click',  (event)=> {
        event.defaultPrevented;
        console.log(event);

        const input = document.getElementById("texto")
        const texto = input.value;    

        if(input.value !== ""){

                index ++;
            
                const divContent = document.createElement('div');
                const divBtnAction = document.createElement('div');
                divContent.setAttribute('id', index);
                divContent.setAttribute('class', "to-do-list-content")
                divBtnAction.setAttribute('class', "btn-action")
             
        
                const paragrafo = document.createElement('p');
                const btnDelete = document.createElement('button');
                const btnEdit = document.createElement('button');
                btnDelete.setAttribute('id', index);
                btnDelete.setAttribute('class', "btn-delete");
                btnEdit.setAttribute('id', index);
                btnEdit.setAttribute('class', "btn-edit");
        
                paragrafo.innerHTML = `${texto}`;
                btnDelete.innerHTML = "excluir";
                btnEdit.innerHTML = "Editar";
              
                paragrafo.setAttribute('class', "todo-list-p")
                paragrafo.setAttribute('id', index);
                todosContainer.appendChild(divContent);
                divContent.appendChild(paragrafo);
                divContent.appendChild(divBtnAction);
                
                divBtnAction.appendChild(btnDelete);
                divBtnAction.appendChild(btnEdit);
                
                // delete
                btnDelete.onclick = () =>{
                        const alerta = confirm("quer mesmo exluir a tarefa")
                        if(alerta){
                            document.getElementById(divContent.id).remove();
                        }
                }
                
                // editar
                btnEdit.onclick = () =>{
                    newTask = prompt("editar tarefa")
                    if(newTask.confirm && newTask.value !== ""){
                            paragrafo.innerHTML = newTask
                    }
                        
                }
                
        }
       
        input.value = "";
        
});









