import React from "react";
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';

function Footer(){
    return (<footer>
        <p><CopyrightOutlinedIcon/> {new Date().getFullYear()}</p>
    </footer>);
}

export default Footer;
