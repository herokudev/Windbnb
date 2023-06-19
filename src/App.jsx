import { useEffect, useState } from "react";
import Locations from "./components/Locations";
import Search from "./components/Search";
import Logo from "./img/logo.svg";
import { BiSearch } from "react-icons/bi";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  //console.log(data);

  const handleSearch = (event) => {
    console.log("My search term is --> " + event.target.value);
  };

  return (
    <>
      <div className='grid md:grid-cols-2 p-5 m-5'>
        <div>
          <img className=' h-5 w-25' src={Logo} alt='img-logo' />
        </div>
        <div className='flex p-3 m-3 w-65'>
          <div className=' w-25 border p-4'>
            <input type='text' name='' id='' placeholder='Location' />
          </div>
          <div className=' w-25 border p-4'>
            <input type='text' name='' id='' placeholder='Add guests' />
          </div>
          <div className='w-15 border p-4 text-red-700'>
            <BiSearch size={25} />
          </div>
        </div>
      </div>

      <div className=' hidden'>
        <Search onSearch={handleSearch} />
        <hr />
        <button onClick={() => setAdultCount((adultCount) => adultCount + 1)}>
          +
        </button>
        <button onClick={() => setAdultCount((adultCount) => adultCount - 1)}>
          -
        </button>
        <hr />
        <button onClick={() => setChildCount((childCount) => childCount + 1)}>
          +
        </button>
        <button onClick={() => setChildCount((childCount) => childCount - 1)}>
          -
        </button>
        <br />
        <span>Total Guests {adultCount + childCount}</span>
      </div>
      <Locations data={data} />
    </>
  );
}

export default App;
