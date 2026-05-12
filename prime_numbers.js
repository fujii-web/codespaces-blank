function isPrime (n){
    for(let i=2;i<n;i++){
        if(n%i != 0){
            console.log("true");
            return 1;
        }
    }
    
    if(n == 2){
        console.log("true");
        return 1;
    }

    console.log("false");
}

isPrime(311);