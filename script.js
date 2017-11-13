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

    calculateSalaries();
} // end addEmployeeButtonClick


function calculateSalaries(){
    console.log('in calculateSalaries');
    var totalSalaries = 0;
    //loop through employees array
    for (let i = 0; i < employees.length; i++) {
        //convert each salary to a number
        console.log( Number( employees[i].salary ) );        
        //add salary to total salaries 
        totalSalaries += Number( employees[i].salary );
    }// end for each employee
    console.log('Total Salaries:', totalSalaries);
    var monthlySalaryCost = totalSalaries / 12;
    console.log('Monthly Salary Cost:', monthlySalaryCost);
    
};//end calculateSalaries