let guests = ["Afaq", "Maarij", "Khubaib"]

console.log(guests[0] + " You are invited to the birthday party")
console.log(guests[1] + " You are invited to the birthday party")
console.log(guests[2] + " You are invited to the birthday party")

console.log(guests[1] + " is not willing to join the party.")

guests[1] = "Noor"

console.log(guests[0] + " You are invited to the birthday party")
console.log(guests[1] + " You are invited to the birthday party")
console.log(guests[2] + " You are invited to the birthday party")

console.log("Hurrah!! I have found a bigger dinner table")

guests.unshift("ali")
guests.splice(2, 0, "shahmeer")
guests.push("mehdi")

console.log(guests)

