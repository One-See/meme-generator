import './Memeform.css'

import memes_data from '../../memesdata'
import React from 'react';

export default class Memeform extends React.Component {

    top_text = ''
    bottom_text = ''

    constructor(props) {
        super(props);
        this.state = {
            meme_image_url: null,
            top_text: this.top_text,
            bottom_text: this.bottom_text
        }
    }

    clickHandler = (event) => {
        console.log('You clicked me', event)
        const random_index = Math.round(Math.random()*100 % 100)
        console.log(random_index)

        const random_meme = memes_data.data.memes[random_index]

        console.log(random_meme, 'meme')

        this.setState({
            meme_image_url: random_meme.url,
            top_text: this.top_text,
            bottom_text: this.bottom_text
        })

    }

    handleTopTextInput = (event) => {
        this.top_text = event.target.value
    }

    handleBottomTextInput = (event) => {
        this.bottom_text = event.target.value
    }

    render() {
        return (
            <div className='body'>
                <div className='meme-form'>
                    <div className='input-fields'>
                        <input  onChange={this.handleTopTextInput} type='text' placeholder='main line' />
                        <input  onChange={this.handleBottomTextInput} type='text' placeholder='punch line' />
                    </div>
                    <button onClick={this.clickHandler}>Get a new meme image</button>
                </div>
                <div className='meme-image'>
                    <img src={this.state.meme_image_url} alt="meme"></img>
                    <span className='top-text'>{this.state.top_text}</span>
                    <span className='bottom-text'>{this.state.bottom_text}</span>
                </div>
            </div>
        )
    } 
}