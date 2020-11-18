import React from 'react'
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GradeIcon from '@material-ui/icons/Grade';
import ClearIcon from '@material-ui/icons/Clear';
import './../styles/swipebuttons.css';

function SwipeButtons() {
    return (
        <div className="swipe__buttons">
            <div className="icon__button">
                <IconButton aria-label="delete">
                    <ClearIcon fontSize="large" className="dislike__button" />
                </IconButton>
            </div>
            <div className="icon__button">
                <IconButton aria-label="delete">
                    <GradeIcon fontSize="large" className="super__like__button" />
                </IconButton>
            </div>
            <div className="icon__button">
                <IconButton aria-label="delete">
                    <FavoriteIcon fontSize="large" className="like__button" />
                </IconButton>
            </div>
        </div>
    )
}

export default SwipeButtons
