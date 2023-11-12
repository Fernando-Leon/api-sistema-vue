const User = require('../models/user');

// Get all users
async function getAllUsers(req, res) {
    try{
        const users = await User.find();
        res.json(users);
    }catch (error){
        res.json({ message: error });
    }
}

async function createUser(req, res) {
    const { userName, password } = req.body;
    
    try {
        const newUser = new User({ userName, password });
        // Guardar el nuevo usuario en la base de datos
        const savedUser = await newUser.save();

        // Responder con el usuario guardado
        res.status(201).json(savedUser);
    } catch (error) {
        // Manejar errores adecuadamente
        res.status(400).json({ message: error.message });
    }
}

// Get a user

async function getUser(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }
}

// Update a user

async function updateUser(req, res) {
    const { id } = req.params;
    const { userName, password } = req.body;
    try {
        const updatedUser = await User.updateOne( { _id: id }, { $set: { userName, password } });
        res.json(updatedUser);
    } catch (error) {
        res.json({ message: error });
    }
}

// delete a user
async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        const removedUser = await User.remove( { _id: id });
        res.json(removedUser);
    } catch (error) {
        res.json({ message: error });
    }   
}


module.exports = {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
}