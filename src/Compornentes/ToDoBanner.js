import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const ToDoBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" alt='todo img' />

                    <div>
                        <DayPicker

                            mode="single"
                            selected={date}
                            onSelect={setDate}

                        />
                    </div>

                </div>
            </div>
                <p className='mx-10 my-10 text-5xl'><span className='font-bold text-primary'>Selected Date : </span> {format(date, 'PP')}</p>
        </div>
    );
};

export default ToDoBanner;