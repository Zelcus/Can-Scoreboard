import React, { useEffect, useState } from "react";
import * as FirestoreService from "../../Services/firestore";
import ErrorMessage from "../../ErrorMessage/errorMessage";

function ItemList(props) {
    const { userListId } = props;

    const [userItems, setUserItems] = useState([]);

    const [error, setError] = useState();

    // Use an effect hook to subscribe to the user list item stream and
    // automatically unsubscribe when the component unmounts.
    useEffect(() => {
        const unsubscribe = FirestoreService.streamUserListItems(userListId, {
            next: (querySnapshot) => {
                const updatedUserItems = querySnapshot.docs.map((docSnapshot) =>
                    docSnapshot.data()
                );
                setUserItems(updatedUserItems);
            },
            error: () => setError("user-list-item-get-fail"),
        });
        return unsubscribe;
    }, [userListId, setUserItems]);

    const incrementPoints = (i) => {
        userItems[i].point = userItems[i].point + 1;
        setUserItems([...userItems]);
    };

    const userItemElements = userItems.map((userItem, i) => (
        <div
            className="participant-card"
            key={i}
            onClick={() => incrementPoints(i)}
        >
            <div>
                <p className="participant-name">{userItem.name}</p>
                <p className="participant-point">{userItem.point}</p>
            </div>
        </div>
    ));

    return (
        <div>
            <ErrorMessage errorCode={error}></ErrorMessage>
            <div className="participant-card-container">{userItemElements}</div>
        </div>
    );
}

export default ItemList;
