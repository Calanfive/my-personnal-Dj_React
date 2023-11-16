import { ChangeEvent, useCallback, useState } from "react"

export default function Ajout() {
    const [artist, setArtist ] = useState('');
    const [song, setSong] = useState('');
    const [color, setColor] = useState('');
    const [favorites, setFavorites] = useState('');
    const [year, setYear] = useState('');
    const [linkYt, setLinkYt ] = useState('');

    const handleArtistChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setArtist(e.target.value);
    }, []);

    const handleSongChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSong(e.target.value);
    }, []);

    const handleColorChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }, []);

    const handleFavoritesChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setFavorites(e.target.value);
    }, []);

    const handleYearChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    }, []);

    const handleLinkYtChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setLinkYt(e.target.value);
    }, []);

    const handleClick = useCallback(async() => {
        const response = await fetch("http://localhost:3012/api/musiques", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    "data": {
                        "titre": song,
                        "lien_youTube": linkYt,
                        "{chanteur}": artist,
                        "favoris": favorites,
                        "dateDeSortie": year,
                        "couleur_de_fond": color
                    }

            })
          });
          const data = await response.json();
    }, []
    );

    return (
        <div>
            <input onChange={handleArtistChange} type="text" placeholder="Artiste"/>
            <input onChange={handleSongChange} type="text" placeholder="Chanson"/>
            <input onChange={handleColorChange} type="text" placeholder="Couleur"/>
            <input onChange={handleFavoritesChange} type="checkbox"/>
            <input onChange={handleYearChange} type="text" placeholder="Année"/>
            <input onChange={handleLinkYtChange} type="text" placeholder="Lien YouTube"/>
            <button onClick={handleClick}>Ajouter</button>
        </div>
        
    )
}
