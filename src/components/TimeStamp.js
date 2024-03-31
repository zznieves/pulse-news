import React from "react";


// PublishAt Functional Component: format given timeStamp
const TimeStamp = ({ timeStamp }) => {

    const input = new Date(timeStamp);

    const formattedDate = input.toLocaleDateString();

    // return the formatted Date
    return formattedDate
};

// export Component to be used in another file
export default TimeStamp;