

export default function handler(req, res){
    res.status(200).json({
        name: 'Teste API',
        metodo: req.method 
    })
}