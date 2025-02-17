import TravelListCard from '../components/TravelListCard'
import NewTravel from '../components/NewTravel'
import { useGlobalContext } from '../context/GlobalContext'
import SearchHomePage from '../components/SearchHomePage'

const HomePage = () => {
  const { travelData } = useGlobalContext()

  const validate = () => {
    if (travelData.length == 0) {
      return true
    } else {
      return false
    }
  }

  return (

    <div className='container py-5 text-center overflow-hidden'>
      <div className='d-flex  justify-content-around '>
        <SearchHomePage />
        <NewTravel />
      </div>

      <div>
        {validate() ? (<h2>Nessun viaggio in programma</h2>) : (
          <>
            <h2 className='my-3 '>Viaggi in programma</h2>
          </>
        )
        }
      </div>

      <div className="scroll-custom">
        {validate() ? null : (
          <>
            {travelData.map(viaggio => (
              <TravelListCard key={viaggio.id_viaggio} viaggio={viaggio} />
            ))}
          </>
        )
        }
      </div>

    </div>


  )
}

export default HomePage