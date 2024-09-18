const express = require('express')
const user_router = express.Router()

const{users} = require('../data');

const  {
    getUsers,
    getSeletedUsers,
    addUsers,
    updateUser,
    deleteUser } = require('../controller/user-controller')


user_router.get("/",(req,res)=>{
    res.status(200).json({message:"Sever Up and running..",data:200});
})

user_router.get('/users/:userId',getSeletedUsers)
user_router.get('/users',getUsers)
user_router.post('/users',addUsers)
user_router.put('/users/:id',updateUser)
user_router.delete('/users/:id',deleteUser)

module.exports = user_router




