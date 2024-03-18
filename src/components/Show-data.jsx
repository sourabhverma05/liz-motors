import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import ProgressDetailsBox from './Progress-details'
import RightDownArrow from "/public/right-down-arrow.png"

const ShowData = () => {
    return (
        <div className='flex gap-x-10 ms-[148px] mt-5 h-[10px]'>
            <div className='flex flex-col gap-y-2 w-[20 %] -mt-[100px]'>
                <Tooltip>
                    <TooltipTrigger className='flex items-center w-[300px]'>
                        <p className={`bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]`}>B2C</p>
                        <div className='flex items-center'>
                            <div className='flex justify-center'>
                                <img src={RightDownArrow} className={`w-[150px]`} width={800} alt="#" />
                            </div>
                        </div>
                    </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <p className={`bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]`}>B2C</p>
                    </TooltipTrigger>
                </Tooltip>
            </div>


            <div className={`flex flex-col gap-y-2 w-[13%] -ms-[100px] -mt-[65px]`}>
                <Tooltip>
                    <TooltipTrigger>
                        <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Online</p>
                    </TooltipTrigger>
                    <TooltipContent>
                        <ProgressDetailsBox />
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Interview</p>
                    </TooltipTrigger>
                    <TooltipContent>
                        <ProgressDetailsBox />
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Public Data</p>
                    </TooltipTrigger>
                    <TooltipContent>
                        <ProgressDetailsBox />
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Health</p>
                    </TooltipTrigger>
                    <TooltipContent>
                        <ProgressDetailsBox />
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}

export default ShowData