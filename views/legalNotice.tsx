import React from 'react'

interface Toto {
  name: string
}

function HelloMessage(props: Toto) {
  return <div>Hello {props.name}</div>;
}

export default HelloMessage;