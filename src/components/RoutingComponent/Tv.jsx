import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getSampleData } from '../../util';

const Television = () => {

    const params = useParams();
    const { name, type } = params;
    console.log(name);

    const [searchParams, setSearchParams] = useSearchParams();
    console.log('Search Parameters', searchParams.get('screen'))



    const televisionData = getSampleData(name, type, searchParams.get('screen'));

    return (
        <div>
            <h1>Television</h1>

            <h3>Name: {televisionData.name}</h3>
            <h3>Description: {televisionData.description}</h3>
            <h3>Warranty: {televisionData.warranty}</h3>
            <h3>Type: {televisionData.type}</h3>
            <h3>{televisionData.screen ? `Screen: ${televisionData.screen}` : null}</h3>
        </div>
    )
}

export default Television;