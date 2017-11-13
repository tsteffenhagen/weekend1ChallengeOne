$(document).ready( readyNow );
var employees = [];

function readyNow() {
    // on click event handler for the add employee button
    $( '#addEmployeeButton' ).on('click', addEmployeeButtonClick )
} //end doc ready

function addEmployeeButtonClick() {
    console.log('in addEmployeeButtonClick');
    //get user input
   
    //put input into an object
    var newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        employeeId: $('#employeeIdIn').val(),
        jobDescription: $('#jobDescriptionIn').val(),
        salary: $('#salaryIn').val()
    }// end NewEmployee object
    console.log('adding', newEmployee);
    //push the new object into an array
    employees.push( newEmployee );
    console.log(employees);
} // end addEmployeeButtonClick