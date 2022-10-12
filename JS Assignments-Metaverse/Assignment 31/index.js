let userNames = ["admin", "Noor", "Afaq", "Maarij"]

for(let i = 0; i < userNames.length; i++)
{
    if(userNames[i] == "admin")
    {
    console.log("Hello" + userNames[i] + " Would you like to see the status report?")
    }
    else
    console.log("Hello" + userNames[i] + " welcome to the board")
}

if(userNames.length > 0)
{
    console.log("List is not empty")
}

userNames = []
console.log(userNames.length)