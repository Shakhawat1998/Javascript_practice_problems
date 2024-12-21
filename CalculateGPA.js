function calculateGPA(courses) {
    let totalCreditHours = 0;
    let totalGradePoints = 0;

    const gradeToPoint = {
        A: 4.0,
        B: 3.0,
        C: 2.0,
        D: 1.0,
        F: 0.0
    };

    courses.forEach(course => {
        const { creditHours, grade } = course;
        if (gradeToPoint[grade] !== undefined) {
            totalCreditHours += creditHours;
            totalGradePoints += gradeToPoint[grade] * creditHours;

        }
        else {
            console.error(`Invalid grade: ${grade}`);
        }
    });

    const gpa = totalGradePoints / totalCreditHours;

    let finalGrade = '';

    if (gpa >= 3.5) finalGrade = 'A';
    else if (gpa >= 3.0) finalGrade = 'B';
    else if (gpa >= 2.0) finalGrade = 'C';
    else finalGrade = 'F';

    return {
        gpa: gpa.toFixed(2),
        finalGrade
    };

}




const courses = [
    { couseName: 'Mathematics', creditHours: 3, grade: 'A' },
    { courseName: 'Physics', creditHours: 4, grade: 'B' },
    { courseName: 'Chemistry', creditHours: 3, grade: 'C' }
]

const result = calculateGPA(courses);

console.log(`GPA: ${result.gpa}`);
console.log(`Final Grade: ${result.finalGrade}`);
