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
        <td> <img src={props.tables.imgUrl}  alt={"restaurant picture"}/> </td>
        <td><h3>{props.tables.name}</h3>  </td>
        <td><p>{props.tables.review} </p></td>
        <td><p>{props.tables.distance}</p></td>
        <td><p>{props.tables.price}</p></td>
    </tr>





</table>
        </div>
    )
}
export default Table