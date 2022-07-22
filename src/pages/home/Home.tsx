import styles from './Home.module.css'
import Button from '../../components/Button/Button';
import Search from '../../components/Search/Search';
import Veiculo from '../../components/Veiculos/Veiculos';
import Header from '../../components/Header/Header';

const Home = () => {

  return (
    <div>
      <main className={styles.containerMain}>
        <Header/>
        <Search/>
        <Button/>
        <Veiculo/>
      </main> 
    </div>
  );
};

export default Home;
