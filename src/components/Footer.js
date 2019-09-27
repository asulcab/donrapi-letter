import React from 'react';
import { FaHeart } from 'react-icons/fa';

const style = {
  textAlign: 'center'
}
function Footer() {
  return(
    <footer>
      <section>
        <a>
          De Huancayo con 
          <span> <FaHeart /> </span>
          para el mundo
        </a>
      </section>
    </footer>
  )
}

export default Footer;