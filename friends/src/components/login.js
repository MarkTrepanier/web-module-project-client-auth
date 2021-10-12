import React from "react";
const Login = () => {
    return(
        <div>
            <form>
                <div>
                    <label>UserName
                        <input type='text' placeholder='Craig Robinson'></input>
                    </label>
                </div>   
                <div>
                    <label>Password
                        <input type='password'></input>
                    </label>
                </div>  
                <button>submit</button> 
            </form>
        </div>
    )
}
export default Login;