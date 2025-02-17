import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import SearchTravelDetail from "../components/SearchTravelDetail"

import TravelDetailCard from "../components/TravelDetailCard"
import PartecipantsList from "../components/PartecipantsList"
import NewPartecipant from "../components/NewPartecipant"

const TravelDetail = () => {

  const { id } = useParams()
  const { setOriginalTravelDetail, fetchTravel } = useGlobalContext()

  useEffect(() => {
    if (id) {
      const selectedTravel = fetchTravel(id)
      setOriginalTravelDetail(selectedTravel)
    }
  }, [id])

  return (
    <div className="container py-5">
      <TravelDetailCard />
      <div className="d-flex justify-content-center justify-content-lg-between align-items-center flex-column flex-lg-row">
        <SearchTravelDetail />
        <NewPartecipant />
      </div>
      <h4 className="my-3 text-center ">Elenco partecipanti</h4>
      <div className="container h-100 w-100">
        <PartecipantsList />
      </div>

    </div>

  )
}

export default TravelDetail