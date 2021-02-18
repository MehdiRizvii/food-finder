import React from 'react'

function Table(props){
    return(
        <div className="table">
<table>
    <tr>
        <th> </th> {/*-this is a blank cell for where the images will be below */}

        <th>Restaurant Name</th>

        <th>Reviews</th>

        <th>Distance from you</th>

        <th>Price Range</th>
    </tr>

    <tr>
        <td> <img src={props.table.imgUrl}/> </td>
        <td><h3>{props.table.name}</h3>  </td>
        <td><p>{props.table.review} </p></td>
        <td><p>{props.table.distance}</p></td>
        <td><p>{props.table.price}</p></td>
    </tr>





</table>
        </div>
    )
}
export default Table