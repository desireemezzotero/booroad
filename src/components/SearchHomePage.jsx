
import { useGlobalContext } from "../context/GlobalContext"
import { useState, useEffect } from "react"

const SearchHomePage = () => {

  const { travelData, setTravelData } = useGlobalContext()

  const [searchData, setSearchData] = useState('')
  const [originalTravelData, setOriginalTravelData] = useState(travelData)


  const handleChange = (e) => {
    setSearchData(e.target.value)
  }

  const filteredData = () => {
    const filteredTravelData = travelData.filter(travel => travel.nome_viaggio.toLowerCase().includes(searchData.toLowerCase()))
    if (searchData.length > 0) {
      setTravelData(filteredTravelData)
    } else {
      setTravelData(originalTravelData)
    }

    return travelData
  }

  useEffect(() => { filteredData() }, [searchData])

  return (
    <div className="d-flex align-items-center">
      <label className='me-4 text-light fw-medium'>
        <i class="me-2 bi bi-search text-light fw-medium"></i>
        Cerca</label>
      <form className="me-5" role="search">
        <input
          className="form-control search-bar"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchData}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default SearchHomePage