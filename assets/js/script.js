const todosContainer = document.getElementById("to-do");

const add = document.getElementById("bt");
let index = 0;
add.addEventListener('click',  (event)=> {
        event.defaultPrevented;

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
                btnDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>';
                btnEdit.innerHTML = '<img src="/assets/images/edit-pencil-svgrepo-com.svg" alt="">';
              
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
                    if(newTask !== ""){
                            paragrafo.innerHTML = newTask
                    }
                        
                }
                
        }
       
        input.value = "";
        
});









