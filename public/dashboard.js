const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#post-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
        alert('post created');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('delete-id')) {
      const id = event.target.getAttribute('delete-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
        alert('post deleted');
      } else {
        alert('Failed to delete post');
      }
    }

    if (event.target.hasAttribute('update-id')) {
      const name = document.querySelector('#post-name-updates').value.trim();
      const description = document.querySelector('#post-desc-updates').value.trim();
      const id = event.target.getAttribute('update-id');

      alert(`id: ${id} name: ${name} desc:${description}`);//debug

      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description }),
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
        alert('post updated');
      } else {
        alert('Failed to update post');
      }
    }
  };
  
  if(document.querySelector('.new-post-form') != null) {
    document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  }
  
  if(document.querySelector('.post-list') != null) {
    document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);
  }
  
  