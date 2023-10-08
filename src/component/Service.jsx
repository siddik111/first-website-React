
const Service = (props) => {
    const { tittle, price , text } = props;
    return (
        <div>
            <div className="item">
                <h3 className="tittle">{tittle}</h3>
                <p className="text">{text}</p>
                <p className="price">Price: ${price}</p>
                <button className="buy_btn">Buy now</button>
            </div>
        </div>
    );
};

export default Service;