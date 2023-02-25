import { usePokemon } from '../hooks/usePokemon';

const HomePage = () => {
  usePokemon();

  return (
    <div className='mt-5'>
      <h1>Listado de Pokemons</h1>
      <hr />
      <table className='table'>
        <thead>
          <tr>
            <td>id</td>
            <td>Nombre</td>
            <td>Imagen</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export { HomePage };