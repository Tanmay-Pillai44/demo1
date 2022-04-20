import React from 'react';

const styleObj = {
    backgroundColor: 'yellow',
    color: 'cyan',
}

class WelcomeClass extends React.Component {
    render() {
        return <h1 style={styleObj}>Welcome class</h1>
    }
}

export default WelcomeClass;