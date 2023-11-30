import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, changeInputAction, deleteUserAction } from "../../redux/actions";
import User from "../../components/User";

export default function UsersPage(){

    const {inputValue, users} = useSelector(state => state.usersReducer)

    const dispatch = useDispatch()

    const changeInput = (event) =>{
        dispatch(changeInputAction(event.target.value))

    }

    const addUser = () =>{
        dispatch(addUserAction(inputValue))
    }
    const deleteUsers = () =>{
        dispatch(deleteUserAction())
    }

    return(
        <div>
            <h1>{ inputValue }</h1>
            <input onChange={changeInput} type='text' placeholder="name" value={inputValue}/>
            <button onClick={addUser}>add</button>
            <button onClick={deleteUsers}>delete all</button>

            {users.map((users, idx)=> <User key={idx} userName={users}/>)}
        </div>
    )
}