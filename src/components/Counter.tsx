import React, {useEffect, useRef, useState} from 'react'

function Counter({value}: {value: number}) {
    const timerRef = useRef(0);
    const [time, setTime] = useState(0)
    const delayCnt = Math.ceil(value / 20);
    const [count, setCount] = useState(0);
    useEffect(() => {
        timerRef.current = setTimeout(e => {
            if (time === 2000) {
                clearTimeout(timerRef.current)
            }
            setTime(time + 100)
            count < value ? setCount(count + Math.ceil(value / 20)) : setCount(value);
        }, 100);
        return (() => clearTimeout(timerRef.current))
    }, [time, count, value, delayCnt])
    return <span>{count}</span>
}

export default Counter
