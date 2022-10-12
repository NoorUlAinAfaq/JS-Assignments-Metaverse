let array = ["Harvard", "John", "Micheal", "Brut"]

function printMagician()
{
    console.log(array)
}

printMagician()

function make_great()
{
    for(let i = 0; i < array.length; i++)
    {
        array[i] = "Great " + array[i];
    }
}
make_great()
printMagician()