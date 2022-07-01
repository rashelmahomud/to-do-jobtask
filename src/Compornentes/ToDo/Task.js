import React from 'react';
import { useForm } from 'react-hook-form';
import Tasks from './Tasks';

const Task = () => {


    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/services`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                window.alert('successfully Review add');
                window.location.reload();

                // e.target.reset();
                console.log(data);

            })

    }

    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-5xl p-10'>Add Your Favorite</h1>
            </div>

            <Tasks></Tasks>

            <div className='text-center w-50'>

                <div class="hero bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">

                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <form className='border' onSubmit={handleSubmit(onSubmit)}>
                                        <input className='p-3' placeholder='add your task' {...register("todoList")} />

                                        {/* <input className='bg-secondary' type="submit" /> */}
                                    </form>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Task;