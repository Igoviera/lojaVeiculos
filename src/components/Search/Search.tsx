import styles from './search.module.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Search = () => {

  const { busca,setBusca }:any = useContext(CartContext)
  console.log(busca)


  return (
    <>
    <div className={styles.containerBusca}>
      <div className={styles.search}>
        <a><img className={styles.iconBusca} src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/></a>
        <input className={styles.busca} type="text"  onChange={(e) => setBusca(e.target.value) } placeholder='Buscar'/>
      </div>
      <div>
      <Link to={'/filtro'}>
          <img className={styles.filtro} src="https://img.icons8.com/material-outlined/48/000000/search-in-list.png"/>
      </Link>
      
      </div>
    </div>

    
    </>

    
  );
};

export default Search;
