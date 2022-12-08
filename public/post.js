const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comments = document.querySelector('#comments').value.trim();
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
    }
    
    if (comments && id) {
      //alert(`Button selected. id = ${id} and comments = ${comments}`);
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comments, id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
        alert('comment added');
      } else {
        alert('Failed to create comment');
      }
    } 
  };
  
  document
    .querySelector('.submitBtn')
    .addEventListener('click', newFormHandler);