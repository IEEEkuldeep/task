import mongoose  from 'mongoose';
import bcrypt from 'bcrypt';

 const userSchema = mongoose.Schema({
     name: {
         type: String,
         trim: true,
         requied: true,
     },
     email: {
         type: String,
         unique: true,
         lowercase: true,
         trim: true,
         required: true
     },
     password: {
        type: String,
        trim: true,
        requied: true,
    },
    token: {
        type: String,
        trim: true,
        requied: true,
    },
     created: {
         type: Date,
         default: Date.now
     }
 });

 userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.hash_password);
 };

 const user = mongoose.model('user', userSchema);

 export default user;
