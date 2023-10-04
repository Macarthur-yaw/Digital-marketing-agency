import img8 from '../assets/image 8.png'
import img9 from '../assets/image 9.png'
import img10 from '../assets/image 10.png'
import img11 from '../assets/image 11.png'
import img12 from '../assets/image 12.png'
import img13 from '../assets/image 13.png'


const Section4 = () => {
    return ( 

        <div className='py-[80px] flex flex-col gap-10'>

            <div>
                <h1 className="text-center text-[#011627] text-[45px] font-bold leading-normal tracking-[1.125px]">Our Portfolio</h1>

                <ul className="flex flex-row justify-center gap-4 text-[18px] font-normal leading-normal text-[#011627]">
                    <li className='hover:underline cursor-pointer underline-offset-4 hover:decoration-[#E71D36]'>
                        All
                    </li>
                    <li className='hover:underline cursor-pointer underline-offset-4  hover:decoration-[#E71D36]'>
                        Website Design
                    </li>

                    <li className='hover:underline cursor-pointer underline-offset-4  hover:decoration-[#E71D36]'>
                        Mobile App
                    </li>

                    <li className='hover:underline cursor-pointer underline-offset-4  hover:decoration-[#E71D36]'>Design branding</li>

                    <li className='hover:underline  cursor-pointer underline-offset-4 hover:decoration-[#E71D36]'>UI/UX</li>
                </ul>
            </div>

            <div className='flex flex-col justify-center items-center w-fit mx-auto gap-6'>

                <div className='flex flex-row gap-6'>
<img src={img8}/>
<img src={img9}/>
<img src={img10}/>


                </div>


                <div className='flex flex-row gap-6'>

<img src={img11}/>
<img src={img12}/>
<img src={img13}/>
                </div>


                <button className='border-2 border-[#2EC4B6] text-white md:text-[18px] font-semibold md:w-[173px] md:h-[52px] rounded-[10px] shadow-lg bg-[#2EC4B6]'>View more</button>
            </div>
        </div>
     );
}
 
export default Section4;