
const Card = (props) => {
    return (
        <div className="border-[1px] md:w-[270px] md:h-[333px] bg-white shadow-lg p-2 rounded-[25px]  border-black  ">
<div className="">

<img src={props.imgPath} className=" w-1/5 border-2 p-2 rounded-[13px]" alt="a description" />

</div>
<h1 className="text-[#011627] text-[26px] font-semibold leading-normal">
    I want leads
</h1>

<h3 className="text-[18px] font-normal leading-[30px] text-[#011627]">
Looking to get higher ROI by improving website.
</h3>

<a href="" className={`text-${props.textColor}`}>
 View more 
</a>
        </div>
      );
}
 
export default Card;
