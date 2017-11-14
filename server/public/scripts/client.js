$(document).ready( readyNow );
var employees = [];

function readyNow() {
    // on click event handler for the add employee button
    $( '#addEmployeeButton' ).on('click', addEmployeeButtonClick )
    $( document ).on('click', '.removeButton', function(){
            //get the value of "data-index" on this button
            var myIndex = $(this).data('index');
            console.log('in document on click .removeButton', myIndex);  
            //remove this employee from the array
            employees.splice(myIndex, 1);
            calculateSalaries();
        });
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
    // clear inputs
    $('#firstNameIn').val( '' ),
    $('#lastNameIn').val( '' ),
    $('#employeeIdIn').val( '' ),
    $('#jobDescriptionIn').val( '' ),
    $('#salaryIn').val( '' )
    calculateSalaries();
} // end addEmployeeButtonClick


function calculateSalaries(){
    console.log('in calculateSalaries');
    var totalSalaries = 0;
    //loop through employees array
    for (let i = 0; i < employees.length; i++) {
        //convert each salary to a number      
        //add salary to total salaries 
        totalSalaries += Number( employees[i].salary );
    }// end for each employee
    console.log('Total Salaries:', totalSalaries);
    var monthlySalaryCost = totalSalaries / 12;
    console.log('Monthly Salary Cost:', monthlySalaryCost);
    displayOutput( totalSalaries, monthlySalaryCost );
};//end calculateSalaries

function displayOutput( salaries, monthly ) {
    console.log('in displayOutput', salaries );
    //total Salaries
    $( '#totalSalaryOut' ).empty();
    $( '#totalSalaryOut' ).append('Total Salaries: $',salaries.toFixed(2));
    //monthly salary cost
    $( '#monthlySalaryCostOut').empty();
    $( '#monthlySalaryCostOut').append('Monthly Salary Cost: $', monthly.toFixed(2));    
    //all employees
    //loop thorugh employees array
    //aoppend each to unordered list
    $('#employeesOut').empty();
    for (let i = 0; i < employees.length; i++) {
        $('#employeesOut').append(`<li><strong>${employees[i].lastName}, ${employees[i].firstName}</strong>
                                    , Employee Id: ${employees[i].employeeId},
                                    ${employees[i].jobDescription},
                                    ${employees[i].salary} <button data-index=${i} class="removeButton">Remove</button></li>`)
        
    }// end all employees
} //end displayOut