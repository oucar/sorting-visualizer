import { useState, useEffect } from 'react';
import './App.css';
import Element from './components/Element/Element';
import bubbleSort from './algorithms/bubbleSort';
import selectionSort from './algorithms/selectionSort';
import insertionSort from './algorithms/insertionSort';
import mergeSort from './algorithms/mergeSort';


const App = () => {

  const [delay, setDelay] = useState(100)
  const [activeIndex, setActiveIndex] = useState([])
  const [currentArray, setCurrentArray] = useState(
    [20, 3, 10, 13, 14, 15, 7, 2, 12, 9, 16, 
      17, 5, 1, 4, 6, 11, 19, 20, 15, 7, 2, 8]
  )
  useEffect(() => {
    mergeSort(currentArray, setCurrentArray, setActiveIndex, delay)
  }, [])


  
  const elements = currentArray.map((el, index) => {
      return (
        <Element
          key={index}
          orderNo={index}
          height={el*10}
          active={activeIndex.includes(index) ? true : false}
          sorted={false}
        />
      )
  })

  return (
    <div className="App">
      <div className='elements'>
        {elements}
      </div>
    </div>
  )
}

export default App;