import React, { useState } from 'react'
import {
    TooltipProvider,
} from "@/components/ui/tooltip.jsx"
import GroupImage from "/arrows-group.png";
import TreeArrowGroup from "/three-arrows-group.png";
import { Button } from './components/ui/button.jsx';
import B2CItems from './components/b2c-items.jsx';
import ThreeArrow from "/three-arrows-group.png"

const HomePage = () => {
    const [external, setExternal] = useState(`hidden`);
    const [internal, setInternal] = useState(`hidden`);
    const [PRD, setPRD] = useState(`hidden`);
    const [specs, setSpecs] = useState(`hidden`);
    const [hardware, setHardware] = useState(`hidden`);
    const [software, setSoftware] = useState(`hidden`);
    const [material, setMaterial] = useState(`hidden`);
    const [production, setProduction] = useState(`hidden`);
    const [online, setOnline] = useState(`hidden`);
    const [dealearship, setDealearship] = useState(`hidden`);

    return (
        <div className='w-full my-5'>
            <TooltipProvider>
                <div className='flex'>
                    <img src={GroupImage} className='h-[500px] my-auto' alt="#" />
                    <div className="flex flex-col gap-[49px] justify-center text-center">
                        <div className={`flex items-center w-[300px]`}>
                            <p className='bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Research</p>
                            <div className='flex items-center'>
                                <img src={TreeArrowGroup} className='w-[200px] h-[70px]' alt="#" />
                            </div>
                        </div>

                        <div className='flex items-center w-[300px]'>
                            <p className='bg-[#82B3E8] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Planning</p>
                            <div className='flex items-center'>
                                <img src={TreeArrowGroup} className='w-[200px] h-[70px]' alt="#" />
                            </div>
                        </div>

                        <div className='flex items-center w-[300px]'>
                            <p className='bg-[#E96343] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Desiging</p>
                            <div className='flex items-center'>
                                <img src={TreeArrowGroup} className='w-[200px] h-[70px]' alt="#" />
                            </div>
                        </div>

                        <div className='flex items-center w-[300px]'>
                            <p className='bg-[#E8919D] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Manufacturing</p>
                            <div className='flex items-center'>
                                <img src={TreeArrowGroup} className='w-[200px] h-[70px]' alt="#" />
                            </div>
                        </div>

                        <div className='flex items-center w-[300px]'>
                            <p className='bg-[#A684EB] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>Salse/Marketing</p>
                            <div className='flex items-center'>
                                <img src={TreeArrowGroup} className='w-[200px] h-[70px]' alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[20px]'>
                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <Button onClick={() => setExternal(!external) ? setExternal(external) : setExternal(!external)}
                                className='text-black focus:text-white bg-[#3552aa] hover:bg-[#4768cd] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                External
                            </Button>
                            {external && <div className={`${external} absolute left-[145px] top-[-14px]`}>
                            <div className='flex items-center'>
            <img src={ThreeArrow} className={`w-[150px] h-[65px]`} alt="#" />
        </div>
                                <div className='flex flex-col gap-y-2 w-[20%] -mt-[80px] ms-[148px]'>
                                    <B2CItems />
                                    <B2CItems />
                                </div>
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <Button onClick={() => setInternal(!internal) ? internal : setInternal(!internal)}
                                className='text-black focus:text-white bg-[#3552aa] hover:bg-[#4768cd] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Internal
                            </Button>
                            {internal && <div className={`${internal} absolute left-[145px] top-[-13px]`}>
                            <div className='flex items-center'>
            <img src={ThreeArrow} className={`w-[150px] h-[65px]`} alt="#" />
        </div>
                                <div className='flex flex-col gap-y-2 w-[20%] -mt-[80px] ms-[148px]'>
                                    <B2CItems />
                                    <B2CItems />
                                </div>
                            </div>}
                        </div>

                        <div className="relative">
                            <div className='flex items-center w-[300px] hover:w-[300px]'>
                                <Button onClick={() => setPRD(!PRD) ? setPRD(PRD) : setPRD(!PRD)}
                                    className='text-black focus:text-white bg-[#82B3E8] hover:bg-[#91c1f6]  hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                    PRD
                                </Button>
                                {PRD && <div className={`${PRD} absolute left-[145px] top-[-12px]`}>
                                         <div className='flex items-center'>
            <img src={ThreeArrow} className={`w-[150px] h-[65px]`} alt="#" />
        </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] -mt-[80px] ms-[148px]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <Button onClick={(e) => setSpecs(!specs) ? setSpecs(specs) : setSpecs(!specs)}
                                className='text-black focus:text-white bg-[#82B3E8] hover:bg-[#91c1f6]  hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Specs
                            </Button>
                            {specs && <div className={`${specs} absolute left-[145px] top-[-12px]`}>
                                     <div className='flex items-center'>
            <img src={ThreeArrow} className={`w-[150px] h-[65px]`} alt="#" />
        </div>
                                <div className='flex flex-col gap-y-2 w-[20%] -mt-[80px] ms-[148px]'>
                                    <B2CItems />
                                    <B2CItems />
                                </div>
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <Button onClick={() => setHardware(!hardware) ? setHardware(hardware) : setHardware(!hardware)}
                                className='text-black focus:text-white bg-[#E96343] hover:bg-[#f3704f] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Hardware
                            </Button>
                            {hardware && <div className={`${hardware} absolute left-[145px] top-[-11px]`}>
                                     <div className='flex items-center'>
            <img src={ThreeArrow} className={`w-[150px] h-[65px]`} alt="#" />
        </div>
                                <div className='flex flex-col gap-y-2 w-[20%] -mt-[80px] ms-[148px]'>
                                    <B2CItems />
                                    <B2CItems />
                                </div>
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <Button onClick={() => setSoftware(!software) ? setSoftware(software) : setSoftware(!software)}
                                className='text-black focus:text-white bg-[#E96343] hover:bg-[#f3704f] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Software
                            </Button>
                            {software && <div className={`${software} absolute left-[145px] top-[-11px]`}>
                                     <div className='flex items-center'>
            <img src={ThreeArrow} className={`w-[150px] h-[65px]`} alt="#" />
        </div>
                                <div className='flex flex-col gap-y-2 w-[20%] -mt-[80px] ms-[148px]'>
                                    <B2CItems />
                                    <B2CItems />
                                </div>
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <Button onClick={(e) => setMaterial(!material) ? setMaterial(material) : setMaterial(!material)}
                                className='text-black focus:text-white bg-[#E8919D] hover:bg-[#eb9aa4] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Material
                            </Button>
                            {material && <div className={`${material} absolute left-[145px] top-[-11px]`}>
                                     <div className='flex items-center'>
            <img src={ThreeArrow} className={`w-[150px] h-[65px]`} alt="#" />
        </div>
                                <div className='flex flex-col gap-y-2 w-[20%] -mt-[80px] ms-[148px]'>
                                    <B2CItems />
                                    <B2CItems />
                                </div>
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <Button onClick={() => setProduction(!production) ? setProduction(production) : setProduction(!production)}
                                className='text-black focus:text-white bg-[#E8919D] hover:bg-[#eb9aa4] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Production
                            </Button>
                            {production && <div className={`${production} absolute left-[145px] top-[-11px]`}>
                                     <div className='flex items-center'>
            <img src={ThreeArrow} className={`w-[150px] h-[65px]`} alt="#" />
        </div>
                                <div className='flex flex-col gap-y-2 w-[20%] -mt-[80px] ms-[148px]'>
                                    <B2CItems />
                                    <B2CItems />
                                </div>
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <Button onClick={() => setOnline(!online) ? setOnline(online) : setOnline(!online)}
                                className='text-black focus:text-white bg-[#A684EB] hover:bg-[#ae8eed] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Online
                            </Button>
                            {online && <div className={`${online} absolute left-[145px] top-[-11px]`}>
                                     <div className='flex items-center'>
            <img src={ThreeArrow} className={`w-[150px] h-[65px]`} alt="#" />
        </div>
                                <div className='flex flex-col gap-y-2 w-[20%] -mt-[80px] ms-[148px]'>
                                    <B2CItems />
                                    <B2CItems />
                                </div>
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <Button onClick={(e) => setDealearship(!dealearship) ? setDealearship(dealearship) : setDealearship(!dealearship)}
                                className='text-black focus:text-white bg-[#A684EB] hover:bg-[#ae8eed] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Dealearship
                            </Button>
                            {dealearship && <div className={`${dealearship} absolute left-[145px] bottom-[52px]`}>
                                     <div className='flex items-center'>
            <img src={ThreeArrow} className={`w-[150px] h-[65px]`} alt="#" />
        </div>
                                <div className='flex flex-col gap-y-2 w-[20%] -mt-[80px] ms-[148px]'>
                                    <B2CItems />
                                    <B2CItems />
                                </div>
                            </div>}
                        </div>

                    </div>
                </div>
            </TooltipProvider >

        </div >
    )
}

export default HomePage