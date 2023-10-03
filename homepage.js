document.getElementById('feedback-form').addEventListener('submit', (event) =>{
    event.preventDefault();
    const feedbackInput = document.getElementById('feedback-input');
    console.log(feedbackInput);
    if (feedbackInput.value === ""){
        event.preventDefault();
        alert('Please fill in the feedback form')
    }
})