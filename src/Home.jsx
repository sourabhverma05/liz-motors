import React, { useState } from 'react'
import {
    TooltipProvider,
} from "@/components/ui/tooltip"
import ShowData from './components/Show-data';
import ThreeArrows from './components/Three-arrow';
import GroupImage from "/arrows-group.png";
import TreeArrowGroup from "/three-arrows-group.png";

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
        <div className='w-full my-8'>
            <TooltipProvider>
                <div className='flex'>
                    <img src={GroupImage} className='h-[500px] my-auto' alt="#" />
                    <div className="flex flex-col gap-[50px] justify-center">
                        <div className='flex items-center w-[300px]'>
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
                    <div className='flex flex-col gap-y-[15px]'>
                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={() => setExternal(!external) ? setExternal(external) : setExternal(!external)}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                External
                            </button>
                            {external && <div className={`${external} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={() => setInternal(!internal) ? internal : setInternal(!internal)}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Internal
                            </button>
                            {internal && <div className={`${internal} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className="relative">
                            <div className='flex items-center w-[300px] hover:w-[300px]'>
                                <button onClick={() => setPRD(!PRD) ? setPRD(PRD) : setPRD(!PRD)}
                                    className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                    PRD
                                </button>
                                {PRD && <div className={`${PRD} absolute left-[145px] top-[-10px]`}>
                                    <ThreeArrows />
                                    <ShowData />
                                </div>}
                            </div>
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={(e) => setSpecs(!specs) ? setSpecs(specs) : setSpecs(!specs)}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Specs
                            </button>
                            {specs && <div className={`${specs} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={() => setHardware(!hardware) ? setHardware(hardware) : setHardware(!hardware)}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Hardware
                            </button>
                            {hardware && <div className={`${hardware} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={() => setSoftware(!software) ? setSoftware(software) : setSoftware(!software)}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Software
                            </button>
                            {software && <div className={`${software} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={(e) => setMaterial(!material) ? setMaterial(material) : setMaterial(!material)}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Material
                            </button>
                            {material && <div className={`${material} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={() => setProduction(!production) ? setProduction(production) : setProduction(!production)}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Production
                            </button>
                            {production && <div className={`${production} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={() => setOnline(!online) ? setOnline(online) : setOnline(!online)}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Online
                            </button>
                            {online && <div className={`${online} absolute left-[145px] top-[-10px]`}>
                                <ThreeArrows />
                                <ShowData />
                            </div>}
                        </div>

                        <div className='flex items-center w-[300px] hover:w-[300px] relative'>
                            <button onClick={(e) => setDealearship(!dealearship) ? setDealearship(dealearship) : setDealearship(!dealearship)}
                                className='focus:text-white bg-[#3552aa] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                Dealearship
                            </button>
                            {dealearship && <div className={`${dealearship} absolute left-[145px] bottom-[-40px]`}>
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