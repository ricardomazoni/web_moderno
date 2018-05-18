console.log((function f (n) { 
                console.log(n)
                 return (n > 1 ? n * f(n - 1) : n) 
             })(5))