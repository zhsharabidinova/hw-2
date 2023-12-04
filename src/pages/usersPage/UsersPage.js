import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAction } from "../../redux/actions";
import User from "../../components/User";

function UsersPage(){
const {users} = useSelector(state => state.usersReducer)

    const dispatch = useDispatch()

    const getUsers = () =>{
        dispatch(fetchUserAction())
    }
    
    return(
        <div>
            <button onClick={getUsers}>get users</button>
            {users.map(user => <User userInfo={user}/>)}

        </div>
    )
}

export default UsersPage