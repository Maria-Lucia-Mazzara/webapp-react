import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailFilm() {
    const { id } = useParams();
    const [movie, setMovie] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:3000/film/${id}`)
            .then(response => {
                const result = response.data;
                setMovie(result)
                console.log(result);

            })
            .catch(error => {
                console.error(error)
            })
            .then(() => {

            })
    }, [])

    return <>
        <div className="container text-center">
            <div className="mt-3">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={`http://localhost:3000/img/${movie.image}`} className="card-img-top" />
                    <div className="card-body">
                        <h1 className="card-text">{movie.title}</h1>
                        <p className="card-text">{movie.abstract}</p>
                    </div>
                    <h2>Recensioni:</h2>
                    {
                        movie.reviews.map((recen) => {
                            return <p className="card-text"> {recen.text}</p>
                        })
                    }
                </div>
            </div>
        </div>

    </>
}
export default DetailFilm