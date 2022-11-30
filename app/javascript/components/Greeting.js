import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../redux/Greetings/Greeting";
import { useEffect } from "react";
const Greeting = () => {
    const dispatch = useDispatch()

    const greet = useSelector((state) => (state.greetings))
    useEffect(() => {
        dispatch(fetchdata());
    }, [dispatch]);
    
    return (
        <h1>{greet.greetings.message}</h1>
    );
};
export default Greeting;