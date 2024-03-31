import React, { useState, useEffect } from "react";


// Today Functional Component: generate and render today's date and time
const Today = () => {

    // generate todays date and time
    const [ currentDateTime, setCurrentDateTime ] = useState(new Date());

    // set an effect: update the current date and time every second
    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // clean-up the interval when the component is umounted or update
        return () => {
            clearInterval(timer);
        };
    }, []); // effect will only run once


    // return the JSX/HTML
    return (
        <div className="dateTime">
            <p>
                {currentDateTime.toLocaleDateString()}
                <br />
                <span>{currentDateTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
            </p>
        </div>
    );
};

// export component to be used in another file
export default Today;