import { Link } from "react-router-dom"


const TravelListCard = ({ viaggio }) => {

  const id = viaggio.id_viaggio

  return (
    <Link to={`/dettaglio-viaggio/${id}`}>





      <div className="card my-4 text-light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="card-header">
          <img src={`../public/img/${viaggio.immagine}`} class="img-fluid rounded-start" alt={viaggio.nome_viaggio} />
        </div>
        <div className="card-body bg-transparent">
          <h3 className="mb-3">{viaggio.nome_viaggio}</h3>
          <p className="card-text d-none d-lg-block">{viaggio.descrizione}</p>
          <div className="d-flex justify-content-center">
            <p className="card-text"><small>Data di partenza: {viaggio.data_inizio}</small></p>
            <span className="mx-4">-</span>
            <p className="card-text"><small>Data di ritorno: {viaggio.data_fine}</small></p>
          </div>

        </div>
      </div>
    </Link>


  )
}

export default TravelListCard



