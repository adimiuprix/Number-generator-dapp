import React from 'react'
interface Props{
  connectWallet: () => void
}
const Login = ({connectWallet} : Props) => {
  return (
    <div>
    <h1>Welcome to Polygon Testnet (Mumbai): Random Number Generator</h1>
    <button onClick={()=> connectWallet()}>LogIn Metamask</button>
  </div>
  )
}

export default Login
