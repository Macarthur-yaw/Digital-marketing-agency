import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import {FaLessThan,FaGreaterThan} from 'react-icons/fa'
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
  ];

  const getData = aboutClients.map((content) => (
    <div className='border-2 w-fit md:w-[173px] md:h-[292px] md:rounded-[20px]' key={content.id}>
      <img src={content.imageUrl} alt={content.name} className='md:rounded-[20px]'/>
      {content.name}
      {content.imageRating}
    </div>
  ));

  return (
    <div className='flex flex-col justify-center md-gap-4'>
      
        <div className='inline-flex border-2 justify-center justify-around items-center p-2'>
        <h2 className='text-[#E71D36] text-[26px] font-semibold'>CASE STUDY</h2>
        
        <span className='flex flex-row gap-2'>
        <button className='border-2 p-2 md:rounded-[6px] rounded-md bg-[#FFF3F5] border-[#FFF3F5] shadow-lg'><FaLessThan className='text-[#E71D36]'/></button>
<button className='border-2 p-2 md:rounded-[6px] rounded-md bg-[#E71D36] border-[#E71D36] text-white shadow-lg'><FaGreaterThan/></button>
</span>
        </div>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-col'>
        <h1 className='text-[45px] font-bold text-[#011627] leading-normal'>OUR CLIENTS 
        <br/>
        GET RESULTS</h1>
        <h2 className='text-[#011627] text-[18px] font-normal leading-[35.5px]'>PageTraffic offers top-notch SEO
        <br/>
         and digital marketing solutions.</h2>
        </div>
      <div className='flex flex-row md:gap-6'>{getData}</div>
      </div>
    </div>
  );
};

export default Section3;
