let currentUsers = ["admin", "Noor", "Afaq", "Maarij"]

let newUsers = ["ali", "usman", "Noor", "Maarij"]

for(let i = 0; i < newUsers.length; i++)
{
    if(currentUsers.includes(newUsers[i]))
    {
        console.log(newUsers[i])
        console.log("User name already in use")
    }
}

