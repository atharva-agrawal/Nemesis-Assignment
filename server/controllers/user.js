import UserData from "../models/user.js";
import check from 'express-validator';
import emailValidator from 'email-validator';

export const getUsers = async (req, res) => {
    try {
        const allUsers = await UserData.find().exec();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createUsers = async (req, res) => {
/*     let {userName, mobileNumber, email, address } = req.body;

    const validateUserName = check('userName').isLength({ min: 1 }) && check(userName).isAlphanumeric();
    const validateMobile = check('mobileNumber').isLength(10);
    const validateEmail = emailValidator.validate(email);

    if(validateUserName && validateMobile && validateEmail){ */
        const user = req.body;
        const newUser = new UserData(user);

        try {
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(409).json({message: error.message});
        }
    /* }
    else{
        console.log('Check your input fields!');
    } */
    
}

export const deleteUsers = async (req, res) => {
    const id = req.params.id;

    try {
        await UserData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!');
    } catch (error) {
        console.log(error);
    }
}