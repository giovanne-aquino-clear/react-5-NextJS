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

        
        </div>
    )
}