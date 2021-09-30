import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const LogOut = () => {
    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();

    const logOut = async() => {
        try {
            await fetch("/logout", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            dispatch({type: "USER", payload: false});
            history.push("/login");
            
        } catch (error) {
            console.log(error);
            alert("LogOut Failed");
        }
    }

    useEffect(() => {
        logOut();
    }, []);

    return (
    <>

    </>
    );
}

export default LogOut;