import * as React from "react";

export default function printMe() {

    const handleClick = () => {
        console.log('I get called from print.jsx');
    }

    return (
        <button onClick={handleClick}>
            Click me and check the console!
        </button>
        );
}