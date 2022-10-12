let sandwich_items = ["tomato", "Coleslaw", "cucumber", "Lettuce"]

function makeSandwich(item,array)
{
    console.log("The sandwich contains shredded " + item + " with"
    + " " + array[0] + "," + array[1] + "," + array[2] + " and " +
    array[3]);
}

makeSandwich("beef" , sandwich_items)
makeSandwich("chicken", sandwich_items)
makeSandwich("mutton", sandwich_items)