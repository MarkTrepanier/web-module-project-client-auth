import React, {useState, useEffect}from "react";

class FriendsList extends React.Component{
    state = {
        friends:[]
    }
    componentDidMount(){
        console.log('cake')
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