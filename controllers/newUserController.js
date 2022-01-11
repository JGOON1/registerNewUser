const db = require('../models/index');
const bcrypt = require('bcryptjs');


const newUser = db.newUsers;

const addUser = async (req,res) => {
    const { firstName, lastName, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    try {
        const user = await newUser.create({firstName:firstName, lastName:lastName, email:email, password:hash})
        res.status(200).send(user)
    } catch (e) {
        console.log('there was an error', e)
        res.status(400).send("something broke")
    }
}


const getAllUsers = async (req, res) => {

}