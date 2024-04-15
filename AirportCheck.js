// Checks for airport tickets through a list and if not add a new ticket.

var registeredClients = ["name1", "name2", "name3"];
var ticketTypes = ["business", "economy", "economy"];

function validateTickets(name) {
    return registeredClients.include(name); // check if name is in the list and return true if it does, return no if not.
}

function addClient(name){
    registeredClients.push(name); // add name into registeredClients list

    do  {
        var seat = prompt("Enter seat name")
    }
    while(!(seat == "business" || seat == "economy")){ // if ticket isnt economy or business
        ticketTypes.push(seat) // add ticket type (seat) into ticketTypes list
    }
}

let newName = "name4";
result = validateTickets(newName);
if(!result) { // if newName isnt in registeredClients list
    addClient(newName) // add the newName as a new client in the registeredClients list along with ticket type in ticketTypes list.
}