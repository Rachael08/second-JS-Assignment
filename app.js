const array1 = [15, 30, 45, 60 ];
const array2 = [5, 6, 3, 10 ];

if(array1.length == 4, array2.length == 4){

function finalResults(){

    let newArray = new Array (4);
    newArray[0] = (array1[0] / array2[0]);
    newArray[1] = (array1[1] / array2[1]);
    newArray[2] = (array1[2] / array2[2]);
    newArray[3] = (array1[3] / array2[3]);
    return newArray;

};

console.log(finalResults());

}else{console.log('Error; please ensure you have the same length of arrays.')};
