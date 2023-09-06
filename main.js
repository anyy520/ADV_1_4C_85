
    

StudentArray = [];
    
function submit()
{
    var displayStudentArray = [];

    for (var j = 1; j <= 4; j++) 
    {
        var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;
        console.log(nameOfTheStudent);
        StudentArray.push(nameOfTheStudent);
    }

    console.log(StudentArray);

    var lenghtOfNameOfStudentsArray = StudentArray.length;
    console.log(lenghtOfNameOfStudentsArray);

    for (var k = 0; k < lenghtOfNameOfStudentsArray; k++) 
    {
        displayStudentArray.push("<h4>NOME - "+ StudentArray[k] + "</h4>");
        console.log(displayStudentArray);
    }

    console.log(displayStudentArray);
    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

    var removeCommas = displayStudentArray.join("  ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


    document.getElementById("submitButton").style.display = "none";

}
