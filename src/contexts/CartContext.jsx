import { createContext } from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const CartContext = createContext({});

export const CartProvider = ({children}) => {


//const navigate = useNavigate();


//Cadastrar usuario

const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const  cadastrarUser  = async (e) => {
    e.preventDefault()

    try {
        await axios.post('http://localhost:4000/auth/register', {nome,email,password})
        .then(response => {
            console.log(response.data)
        })

    }catch(error) {
        console.log("ops! teve um error ao cadastrar usuario!"+error)
    }
    
}

// Login de usuario
const [nome1, setNome1] = useState('')
const [password1, setPassword1] = useState('')

const login =(e)=>{
    axios.post(`http://localhost:4000/auth/login`,{nome1,password1})
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}


// Cadastrando veiculo

const [status, setStatus] = useState('')


const onSubmit = (e) => {  
    e.preventDefault()
    
    const data = {
        nome: e.target.elements.nome.value,
        marca: e.target.elements.marca.value,
        km: e.target.elements.cor.value,
        ano: e.target.elements.ano.value,
        placa: e.target.elements.placa.value,
        valor: e.target.elements.valor.value,
        desc: e.target.elements.desc.value,
        image: e.target.elements.image.files[0]
    };

    const formData = new FormData();
    formData.append('image', data);

    axios.post(`https://app-loja-api.herokuapp.com/veiculo`,data, {headers: {"Content-Type":"multipart/form-data"}})
    .then(response => {
        if(response.status === 200){
           //navigate('/')
        }
    })
     
    .catch(error => {
        console.log("ops! teve um error"+error)
    })
}


//Listando todos os veiculos
const [veiculos, setVeiculos] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
    setLoading(true)
    axios.get(`https://app-loja-api.herokuapp.com/veiculos`)
    .then(response => {
        setVeiculos(response.data.veiculos)
        
    })
    .catch(error => {
        console.log("ops! deu error"+error)
    })
},[])



//Deletar um veiculo
const deletarVeiculo = (id) => {
    axios.delete(`https://app-loja-api.herokuapp.com/${id}`)
    window.location.reload()
};


//Editar veiculo
const editarVeiculo = (id) =>{
    axios.put(`https://app-loja-api.herokuapp.com/${id}`)
    window.location.reload()
}

const [busca, setBusca] = useState('');


    return (
        <CartContext.Provider value={{veiculos,busca,loading,status, setBusca,onSubmit,deletarVeiculo,editarVeiculo, cadastrarUser,setNome,setEmail,setPassword}}>
            {children}
        </CartContext.Provider>
    )
}