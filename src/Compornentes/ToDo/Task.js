import React from 'react';
import { useForm } from 'react-hook-form';

const Task = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-5xl p-10'>Add Your Favorite</h1>
            </div>

            <div className='text-center w-50'>

                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">

                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <form className='border' onSubmit={handleSubmit(onSubmit)}>
                                        <input className='p-3' placeholder='add your task' {...register("firstName")} />

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