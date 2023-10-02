import sectionImage from '../assets/H1 1.png'
import playVideo from '../assets/Group 3.svg'
import imageBackground from '../assets/Rectangle 3 (1).png'
const Section1 = () => {
    return (  

        <div  className=' flex flex-row justify-around p-12'>
<div className='flex flex-col  gap-6'>
<div id="mainHeader">

  <h2 className='md:text-[65px]  font-bold text-[#011627] leading-[135%]'> BEST<span className='text-[#E71D36]'>&nbsp;MARKETING</span> COMPANY.</h2>  
</div>

<div id="subHeader" className='flex flex-col gap-8'>
<div className='text-[26px] leading-normal font-semibold text-[#011627]'>
#1 MARKETING Services Agency in USA and UK.
</div>
    
    <div className='text-[18px] leading-normal text-[#011627] font-normal'>
    If you're looking for the best SEO company for your business, PageTraffic is the perfect choice.

    </div>
</div>

<div id="subButton" className="flex flex-row items-center md:gap-4  ">

    <button className="bg-[#E71D36] text-white  md:w-[173px] md:h-[52px] md:rounded-[62px]">Get Start</button>
<div className='inline-flex items-center md:gap-2'>  <img src={playVideo} />  <a href="" className="text-[#E71D36] decoration-[#E71D36] underline md:text-[20px]  font-semibold">
    
   Watch Video

        </a>   </div>

</div>
</div>
<div id="homePicture">

<div className=''>
<img src={imageBackground} className=''/>
</div>
    <img src={sectionImage} alt='a man in a yellow shirt' className='md:absolute right-[5%]  top-[12.5vh] md:w-[32%]'/>
</div>
        </div>
     );
}
 
export default Section1;