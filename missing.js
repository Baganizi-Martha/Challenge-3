var nums = [1,2,3,5,7,9];
var found = [];

for (var i=0; 1 < nums.length; i++) {
    if (nums[i] - nums[i-1] !=1) {
        var x = nums[i] - nums[i-1];
        var j = 1;
        while(j<x)
        {
            found.push(nums[i-1]+j);
            j++
        }
    }
}
console.log(alert(found));