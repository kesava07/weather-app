
const AppContainer = ({ children }) => {
    return (
        <div className="container-fluid bg-body-secondary">
            <div className="card card-body">
                <div className="row weather_container">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppContainer;