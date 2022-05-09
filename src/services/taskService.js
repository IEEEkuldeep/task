// import { getAllTask } from '../store/taskStore/transaction';

import PostMessage from "../models/post/postMessage";
import  InternalServerError from '../errors/InternalServerError';
import  NotFound from '../errors/NotFound'
import mongoose from "mongoose";
const taskService = {
    getAllTask: async (req) => {
        console.log("BODY MILA", req.body);


        //destructuring

        // validation server side

        // call store
        // await getAllTask()
        return 'dasfdfaf';
    },
    createPost: async (req, res) => {
        const { title, message, creator, tags } = req.body;
        const newPostMessage = new PostMessage({ title, message, creator, tags })
        return await newPostMessage.save();
    },

    getPosts: async (req, res) => {
        try {
            return await PostMessage.find();
        } catch (error) {
            throw new InternalServerError(error);
        }
    },
    
    deletePost:async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("DONE");
        throw new NotFound();
    } 
    return await PostMessage.findByIdAndRemove(id);
}
};

export default taskService;