
import userService from "../../services/userService";

const userController = {
    getAllTask: async(req, res) =>{
        //validation and sanitization
        //service call
    //    const data = await taskService.getAllTask(req);
        // return
         res.status(200).json({
            status: 200,
            message: 'Task fetched Successfully',
            data,
        })
    },
    
    getAllPosts: async(req, res) =>{
        //validation and sanitization
        //service call
    //    const data = await taskService.getPosts(req);
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
    //    const data = await taskService.deletePost(req);
        return res.status(200).json({
            status: 200,
            message: 'Post Deleted Successfully',
            data,
        })
    },

    registerUser: async(req, res) =>{
        //validation and sanitization
        //service call
       const data = await userService.registerUser(req);
        return res.status(200).json({
            status: 200,
            message: 'User Register Successfully',
            data,
        })
    },

    signin: async(req, res) =>{
        console.log(req.body);
        //validation and sanitization
        //service call
       const data = await userService.signin(req, res);
        return res.status(200).json({
            status: 200,
            message: 'User login Successfully',
            data,
        })
    },

};

export default userController;