import './Memeform.css'

import memes_data from '../../memesdata'
import React from 'react';

export default class Memeform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            meme_image_url: null
        }
    }

    clickHandler = (event) => {
        console.log('You clicked me', event)
        const random_index = Math.round(Math.random()*100 % 100)
        console.log(random_index)

        const random_meme = memes_data.data.memes[random_index]

        console.log(random_meme, 'meme')

        this.setState({
            meme_image_url: random_meme.url
        })

    }

    render() {
        return (
            <div className='body'>
                <div className='meme-form'>
                    <div className='input-fields'>
                        <input type='text' placeholder='main line' />
                        <input type='text' placeholder='punch line' />
                    </div>
                    <button onClick={this.clickHandler}>Get a new meme image</button>
                </div>
                <div className='meme-image'>
                    <img src={this.state.meme_image_url} alt="meme"></img>
                </div>
            </div>
        )
    } 
}