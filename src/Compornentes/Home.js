import React from 'react';
import TodoService from './ToDo/TodoService';
import ToDoBanner from './ToDoBanner';

const Home = () => {
    return (
        <div>
            <ToDoBanner></ToDoBanner>
            <TodoService></TodoService>
        </div>
    );
};

export default Home;