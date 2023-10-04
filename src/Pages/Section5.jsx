import image1 from '../assets/image5.jpg'
import image2 from '../assets/image6.jpg'
import image3 from '../assets/image7.jpg'
import image4 from '../assets/image8.jpg'
import {FaArrowRight,FaLessThan,FaGreaterThan} from 'react-icons/fa'

const blogData=[
{
    id:1,
    title:"UI/UX Design Tips",
    content:"Promotion World has once placed PageTraffic Among the top",
    date:"19 Feb,2022/By Admin",
    image:image1
},
{
    id:2,
    title:"Improve your UX/UI",
    content:"Promotion World has once placed PageTraffic Among the top",
    date:"09 Apr,2022/By Admin",
    image:image2
},{
    id:3,
    title:"25 Design Tips",
    content:"Promotion World has once placed PageTraffic Among the top",
    date:"25 Jun,2022/By Admin",
    image:image3

},{
    id:4,
    title:"PageTraffic Ranks",
    content:"Promotion World has once placed PageTraffic Among the top",
    date:"13 Nov,2022/By Admin",
    image:image4

}

]

function BlogCard() {
    return (
<div className='flex flex-col py-[50px]  justify-center items-center'>
      <h1 className='md:text-[45px] font-bold tracking-[1.125px] text-[#011627] leading-normal'>See our blog post</h1>
     <br></br>
     <span className='flex justify-end gap-2 w-[100%] px-4'>
        <button className='border-2 p-2 md:rounded-[6px] rounded-md bg-[#FFF3F5] border-[#FFF3F5] shadow-lg'><FaLessThan className='text-[#E71D36]'/></button>
<button className='border-2 p-2 md:rounded-[6px] rounded-md bg-[#E71D36] border-[#E71D36] text-white shadow-lg'><FaGreaterThan/></button>
</span>

      <div className="grid grid-cols-2 py-6 gap-8">

        
        {blogData.map((content) => (
          <div key={content.id} className="flex flex-row items-center gap-8  md:w-[559px] md:h-[209px] rounded-[23px] bg-[#F8FFFE]">
           <div>
              <img src={content.image} alt={content.title} className="md:w-[300px] md:h-[199px] rounded-[12px]" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className='text-[#011627] text-[12px] font-normal'>{content.date}</h3>
              <h1 className='text-[#011627] md:text-[26px] font-semibold leading-normal'>{content.title}</h1>
              <p className='text-[#011627] text-[18px] font-nomral tracking-[0.36px]'>{content.content}</p>
              <a href='' className="text-[#2EC4B6] inline-flex items-center gap-2 md:text-[18px] tracking-[0.36px]">
               
                Read more
                <FaArrowRight/>
                </a>
            </div>
           
          </div>
        ))}
      </div>
      </div>);
  }
  

const Section5 = () => {
    console.log(blogData)
    return ( 
        <div>
<BlogCard/>
        </div>
     );
}
 
export default Section5;