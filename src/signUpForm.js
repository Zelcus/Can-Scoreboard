import React from "react";
import useSignUpForm from "./useSignUpForm";

const SignUp = () => {
    const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

    return (
        <form>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="nickName"
                    value={inputs.nickName}
                    onChange={handleInputChange}
                ></input>
                <button type="submit" onSubmit={handleSubmit}>
                    Add user
                </button>
            </div>
        </form>
    );
};
export default SignUp;
