import React from "react";
import { FaWhatsapp } from "react-icons/fa";

// import { Link } from "react-router-dom";
// import defaultImg from "../images/room-1.jpeg";
// import PropTypes from "prop-types";
// import { memo } from "react";
// import Contact from "./Contact";
// const Room = memo(({ room }) => {
//     const { contact } = room;
//     // console.log(name);
//     return (
//         <div>
//             <h6>{contact}</h6>
//             {/* <p>experiencia</p> */}
//         </div>
//     );
// });

// Room.propTypes = {
//     room: PropTypes.shape({
//         contact: PropTypes.string.isRequired
//     })
// };
// export default Room;

const Contact = ({contact}) => {
    return (
        <div className="section-contact">
            <div className="contact">
                <span><FaWhatsapp /></span>
                <h6>964744780</h6>
            </div>
        </div>
    );
};

export default Contact;