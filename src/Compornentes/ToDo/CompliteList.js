import React, { useEffect, useState } from 'react';

const CompliteList = () => {
    const [complete, setComplete] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/complete`)
            .then(res => res.json())
            .then(data => setComplete(data))
    }, [])


    return (
        <div className='text-center font-bold my-10 p-2 text-secondary'>
            {
                complete.map(x => <h1><input type="checkbox" checked="checked" class="checkbox checkbox-xs" />  {x.todoList}</h1>)
            }
        </div>
    );
};

export default CompliteList;