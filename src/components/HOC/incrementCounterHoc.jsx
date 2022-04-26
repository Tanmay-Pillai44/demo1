import React from 'react';

const IncrementCounterHoc = (Comp) => {

    class AddedCounterFunc extends React.Component {
        constructor(props) {
            super(props);
            this.state ={
                counter: 0
            }
        }

        handleChange = () => {
            this.setState({
                counter: this.state.counter + 1
            })
        }

        render() {
            return (
                <Comp name="Tanmay" counter={this.state.counter} handleChange={this.handleChange}/>
            )
        }
    }
    return AddedCounterFunc;
}

export default IncrementCounterHoc;