const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const educationLevel = (document.getElementById('educationLevel') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;

        const resumeHTML = `
            <h2><b>Editable Resume</b></h2>
            <h3><b>Personal Details</b></h3>
            <p><b>Full Name: </b><span contenteditable ="true">${fullName}</span></p>
            <p><b>Email: </b><span contenteditable ="true">${email}</span></p>
            <p><b>Phone: </b><span contenteditable ="true">${phone}</span></p>

            <h3><b>Education</b></h3>
            <p contenteditable ="true">${educationLevel}</p>

            <h3><b>Skills</b></h3>
            <p contenteditable ="true">${skills}</p>

            <h3><b>Work Experience</b></h3>
            <p contenteditable ="true">${workExperience}</p>
        `;

        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error('Error: Resume display element not found.');
        }
    });
} else {
    console.error('Error: Form element not found.');
}