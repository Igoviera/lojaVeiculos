import axios from 'axios';
import { useState } from 'react';
import Styles from './Login.module.css';


function Login(){
    const {email, setEmail} = useState('')
    const {password, setPassword} = useState('')
  
    async function loginHandler(e){
        e.preventDefault()

        const userData = axios.post('localhost:4000/auth/login', {email, password})
        .then(response => {

        }).catch(error => {
            console.log("ops! teve um error2"+error)
        })

        console.log(userData.data)
    }

    return(
        <div className={Styles.containerLogin}>
            <div>
                <h2>Login</h2>
                <form className={Styles.login}>
                    <label>E-mail</label>
                    <input onChange={e => setEmail(e.target.value)} className={Styles.ipt} type='text' value={email} placeholder="Digite seu E-mail"></input>
                    <label>Senha</label>
                    <input onChange={e => setPassword(e.target.value)} className={Styles.ipt}  type='password' value={password} placeholder="Digite sua senha"></input>
                    <button onClick={loginHandler} className={Styles.btnEtrar}>Entrar</button>
                    <span>Ainda não tem conta?<a> Cadastre-se aqui</a> </span>
                </form>

            </div>  
        </div>
    )
      

}
export default Login;