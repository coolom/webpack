import '../styles/index.scss';
import { Recipes } from './Recipes';
import scenery from '../images/Sample-png-image-100kb.png';

export const App = () => {
  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          <h1> Hi React</h1>
        </section>
      </main>
      <img src={scenery} alt='image' width='250px' />
      <Recipes />
    </>
  );
};

export default App;
