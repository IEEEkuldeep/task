import asyncErrorHandler from "../errorHandler";
import taskController from "./taskController";

const loadTaskRouter = (app) => {
    app.get(
        '/getAllTask',
        asyncErrorHandler(taskController.getAllTask)
    );
    app.post(
        '/post',
        asyncErrorHandler(taskController.createPost)
    );

    app.get(
        '/posts',
        asyncErrorHandler(taskController.getAllPosts)
    );

    app.delete(
        '/post/:id',
        asyncErrorHandler(taskController.deletePost)
    );

}

export default loadTaskRouter;