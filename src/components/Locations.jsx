import { BsFillStarFill } from "react-icons/bs";

function Location({ data }) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3'>
      {data.map((el, i) => {
        return (
          <div key={i++} className=' shadow-md py-2 px-[15%] my-3 mx-3'>
            <img
              className=' object-cover w-[100%] h-[300px] rounded-[24px]'
              src={el.photo}
              alt='img-photo'
            />
            <div className='flex justify-start my-3'>
              <div
                className={
                  el.superHost
                    ? "font-[Monserrat] text-md my-3 px-2 border-solid border-2 border-gray-300 rounded-md"
                    : ""
                }
              >
                {el.superHost ? "SUPERHOST" : ""}
              </div>
              <div className={el.superHost ? "flex mx-3 my-3" : "flex"}>
                <div>
                  <p className=' text-slate-500 mx-2'>{el.type}</p>
                </div>
                <div>
                  <p className=' text-slate-500 mx-2'>
                    {el.beds == null
                      ? ""
                      : el.beds == 1
                      ? el.beds + " bed"
                      : el.beds + " beds"}
                  </p>
                </div>
                <div>
                  <div className=' text-red-700 flex'>
                    <BsFillStarFill size={20} />
                    <p className=' text-slate-800'>{el.rating}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className='font-[Monserrat] text-2xl'>{el.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Location;
