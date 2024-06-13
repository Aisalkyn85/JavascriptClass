//reverse number and find product use the same function
















function show(){
    let reversed = 0
    let product = 1
    let divide = 0
    let num = 934
    while(num>0){
        divide = Math.floor(num%10)
        reversed = reversed*10+divide
        product *=divide
        num = Math.floor(num/10)
    }
    
    
}
show()
