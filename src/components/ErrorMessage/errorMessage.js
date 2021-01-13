import React from "react";

function ErrorMessage(props) {
    const { errorCode } = props;

    function getErrorMessage() {
        switch (errorCode) {
            case "anonymous-auth-failed":
                return "Anonymous authentication failed. Try again.";
            case "user-list-not-found":
                return "The user list could not be found. Try creating a new one.";
            case "user-list-get-fail":
                return "Failed to retrieve the user list. Try again.";
            case "add-list-item-error":
                return "Failed to add user item to list. Try again.";
            case "create-list-error":
                return "Failed to create the user list. Try again.";
            case "add-user-to-list-error":
                return "Failed to add user to the user list. Try again.";
            case "user-item-desc-req":
                return "user item description required";
            case "duplicate-item-error":
                return "user item on list already";
            case "user-name-required":
                return "Your scoreboard name is required";
            case "user-list-item-get-fail":
                return "failed to get user list items";
            default:
                return "Oops, something went wrong.";
        }
    }

    return errorCode ? <p className="error">{getErrorMessage()}</p> : null;
}

export default ErrorMessage;
