import axios from 'axios';
import { useState } from 'react';
import Styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login(){
    const {email, setEmail} = useState('')
    const {password, setPassword} = useState('')
  
    async function loginHandler(e){
        e.preventDefault()
        try {
        const userData = axios.post('localhost:4000/auth/login', {email, password})
        

        }catch(error) {
            console.log("ops! teve um error2"+error)
        }
    }

    return(
        <div className={Styles.containerLogin}>
            <div>
                <Link to={'/'}>
                <img src="https://img.icons8.com/sf-regular-filled/48/000000/circled-chevron-left.png"/>
                </Link> 
            </div>

            <div className={Styles.login}>
                <h2 className={Styles.titulo}>Login</h2>
                <form>
                    <label>E-mail</label>
                    <input onChange={e => setEmail(e.target.value)} className={Styles.ipt} type='text' value={email} placeholder="Digite seu E-mail"></input>
                    <label>Senha</label>
                    <input onChange={e => setPassword(e.target.value)} className={Styles.ipt}  type='password' value={password} placeholder="Digite sua senha"></input>
                    <button onClick={loginHandler} className={Styles.btnEtrar}>Entrar</button>
                    <span>Ainda não tem conta? <Link to={'/register'}><a className={Styles.link}>Clique aqui</a></Link></span>
                </form>

            </div>  
        </div>
    )
      

}
export default Login;