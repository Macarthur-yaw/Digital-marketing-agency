import {FaFacebook,FaTwitter,FaLinkedin,FaYoutube} from 'react-icons/fa'
import footerPic1 from '../assets/footerpic1.jpg'
import footerPic2 from '../assets/footerpic2.jpg'


function footerCard (props){
    return (
        <div>
            <h1>
                Per Click Management
            </h1>

            <h3>
                PageTraffic is a premier Search Engine Marketing (SEM)
            </h3>

            <h3>
                15 April 2022
            </h3>

            <img src={props.imgPath}/>
        </div>
    )
}
const Footer = () => {
   
    return (  
        <div>
       
       <div id="section1" className='flex flex-col '>

<h1>DeMo.</h1>

<h3>
FindBestSEO has ranked PageTraffic 
  among the top 10 SEO companies for 2020.
</h3>

<span className='flex flex-row'>
    <FaFacebook/>
    <FaLinkedin/>
    <FaTwitter/>
    <FaYoutube/>
</span>
     </div>
       
<div id='section2' >
<h1>
    COMPANY
</h1>
<ul>
    <li>About</li>
    <li>Services </li>
    <li>Press</li>
    <li>Resources</li>
    <li>Blog</li>

</ul>

</div>

<div id='section3'>
<h1>
    LATEST NEWS
</h1>

<div>
    <footerCard imgPath={footerPic1}/>
</div>

<div>
    <footerCard imgPath={footerPic2}/>
</div>
</div>

        </div>
    );
}
 
export default Footer;