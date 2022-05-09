import taskService from "../../services/taskService";

const taskController = {
    getAllTask: async(req, res) =>{
        //validation and sanitization
        //service call
       const data = await taskService.getAllTask(req);
        // return
         res.status(200).json({
            status: 200,
            message: 'Task fetched Successfully',
            data,
        })
    },
    createPost: async(req, res) =>{
        //validation and sanitization
        //service call
       const data = await taskService.createPost(req);
        return res.status(200).json({
            status: 200,
            message: 'Post Created Successfully',
            data,
        })
    },

    getAllPosts: async(req, res) =>{
        //validation and sanitization
        //service call
       const data = await taskService.getPosts(req);
        return res.status(200).json({
            status: 200,
            message: 'Post Fetched Successfully',
            data,
        })
    },

    deletePost: async(req, res) =>{
        console.log(req.body);
        //validation and sanitization
        //service call
       const data = await taskService.deletePost(req);
        return res.status(200).json({
            status: 200,
            message: 'Post Deleted Successfully',
            data,
        })
    }
};

export default taskController;