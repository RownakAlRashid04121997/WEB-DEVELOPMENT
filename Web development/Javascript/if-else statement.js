let month= prompt("Enter the month name")


if (month=="September"|| month=="April"|| month=="June" || month=="November") {
    alert("There are 30 days")
    
}
else if(month=="February"){
    alert("There are 28 days")

}
else if(month=="January"|| month=="March"|| month=="May" || month=="July"|| month=="August"|| month=="September"|| month=="October"|| month=="December"){
    alert("There are 31 days")
}
else{
    alert("Doesn't exist")
}
