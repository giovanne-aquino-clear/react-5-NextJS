import { useState  } from "react";
import Layout from "../components/Layout";

export default function Estado(){
    const state = useState(0)
    let number = state[0]
    let changeNumber = state [1]

    function increase (){
        changeNumber(number + 1)
    }
    return(
        <Layout title = "stateful components">
            <div>{number}</div>
            <button onClick={increase}>Increase</button>
        </Layout>
    )
}