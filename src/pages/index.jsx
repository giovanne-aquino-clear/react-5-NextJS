import Navigator from '../components/Navigator'

export default function Init(){
    return (
        <div style={{
            display: ' flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>

       
            <Navigator text = "style" destiny = "/style"/>
            <Navigator text = "example" destiny = "/example"/>
            <Navigator text = "jsx" destiny = "/jsx"/>
            <Navigator text = "Navegação" destiny = "/client/123"/> 
            <Navigator text = "stateful component" destiny = "/state"/>
            <Navigator text = "Integration with API #01" destiny= "/integration"/>

        </div>
    )
}
// cria navegação atraves de "/" + "nome do arquivo na pasta 'pages' "
// usa "client/123" para passar 123 como referencia do codigo do clente. Veja [codigo].jsx
// graças ao [] na nomeação do arquivo ele passa o codigo depois da barra como o valor de "codigo"