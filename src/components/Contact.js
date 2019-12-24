import React from "react";
import { Link } from "react-router-dom";

import { FaWhatsapp, FaPhone } from "react-icons/fa";

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

const Contact = () => {
    return (
        <div className="section-contact">
            <a className="contact" href="tel: 964744780">
                <span><FaPhone /></span>
                <h6>964 030 322</h6>
            </a>
        </div>
    );
};

export default Contact;