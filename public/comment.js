const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comments').value.trim();
    
    const post_id = event.target.getAttribute('data-id');
    if (content && post_id) {
      //alert(`Button selected. id = ${id} and comments = ${comments}`);
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
        alert('comment added');
      } else {
        alert('Failed to create comment');
      }
    } 
  };

  const delButtonHandler = async (event) => {
    
      const comment_id = event.target.getAttribute('data-id');
      
      const response = await fetch(`/api/comments/${comment_id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
        alert('post deleted');
      } else {
        alert('Failed to delete post');
      }
    
  };

  //null check
  if(document.querySelector('.deleteBtn') != null) {
    document.querySelectorAll(".deleteBtn").forEach(btn => btn.addEventListener("click", delButtonHandler));
};
  
//null check
if(document.querySelector('.submitBtn') != null) {
    document
    .querySelector('.submitBtn')
    .addEventListener('click', newFormHandler);
};