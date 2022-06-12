import { render } from "@testing-library/react"
import React, { useState } from "react"

const OrdersList=({orderState})=>{
    const [order,setOrder] = useState();

    return (
        <div className="OrderList-main">
            <h3>{orderState} Orders</h3>
            
            <div className="OrderList">
                <li>
                    Name
                </li>
                <li>
                    Type
                </li>
                <li>
                    State
                </li>
            </div>
            <div className="OrderList">
                <li>
                    Name
                </li>
                <li>
                    Type
                </li>
                <li>
                    State
                </li>
            </div>
        </div>
    )
}

export default OrdersList