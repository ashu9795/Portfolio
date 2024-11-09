import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {User} from  "../project.modals/user.modal.js"

const login  = asyncHandeler(async (req, res) => {
    const { username, password } = req.body;

    if(!username)
{
    throw new ApiError(400, "Please provide username");
}
 
if(!password)
{
    throw new ApiError(400, "Please provide password");
}

    const user = await User.findOne({ username , password });

    if(!user)
    {
        throw new ApiError(400, "Invalid username or password");
    }

    

    res.status(200).json(new ApiResponce(200, user, "Login success"));
});

export { login };