import Layout from '../components/Layout'
import style from '../styles/style.module.css'
export default function Style(){
    return (

        <Layout title="exemplo de CSS ">
        <div className={style.roxo}> 
            <h1> style using css modules</h1>
            <h2>teste</h2>
        </div>

        </Layout>
    )
}