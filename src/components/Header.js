import React from 'react'
import { IconButton } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import './../styles/header.css';

function Header() {
    //const [userLogin, setUserLogin] = useState(false);
    return (
        <div className="header">
            <div className="menu__bar">
                <IconButton aria-label="My Profile">
                    <AccountCircleRoundedIcon fontSize="large" />
                </IconButton>
                <IconButton aria-label="My Profile">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/tinder-9-432475.png" className="topbar__logo" />
                </IconButton>
                <IconButton aria-label="My Profile">
                    <ChatBubbleRoundedIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
