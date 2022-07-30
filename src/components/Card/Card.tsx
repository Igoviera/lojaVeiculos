import styles from "./Card.module.css";
import { Link } from "react-router-dom"
import { useContext} from "react";
import { CartContext } from "../../contexts/CartContext";
import { useState } from 'react'


function Card({nome,_id,marca,km,ano,placa,valor,desc,image,}:any){

let coracaoPreto = 'coracao1'
let coracaoVermelho = 'coracao2'

const [done, setDone] = useState(false)

const {deletarVeiculo}:any = useContext(CartContext);


  function likee(){
    setDone(prevState => !prevState)
  
  }

  return (
    <div className={styles.Card}>
      <div> 
        <div className={styles.icons}>
          <Link to={{pathname:`/editar/${_id}`}}>
            <img className={styles.icon} src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"/>
          </Link>
          
          <img className={styles.icon} onClick={() => deletarVeiculo(_id)} src="https://img.icons8.com/ios-glyphs/60/000000/delete.png"/>
          
          <div onClick={likee} className={styles.icon}>{done === true ? 
          <img className={styles.icon} src="https://img.icons8.com/windows/32/FF0000/filled-heart.png"/>: 
          <img className={styles.icon} src="https://img.icons8.com/windows/32/000000/filled-heart.png"></img>
            }</div>
          </div>

        <div className={styles.containerInformacaoes}>
          <div>
            <img className={styles.imgCarro} alt={nome} src={`https://app-loja-api.herokuapp.com/${image}`}/>
            <p className={styles.marca}>{marca} {nome}</p>
            <span className={styles.desc}>Descrição:{desc}</span> 
          </div>
          <div className={styles.Informacaoes}> 
            <span className={styles.valor}>{valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} </span>   
          </div>
          <div className={styles.anoKm}>
            <p className={styles.desc}>Ano: {ano}</p>
            <p className={styles.desc}>Km: {km}</p>
          </div>
          <button>Comprar</button>
        </div>
      </div>
    </div>

  );
};

export default Card;
