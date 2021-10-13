import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendsList extends React.Component{
    state = {
        friends:[]
    }
    componentDidMount(){
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
                .then(res=>{
                    console.log('fetch succesful')
                    console.log(res)
                })
                .catch(er=>{
                    console.log('error with friends fetch')
                    console.error(er)
                })
    }

    render(){
        return(
            <div>
                <h1>you made it to the friend's list!!</h1>
                <div className='list'>
                    
                </div>
            </div>
        )
    }
}

export default FriendsList;