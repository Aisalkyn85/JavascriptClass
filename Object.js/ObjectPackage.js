var stud1 = {
    firstName:"Dana",
    lastName:"Cooper",
    country:"Uganda",

    marks: {
        java: 34,
        rubi: 56,
        python: 89
    }

}
var stud2 = {
    firstName:"Andy",
    lastName:"Adrew",
    country:"USA",

    marks: {
        java: 78,
        rubi: 560,
        python: 89
    }
    
}
var stud3 = {
    firstName:"Lexy",
    lastName:"Vare",
    country:"Dutch",

    marks: {
        java: 78,
        rubi: 560,
        python: 89
    }
    
}
var arr = [stud1,stud2,stud3]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i].marks==arr[j].marks && i != j){
            console.log(arr[i].firstName)

        }
    }
    
        
        
    
}
