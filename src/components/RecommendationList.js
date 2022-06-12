import { render } from "@testing-library/react"
import React, { useState } from "react"

const RecommendationList=({recommendation})=>{
    // const [order,setOrder] = useState();
    return (   
            <div className="OrderList" >
                <li>
                    {recommendation.productID}
                </li>
                <li>
                    {recommendation.productName}
                </li>
                <li>
                    {recommendation.productType}
                </li>
                <li>
                    {recommendation.productPrice}
                </li>              

            </div>
    )
}

export default RecommendationList