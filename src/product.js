import React from 'react'
import './products.css'


export default class Products 
{
 data = [
    ['React',500],
    ['React Native',650],
    ['Node.js',450],
    ['MongoDB',300],
    ['Express.js',650],
 ]  
    
    return(  
        <table border="1">
        <tr><th>ชื่อ</th><th>ราคา</th></tr>
        {
            this.d
        }
        </table>
    )
    }
}

