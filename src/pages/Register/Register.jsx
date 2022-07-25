import axios from 'axios';
import { useState } from 'react';
import Styles from './Register.module.css';


function Register(){
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
            <div className={Styles.login}>
                <h2>Register</h2>
                <form>
                    <label>Nome</label>
                    <input className={Styles.ipt} type='text' placeholder='Digite seu nome'></input>
                    <label>E-mail</label>
                    <input onChange={e => setEmail(e.target.value)} className={Styles.ipt} type='text' value={email} placeholder="Digite seu E-mail"></input>
                    <label>Senha</label>
                    <input onChange={e => setPassword(e.target.value)} className={Styles.ipt}  type='password' value={password} placeholder="Digite sua senha"></input>
                    <button onClick={loginHandler} className={Styles.btnEtrar}>Cadastrar</button>
                </form>

            </div>  
        </div>
    )
      

}
export default Register;