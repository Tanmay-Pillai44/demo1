import React, {useState} from 'react'


const m1 = 'Password should be greater han 8 chars';
const m2 =  'Password length should be less thn 10 chars';
const m3 = 'Password looks good';
const m4 = 'Congrats! You have Submitted'


const Events = () => {

    const [myValue, setMyValue] = useState("");
    const [conditionalMsg, setConditionalMsg] = useState("");

    const handleChange = (e) => {
        // console.log('Handle Change', e.target.value);
        // setMyValue(e.target.value);
        const currentValue = e.target.value;
        setMyValue(currentValue); // trim
        msg(currentValue);
    }

    // const msg = () => {
    //     if (myValue.length <= 8) {
    //         return  <h5>Password should be greater han 8 chars</h5>
    //     } else if (myValue.length > 10) {
    //         return <h5>Password length should be less thn 10 chars</h5>
    //     } else {
    //         return <h5>Password looks good</h5>
    //     }
    // }

    const msg = (currentValue) => {
        if (currentValue.length <= 8) {
            setConditionalMsg(m1);
        } else if (currentValue.length > 10) {
            setConditionalMsg(m2);
        } else {
            setConditionalMsg(m3);
        }
    }

    const handleSubmit = () => {
        setMyValue("");
        setConditionalMsg(m4);
    }

    return (
        <div>
            <h1>Events</h1>
            <h2>onChange</h2>
            <h5>{conditionalMsg}</h5>
            {/* {msg()} */}
            {/* {myValue.length <= 8 ? (
                <h5>Password should be greater han 8 chars</h5>
            ) : (
                <h5>Password looks good</h5>
            )} */}


            {/* {myValue.length <= 10 ? (
                myValue.length <= 8 ? (
                    <h5>{m1}</h5>
                ): (
                    <h5>{m3}</h5>)
            ) : (
                <h5>{m2}</h5>
            )} */}
            <input
                onChange={handleChange}
                value={myValue}
                type='password'
            />
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Events