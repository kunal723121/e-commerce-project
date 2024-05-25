import jwt from "jsonwebtoken";
let key='secret_key';

let middleware=(req,rsp,next)=>{
     let authHeader=req.headers['authorization'];
     const parts = authHeader.split(' ');

  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Authorization header format is incorrect' });
  }

  const token = parts[1];
     jwt.verify(token,key,(err,user)=>{
        if(err) throw err
        req.username=user.uname
        next()
     });
}

export default middleware;