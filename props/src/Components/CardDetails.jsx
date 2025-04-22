function CardDetails({product}) {
    return (
        <div>
            <div>
                <img src={product.image} width={"200px"} height={"175px"} alt="asd" />
            </div>
            <div>
                <h3>{product.title}</h3>
                <h3>{product.description}</h3>
                <h3>{product.price}</h3>
            </div>
        </div>
    )
}

export default CardDetails