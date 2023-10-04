import Service from "./Service";


const Services = () => {
    return (
        <div>
            <h3 className="header">Our Services</h3>
            <div className="container">
                <div className="main">
                <Service tittle="car Service" ></Service>
                <Service></Service>
                <Service></Service>
                </div>
            </div>
        </div>
    );
};

export default Services;