console.log(hello);        //imprime undefined                           
var hello = 'world';       //registra world       


////


var needle = 'haystack'; 
test();                     //llama a la función test
function test(){          
    var needle = 'magnet';   //needle vale magnet
    console.log(needle);     //imprime magnet
}


////

var brendan = 'super cool';  //registra super cool
function print(){            //la funciòn no se realiza porque no fue llamada
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);      //imprime super cool


////


var food = 'chicken';
console.log(food);    //imprime chicken
eat();                   //llama a la función eat
function eat(){
    food = 'half-chicken';    
    console.log(food);       //imprime half-chicken
    var food = 'gone';          //cambia el valor de food a gone
}

////

mean();             //la función no existe
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); //imprimirá error, las variables no fueron declaradas


////


console.log(genre);  //undefined
var genre = "disco";  
rewind();           //llama a la función. Imprime rock, luego r&b
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); //imprime disco


////


dojo = "san jose"; 
console.log(dojo);  //imprime san jose
learn();            //llama a la función. imprime seattle y luego burbank
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";   //variante interna, sólo dentro de learn
    console.log(dojo);
}
console.log(dojo);  //imprime san jose


////


console.log(makeDojo("Chicago", 65)); //llama a la función makeDojo. Manda dos valores. Imprime true
console.log(makeDojo("Berkeley", 0)); //Imprime closed for now
function makeDojo(name, students){  //lleva dos parámetros a usar
    const dojo = {};    
    dojo.name = name;     
    dojo.students = students;
    if(dojo.students > 50){    
        dojo.hiring = true;  
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
