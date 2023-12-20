import React from 'react'
import { useState } from 'react'
import Display from './Display'
const Key = () => {

    const [expression, setExpression] = useState("")

    function calculation() {
        const result = eval(expression)
        console.log(result);
        setExpression(String(result))
    }

  
    function del() {
        setExpression('')
    }
    function deleteverything() {
        setExpression(prevExpression => prevExpression.slice(0, -1))
    }
    function click(e) {

        setExpression(prevExpression => prevExpression + e.target.value)
    }
   
    return (
        <>
            <div className='cont'>
                <Display name={expression} />
                <div className='header'>
                    <button onClick={(e) => del(e)} value={"AC"} className='delete'>AC</button>
                    <button onClick={(e) => deleteverything(e)} value={"DEL"} className='delete'>DEL</button>
                    <button onClick={(e) => click(e)} value={"+"} className='plus'>+</button>
                </div>
                <div className='functional'>
                    <button onClick={(e) => click(e)} value={2} className='numbers'>2</button>
                    <button onClick={(e) => click(e)} value={1} className='numbers'>1</button>
                    <button onClick={(e) => click(e)} value={3} className='numbers'>3</button>
                    <button onClick={(e) => click(e)} value={"-"} className='numbers'>-</button>
                    <button onClick={(e) => click(e)} value={4} className='numbers'>4</button>
                    <button onClick={(e) => click(e)} value={5} className='numbers'>5</button>
                    <button onClick={(e) => click(e)} value={6} className='numbers'>6</button>
                    <button onClick={(e) => click(e)} value={"*"} className='numbers'>*</button>
                    <button onClick={(e) => click(e)} value={7} className='numbers'>7</button>
                    <button onClick={(e) => click(e)} value={8} className='numbers'>8</button>
                    <button onClick={(e) => click(e)} value={9} className='numbers'>9</button>
                    <button onClick={(e) => click(e)} value={"/"} className='numbers'>/</button>
                </div>
                <div className='footer'>
                    <button onClick={(e) => click(e)} value={"."} className='numbers c'>.</button>
                    <button onClick={(e) => click(e)} value={0} className='numbers c'>0</button>
                    <button onClick={(e) => calculation(e)} value={"="} className='numbers d'>=</button>
                </div>
            </div>
        </>
    )
}

export default Key