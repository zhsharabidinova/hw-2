import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOneInfo } from "../redux/actions";

function User({ userInfo }) {
    const dispatch = useDispatch();
    const userAdditionalInfo = useSelector(state => state.usersReducer.userAdditionalInfo);

    const getOneUser = () => {
        dispatch(fetchUserOneInfo(userInfo.id));
    };

    return (
        <ul>
            <li>{userInfo.name}</li>
            <li>{userInfo.email}</li>
            <button onClick={getOneUser}>get more</button>
            {userAdditionalInfo[userInfo.id] && (
                <div>
                    <p>Phone: {userAdditionalInfo[userInfo.id].phone}</p>
                    <p>Address: {userAdditionalInfo[userInfo.id].address.street}, 
                    {userAdditionalInfo[userInfo.id].address.suite}, 
                    {userAdditionalInfo[userInfo.id].address.city}</p>
                    <p>Company: {userAdditionalInfo[userInfo.id].company.name}, {userAdditionalInfo[userInfo.id].company.catchPhrase}</p>
                </div>
            )}
        </ul>
    );
}

export default User;
