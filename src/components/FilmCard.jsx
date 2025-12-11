import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function FilmCard() {
    const [film, setFilm] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/film')
            .then(response => {
                const result = response.data;
                setFilm(result)
                console.log(result);

            })
            .catch(error => {
                console.error(error)
            })
            .then(() => {

            })
    }, [])


    return (
        <>
            <div className="container text-center">
                <div className="row">
                    {

                    }
                    <div className="col">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilmCard