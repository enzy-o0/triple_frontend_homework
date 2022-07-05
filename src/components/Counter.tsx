import React, { useEffect, useRef, useState } from 'react'

const Counter = ({ value }: { value: number }) => {
  const timerRef = useRef(0)
  const [count, setCount] = useState(0)

  const frame = 1000 / 60 // 1초당 60 프레임
  const totalFrame = Math.abs(Math.floor(2000 / frame))

  function countEaseOutExpo(x: number): number {
    //https://easings.net/#easeOutExpo 참고
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
  }

  useEffect(() => {
    let currentNumber = 0
    const countUpAnimation = () => {
      currentNumber += 1
      const progress = countEaseOutExpo(currentNumber / totalFrame)
      const currentCount = Math.round(value * progress)
      setCount(currentCount)

      timerRef.current = requestAnimationFrame(countUpAnimation)
      if (currentCount > value) {
        cancelAnimationFrame(timerRef.current)
      }
    }

    countUpAnimation()
    return () => cancelAnimationFrame(timerRef.current)
  }, [totalFrame, value])
  return <span>{count}</span>
}

export default Counter

// setInterval 연습
// const frame = 1000 / 35; // 1초당 35 프레임
// timerRef.current = setInterval((e: number) => {
//     currentNumber += 1;

//     const progress = countEaseOutExpo(currentNumber / totalFrame)
//     const currentCount = Math.round((value * progress));
//     setCount(currentCount);

//     if (currentNumber === value) {
//         clearInterval(timerRef.current)
//     }
// }, delay);
// return (() => clearInterval());
