import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip.jsx'
import ProgressDetailsBox from "./progress-details"

const B2CItems = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <p className={`bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]`}>B2C</p>
                </DropdownMenuTrigger>
                <div>
                    <DropdownMenuContent className={`flex flex-col ms-[340px] -mt-[45px]`}>
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
        </>
    )
}

export default B2CItems