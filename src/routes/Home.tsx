import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

export default function Home() {
    const [songs, setSongs] = useState<any[]>([])
    const [songsa, setSongsa] = useState<any[]>([])

    useEffect(() => {
        console.log('connexion1');
        const songsFromStrapi = async () => {
            const response = await fetch('http://localhost:3012/api/musiques?filters[favoris][$eq]=true&populate=*')
            const data = await response.json()
            console.log(data.data.map((music:any) => music));
            // .attributes.chanteur.data
            setSongs(data.data)
        }
        songsFromStrapi()
    }, []);

    useEffect(() => {
        console.log('connexion2');
        const songsFromStrapi = async () => {
            const response = await fetch('http://localhost:3012/api/musiques?sort=titre:asc&populate=*')
            const data = await response.json()
            console.log(data.data.map((musica:any) => musica));
            // .attributes.chanteur.data
            setSongsa(data.data)
        }
        songsFromStrapi()
    }, []);

    return (
        <div>
            <h1>Home : affichage des favoris</h1>
            <div className="favDisplay homeDisplay">
                {songs.map((music:any) => (
                    <div className="musique">
                        <div className="title">
                            {music.attributes.titre}
                            </div>
                        <div className="title">
                            {music.attributes.chanteur.data.attributes.prenom} 
                            {music.attributes.chanteur.data.attributes.nom}
                            </div>
                    </div>
                ))}
            </div>
            <h1>Affichage random</h1>
            <div className="randomDisplay homeDisplay">
                {songsa.map((musica:any) => (
                    <div className="musique">
                        <div className="title">
                            {musica.attributes.titre}
                            </div>
                        <div className="title">
                            {musica.attributes.chanteur.data.attributes.prenom} 
                            {musica.attributes.chanteur.data.attributes.nom}
                            </div>
                    </div>
                ))}
            </div>
            <Link to="/ajout">+</Link>
        </div>
    )
}