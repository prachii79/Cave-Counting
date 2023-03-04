/* intialize the count as 0
listen for clicks on the increment button
increment the count variable when the button is clicked
change the count-el in the HTML to reflect the new count */

let countEl = document.getElementById("count-el")
let count = 0
function increment(){
//  console.log("increment was clicked")
    count += 1
    console.log(count)
    countEl.textContent = count
}
let saveEl = document.getElementById("save-el")
// 1. Create a function, save(), which logs out the count when it's called
function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countDash = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countDash 
    countEl.textContent = 0
    count = 0
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}