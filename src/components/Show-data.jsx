import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import ProgressDetailsBox from './Progress-details'
// import RightDownArrow from "/right-down-arrow.png"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const ShowData = () => {
    return (
        <div className='flex gap-x-10 ms-[148px] mt-5 h-[10px]'>
            <div className='flex flex-col gap-y-2 w-[20 %] -mt-[100px]'>
                <Tooltip>
                    <TooltipTrigger className='flex items-center'>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <p className={`bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]`}>B2C</p>
                            </DropdownMenuTrigger>
                            <div>
                                <DropdownMenuContent className={`flex flex-col ms-[330px] -mt-[45px]`}>
                                    <DropdownMenuSeparator />
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <DropdownMenuItem>
                                                <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Online</p>
                                            </DropdownMenuItem>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <ProgressDetailsBox />
                                        </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                        <TooltipTrigger>
                                            <DropdownMenuItem>
                                                <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Interview</p>
                                            </DropdownMenuItem>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <ProgressDetailsBox />
                                        </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                        <TooltipTrigger>
                                            <DropdownMenuItem>
                                                <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Public Data</p>
                                            </DropdownMenuItem>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <ProgressDetailsBox />
                                        </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                        <TooltipTrigger>
                                            <DropdownMenuItem>
                                                <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Health</p>
                                            </DropdownMenuItem>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <ProgressDetailsBox />
                                        </TooltipContent>
                                    </Tooltip>
                                </DropdownMenuContent>
                            </div>
                        </DropdownMenu>
                    </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger className='flex items-center w-[300px]'>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <p className={`bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]`}>B2C</p>
                            </DropdownMenuTrigger>
                            <div>
                                <DropdownMenuContent className={`flex flex-col gap-y-2 ms-[330px] -mt-[45px]`}>
                                    <DropdownMenuSeparator />
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <DropdownMenuItem>
                                                <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Online</p>
                                            </DropdownMenuItem>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <ProgressDetailsBox />
                                        </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                        <TooltipTrigger>
                                            <DropdownMenuItem>
                                                <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Interview</p>
                                            </DropdownMenuItem>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <ProgressDetailsBox />
                                        </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                        <TooltipTrigger>
                                            <DropdownMenuItem>
                                                <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Public Data</p>
                                            </DropdownMenuItem>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <ProgressDetailsBox />
                                        </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                        <TooltipTrigger>
                                            <DropdownMenuItem>
                                                <p className='bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Health</p>
                                            </DropdownMenuItem>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <ProgressDetailsBox />
                                        </TooltipContent>
                                    </Tooltip>
                                </DropdownMenuContent>
                            </div>
                        </DropdownMenu>
                    </TooltipTrigger>
                </Tooltip>
            </div>






        </div>
    )
}

export default ShowData