import {ICard} from './global'
export function Generate(){
    let mas: Array<ICard>=[];
    let LengthOfArray: number=30;
    mas.length=LengthOfArray;
    let testArray: number[] = [];
    testArray=getRandomValuesToArray(LengthOfArray/2);
    console.log(testArray);
    testArray=testArray.concat(testArray);
    testArray=shuffle(testArray);

    for (let i=0; i < mas.length;i++) {
        mas[i]={ data:testArray[i],isOpen:true};
      }
    
    return mas;
        // for (let i=0; i < mas.length;i++) {
    //      mas[i]={ data:getRandomArray(mas,i),isOpen:false};
    //   }
};

  function getRandomArbitrary()
  {
    let random= Math.floor(Math.random() * (50 - 1) + 1);
    return random;
  };
  function shuffle(array:number[]) {

    return array.sort(() => Math.round(Math.random() * 100) - 50);
    
  };
  function getRandomValuesToArray(LengthOfArray:number){
    let ar: number[] = [];
    for(let i=0; i<LengthOfArray;i++){
      ar[i]=getRandomArbitrary();
      for(let j=0; j<i; j++){
        if(ar[i]==ar[j]){       
          ar[i]=getRandomArbitrary();
          j=-1;
          
          
        }
        
      }
    }
    return ar;

  }
//   function  getRandomArray(ar:Array<ICard>, interator:number) :number{ // функция рандома массива своими руками, принимает элемент массива + i
//     let result:number=getRandomArbitrary();
//     if (interator<ar.length/2){
//     ar[interator]={data:result,isOpen:false};
//     interator++;
//     for (let i=0;i<interator/2;i++) {
//       let temp:number=ar[i].data;       
//       if(temp==result){
//         do{
//           result=getRandomArbitrary();
//         }
//        while(result==temp);
//         i=0;
//       }
//     }
//   }else{
//     let count : number=0;
//     do{
   
//       count=0;
//     result=getRandomArbitrary();
    
//     for (let i=0;i<interator;i++){
     
//        let temp:number=ar[i].data;   
//       if(temp==result){
//         count++; 
//       } 
         
//     }    
  
 
//   }while(count!=1);
   
//   }


// return result

// };