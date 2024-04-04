//Q1.
function manipulateArray(arr) { 
    
     for (let i = 0; i < 4 && i < arr.length; i++) 
     { 
        arr[i] *= arr[i]; 
    
    } 

      for (let i = arr.length - 2; i < arr.length; i++)
       { 
        
        arr[i] += 10;
    
    } 

       return arr; 
    } 
       
       const manipulatedArray = manipulateArray([2, 4, 6, 8, 10, 12]); 
      
       console.log(manipulatedArray);


    //Q2. 

    let arrNum = [ 5, 6, 7, 8, 9];

     let i = 0;

      while (i < arrNum.length)

       {  if (arrNum[i] === arrNum[3])

         { break; }

          console.log(arrNum[i]); 

          i++; 
        }


    //Q3. 

    function processFruits(arr) { 

        for (let i = 0; i < arr.length; i++) { 

            if (i === 1) { 

                continue; } 

                console.log(arr[i]); } } 

                let fruits = ['apple', 'banana', 'orange', 'grape'];

                processFruits(fruits);


   // Q4.

    function logArrayElements(arr) 
    { for (let i = 0; i < arr.length; i++) { 

        console.log(arr[i]); } 
    
    }
         
          logArrayElements(['Father', 'Mother', 'Sister', 'Brother', 'Cousin']) ;
    

         //Q5. 

         function reverseString(str){ 

        let reversed = '';

         let i = str.length - 1; 

         while (i >= 0) 

         { reversed += str[i]; i--; } 

        return reversed; };

          let reversedString = reverseString("I am in Adalab"); 
          
          console.log(reversedString); 