export function Sort (input: Array<String>): Array<String> | undefined{
    // Declare a variable representing the unsortedList, which initially is equal to the sorted list.
    var list = input
    // Bubble sort:
    var listLength = list.length
    // 1. Go through each element in the unsorted list using a for loop 
    for (let index1 = 0; // Initiate for loop: Start at the first index which is 0
        index1 < listLength; // Condition: Ends the loop if we reach the end of the list (Ie. We pass the last index)
        index1++) // Execution: For every iteration, increase the value of index1 by 1. This means we move to the next index in the list
        {
            var item1 // Assign item1 to the item in the list at index1.
            //HINT: List items are accessed by list[index] where list is the list containg the item, and index is the index at which the item is stored.
    
        // 2. For each item1, loop through the remaining list
        for (let index2 = index1+1; index2<listLength;index2++) {
            var item2 // Assign item2 to the item in the list at index2.
            //3. Use an if statement to check if item1 is larger than item2
            if () {
                // 4. If item1 is larger than item2, swap the items in the list
                
                // 5. And let item1=item2 for the next comparison.
                
            }
                
        }
    }
    // return the now sorted list
}

export function testSort():Array<String> {
    var unsortedList = new Array("this", "is", "a", "sample", "string", "which", "we", "will", "use", "for", "sorting")
    //Sort the lyrics
    var sortedList = Sort(unsortedList)
    return sortedList
}

// Uncomment the line below and run the following in the 
// terminal to test your sort function: ts-node src/code/Task4/SortingAlgorithm.ts 
//UNCOMMENT BELOW
//console.log(testSort())
