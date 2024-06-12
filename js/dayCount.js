// var element1 = document.getElementById("date").value
// console.log(element1)


// const button = document.getElementById('myButton');
// button.addEventListener('click', getElement());

// const getElement=()=>{
//     console.log("sdsad" , element1)
// }

// const handleChange=(event)=>{
//     event.target.value
//     console.log("event" , event.target.value)
// }

document.getElementById("output").hidden = true

function saturday() {
    let date1 = document.getElementById("date1").value
    let date2 = document.getElementById("date2").value
    countSaturday(date1, date2)
    sunday()
}

function countSaturday(date1, date2) {
    
    let curr = new Date(date1)
    let end = new Date(date2)
    //let days = end.getDate() - curr.getDate()
    console.log(curr, curr.getDate())
    let count = 0
    while(curr <= end){
        if(curr.getDay() === 6){
            count++
        }
        curr.setDate(curr.getDate() + 1)
    }
    document.getElementById("output").hidden = false
    document.getElementById("out1").innerHTML = count
    console.log(count)
    return count
    // while(curr.getDay)
}

function sunday() {
    let date1 = document.getElementById("date1").value
    let date2 = document.getElementById("date2").value
    countSunday(date1, date2)
}

function countSunday(date1, date2) {
    
    let curr = new Date(date1)
    let end = new Date(date2)
    //let days = end.getDate() - curr.getDate()
    console.log(curr, curr.getDate())
    let count = 0
    while(curr <= end){
        if(curr.getDay() === 0){
            count++
        }
        curr.setDate(curr.getDate() + 1)
    }
    document.getElementById("output").hidden = false
    document.getElementById("out2").innerHTML =  count
    console.log(count)
    return count
    // while(curr.getDay)
}