import img8 from '../assets/image 8.png'
import img9 from '../assets/image 9.png'
import img10 from '../assets/image 10.png'
import img11 from '../assets/image 11.png'
import img12 from '../assets/image 12.png'
import img13 from '../assets/image 13.png'


const Section4 = () => {
    return ( 

        <div>

            <div>
                <h1 className="text-center">Our Portfolio</h1>

                <ul className="flex flex-row justify-center gap-2">
                    <li>
                        All
                    </li>
                    <li>
                        Website Design
                    </li>

                    <li>
                        Mobile App
                    </li>

                    <li>Design branding</li>

                    <li>UI/UX</li>
                </ul>
            </div>

            <div className='flex flex-col justify-center items-center w-fit mx-auto gap-4'>

                <div className='flex flex-row gap-2'>
<img src={img8}/>
<img src={img9}/>
<img src={img10}/>


                </div>


                <div className='flex flex-row gap-2'>

<img src={img11}/>
<img src={img12}/>
<img src={img13}/>
                </div>


                <button className='border-2 w-fit'>View more</button>
            </div>
        </div>
     );
}
 
export default Section4;