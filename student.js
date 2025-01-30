function downloadResume() {
    // Replace the link with your actual resume file path
    const resumeLink = 'path_to_your_resume.pdf'; 
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = 'Gopikrishna_Kummari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function flipCard(card) {
    card.classList.toggle('flipped');
}
