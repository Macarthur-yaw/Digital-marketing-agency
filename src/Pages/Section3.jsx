import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import {FaLessThan,FaGreaterThan,FaStar} from 'react-icons/fa'
const Section3 = () => {
  const aboutClients = [
    {
      id: 1,
      name: "Jenny Wilson",
      imageUrl: image2,
      imageRating: "4.7",
    },
    {
      id: 2,
      name: "Jane Cooper",
      imageUrl: image3,
      imageRating: "5.0",
    },
    {
      id: 3,
      name: "Cody Fisher",
      imageUrl: image4,
      imageRating: "4.9",
    },
    {
      id:4,
      name:'Kevin Arthur',
      imageUrl:image2,
      imageRating:"4.2"
    }
  ];

  const getData = aboutClients.map((content) => (
    <div className=' w-fit md:w-[173px] md:h-[292px] md:rounded-[20px]' key={content.id}>
      <img src={content.imageUrl} alt={content.name} className='md:rounded-[20px] md:w-[173px] md:h-[292px]'/>
 <div className='absolute top-[296vh]  md:w-[173px] px-[14px] flex flex-row items-center   gap-4'>
  
    <h2 className='text-white inline-flex text-[12px] leading-normal font-normal'>{content.name}</h2>
  
  <h2 className='md:w-[37px] md:h-[15px] flex flex-row items-center justify-center text-white  bg-[#E71D36] rounded-[127px] text-[8px] text-center gap-[2px]'>  
  <FaStar/>
    {content.imageRating}
  </h2>
 </div>
    </div>
  ));

  return (
    <div className='flex flex-col justify-center md-gap-4'>
      
        <div className='inline-flex  justify-center justify-between px-[100px] items-center p-2'>
        <h2 className='text-[#E71D36] text-[26px] font-semibold'>CASE STUDY</h2>
        
        <span className='flex flex-row gap-2'>
        <button className='border-2 p-2 md:rounded-[6px] rounded-md bg-[#FFF3F5] border-[#FFF3F5] shadow-lg'><FaLessThan className='text-[#E71D36]'/></button>
<button className='border-2 p-2 md:rounded-[6px] rounded-md bg-[#E71D36] border-[#E71D36] text-white shadow-lg'><FaGreaterThan/></button>
</span>
        </div>
      <div className='flex flex-row justify-center gap-10'>
        <div className='flex flex-col'>
        <h1 className='text-[45px] font-bold text-[#011627] leading-normal'>OUR CLIENTS 
        <br/>
        GET RESULTS</h1>
        <h2 className='text-[#011627] text-[18px] font-normal leading-[35.5px]'>PageTraffic offers top-notch SEO
        <br/>
         and digital marketing solutions.</h2>
        </div>
      <div className='flex flex-row md:gap-10'>{getData}</div>
      </div>
    </div>
  );
};

export default Section3;
