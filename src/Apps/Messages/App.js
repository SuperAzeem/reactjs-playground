import React from 'react';

export default function App() {

    // const [messages, setMessage] = React.useState([])
    // const [messages, setMessage] = React.useState(['a']);
    const [messages, setMessage] = React.useState(['a', 'b', 'c']);

    return (
      <div>
        {
            messages.length === 0 ?
            <span>You're all caught up!</span> :
            <span>You have {messages.length} unread {messages.length > 1 ? " messages" : " message"}</span>
        }
      </div>
    );
}