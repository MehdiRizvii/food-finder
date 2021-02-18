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
        <td> <img src={props.imgUrl}/> </td>
        <td><h3>{props.name}</h3>  </td>
        <td><p>{props.review} </p></td>
        <td><p>{props.distance}</p></td>
        <td><p>{props.price}</p></td>
    </tr>





</table>
        </div>
    )
}
export default Table