import React from 'react';
import B2CItems from './b2c-items'


const ShowData = () => {
    return (
        <>
            <div className='flex flex-col gap-y-2 w-[20%] -mt-[80px] ms-[148px]'>
                <B2CItems />
                <B2CItems />
            </div>
        </>
    )
}

export default ShowData