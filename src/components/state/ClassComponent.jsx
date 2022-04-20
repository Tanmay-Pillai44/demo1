import React from 'react';


class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            showSomething: false,
        };
        this.timerId = null;
    }

    componentDidMount() {
        console.log("Mounted")
        this.timerId = setInterval(() => {
            // this.setState({
            //     counter: this.state.counter + 1,
            // })
            console.log("I am a Subscription");
        }, 1500)
        console.log("Interval ID - ", this.timerId);
    }

    componentDidUpdate(){
        console.log("Updated");
        if (this.state.counter === 1 && !this.state.showSomething) {
            this.setState({
                showSomething: true,
            })
        }
    }

    componentWillUnmount() {
        console.log("Unmounted")
        clearInterval(this.timerId);
    }

    handleIncrement = () => {
        const updateCounter = this.state.counter + 1;
        this.setState({
            counter: updateCounter
        });
    }

    render() {
        return(
            <div>
                <h1>Class Component</h1>
                <h2>Counter: {this.state.counter}</h2>
                {
                    this.state.showSomething ?
                    <h3>Welcome</h3> :
                    <h3>Bye</h3>
                }
                <button onClick={this.handleIncrement}>Click</button>
            </div>
        );
    }
}

export default ClassComponent;