function calculateTotal(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }
    return total;
}
function calculateAverage(total) {
    return total / 5;
}
function calculateGrade(average) {
    if (average >= 90) {
        return "A+";
    } else if (average >= 80) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else if (average >= 50) {
        return "D";
    } else {
        return "F";
    }
}
function checkResult(marks) {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 40) {
            return "Fail";
        }
    }
    return "Pass";
}
function calculateResult() {
    let studentName = document.getElementById("studentName").value;
    let rollNumber = document.getElementById("rollNumber").value;
    let marks = [];
    let error = document.getElementById("error");
    if (studentName == "" || rollNumber == "") {
        error.innerHTML = "Please enter student name and roll number.";
        return;
    }
    for (let i = 1; i <= 5; i++) {
        let mark = Number(document.getElementById("subject" + i).value);

        if (mark < 0 || mark > 100 || document.getElementById("subject" + i).value == "") {
            error.innerHTML = "Please enter valid marks between 0 and 100.";
            return;
        }
        marks.push(mark);
    }
    error.innerHTML = "";
    let total = calculateTotal(marks);
    let average = calculateAverage(total);
    let grade = calculateGrade(average);
    let status = checkResult(marks);
    document.getElementById("resultName").innerHTML = studentName;
    document.getElementById("resultRoll").innerHTML = rollNumber;
    document.getElementById("total").innerHTML = total;
    document.getElementById("average").innerHTML = average.toFixed(2);
    document.getElementById("grade").innerHTML = grade;
    document.getElementById("status").innerHTML = status;
    document.getElementById("result").style.display = "block";
    if (status == "Fail") {
        document.getElementById("status").style.color = "#d32f2f";
    } else {
        document.getElementById("status").style.color = "#198754";
    }
}
function resetForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("rollNumber").value = "";
    for (let i = 1; i <= 5; i++) {
        document.getElementById("subject" + i).value = "";
    }
    document.getElementById("error").innerHTML = "";
    document.getElementById("result").style.display = "none";
}