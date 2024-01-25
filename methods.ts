
class Student {
    private fname: string;

    constructor(fname: string = ""){
        this.fname = fname;
    }
    

     set Name(fname:string){
        this.fname = fname;
    }

     get Name(): string {
        return( this.fname);
    }


}

const std1 = new Student();
//std1.fname = "Faran"; not allowed
console.log(std1);

std1.Name = "Faran";
let fname = std1.Name;
console.log(fname);