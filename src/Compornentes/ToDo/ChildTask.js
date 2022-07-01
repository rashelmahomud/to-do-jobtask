import React from 'react';

const ChildTask = ({ service }) => {

    const handelCheck = (e) => {
        const cheack = e.target.checked;
        if (cheack) {

            const {todoList} = service;
            const url = `http://localhost:5000/complete`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('khalo', data);
                    fetch(`http://localhost:5000/service/${service._id}`, {
                        method: 'DELETE',

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('hello', data);
                            if (data.deletedCount > 0) {
                                console.log("please try again more")
                               
                            }
                            else {
                                console.log("please try again ")
                            }
                        })
                });



        }

    }

    return (
        <div>

            <ul>
                <li className='p-2 text-2xl'>
                    <input onChange={(e) => handelCheck(e)} value={1} type="checkbox" />
                    <span className='m-3'>{service.todoList}<button class="btn btn-xs mx-2">Edit</button></span>
                </li>

            </ul>

        </div>
    );
};

export default ChildTask;