import Task from "../models/taskModels.js";

export const postTask= async (request,response)=> {
    const {title,description,reason,date} = request.body;
 const newTask = new Task({
        title,
        description,
        reason,
        date,
        user:request.decodedUser.id
    })
    const taskSaved = await newTask.save();
    response.statusCode = 200;
    response.json(taskSaved)
}

export const getTasks= async (request,response)=> {
    const tasks = await Task.find({
        user: request.decodedUser.id
    }).populate('user')
    response.json(tasks);
}

export const getOneTask= async (request,response)=> {
    const task = await Task.findById(request.params.id).populate('user')
    if (!task) {
        return response.status(404).json({message: "Task not found"})
    }

    response.json(task)
}

export const putTask= async (request,response)=> {
    const task = await Task.findByIdAndUpdate(request.params.id,request.body, {new:true})
    if (!task) {
        return response.status(404).json({message: "Task not found"})
    }
    response.json(task)
}

export const deleteTask= async (request,response)=> {
    const task = await Task.findByIdAndDelete(request.params.id)
    if (!task) {
        return response.status(404).json({message: "Task not found"})
    }
    response.sendStatus(204)
}