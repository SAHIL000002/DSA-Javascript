// find the max element from an array.

let arr = [10 ,2 ,78 ,100 ,34,-4,23,2452, 4]

let max = arr[0]

for (let i = 0 ; i<arr.length;i++){
    if (arr[i]>max){
        max = arr[i]
    }
}

console.log(max)