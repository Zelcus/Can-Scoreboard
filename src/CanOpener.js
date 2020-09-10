import React, { useState, useEffect } from "react";

const CanOpener = () => {
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

        if (!userValue) return;
        setUsers([...users, user]);
        document.getElementById("userValue").value = "";
        document.getElementById("userValue").points = 0;
    };
    const incrementPoints = (e) => {
        const { id } = e.target.parentElement;
        users[id].points = users[id].points + 1;
        setUsers([...users]);
    };
    const decrementPoints = (e) => {
        const { id } = e.target.parentElement;
        let tempPoints = users[id].points;
        if (tempPoints > 0) {
            users[id].points = users[id].points - 1;
        }
        setUsers([...users]);
    };
    const handleDelete = (e) => {
        const { id } = e.target.parentElement;
        users.splice(id, 1);
        setUsers([...users]);
    };

    return (
        <div class="form-container">
            <form class="can-form" onSubmit={handleSubmit}>
                <label class="user-label">Name on participant</label>
                <span class="user-input">
                    <input
                        class="submit-text"
                        type="text"
                        id="userValue"
                        onChange={handleChange}
                    ></input>
                    <input
                        class="submit-button"
                        type="submit"
                        value="ADD"
                    ></input>
                </span>
            </form>
            <div class="users">
                {users &&
                    users.map((user, i) => (
                        <div className="user-block" key={user.value} id={i}>
                            {user.value}
                            <div>{user.points}</div>
                            <button
                                className="btn add-point"
                                onClick={incrementPoints}
                            >
                                +
                            </button>
                            <button
                                className="btn delete-point"
                                onClick={decrementPoints}
                            >
                                -
                            </button>
                            <button
                                className="btn delete-user"
                                onClick={handleDelete}
                            >
                                x
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};
export default CanOpener;
