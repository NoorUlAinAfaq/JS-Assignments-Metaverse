let name1 = "Noor Ul Ain"
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());

function titleCase(_name)
{
    let str = _name.toLowerCase().split(" ")
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1); 
    }
        console.log(str.join(' ')); 

}
titleCase(name1)