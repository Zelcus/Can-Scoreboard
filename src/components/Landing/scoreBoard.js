import React, { useState, useEffect } from "react";
import data from "../../user-list.json";
import { FirebaseContext } from "../Firebase";
import { withFirebase } from "../Firebase";
const ScoreBoard = () => {
    const [userValue, setUserValue] = useState("");

    const [users, setUsers] = useState([]);

    const handleChange = (e) => {
        setUserValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            value: userValue,
            points: 0,
        };

        //If textfield is empty
        if (!userValue) return;
        setUsers([...users, user]);
        data.push(user);

        //Reset the input fields
        document.getElementById("userValue").value = "";
        document.getElementById("userValue").points = 0;
        console.log("data", data);
    };
    const incrementPoints = (e) => {
        const { id } = e.target.parentElement;
        data[id].points = data[id].points + 1;
        setUsers([...users]);
    };
    const decrementPoints = (e) => {
        const { id } = e.target.parentElement;
        let tempPoints = data[id].points;
        if (tempPoints > 0) {
            data[id].points = data[id].points - 1;
        }
        setUsers([...users]);
    };
    const handleDelete = (e) => {
        const { id } = e.target.parentElement;
        data.splice(id, 1);
        setUsers([...users]);
    };
};
