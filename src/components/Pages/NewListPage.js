import React, { useEffect, useState, useContext } from "react";
// import CreateList from "./components/CreateList/index";
import { Context } from "./../Store/Store.js";
const NewListPage = () => {
    const [state, dispatch] = useContext(Context);
    return (
        <>
            <header>
                <h1>New List</h1>
            </header>
            <section>
                {/* <CreateList
                // onCreate={onUserListCreate}
                // userId={userId}
                ></CreateList> */}
            </section>
        </>
    );
};

export default NewListPage;
