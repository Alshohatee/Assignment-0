class MySolution {
    constructor() {
        this.flag = false; // this is optional to use;
    }

    binarySearch(nums, target) {
        // Insert code here;

        let half = Math.floor(nums.length / 2)

        if (nums[half] > target) {
            // call the function again until we find it on left
            // left side
            let left = nums.slice(0, half)
            return this.binarySearch(left, target)

        } else if (nums[half] < target) {
            // call the function again until we find it on left
            //right side
            let right = nums.slice(half + 1, nums.length);
            return this.binarySearch(right, target);

            // found 
        } else if (nums[half] == target) {
            return true;
            //otherwise not found  
        } else {
            return false;
        }
    }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;