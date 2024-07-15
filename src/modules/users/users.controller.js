

let users = [
    {
        id: 1,
        name: "Ahmed",
        age: 33
    }
]

const getAllUsers = (req, res) => {
    res.json({message: "Getting All Users", users})
}


const addUser = (req, res) => {
    req.body.id = users[users.length - 1].id + 1;
    users.push(req.body)
    res.json({Message: "Added",users})
}

const deleteUser = (req, res) => {
    users = users.filter(x => x.id != req.params.id);
    res.json({message: "Deleted",users})
}


const updateUser = (req, res) =>{
    let updatedOne = users.find(x => x.id == req.params.id);
    updatedOne.name = req.body.name;
    res.json({message: "Updated",users})
}

export {
    getAllUsers,
    addUser,
    deleteUser,
    updateUser
}