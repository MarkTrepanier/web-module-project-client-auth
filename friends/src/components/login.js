import React, {useState}from "react";

const Login = () => {
    const initialInput = {
        username:'',
        password:''
    }
    const [isLoading, setIsLoading] = useState(false)
    const [input, setInput] = useState(initialInput)

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <form>
                <div>
                    <label>UserName
                        <input 
                        type='text' 
                        name='username' 
                        placeholder='Craig Robinson'
                        value={input.username}
                        onChange={handleChange}
                        ></input>
                    </label>
                </div>   
                <div>
                    <label>Password
                        <input 
                        type='password' 
                        name='password' 
                        value={input.password}
                        onChange={handleChange}
                        ></input>
                    </label>
                </div>  
                <button>submit</button> 
            </form>
        </div>
    )
}
export default Login;