import { productsData } from "../Data/productsData"
import CardDetails from "./CardDetails"

function Cards() {
    return (
        <>
            {productsData.length > 0 ? (
                <>
                {
                    productsData.map((product, index) => {
                        return (
                            <CardDetails product = {product}/>
                        )
                    })
                }
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default Cards