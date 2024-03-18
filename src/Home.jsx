import React, { useState } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import ShowData from './components/Show-data';
import ThreeArrows from './components/Three-arrow';

const HomePage = () => {
    const [hide, setHide] = useState(`hidden`);


    return (
        <div className='w-full my-8'>
            <TooltipProvider>
                <div className='flex'>
                    <img src="public/arrows-group.png" className='h-[740px] my-auto' alt="#" />
                    <div className="flex flex-col gap-y-[60px] justify-around">

                        <div className='flex items-center w-[300px]'>
                            <p className='bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Research</p>
                            <div className='flex items-center'>
                                <img src="public/three-arrows-group.png" className='w-[200px] h-[90px]' alt="#" />
                            </div>
                        </div>

                        <div className='flex items-center w-[300px]'>
                            <p className='bg-[#82B3E8] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Planning</p>
                            <div className='flex items-center'>
                                <img src="public/three-arrows-group.png" className='w-[200px] h-[90px]' alt="#" />
                            </div>
                        </div>

                        <div className='flex items-center w-[300px]'>
                            <p className='bg-[#E96343] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Desiging</p>
                            <div className='flex items-center'>
                                <img src="public/three-arrows-group.png" className='w-[200px] h-[90px]' alt="#" />
                            </div>
                        </div>

                        <div className='flex items-center w-[300px]'>
                            <p className='bg-[#E8919D] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Manufacturing</p>
                            <div className='flex items-center'>
                                <img src="public/three-arrows-group.png" className='w-[200px] h-[90px]' alt="#" />
                            </div>
                        </div>

                        <div className='flex items-center w-[300px]'>
                            <p className='bg-[#A684EB] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Salse/Marketing</p>
                            <div className='flex items-center'>
                                <img src="public/three-arrows-group.png" className='w-[200px] h-[90px]' alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[40px]'>
                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={(e) => {
                                e.target.style.display = `${setHide(!hide) ? setHide(hide) : setHide(!hide)}`
                            }}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                External
                            </button>
                            {hide && <div className={`${hide} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={(e) => {
                                e.target.style.display = `${setHide(!hide) ? setHide(hide) : setHide(!hide)}`
                            }}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                    Internal
                                    </button>
                            {hide && <div className={`${hide} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className="relative">
                            <div className='flex items-center w-[300px] hover:w-[300px]'>
                                <button onClick={(e) => {
                                    e.target.style.display = `${setHide(!hide) ? setHide(hide) : setHide(!hide)}`
                                }}
                                    className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                        PRD
                                        </button>
                                {hide && <div className={`${hide} absolute left-[145px] top-[-10px]`}>
                                    <ThreeArrows />
                                    <ShowData />
                                </div>}
                            </div>
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={(e) => {
                                e.target.style.display = `${setHide(!hide) ? setHide(hide) : setHide(!hide)}`
                            }}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                    Specs
                                </button>
                            {hide && <div className={`${hide} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={(e) => {
                                e.target.style.display = `${setHide(!hide) ? setHide(hide) : setHide(!hide)}`
                            }}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                    Hardware
                                </button>
                            {hide && <div className={`${hide} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={(e) => {
                                e.target.style.display = `${setHide(!hide) ? setHide(hide) : setHide(!hide)}`
                            }}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                    Software
                                </button>
                            {hide && <div className={`${hide} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>


                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={(e) => {
                                e.target.style.display = `${setHide(!hide) ? setHide(hide) : ""}`
                            }}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                    Material
                                </button>
                            {hide && <div className={`${hide} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>


                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={(e) => {
                                e.target.style.display = `${setHide(!hide) ? setHide(hide) : setHide(!hide)}`
                            }}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                    Production
                                </button>
                            {hide && <div className={`${hide} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={(e) => {
                                e.target.style.display = `${setHide(!hide) ? setHide(hide) : setHide(!hide)}`
                            }}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                    Online
                                </button>
                            {hide && <div className={`${hide} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px]'>
                            <button onClick={(e) => {
                                e.target.style.display = `${setHide(!hide) ? setHide(hide) : setHide(!hide)}`
                            }}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                    Dealearship
                                </button>
                            {hide && <div className={`${hide} absolute right-[158px] bottom-[-175px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                    </div>
                </div>
            </TooltipProvider >

        </div >
    )
}

export default HomePage