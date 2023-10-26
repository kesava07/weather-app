import { useSelector } from "react-redux"
import { useGetWeatherDataQuery } from "../store/apiSlice"
import Spinner from "./Spinner"
import ConditionalMessage from "./ConditionalMessage"

const Weather = () => {
    const selectedLocation = useSelector(state => state.search)
    const { data, isLoading } = useGetWeatherDataQuery(selectedLocation, { skip: !selectedLocation?.length })

    const renderUi = () => {
        if (!data?.current && !selectedLocation?.length) return <ConditionalMessage className="text-info">Search for a place to view weather!</ConditionalMessage>

        if (!data?.current && !isLoading) return <ConditionalMessage className="text-danger">No weather data found for location <strong>{selectedLocation}</strong></ConditionalMessage>

        if (isLoading) return <Spinner />
        const { wind_degree, pressure_in, wind_dir, wind_kph } = data?.current;
        return (
            <>
                <div className="tile">
                    <h4>Wind</h4>
                    <span>{wind_kph} km/h</span>
                </div>
                <div className="tile">
                    <h4>Pressure</h4>
                    <span>{pressure_in}</span>
                </div>
                <div className="tile">
                    <h4>Wind Dir</h4>
                    <span>{wind_dir}</span>
                </div>
                <div className="tile">
                    <h4>Wind Degree</h4>
                    <span>{wind_degree}°</span>
                </div>
            </>
        )

    }
    return (
        <div className="right_container col-12 col-lg-7 bg-light">
            {renderUi()}
        </div>
    )
}

export default Weather