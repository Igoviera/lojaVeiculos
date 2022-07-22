import styles from "./Card.module.css";
import { Link } from "react-router-dom"
import { useContext} from "react";
import { CartContext } from "../../contexts/CartContext";
import { useState } from 'react'

function Card({nome,_id,marca,cor,ano,placa,valor,desc,image,}:any){

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
            <img className={styles.icon} src="https://img.icons8.com/ios-glyphs/30/ffffff/edit--v1.png"/>
          </Link>
          
          <img className={styles.icon} onClick={() => deletarVeiculo(_id)} src="https://img.icons8.com/ios-glyphs/60/ffffff/delete.png"/>
          
          <div onClick={likee} className={styles.icon}>{done === true ? 
          <img className={styles.icon} src="https://img.icons8.com/fluency/48/ffffff/pixel-heart.png"/>: 
          <img className={styles.icon} src="https://img.icons8.com/ios-filled/50/ffffff/pixel-heart.png"></img>
            }</div>
          </div>

        <div>
          <img className={styles.imgCarro} alt={nome} src={`https://app-loja-api.herokuapp.com/${image}`}/>
          <p className={styles.marca}>{marca} {nome}</p>
          <p><span className={styles.desc}>Preço:</span> {valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} </p>
          <p><span className={styles.desc}>Descrição:</span> Descrição: {desc}</p>
          <p><span className={styles.desc}>Ano:</span> Ano: {ano}</p>
          <p><span className={styles.desc}>Cor:</span> Cor: {cor}</p>
          <p><span className={styles.desc}>Placa:</span> Placa: {placa}</p>
        </div>
      </div>
    </div>

  );
};

export default Card;
