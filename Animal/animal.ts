class Animal {
     name() {
        type animal = {
            name:string
        };

        type d = {
            age:number
        }

        type all = animal | d;

        let n: all = {
            name:"do",
             age:45
        };
        
    }
}