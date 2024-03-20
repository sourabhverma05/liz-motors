import React from 'react'
import { Progress } from '@/components/ui/progress'

const ProgressDetailsBox = () => {
    return (
        <>
            <div className='bg-[#f6f2ee] flex flex-col w-[500px] h-[20%] text-start px-[50px] py-[40px] gap-[10px] m-0'>
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-center gap-[90px] text-sm mb-[-13px]'>
                            <span>0</span><span>5000</span><span>10000</span>
                        </div>
                        <div className='flex gap-7 items-center'>
                            <span>Positive</span>
                            <div className="flex">
                                <Progress value={100} className="w-60" />
                                <small>13451</small>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <span>Negative</span>
                            <div className='flex'>
                                <Progress value={85} className="w-60" />
                                <small>11839</small>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span>Comments</span>
                            <div className="flex">
                                <Progress value={70} className="w-60" />
                                <small>10463</small>
                            </div>
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