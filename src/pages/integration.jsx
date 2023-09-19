import { useState } from "react"
import Layout from "../components/Layout"

export default function Integration(){

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    function getCustomer(){
        fetch(`http://localhost:3001/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setCliente(dados))

    }


    return(
    <Layout>
        <div>
            <div>
                <input type= "number" value={codigo}
                    onChange={e => setCodigo(e.target.value)}/>
                <button onClick = {getCustomer}>Get Customer</button>
            </div>
            <ul>
                <li>Codigo: {cliente.id}</li>
                <li>nome:{cliente.nome}</li>
                <li>email:{cliente.email}</li>
                <li>idade:{cliente.idade}</li>
            </ul>
        </div>

    </Layout>
    )    
}

// usa conceitos de API pegando dados utilizando a função getCostumer e os conceitos ja utilizados em api/clientes/[codigo].jsx