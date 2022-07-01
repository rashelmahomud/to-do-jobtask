import React from 'react';
import CompliteList from './CompliteList';

const TodoService = () => {
    return (
        <div>
            <h1 className='text-primary font-bold text-center text-4xl p-10'>Your List</h1>
            <CompliteList></CompliteList>
        </div>
    );
};

export default TodoService;