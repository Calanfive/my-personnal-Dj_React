import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handleSubmit = useCallback(async() => {
        // if(username === 'calanfive' && password === 'Thomasi139!') {
        //     navigate("/home");
            const response = await fetch("http://localhost:3012/api/auth/local", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "identifier": username,
                    "password": password
                })
              });
              const data = await response.json();
              console.log(data);
              if(data.user){
              navigate("/home");
              }
              else {
                setUsername("")
                setPassword("")
              }
    }, [username, password, navigate]);
    

    return (
        <div>
            <h1>Page connexion</h1>
            <label htmlFor="name">Pseudo</label>
            <input type="text" name='username' value={username} onChange={handleNameChange}/>

            <label htmlFor="password">Mot de passe</label>
            <input type="password" name='password' value={password} onChange={handlePasswordChange}/>
            
            <button onClick={handleSubmit}>Se connecter</button>
        </div>
    )
}