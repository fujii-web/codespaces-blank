function isPrime (n){
    int num = sqrt(n);
    for(let i=1;i<n;i++){
        if(num%i == 0){
            return false;
        }
    }
   return true;
}

isPrime(311);
