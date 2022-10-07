// Question 1 —>  (ADVANCE)
// Write a function that checks if an array is sorted ?
//完成

// let numList = [1,2,3,4,5,6]; 

// function sortedList(array) {

//     let flag = false;
//     for (let i = 0; i<numList.length - 1;i++){
//         let j = i + 1;
//         if(array[i]<array[j]){
//             flag = true;
//         }
//         else {
//             flag = false;
//         }
//     }
// return flag;
// }

//     console.log(sortedList(numList));
    
    //sortedList(numList) // true
    
    
    //sortedList( [ 50, 10, 4, 4 , 2, 3]) // False


/*Queston 2 → (ADVANCE)

    Write a function to check if there are duplicates in a sorted array ?
    // HINT - You have to use 2 for loops nested to solve this problem*///ネストしないほうがいいみたい
    
//     let numList = [ 2, 10, 12, 12, 40, 50]; // 
//     function duplicatesArrayInSorted(array) {
//         let i = array[0]
//         let j = i+1
//         for(let i = 0; i<numList.length-1;i++){
//            if(array[i]==array[j]){
//             console.log("There is a duplicate")
//            }
//         }//二回出てくる（笑）
    
    
//     }
//    duplicatesArrayInSorted(numList);

//Queston 3 → (ADVANCE)

//Write a function to check if there are duplicates in an array ?
// HINT - You have to use 2 for loops nested to solve this problem

// let numList = [ 20, 40, -10, 5, 40, 5, 11]; // やりかけ
// function duplicatesArray(array) {
//     let sameNum = array[0]
// let i;
//         let j = array[i]+1
//         for(let i = 0; i<numList.length-1;i++){
//             for(let j = 0; j<numList.length-1-1;j++)
//             return sameNum
//            if(array[i]==array[j]){
//             return true
//            }
//         }


// }

// duplicatesArray(numList) // True

    