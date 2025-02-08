export const authentication = (...roles)=>{
  return async (req, res, next) => {
    if(!roles.includes(req.role)){
      return res.status(403).json({ message: 'not authenticated' });
    }
    next();
  }
}