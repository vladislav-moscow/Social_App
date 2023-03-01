import { db } from "../connect.js";
import bcrypt from 'bcryptjs';

export const register = (req,res) => {
  
  // CHECK USER

  const q = "SELECT FROM users WHERE username = ?"
  db.query(q, [req.body.username], (err, data) => {
    if(err) return res.status(500).json(err)
    if(data.length) return res.status(409).json("User already exists!")
  })

  //CREATE NEW USER
    // Hash password

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(res.body.password, salt)
}
export const login = (req,res) => {

}
export const logout = (req,res) => {
  
}