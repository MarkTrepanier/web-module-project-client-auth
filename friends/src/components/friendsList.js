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
                    this.setState({
                        friends: res.data
                    })
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
                    {this.state.friends ? this.state.friends.map(friend=>{
                        return <h2 key={friend.id}>{friend.name}</h2>
                    }):<></>}
                </div>
            </div>
        )
    }
}

export default FriendsList;