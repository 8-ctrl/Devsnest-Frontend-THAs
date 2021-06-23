//Questions are in the link given below
//https://docs.google.com/document/d/1ocDYa2B27H2tZVI7f_i-7Ze6SIX_2g2N-jUJJ9t__0g/edit

//Q1 
function is_array(x){
    return (Array.isArray(x))
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// //Q2
function array_Clone(x){
    return x.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//Q3
function first(arr,n){
    ans=[]
    if (n==undefined) return arr[0];
    if (n<0) return [];
    if (n>arr.length) return arr;
    for(i=0;i<n;i++){
        ans.push(arr[i])
    }
    return ans
};
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

 //Q4
function join_array(x){
    return x.join('');
}
console.log(join_array( ["Red", "Green", "White", "Black"]))

//Q5
function frequent_item(arr){
    let dict ={} 
    let ans = 0
    arr.forEach(element => {
        if (dict[element])
        {
            dict[element] = dict[element] + 1
        }
        else{
            dict[element] = 1
        }
    });
    console.log(dict)
    ans_array=Object.keys(dict)
    for (var i = 0; i < ans_array.length; i++) {
        if (ans < ans_array[i] ) {
            ans = arr[i];
        }
    }
    return ans
}
console.log(frequent_item([3,'a','a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))


