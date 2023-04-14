import React from 'react';

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? '#222222' : 'transparent',
    }

    return (
        <div onClick={props.toggleFunc} className='box' style={styles} key={props.id}></div>
    )
}