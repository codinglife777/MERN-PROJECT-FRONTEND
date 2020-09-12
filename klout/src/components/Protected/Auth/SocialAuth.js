/*/import React, { Component } from 'react'
import io from 'socket.io-client'
import OAuth from '../Auth/OAuth'
import { API_URL } from '../config'
import '../App.css'
const socket = io(API_URL)
const providers = ['twitter', 'google', 'facebook', 'github']

export default class SocialAuth extends Component {

  render() {
    return (
      <div className={'wrapper'}>
        <div className={'container'}>
          {providers.map(provider => 
            <OAuth 
              provider={provider}
              key={provider}
              socket={socket}
            />
          )}
        </div>
      </div>
    )
  }
}*/