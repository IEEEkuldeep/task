import asyncErrorHandler from "../errorHandler";
import userController from "./userController";

const loadUserRouter = (app) => {
    app.get(
        '/getAllTask',
        asyncErrorHandler(userController.getAllTask)
    );
    app.post(
        '/register',
        asyncErrorHandler(userController.registerUser)
    );

    app.get(
        '/signin',
        asyncErrorHandler(userController.signin)
    );

    app.delete(
        '/post/:id',
        asyncErrorHandler(userController.deletePost)
    );

}

export default loadUserRouter;