// Prevent form from submitting normally and handle with JavaScript
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const content = document.getElementById('content').value;
    const result = document.getElementById('result');
    
    if (content.trim() === '') {
        result.innerHTML = '<p style="color: #ff6b9d;">Please enter some text to analyze.</p>';
    } 
    else {
        // Show your analysis results here
        result.innerHTML = `
            <h3>Analysis Complete</h3>
            
        `;
    }
    
    // Show the result box with animation
    result.classList.add('show');
});