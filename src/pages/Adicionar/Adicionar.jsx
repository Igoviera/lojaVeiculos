import styles from './Adicionar.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


function Adicionar(){


    const { onSubmit,status } = useContext(CartContext)

    return(
        <div className={styles.containerGeral}>
            <div className={styles.voltar}>
                <Link to={'/'}>
                    <img src="https://img.icons8.com/sf-regular-filled/48/000000/circled-chevron-left.png"/>
                </Link> 
            </div>
            <div className={styles.containerAdicionar}>  

            <div className={styles.container}>
                    <div>
                        <h2 className={styles.titulo}>Adicionar veiculo</h2>
                    </div>
                    
                    <form className={styles.formContainer}  onSubmit={onSubmit} action="/some-endpoint" method='POST' encType='multipart/form-data'>
                        <div className={styles.form}>
                            <div>
                                <label>Nome:</label>
                                <input className={styles.input} type='text' nome='nome' id="nome" placeholder='Nome do veiculo'></input>
                            </div>
                            <div>
                                <label>Marca:</label>
                                <input className={styles.input} type='text' nome='marca' id="marca" placeholder='Marca do veiculo'></input>
                            </div>
                            <div>
                                <label>Km:</label>
                                <input className={styles.input} type='number' nome='km' id="km" placeholder='km rodado'></input> 
                            </div>
                            <div>
                                <label>Ano:</label>
                                <input className={styles.input} type='number' nome='ano' id="ano" placeholder='Ano do veiculo'></input>
                            </div>
                            <div>
                                <label>Placa:</label>
                                <input className={styles.input} type='text' nome='placa' id="placa" placeholder='Placa do veiculo'></input>
                            </div>
                            
                            <div>
                                <label>Valor:</label>
                                <input className={styles.input}  type='number' nome='valor' id="valor" placeholder='Valor do veiculo'></input>
                            </div>
                            <div>
                                <label className="tituloCapa" for="avatar">Foto do veiculo:</label>
                                <input className="imgFile" type="file"id="image" name="image"></input> 
                            </div>             
                            <div>
                                <label>Descrição:</label>
                                <textarea className={styles.textArea} type='text' nome='desc' id="desc" placeholder='Descrição do veiculo'></textarea>
                            </div>
                            <div className={styles.btnsalvarr}>
                                <button className={styles.btnSalvar}>Salvar</button>
                            </div> 

                        </div>
                        
                    </form>  
    
            </div>
        
        </div> 
        </div>
       

    )
}

export default Adicionar;