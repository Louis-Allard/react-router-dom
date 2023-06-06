import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Menu = (props) => {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
          <h1>
            <button 
            onClick={() => setToggle(!toggle)} 
            class="btn btn-primary mb-5">{props.title}
            </button>
            </h1>
            {toggle && (
          <nav>
            <ul>
                <li><Link to="/page1">PageA</Link></li>
                <li><Link to="/page2">PageB</Link></li>
                <li><Link to="/page3">PageC</Link></li>           
                </ul> 
          </nav>
            )}
        </div>
    );
};

export default Menu;