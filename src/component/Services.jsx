import Service from "./Service";


const Services = () => {
    return (
        <div>
            <h3 className="header">Our Services</h3>
            <div className="container">
                <div className="main">
                <Service tittle="car Service" text="best car service......." price="100"></Service>
                <Service tittle="Bike Service" text="best Bike service......." price="100"></Service>
                <Service tittle="Computer Service" text="best computer service......." price="180"></Service>
                </div>
            </div>
        </div>
    );
};

export default Services;