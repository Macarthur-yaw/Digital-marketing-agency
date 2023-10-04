import {FaFacebook,FaTwitter,FaLinkedin,FaYoutube} from 'react-icons/fa'
import footerPic1 from '../assets/footerpic1.jpg';
import footerPic2 from '../assets/footerpic2.jpg'


const Footer = () => {
   
    return (  
<div className=' flex flex-col gap-2 bg-gradient-to-r from-[#FF8897] via-[#94FFF5] to-[#FFD8A3]'>
<div className='flex flex-row justify-around  items-center  '>
       
       <div id="section1" className='flex flex-col gap-[25px]'>

<h1 className='md:w-[205px] md:h-[73px] text-[#E71D36] md:text-[65px] font-bold leading-normal'>DeMo.</h1>

<h3 className='md:tex-[18px] text-[#011627] font-normal tracking-[0.36px] leading-[35.5px]'>
<p>FindBestSEO has ranked PageTraffic </p>among the top 10 SEO companies for
  <br/>
   2020.
</h3>

<span className='flex flex-row gap-[63.1px]'>
    <FaFacebook className='md:w-[44px] md:h-[44px] text-[#2EC4B6]'/>
    <FaLinkedin className='md:w-[44px] md:h-[44px] text-[#2EC4B6]'/>
    <FaTwitter className='md:w-[44px] md:h-[44px] text-[#2EC4B6]'/>
    <FaYoutube className='md:w-[44px] md:h-[44px] text-[#2EC4B6]'/>
</span>
     </div>
       
<div id='section2' className='flex flex-col gap-[25px]' >
<h1 className='text-[#2EC4B6] text-[24px] font-semibold tracking-[0.48px]'>
    COMPANY
</h1>
<ul className='text-[#2632338] text-[18px] font-normal tracking-[0.36px] flex flex-col'>
    <li>About</li>
    <li>Services </li>
    <li>Press</li>
    <li>Resources</li>
    <li>Blog</li>

</ul>

</div>

<div id='section3' className='flex flex-col gap-[25px] py-[50px]'>
<h1 className='text-[#2EC4B6] md:text-[24px] font-semibold tracking-[0.48px]'>
    LATEST NEWS
</h1>
<div className='flex flex-row gap-2'>
<div>
    <img src={footerPic1} className='md:w-[100px] md:h-[100px] rounded-[7px]'/>

</div>
<div>
            <h1 className='text-[#2EC4B6] md:text-[18px] font-semibold'>
                Per Click Management
            </h1>

            <h3 className='text-[#011627] md:text-[12px] font-normal'>
                PageTraffic is a premier Search
                <br/>
                 Engine Marketing (SEM)
            </h3>

            <h3 className='text-[#E71D36] md:text-[10px] font-normal tracking-[0.55px]'>
                15 April 2022
            </h3>

        </div>


        </div>

        <div className='flex flex-row gap-2'>
<div>
    <img src={footerPic2} className='md:w-[100px] md:h-[100px] rounded-[7px]'/>
</div>
<div>
            <h1 className='text-[#2EC4B6] md:text-[18px] font-semibold'>
                Per Click Management
            </h1>

            <h3 className='text-[#011627] md:text-[12px] font-normal'>
                PageTraffic is a premier Search 
                <br/>
                Engine Marketing (SEM)
            </h3>

            <h3 className='text-[#E71D36] md:text-[10px] font-normal tracking-[0.55px]'>
                15 April 2022
            </h3>

        </div>


</div>
</div>


        </div>
        <div id='footer' className='py-2 flex flex-row justify-around'>
        <h1 className='text-[#011627] text-[18px] font-normal tracking-[0.36px] '>&copy; 2021 DeMO Insurance Inc. Patent Pending. All Rights Reserved. 
        </h1>

        <span>
        <a href='' className='text-[18px] font-normal tracking-[0.36px]  text-[#2EC4B6]'>Privacy</a> | <a href='' className='text-[18px] font-normal tracking-[0.36px]  text-[#011627]'>Terms of Service</a>
        </span>
        </div>
        </div>
    );
}
 
export default Footer;
 
 