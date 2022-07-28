import axios from 'axios';
import { useState } from 'react';
import Styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login(){
    /*const [email1, setEmail1] = useState('')
    const [password1, setPassword1] = useState('')
    
    const login = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/auth/login', {email1,password1})
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log('Deu error'+error)
        })
    }*/


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [authenticated, setAuthenticated] = useState(false)

const enviarLogin = async (e) => { 
    e.preventDefault();

    console.log('submit',{email,password})

    try{
        await axios.post('http://localhost:4000/auth/login',{email,password})
        .then(response => {
            console.log(response)
        })
        
        setAuthenticated(true)

    }catch(error) {
        console.log("ops! teve um error ao cadastrar usuario!"+error)
    }
    
}
    console.log(authenticated)
    return(
        <> 
        <div className={Styles.voltar}>
            <Link to={'/'}>
                <img src="https://img.icons8.com/sf-regular-filled/48/000000/circled-chevron-left.png"/>
            </Link> 
        </div>
        <div className={Styles.containerLogin}>
           
     
            <div className={Styles.login}>

                <h2 className={Styles.titulo}>Login</h2>

                <form onSubmit={enviarLogin}>

                    <label>E-mail</label>
                    <input 
                        className={Styles.ipt} 
                        type='text' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="Digite seu E-mail">
                    </input>

                    <label>Senha</label>
                    <input
                        className={Styles.ipt}  
                        type='password' 
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="Digite sua senha">
                    </input>
                    <button 
                        className={Styles.btnEtrar} 
                        type='submit'>Entrar</button>
                    <span>Ainda não tem conta? <Link to={'/register'}><a className={Styles.link}>Clique aqui</a></Link></span>
                </form>

            </div>  
        </div>
        </>

    )
      

}
export default Login;