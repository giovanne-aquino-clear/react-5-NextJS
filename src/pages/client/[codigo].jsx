import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function ClienteProCodigo(){

    const router = useRouter()
    return(
        <Layout title = "Navegação Dinamica">
            <div> codigo = {router.query.codigo} </div>
        </Layout>
    )
    
}
// useRouter permite recuperar o valor passado para referencia ["codigo"].jsx, assim se cria um valor de leitura com o nome "codigo"