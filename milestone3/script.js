var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display'); // Corrected the ID to match the HTML
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var FullName = document.getElementById('fullName').value;
    var PhoneNumber = document.getElementById('phone').value;
    var Email = document.getElementById('email').value;
    var Education = document.getElementById('educationLevel').value;
    var Skills = document.getElementById('skills').value;
    var WorkExperience = document.getElementById('workExperience').value;
    var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <h3><b>Personal Details</b></h3>\n        <p><b>Full Name: </b>".concat(FullName, "</p>\n        <p><b>Phone Number: </b>").concat(PhoneNumber, "</p>\n        <p><b>Email: </b>").concat(Email, "</p>\n\n        <h3><b>Education</b></h3>\n        <p>").concat(Education, "</p>\n\n        <h3><b>Skills</b></h3>\n        <p>").concat(Skills, "</p>\n\n        <h3><b>Work Experience</b></h3>\n        <p>").concat(WorkExperience, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
});
