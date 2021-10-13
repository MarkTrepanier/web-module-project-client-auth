import React, {useState}from "react";
import Axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = (e) => {
    const history = useHistory();
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
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            Axios.post('http://localhost:5000/api/login',input)
            .then(res=>{
                console.log(res);
                setIsLoading(false);
                localStorage.setItem('token', res.data.payload);
                history.push('/friendslist')
            })
            .catch(er=>{
                setIsLoading(false);
                console.log(er)
                //output incorrect info?
            })
        }, 2000);

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>_username_
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
                    <label>_password_
                        <input 
                        type='password' 
                        name='password' 
                        value={input.password}
                        onChange={handleChange}
                        ></input>
                    </label>
                </div>  
                <button>submit</button> 
                {isLoading ? <h3>_loading...</h3>:<></>}
            </form>
        </div>
    )
}
export default Login;