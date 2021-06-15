import jwt from 'jsonwebtoken';

export const userLogin = async (req, res) => {
    try {
        const user = {
            id: 1, 
            email: 'admin@namasys.co',
            password: 'admin123'
          }
        
          jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
            res.json({
              token
            });
          });
        }
    catch (error) {
        res.status(404).json({message: error.message});
    }

}