import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Styles from './Register.module.css';
import { Link } from 'react-router-dom';


function Register(){

    const {cadastrarUser,nome,email,password,setNome,setEmail,setPassword} = useContext(CartContext)



    return(
        <div className={Styles.containerLogin}>
 
            <div className={Styles.login}>
                <h2 className={Styles.titulo}>Register</h2>
                <form>
                    <label>Nome</label>
                    <input onChange={e => setNome(e.target.value)} className={Styles.ipt} type='text' value={nome} placeholder='Digite seu nome'></input>
                    <label>E-mail</label>
                    <input onChange={e => setEmail(e.target.value)} className={Styles.ipt} type='text' value={email} placeholder="Digite seu E-mail"></input>
                    <label>Senha</label>
                    <input onChange={e => setPassword(e.target.value)} className={Styles.ipt}  type='password' value={password} placeholder="Digite sua senha"></input>
                    <button onClick={cadastrarUser} className={Styles.btnEtrar}>Cadastrar</button>
                </form>

            </div>  
        </div>
    )
      

}
export default Register;