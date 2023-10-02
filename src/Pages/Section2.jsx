import forbes from '../assets/forbe-logo 1.svg'
import netflix from '../assets/pngegg 1.svg'
import amazon from '../assets/pngegg (1) 1.svg'
import seij from '../assets/sej-logo 1.svg'
import entrepeneur from '../assets/entrepreneur-logo 1.svg'
import Card from '../Components/Card'
import image1 from '../assets/search_3004001.png'
import image2 from '../assets/images-removebg-preview.png'
import Disc from '../assets/disc.svg'
const Section2 = () => {
    return (  
        <div>

            <div>
<h1 className="md:text-[45px]  text-center text-[#0011627] font-bold leading-normal ">
    Our Work featured on
</h1>

<div id="imageLogos" className='flex flex-row justify-center md:gap-20 border-2 border-white w-fit  rounded-[10px] shadow-lg p-2'>
<img src={forbes}/>
<img src={netflix}/>
<img src={amazon}/>
<img src={seij}/>
<img src={entrepeneur}/>
</div>
            </div>


            <div className='flex flex-row py-10  justify-center'>
                <div className='flex flex-col gap-6 '>
<h1 className='text-[#011627] text-[30px] font-semibold leading-normal'>
HOW PAGETRAFFIC CREATES 
<br/>
HYPER BUSINESS GROWTH
</h1>

<h3 className='text-[#011627] text-[18px] font-semibold leading-normal'>
PageTraffic offers top-notch SEO and digital
<br/>
 marketing solutions to help you rank high on search results, connect with.

</h3>

<ul className="list-none p-0">
  <li className="flex items-center text-[#011627] text-[18px] font-normal leading-[30px]">
    <img src={Disc} alt="Bullet Point" className="mr-2" />
    PageTraffic offers top-notch SEO and digital
  </li>
  
  <li className="flex items-center text-[#011627] text-[18px] font-normal leading-[30px]">
    <img src={Disc} alt="Bullet Point" className="mr-2" />
    PageTraffic offers top-notch SEO.
  </li>
  
  <li className="flex items-center text-[#011627] text-[18px] font-normal leading-[30px]">
    <img src={Disc} alt="Bullet Point" className="mr-2" />
    PageTraffic offers top-notch.
  </li>
  
  <li className="flex items-center text-[#011627] text-[18px] font-normal leading-[30px]">
    <img src={Disc} alt="Bullet Point" className="mr-2" />
    PageTraffic offers top-notch SEO and.
  </li>
</ul>

<div className='inline-flex gap-4'>
    <div>
<h1 className='text-[30px] font-semibold text-[#FF1D03]'>1.9K</h1>
<h3 className='text-[18px] text-[#011627] font-normal'>Total Audience</h3>
    </div>

    <div >
<h1 className='text-[30px] font-semibold text-[#2EC4B6]'>
    5.7k
</h1>
<h3 className='text-[18px] text-[#011627] font-normal'>
    Complete Project
</h3>
    </div>

   
</div>
<button className='md:w-[173px] md:h-[52px] md:rounded-[10px] bg-[#2EC4B6] shadow-lg text-white'>
        Explore more
    </button>
            </div>
                <div className='flex flex-row  gap-4'>
                {/* ../assets/search 1.png */}
                    <div className='flex flex-col gap-2'>
                    <Card  imgPath={image2} textColor="#2EC4B6"/>
<Card imgPath={image2} textColor="#2EC4B6"/>
                    </div><div className='py-10 flex flex-col gap-2'>
<Card imgPath={image1} textColor="#2EC4B6"/>
<Card imgPath={image2} textColor="#2EC4B6"/>

</div>


                </div>
            </div>
        </div>
    );
}
 
export default Section2;
