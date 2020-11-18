import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import axios from './../lib/axios'
import './../styles/tindercards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    const swipe = (dir) => {
        const cardsLeft =
            console.log(cardsLeft)
    }

    useEffect(() => {
        // Update the document title using the browser API
        async function getTinderCards() {
            try {
                const response = await axios.get('/tinder/cards');
                setPeople(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getTinderCards();
    }, []);

    return (
        <div className="tinder__card__container">
            {people.map(person =>
                <TinderCard className='swipe' key={person.name} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div style={{ backgroundImage: 'url(' + person.imgUrl + ')' }} className='card' alt={person.name}>
                        <h3 className="card__person__name">{person.name}, <span>{person.age}</span></h3>
                    </div>
                </TinderCard>
            )}
        </div>
    )
}

export default TinderCards
