
import { Generate } from './GenerateArrayCard'
import {Card} from './componets/Card'
import { ICard } from './global'
import React from 'react';
import './styles/App.css';
import {useEffect} from 'react'
function App() {

  const [cardArray, setCarArray] = React.useState(Generate());
  const [prevIndex, setPrevIndex] = React.useState(-1);
  const [isDisabled, setIsDisabled] = React.useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      const newArray = [...cardArray];
      newArray.forEach(item => item.isOpen = false);
      setCarArray(newArray);
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  function flipAndHide(index :number, prevIndex:number) {
    setTimeout(() => {
     
      const newArray = [...cardArray];
      newArray[index].isOpen = false;
      newArray[prevIndex].isOpen = false;
      setCarArray(newArray);
      setIsDisabled(false);
 
    }, 2000)
  }
  const flipCard = (index: number) => {
    if (isDisabled) {
      return;
    }
    const newArray = [...cardArray]; // copy of array
    newArray[index].isOpen = true;
    if (prevIndex == -1) {
      setPrevIndex(index);
      newArray[index].isOpen = true;
    }
    else {
      if(prevIndex != -1 && newArray[prevIndex].data != newArray[index].data){
        console.log("previndex ne raven-1 prev.data= " + newArray[prevIndex].data + " index.data = "+ newArray[index].data)
        newArray[index].isOpen = true;
        setCarArray(newArray);
        setIsDisabled(true);
        flipAndHide(index, prevIndex);
        setPrevIndex(-1);
        return;
      }
      else{
        newArray[index].isOpen = true;
        newArray[prevIndex].isOpen=true;
        setIsDisabled(true);
        setIsDisabled(false);
        setPrevIndex(-1);
      }

    }
   
    setCarArray(newArray)
  }

  return (<div className='App'>
    <h1 className='MyHeader'> Mahjong-like game  </h1>
    <div className="Conteiner">
     
      {cardArray?.map((temp, index) =>
        <Card key={index} index={index} temp={temp} flipCard={flipCard} />)}
    </div>
    </div>
  
  );
}

export default App;
