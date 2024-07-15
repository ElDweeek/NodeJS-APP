

let posts = [
    {
        id: 1,
        title: "Ahmed",
        content: "lorem"
    }
]

const getAllPosts = (req, res) => {
    res.json({message: "Getting All Posts", posts})
}


const addPost = (req, res) => {
    req.body.id = posts[posts.length - 1].id + 1;
    posts.push(req.body)
    res.json({Message: "Added",posts})
}

const deletePost = (req, res) => {
    posts = posts.filter(x => x.id != req.params.id);
    res.json({message: "Deleted",posts})
}


const updatePost = (req, res) =>{
    let updatedPost = posts.find(x => x.id == req.params.id);
    updatedPost.title = req.body.title;
    res.json({message: "Updated",posts})
}

export {
    getAllPosts,
    addPost,
    deletePost,
    updatePost
}