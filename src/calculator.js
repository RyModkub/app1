import React from "react";
export function Calculator (){
    n1 = 20
    n2 = 4

    calculate = (op) =>{
        let c = `${n1} ${op} ${n2}`
        let r = eval(c)
        alert(`${c} = ${r}`)
    }
    render(){
        return(
         <div style={{textAlign:'center',marginTop:20}}>
            <span>{this.n1}</span>&nbsp;
            <button onClick={() => this.calculate('+')}>+</button>&nbsp;
            <button onClick={() => this.calculate('-')}>-</button>&nbsp;
            <button onClick={this.calculate.bind('*')}>*</button>&nbsp;
            <button onClick={this.calculate.bind('/')}>/</button>&nbsp;
            <span>{this.n2}</span>
         </div>
        )         
    }
}