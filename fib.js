const fib = (n, memo = {}) => {
   // if value in memo return the stored value
   if(n in memo) return memo[n];
   if(n < 2) return 1;

   // store values in cache 
   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
   return memo[n];
}


/**
   memo values
   {
      3: 2,
      4: 3,
      5: 5
      6: 8
   }

   - cached visited values so whenever we encounter the same operation, just get the value from the memo instead of compute
      the operation over and over, we cut half of the operations
      time complexity would be O(n) Linear

   - time complexity without using memo was O(2^n) exponantial
 */