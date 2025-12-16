import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useGlobal } from "../contexts/GlobalContext";


function FilmCard() {
    const [film, setFilm] = useState([])
    const { setLoading } = useGlobal()

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/film')
            .then(response => {
                const result = response.data;
                setFilm(result)
                console.log(result);

            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])


    return (
        <>
            <div className="container text-center">
                <div className="row">
                    {
                        film.map((movie) => {
                            return <div className="col-4 mt-3">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={`http://localhost:3000/img/${movie.image}`} className="card-img-top" />
                                    <div className="card-body">
                                        <h1 className="card-text">{movie.title}</h1>
                                        <p className="card-text">{movie.abstract}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default FilmCard