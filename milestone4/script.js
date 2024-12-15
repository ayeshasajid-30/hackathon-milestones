var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var educationLevel = document.getElementById('educationLevel').value;
        var skills = document.getElementById('skills').value;
        var workExperience = document.getElementById('workExperience').value;
        var resumeHTML = "\n            <h2><b>Editable Resume</b></h2>\n            <h3><b>Personal Details</b></h3>\n            <p><b>Full Name: </b><span contenteditable =\"true\">".concat(fullName, "</span></p>\n            <p><b>Email: </b><span contenteditable =\"true\">").concat(email, "</span></p>\n            <p><b>Phone: </b><span contenteditable =\"true\">").concat(phone, "</span></p>\n\n            <h3><b>Education</b></h3>\n            <p contenteditable =\"true\">").concat(educationLevel, "</p>\n\n            <h3><b>Skills</b></h3>\n            <p contenteditable =\"true\">").concat(skills, "</p>\n\n            <h3><b>Work Experience</b></h3>\n            <p contenteditable =\"true\">").concat(workExperience, "</p>\n        ");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('Error: Resume display element not found.');
        }
    });
}
else {
    console.error('Error: Form element not found.');
}
