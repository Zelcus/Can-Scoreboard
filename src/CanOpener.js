import React, { useState, useEffect } from "react";

const CanOpener = () => {
    const Participants = [
        { id: 0, name: "Red" },
        { id: 1, name: "Blue" },
        { id: 2, name: "Rue" },
    ];
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(Participants);
    }, []);
    return (
        <div>
            <ul>
                {users.map((value, index) => (
                    <li key={value.id}>{value.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default CanOpener;
// {const userList = users.map((user) => <li key={user}>{user}</li>}
