import React, { useEffect, useState } from 'react';
import ChildTask from './ChildTask';
const Tasks = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('https://hudson-poutine-36996.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))


    }, [])


    return (

        <div className='text-center font-bold'>

          
          {
            services.map(service => <ChildTask service={service}></ChildTask>)
          }

        </div>
    );
};

export default Tasks;