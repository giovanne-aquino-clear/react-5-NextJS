import { useState  } from "react";
import Layout from "../components/Layout";

export default function Estado(){
    const [number, setNumber] = useState(0)
   

    function increase (){
        setNumber(number + 1)
    }
    return(
        <Layout title = "stateful components">
            <div>{number}</div>
            <button onClick={increase}>Increase</button>
        </Layout>
    )
} 
// usa useState para salvar estado da variavel e ter acesso as suas alterações