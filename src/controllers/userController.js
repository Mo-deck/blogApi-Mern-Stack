import User from "../models/userModel.js"
export const registerUser = async (req , res) =>{
   
    try{

        const {username, password ,email} = req.body
        
        const userExist = await User.findOne({email})

        if(userExist){
            return res.status(400).send({status: false , message: "User Already Existed"})
        }

        const user = new User({
            username,
            email,
            password
        });

        await user.save()

        res.status(201).send({status: true, message:{ username: user.username, email: user.email}});

    }catch(err){
        console.log("Error at User Register" , err)
        res.status(500).send({status: "false" , message: "UnKnow Error"})
    }
    
}


