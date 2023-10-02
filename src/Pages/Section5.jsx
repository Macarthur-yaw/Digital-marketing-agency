import image1 from '../assets/image5.jpg'
import image2 from '../assets/image6.jpg'
import image3 from '../assets/image7.jpg'
import image4 from '../assets/image8.jpg'

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
      <div className="grid grid-cols-2 ">
        {blogData.map((content) => (
          <div key={content.id} className="flex flex-col items-center mt-4">
            <div className="text-center">
              <h3>{content.date}</h3>
              <h1>{content.title}</h1>
              <p>{content.content}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2">Read more</button>
            </div>
            <div>
              <img src={content.image} alt={content.title} className="mt-4" />
            </div>
          </div>
        ))}
      </div>
    );
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