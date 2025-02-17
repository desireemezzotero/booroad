import { useGlobalContext } from "../context/GlobalContext"
const TravelDetailCard = () => {

  const { originalTravelDetail } = useGlobalContext()

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-4 img-detail">
          <img src={`../public/img/${originalTravelDetail.immagine}`} class="img-fluid rounded-start" alt={originalTravelDetail.nome_viaggio} />
        </div>
        <div className="col-8">
          <div className="card-body text-start">
            <h3 className="card-title ">{originalTravelDetail.nome_viaggio}</h3>
            <p className="card-text my-3"><span className="fw-bold">Descrizione: </span>{originalTravelDetail.descrizione}</p>
            <p className="card-text fw-light my-0"><span className="fw-bold">Meta:</span> {originalTravelDetail.destinazione}</p>
            <p className="card-text fw-light my-0"><span className="fw-bold">Tipo di viaggio:</span> {originalTravelDetail.tipologia}</p>
            <p className="card-text fw-light"><span className="fw-bold">Responsabile:</span> {originalTravelDetail.accompagnatore}</p>
            <p className="card-text fw-light my-0"><span className="fw-bold">Data di partenza:</span> {originalTravelDetail.data_inizio}</p>
            <p className="card-text fw-light my-0"><span className="fw-bold">Data di ritorno:</span> {originalTravelDetail.data_fine}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelDetailCard






{/* <div className="card">
      <div className="card-header">
        <h4 className="text-center">{originalTravelDetail.nome_viaggio}</h4>
      </div>
      <div className="card-body">
        <p className="card-text"><span className="fw-bold">Descrizione: </span>{originalTravelDetail.descrizione}</p>
        <p className="card-text"><span className="fw-bold">Meta:</span> {originalTravelDetail.destinazione}</p>
        <p className="card-text"><span className="fw-bold">Tipo di viaggio:</span> {originalTravelDetail.tipologia}</p>
        <p className="card-text"><span className="fw-bold">Responsabile:</span> {originalTravelDetail.accompagnatore}</p>
        <p className="card-text"><span className="fw-bold">Data di partenza:</span> {originalTravelDetail.data_inizio}</p>
        <p className="card-text"><span className="fw-bold">Data di ritorno:</span> {originalTravelDetail.data_fine}</p>
      </div>
    </div> */}