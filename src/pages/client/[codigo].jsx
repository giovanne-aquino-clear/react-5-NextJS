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