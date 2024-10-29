import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store/store"
import { decrement, decrementByAmout, increment, incrementByAmout, reset } from "../../redux/slices/CounterSlice"
import { useState } from "react"

const Counter=()=>{
    const counter=useSelector((count:RootState)=>count.CounterSlice.counter)
    const dispatch=useDispatch<AppDispatch>()
    const [inputValue,setInputValue]=useState<any>()
    return(
        <div>
            <input placeholder="enter your number" onChange={(e)=>setInputValue(e.target.value)} />
            <h1>Counter:{counter}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decement</button>
            <button onClick={()=>dispatch(incrementByAmout(inputValue))}>Increment By Amount</button>
            <button onClick={()=>dispatch(decrementByAmout(inputValue))}>Decement By Amount</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )

}

export default Counter