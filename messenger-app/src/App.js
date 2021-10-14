import React from 'react'
import "./App.css";
import { ChatEngine } from 'react-chat-engine'

export function App() {
  return (
    <ChatEngine
      publicKey={'b75e5bd5-cd84-404c-b820-06feff8c98c0'}
      userName={'john_smith'}
      userSecret={'secret_1234'}
    />
  )
}