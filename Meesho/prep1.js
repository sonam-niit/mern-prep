//String is palindrome

function isPalindrome(str){
    return str == str.split().reverese().join('');
}

//Reverse String without using inbuilt function
function reverseString(str){
    let reverse=''
    for(let ch of str){
        reverse+=ch;
    }
    return reverse
}

//Time Complexity: O(n)
//space Complexity: O(n)

//
function secondlargest(arr){

    let max= -Infinity,second= -Infinity
    for(let num of arr){
        if(num>max){
            second=max;
            max=num;
        }else if(num>second && num!==max){
            second=num
        }
    }
}

//Time Complexity: O(n)
//space Complexity: O(1)

function isBalanced(str){
    const stack =[] ;// stack as array
    const map ={')':'(',  ']':'[', '}':'{'}; //Object with Bracket key values
    const data= ['(','{','[']
    for( let ch of str){
        if(data.includes(ch)){
            stack.push(ch);
        }else if(map[ch]){
            if(stack.pop()!== map[ch]) return false
        }
        console.log(stack)
    }
    return stack.length===0; //lastly we are matching stack length is 0
    //if its return true means your equation is balanced
}

// console.log(isBalanced("{'name':()(,'test':'{}'}"))


//Remove Duplicates from Array
function duplicates(array){
   //return [...new Set(array)];// spread op to convert set inti array
   const arr=[]
   for(let n of array){
    if(!arr.includes(n))
        arr.push(n)
   }
   return arr;
}

function frequency(str){
    const map= new Map()
    for(let ch of str){
        if(map.has(ch)){
            map.set(ch,map.get(ch)+1)
        }else{
            map.set(ch,1);
        }
    }
    return map
}
// console.log(frequency('malayalam'))

//Longest Consecutive Sequence

function longestConsecutive(nums){
    const set= new Set(nums); //set object
    let maxLen=0;
    for(let num of set){
        if(!set.has(num-1)){
            
            let current= num;
            let count=1;
            while(set.has(current+1)){
                current++;
                count++
            }
            maxLen = Math.max(maxLen,count)
        }
    }
    return maxLen
}

console.log(longestConsecutive([1,2,5,3,2,7,6,8,9]))