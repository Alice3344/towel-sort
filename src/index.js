
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(!matrix) {

     return[]

   }

   let result = matrix.map((x, i) => {

     if(i % 2 === 0) {

      return matrix[i];

     } else {

       return matrix[i].reverse()

     }

 

   })

   return result.flat()

}
