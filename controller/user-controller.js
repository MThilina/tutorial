const{users} = require('../data');

const getUsers =(req,res)=>{
    res.setHeader('content-type','application/json')
    return  res.json(users);
}

const getSeletedUsers =(req,res)=>{
  // removed header because in not found we are sending text\html 
  const{userId} = req.params;
  const singleUser = users.find((user)=>user.id === Number(userId));
  if(!singleUser){
  return res.status(404)
      .json({message:'user not found',data:null});
  }
  return res.json(singleUser);
}

const addUsers =(req,res)=>{
    res.setHeader('content-type','application/json')

    // Mapping request body to an object
      const user = {
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        passportno:req.body.passportno
      };
        
      if (!user.id || !user.firstname || !user.lastname || !user.passportno) {
        return res.status(400).json({ message: 'Invalid format: Missing required fields', data: null });
        }
    
        let userList = [...users];
        // add all exisiting users to the list 
    
        for(let a=userList.length ; a<0; a--){
            userList.push({
                id: users[a].id,
                firstname: users[a].firstname,
                lastname: users[a].lastname,
                passportno: users[a].passportno
            });
        }
    
        // // saving a new user to the list 
         userList.push(user);
    
        return res.status(201).json({message:'User Created',data:userList});
}

const updateUser =(req,res)=>{
    const {id} = req.params;
    // Mapping request body to an object
  const {passportno} = {
    passportno:req.body.passportno
  };
    

    const singleUser = users.find((user)=>user.id === Number(id))
    
    if(!singleUser){
        return res.status(404)
        .json({message:'user not found',data:null});
    }

    // if the record is there allowed to updated the passport number 
    singleUser.passportno = passportno;
    
    return res.status(200).json({ message: 'User updated successfully', data: singleUser });
}

const deleteUser=(req,res)=>{
    const {id} = req.params;
    let userList = [...users];

    const singleUser = users.find((user)=>user.id === Number(id));

    if(!singleUser){
        return res.status(404)
        .json({message:'user not found',data:null});
    }

    // get all the users to list
    for(let a=userList.length ; a<0; a--){
        userList.push({
            id: users[a].id,
            firstname: users[a].firstname,
            lastname: users[a].lastname,
            passportno: users[a].passportno
        });
    }

    // delete the user from the list 
    userList.splice(id,1)

    return res.status(200)
    .json({message:'Successfully Deleted',data:null});
}


module.exports ={
    getUsers,
    getSeletedUsers,
    addUsers,
    updateUser,
    deleteUser
}