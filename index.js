const employee = {names:"Kariuki", streetAddress: "Kileleshwa" }
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {...employee, [key]:value};
}
const currentEmployee = updateEmployeeWithKeyAndValue
(employee, "names", "Sam", "streetAddress", "12 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue (employee,key,value){
    employee,[key]=value;
    return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee,"names", "Kariuki");
function destructivelyDeleteFromEmployeeByKey(employee,key){
    const currentEmployee = {...employee};
    delete currentEmployee[key]
    return currentEmployee;
}


