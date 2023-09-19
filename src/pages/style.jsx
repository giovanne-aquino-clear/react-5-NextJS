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

// usa css module atraves de "style.roxo", onde .roxo identifica a classe de estilo do arquivo "style.module.css"