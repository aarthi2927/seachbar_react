import { useState } from "react";
import { countries } from "./App";

export default function TableData({data}){
    
    return(
        <table>
        <tr>
            <th>country</th>
            <th>continent</th>
        </tr>
   

 {data.map((item,index) => (
<tr>
    <td>{item.name}</td>
<td>{item.continent}</td>
</tr>

 )
)}
 </table>
    )
}