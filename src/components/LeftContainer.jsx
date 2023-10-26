import { useSelector } from "react-redux"
import LocationSearchInput from "./LocationSearchInput"
import { useGetWeatherDataQuery } from "../store/apiSlice"

const LeftContainer = () => {
    const selectedLocation = useSelector(state => state.search)
    const { data } = useGetWeatherDataQuery(selectedLocation, { skip: !selectedLocation?.length })
    return (
        <div className="col-12 col-lg-5 bg-white left_container">
            <LocationSearchInput />
            {data && data?.current && (
                <>
                    <img src={"https:" + data?.current.condition?.icon} alt="condition_logo" width="100" height="100" />
                    <h1 title="Temperature" className="mt-3 mb-2 display-2"> {data?.current.temp_c}°C</h1>
                    <p>{data?.current.condition.text}</p>
                    <hr />
                    <span className="text-small fw-light">{data?.current.last_updated}</span>
                    <h2 className="display-6">{selectedLocation}</h2>
                </>
            )}
        </div>
    )
}

export default LeftContainer;