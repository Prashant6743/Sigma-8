let Todo = [];
let req =  prompt ("please enter your request");


while(true){
    if (req == "quit"){
        console.log("quitting Application");
        break;
    }
    if (req == "list"){
        console.log("__________");
        for (let i = 0 ; i < Todo.length ; i++){
            console.log(i, Todo[i]);
        }
         console.log("__________");
    }
    else if (req == "add"){
        let task= prompt ("please enter a tast to add in Todo list");
        Todo.push(task);
        console.log("Task Added ");
    }
    else if (req == "delete"){
        let idx = prompt ("please enter a tast index to delete ");
        Todo.splice(idx ,1 );
        console.log ("task deleted ");
    }
    else {
        console.log ("wrong input");
    }
     req =  prompt ("please enter your request");
}