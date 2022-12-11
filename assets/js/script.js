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
                btnEdit.innerHTML = `
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	         viewBox="0 0 511.968 511.968" style="enable-background:new 0 0 511.968 511.968; color:#fff;" xml:space="preserve">

                <path d="M493.248,18.424c-24.171-24.171-66.325-24.171-90.496,0L198.571,222.605c-28.757,28.736-45.995,66.901-48.576,107.435
				l-0.619,9.6c-0.384,5.888,1.707,11.648,5.717,15.979c4.032,4.288,9.685,6.72,15.573,6.72c44.608,0,86.549-17.365,118.101-48.917
				l204.48-204.501C518.208,83.96,518.208,43.384,493.248,18.424z M463.083,78.755l-204.48,204.501
				c-17.771,17.749-39.957,29.483-64.085,34.155c4.629-24.384,16.491-46.933,34.219-64.64L432.917,48.589
				c4.032-4.053,9.387-6.251,15.083-6.251c5.696,0,11.051,2.197,15.083,6.251C471.403,56.909,471.403,70.435,463.083,78.755z"/>
			<path d="M170.667,405.005c-17.6,0-34.624-7.36-46.656-20.181c-12.075-12.928-18.325-30.357-17.216-47.893l0.619-9.621
				c3.243-50.88,24.896-98.795,60.992-134.869L339.84,21.005H21.333C9.557,21.005,0,30.541,0,42.339v448
				c0,11.797,9.557,21.333,21.333,21.333h448c11.776,0,21.333-9.536,21.333-21.333V171.832L318.933,343.587
				C279.317,383.203,226.667,405.005,170.667,405.005z"/>

                </svg>              
                `;
              
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









