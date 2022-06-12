import { render } from "@testing-library/react"
import React, { useState } from "react"

const OrdersList=({order})=>{
    // const [order,setOrder] = useState();

    return (   
            <div className="OrderList">
                <li>
                    {order.orderID}
                </li>
                <li>
                    {order.orderState}
                </li>
                <li>
                    {order.items[0].price}
                </li>
                <li>
                    {order.items[0].specifications}
                </li>

            </div>
    )
}

export default OrdersList