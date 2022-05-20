import React from "react";
import { signIn, getSession, getProviders } from "next-auth/react";
import { useRouter } from "next/router";




interface UserDataProps {
    email: string,
    password: string
}

function Login() {
    const {error} = useRouter().query

    async function handleLogin(userData:UserDataProps) {
        const login = signIn('credentials',{
            email: 'gustavo.lopes@gmail.com',
            password: 'Lopes@2022'
        })

    }


  return (
    <div>
        <h1>Screen Login</h1>
        {error && (
            <span>Usuario ou senha invalido</span>
        )}
        <button onClick={()=>handleLogin({email:'a', password:'b'})}>login</button>
     
    </div>
  );
}

export default Login;