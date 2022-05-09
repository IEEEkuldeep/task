import bcrypt from 'bcrypt'
import InternalServerError from '../errors/InternalServerError';
import user from "../models/users/user";
import jwt from 'jsonwebtoken';
 const userService = {
    registerUser: async(req, res) => {
        console.log(req.body);
        const { email, password } = req.body;
        const oldUser = await user.findOne({ email });

        if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
        }

        const newUser = new user(req.body);
        newUser.password = await bcrypt.hash(password, 10);
        const token = jwt.sign({ email , _id: newUser._id, }, 'secret', { expiresIn: '1h' });
        newUser.token = token;
        const userSave = await newUser.save();
        if(!userSave){
            throw new InternalServerError();
        }
        return newUser;
    },

    signin: async(req, res) => {
        const { email, password } = req.body;

        try {
            const userData = await user.findOne({ email: req.body.email });
            console.log(userData);
            if (userData) {
              const cmp = await bcrypt.compare(req.body.password, userData.password);
              console.log(cmp);
              if (cmp) {
                return res.json({ token: jwt.sign({ email , _id: userData._id, }, 'secret', { expiresIn: '1h' }), messsage: 'User login successfully'})
                
              } else {
                res.send("Wrong username or password.");
              }
            } else {
              res.send("Wrong username or password.");
            }
          } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server error Occured");
          }
    },
}


 export default userService;