import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailFilm() {
    const { id } = useParams();

    const [movie, setMovie] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        text: "",
        vote: ""
    });


    useEffect(() => {
        axios.get(`http://localhost:3000/film/${id}`)
            .then(res => {
                setMovie(res.data);
            })
            .catch(err => console.error(err));
    }, [id]);


    function handleSubmit(e) {
        e.preventDefault();

        axios.post(`http://localhost:3000/film/${id}/recensione`, formData)

            .then(res => {
                setMovie(res.data);
                setFormData({ name: "", text: "", vote: "" });
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="container text-center py-4">
            {/* CARD FILM */}
            <div className="card mx-auto mb-4" style={{ width: "18rem" }}>
                <img
                    src={`http://localhost:3000/img/${movie.image}`}
                    className="card-img-top"
                    alt={movie.title}
                />
                <div className="card-body">
                    <h3>{movie.title}</h3>
                    <p>{movie.abstract}</p>
                </div>
            </div>

            {/* RECENSIONI */}
            <h4>Recensioni</h4>
            {movie.reviews?.length > 0 ? (
                movie.reviews.map((rec, index) => (
                    <p key={index}>
                        <strong>{rec.name}</strong> ({rec.vote}/5): {rec.text}
                    </p>
                ))
            ) : (
                <p>Nessuna recensione</p>
            )}

            {/* FORM */}
            <section className="mt-4">
                <h4>Lascia una recensione</h4>

                <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Voto</label>
                        <select
                            className="form-select"
                            value={formData.vote}
                            onChange={e => setFormData({ ...formData, vote: e.target.value })}
                            required
                        >
                            <option value="">Seleziona</option>
                            {[1, 2, 3, 4, 5].map(n => (
                                <option key={n} value={n}>{n}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Recensione</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            value={formData.text}
                            onChange={e => setFormData({ ...formData, text: e.target.value })}
                            required
                        />
                    </div>

                    <button className="btn btn-dark w-100">Invia</button>
                </form>
            </section>
        </div>
    );
}

export default DetailFilm;