import React,{useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const FriendForm = () => {

    const history = useHistory();
    const initialInput = {
        id:'',
        name:'',
        age:'',
        email:''
    }

    const [formInput, setFormInput] = useState(initialInput)
    const handleSubmit = (e)=>{
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends',formInput)
                .then(res=>{
                    console.log(res)
                    history.push('/friendslist')
                })
                .catch(er=>{
                    console.log('oh no')
                    console.log(er)
                })
    }
    const handleChanges=(e)=>{
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>new friend?</h2>
                <label> name
                    <input 
                    type='text'
                    name='name'
                    value={formInput.name}
                    onChange={handleChanges}
                    />
                </label>
                <label> age
                    <input 
                    type='number'
                    name='age'
                    value={formInput.age}
                    onChange={handleChanges}
                    />
                </label>
                <label> email
                    <input 
                    type='email'
                    name='email'
                    value={formInput.email}
                    onChange={handleChanges}
                    />
                </label>
                <button>add friend</button>
            </form>
        </div>
    )
}

export default FriendForm;