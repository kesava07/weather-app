import { useSelector } from "react-redux"
import { useGetWeatherDataQuery } from "../store/apiSlice"
import Spinner from "./Spinner"
import ConditionalMessage from "./ConditionalMessage"

const Weather = () => {
    const selectedLocation = useSelector(state => state.search)
    const { data, isLoading } = useGetWeatherDataQuery(selectedLocation, { skip: !selectedLocation?.length })

    if (!data?.current && !selectedLocation?.length) return <ConditionalMessage className="text-info">Search for a place to view weather!</ConditionalMessage>

    if (!data?.current && !isLoading) return <ConditionalMessage className="text-danger">No weather data found for location <strong>{selectedLocation}</strong></ConditionalMessage>

    if (isLoading) return <Spinner />

    const { condition, temp_c, temp_f, wind_kph, wind_mph, humidity, last_updated } = data?.current;
    return (
        <div className="col-12 col-sm-8 col-lg-5 m-auto mt-5">
            <div className="card card-body shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>{condition.text}</h3>
                    <img src={"https:" + condition?.icon} alt="condition_logo" width="64" height="64" />
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <span title="Temperature"><i className="fa fa-thermometer-full text-danger fa-2x" aria-hidden="true" />  &nbsp; {temp_c}°C / {temp_f}°F</span>
                    <span title="Wind Speed">{wind_mph} mph / {wind_kph} kph &nbsp;<i className="fa fa-cloud text-warning fa-2x" aria-hidden="true" /></span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-4">
                    <div>
                        <span className="text-small fw-light">{humidity}</span>
                        <h5 className="mt-2">Humidity</h5>
                    </div>
                    <div className="text-small">
                        <span className="text-small fw-light">{last_updated}</span>
                        <h5 className="mt-2">Last Updated</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather