import { BsFillStarFill } from "react-icons/bs";

function Location({ data }) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3'>
      {data.map((el, i) => {
        return (
          <div className=' shadow-md py-2 px-[15%] my-3 mx-3'>
            <img
              className=' object-cover w-[100%] h-[300px] rounded-[24px]'
              src={el.photo}
              alt='img-photo'
            />
            <div
              className={
                el.superHost
                  ? "font-[Monserrat] text-md my-3 py-1 px-2 border-solid border-2 border-gray-300 rounded-md"
                  : ""
              }
            >
              {el.superHost ? "SUPERHOST" : ""}
            </div>
            <p className=' text-slate-500'>{el.type}</p>
            <p className=' text-slate-500'>{el.beds} beds</p>
            <div className=' text-red-700'>
              <BsFillStarFill size={20} />
              <p className=' text-slate-800'>{el.rating}</p>
            </div>
            <p className='font-[Monserrat] text-2xl'>{el.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Location;
