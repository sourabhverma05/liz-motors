import React from 'react'
import { Progress } from './ui/progress'

const ProgressDetailsBox = () => {
    return (
        <>
            <div className='bg-[#f6f2ee] flex flex-col w-[500px] h-[20%] text-start px-[50px] py-[40px] gap-[10px] m-0'>
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-evenly gap-9 text-sm mb-[-13px]'>
                            <span>0</span><span>5000</span><span>10000</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span>Positive</span>
                            <Progress value={100} />
                            <small>13451</small>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span>Negative</span>
                            <Progress value={90} />
                            <small>11839</small>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span>Comments</span>
                            <Progress value={80} />
                            <small>10463</small>
                        </div>
                    </div>
                </div>

                <div className='font-normal text-lg py-1'>
                    <p>Total reviews</p>
                    <p>Positive reviews</p>
                    <p>Nagative reviews</p>
                    <p>Comments</p>
                </div>
            </div>
        </>
    )
}

export default ProgressDetailsBox