import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userName: String,
    mobileNumber: Number,
    email: String,
    address: String
});

const user = mongoose.model('user', userSchema);

export default user;