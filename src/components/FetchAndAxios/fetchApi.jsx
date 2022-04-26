import React, { useState } from 'react';
import axios from 'axios';

const FetchApiComponent = () => {

    const [myData, setMyData] = useState([]);

    const handleClick = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "GET", //POST, PATCH, DELETE
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            // const copyData = [...myData, ...jsonResponse];
            setMyData(jsonResponse);
        } catch (e) {
            console.error("Error",e);
        }
    }

    const handleClickWithAxios = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(response);
            // const jsonResponse = await response.json();
            // console.log(jsonResponse)
            setMyData(response.data);
        } catch (e) {
            console.error("Error",e);
        }
    }

    const addData = async () => {
        try {
            const myPostDataInformtion ={
                userId: 1,
                title: 'Post my Title',
                body: 'My Data Body'
            }
            const response = await axios({
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'POST',
                data: myPostDataInformtion
            });
            console.log(response);
        } catch (e) {
            console.error("Error",e);
        }
    }

    return (
        <div>
            <h2>Fetch Api</h2>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Id</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myData.map((data) => {
                            const { userId, id, body, title } = data;
                            return (
                                <tr key={id}>
                                    <td>{userId}</td>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={handleClick}>Fetch Api</button>
            <button onClick={handleClickWithAxios}>Fetch Data with Axios</button>
            <button onClick={addData}>Add My Data</button>
        </div>
    );
}

export default FetchApiComponent;