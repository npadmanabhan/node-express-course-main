const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === 'Nandu'){
        req.user = {name:'Nandu', id:3}
        next()
    }
    else{
        res.status(401).send('Unauthorized')        
    }   
}

module.exports = authorize