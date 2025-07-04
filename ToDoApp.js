class Task{
    constructor(id, title, description, completed, priority, createdAt, dueDate) {
        this.id = Date.now
        this.title = title
        this.description = description
        this.completed = completed
        this.priority = priority
        this.createdAt = createdAt
        this.dueDate = dueDate
    }
toggle(){

}
edit(newTitle){

}
setPriority(level){

}
isOverdue(){

}

}

class TaskManager{
    constructor(tasks,nextId){
    this.tasks = []
    this.nextId = nextId
    }
    addTask(task){
    this.tasks.push(task) 
    }
    removeTask(id,task){
    const found = task.find(task =>task.id === id)
    }
    completedTask(task){
        task.completed = true
        console.log("Task completed!")
    }
    getTask(id){

    }
    getAllTasks(){

    }

}
task = new Task(new Date,'Startup','good',false,'work',12,26)
taskManager = new TaskManager([],432532)
taskManager.addTask(task)
taskManager.completedTask(task)
taskManager.removeTask(task,[])
taskManager.getTask([])
taskManager.getAllTasks()