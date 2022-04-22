import { useState } from 'react';

const ControlledAndUncontrolledComponent = () => {

    const [controlledValue, setControlledValue] = useState('');

    const handleChange = (e) => {
        console.log("Handelling Change")
        setControlledValue(e.target.value)
    }

    return (
        <div>
            <div>
                <label htmlFor="conc">Controlled Component</label>
                <input value={controlledValue} onChange={handleChange}  id='conc'/>
            </div>
            <div>
                <label htmlFor="unConc">Controlled Component</label>
                <input value={controlledValue} onChange={handleChange} id='unConc'/>
            </div>
        </div>
    )
}

export default ControlledAndUncontrolledComponent;