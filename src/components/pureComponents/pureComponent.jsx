import React, { PureComponent } from 'react';

class PureComponentExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log("Pure Component")
        // return (<h2>Pure Component: {this.props.message}</h2>);
        return (
            <div>
                Pure:
                {
                    this.props.arr.map((val) => (
                        <span>{`${val} `}</span>
                    ))
                }
            </div>
        )
    }
}

export default PureComponentExample;