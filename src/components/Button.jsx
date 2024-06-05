import React from 'react';
import "./Button.css";

const secondary_btn = "secondary_btn"; // Replace with actual class name
const primary_btn = "primary_btn"; // Replace with actual class name

const Button = ({ isSecondary, icon, text, ...rest }) => {
    return (
        <button className={isSecondary ? secondary_btn : primary_btn} {...rest}>
            {icon}
            {text}
        </button>
    );
}

export default Button;

// import "./Button.css";

// const secondary_btn = "secondary_btn"; // Replace with actual class name
// const primary_btn = "primary_btn"; // Replace with actual class name

// const Button = (props,...rest) => {
//     return (
        
//         <button className={props.isSecondary ? secondary_btn : primary_btn}>
            
//             {props.icon}
//             {props.text}
//             {...rest}
//         </button>
//     );
// }

// export default Button;
