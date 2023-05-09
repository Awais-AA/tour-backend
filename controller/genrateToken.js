const jwt= require('jsonwebtoken')

const genrateAccessToken=(id,isAdmin)=>{
    const token =jwt.sign({id,isAdmin},process.env.ACCESS_TOKEN,{expiresIn:'15d'})
    return token

}
const genrateRefreshToken=(id,isAdmin)=>{
    const token =jwt.sign({id,isAdmin},process.env.REFRESH_TOKEN,{expiresIn:'15d'})
    return token

}

module.exports={genrateAccessToken,genrateRefreshToken}