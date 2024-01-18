function getUserData() {
  const username = document.getElementById('username').value;
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      const profile = document.getElementById('profile');
      profile.innerHTML = `<div class="userinfo"><div class="userimg">
        <img src="${data.avatar_url}" alt="Profile picture">
        </div>
        <div class="userdes">
        <h2>Name:-${data.name}</h2>
        <p><a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
        </div>
        </div>
      `;
    });

  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
      const repositories = document.getElementById('repositories');
      repositories.innerHTML = '<h2>Repositories</h2>';
      data.forEach(repo => {
        repositories.innerHTML += `<p><a href="${repo.html_url}" target="_blank">${repo.full_name}</a></p>`;
      });
    });
}

  document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        const profiles = document.getElementById('profiles');
        data.slice(0, 5).forEach(user => {
          const profileDiv = document.createElement('div');
          profileDiv.classList.add('profile');
          profileDiv.innerHTML = `
          <div><img src="${user.avatar_url}" alt="${user.login}" width="100"></div>&#160;&#160;
          <div class="user">
            <h5>Name:-${user.login}</h5>
            <h6>${user.url}</h6>
            <a href="${user.html_url}" target="_blank">View Profile</a>
          </div>
          `;
          profiles.appendChild(profileDiv);
        });
      })
      .catch(error => console.error('Error fetching Github profiles:', error));
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        const profiles = document.getElementById('profiles-1');
        data.slice(5, 10).forEach(user => {
          const profileDiv = document.createElement('div');
          profileDiv.classList.add('profile');
          profileDiv.innerHTML = `
          <div><img src="${user.avatar_url}" alt="${user.login}" width="100"></div>&#160;&#160;
          <div class="user">
            <h5>Name:-${user.login}</h5>
            <h6>${user.url}</h6>
            <a href="${user.html_url}" target="_blank">View Profile</a>
          </div>
          `;
          profiles.appendChild(profileDiv);
        });
      })
      .catch(error => console.error('Error fetching Github profiles:', error));
  });