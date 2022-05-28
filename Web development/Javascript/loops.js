for(let i=0;i<11;i++){    /*for loop*/
    console.log("Hello World")
}

for(let j=50; j>4; j=j-5){  /*Reverse looping*/
    console.log(j)
}


for(let i=0;i<11;i++){
    if(i%3==0){  /*Basic if statement*/
        console.log(i+"is divided by 3")
    }
}

let i=0;
while(i<25){ /*Basic While loop*/
    console.log("While loop running ")
    i++
}


let j=5;
do{      /*In the do section first the editor will do the job*/
    console.log('Value of j is'+j)
    j=j+5
}while(j<25) /*Then inthe while section it will check wheither the conditon matches to continue*/


let book= {         /*For .....In loop*/
    name:"xyz",
    publisher:"abc",
    pages:100

}
for(let BookKey in book){
    console.log(BookKey,book[BookKey])
}



let names=["abc","def","ghi","jkl"]
for(let nameKey in names){
    console.log(nameKey,names[nameKey])
}


for(names1 of names){  /*For.....of loop*/
    console.log(names1)
}





