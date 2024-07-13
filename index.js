
//Declaration
const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clearAll = document.querySelector(".clear");
const messageSpan = document.querySelector(".message span");
const searchForm = document.querySelector(".search");

//Message Function
function updateMessage(){
    const textLength = tasks.children.length;
    messageSpan.textContent = `You have ${textLength} ${textLength.textContent} pending tasks.`;
}
updateMessage();

//add function
addForm.addEventListener("submit", event => {
    event.preventDefault();
    //console.log(addForm.task.value);// if you want to check or print 
    
    //trim spaces and reset
    const value = addForm.task.value.trim();

    if(value.length){
        //console.log(value);
        //end of trim spaces

        // Inserting
        tasks.innerHTML += `<li>
                                <span>${value}</span>
                                <i class="bi bi-trash-fill delete"></i>
                            </li>`; //End Inserting
        addForm.reset(); //Reset Input
        updateMessage();
   
    }
});

//Delete 
tasks.addEventListener("click", event => {
    //console.log(event.target); //Targeting wich elements
    //check if contain delete or not
    if(event.target.classList.contains("delete")){
        //console.log(event.target); // print
        event.target.parentElement.remove(); //Remove
        updateMessage();
    }
});

//Clear All
clearAll.addEventListener("click", event =>{
    const taskItems = tasks.querySelectorAll("li");
    taskItems.forEach(item =>{
        item.remove();
    });
    updateMessage();
});

//Search Function
function filterTask(term){
//Filter not match
   Array.from(tasks.children)
    .filter(task => {
        return !task.textContent.toLowerCase().includes(term);
    })
    //console.log(list);
    .forEach(task => {
        task.classList.add("hide");
    });
//Filter match
    Array.from(tasks.children)
    .filter(task => {
        return task.textContent.toLowerCase().includes(term);
    })
    //console.log(list);
    .forEach(task => {
        task.classList.remove("hide");
    });
}

//Search keyup
searchForm.addEventListener("keyup", event =>{
    //console.log(searchForm.task.value);// print
    const term = searchForm.task.value.trim().toLowerCase(); //triming
    console.log(term);
    filterTask(term);

})

//Search Reset inut
searchForm.addEventListener("click", event =>{
    if(event.target.classList.contains("reset")){
        searchForm.reset();
        const term = searchForm.task.value.trim(); //triming
        filterTask(term);

    }
})