// Fetch user data and populate the page
fetch('user.json')
  .then(response => response.json())
  .then(data => {
    // Change the title dynamically based on the user's name
    document.title = `${data.name} - Portfolio`;

    // Add SEO meta tags dynamically
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = data.about || 'Default description';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = data.tags.join(', ') || 'profile, personal website';
    document.head.appendChild(metaKeywords);

    const metaAuthor = document.createElement('meta');
    metaAuthor.name = 'author';
    metaAuthor.content = data.name;
    document.head.appendChild(metaAuthor);

    // Dynamically set the favicon from the profile image
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = data.image || 'default-profile.png'; // Fallback to default if no image
    document.head.appendChild(favicon);

    // Set profile image and name
    const profileImage = document.getElementById('profile-image');
    profileImage.src = data.image || 'default-profile.png';
    profileImage.alt = `${data.name} Profile Image`;

    document.getElementById('name').textContent = data.name;

    // Typewriter effect for tags
    const app = document.getElementById('typewriter');
    const typewriter = new Typewriter(app, { loop: true });
    data.tags.forEach(tag => {
      typewriter.typeString(`I am a ${tag}`).pauseFor(1000).deleteAll();
    });
    typewriter.start();

    // Social links
    const socialContainer = document.getElementById('social-links');
    data.social.forEach(social => {
      const link = document.createElement('a');
      link.href = social.url;
      link.target = '_blank';
      const icon = document.createElement('img');
      icon.src = social.icon;
      icon.alt = `${social.name} icon`;
      link.appendChild(icon);
      socialContainer.appendChild(link);
    });

    // About text
    document.getElementById('about-text').textContent = data.about;

    // Projects list
    const projectsContainer = document.getElementById('projects-list');
    data.projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
      projectDiv.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <button onclick="window.open('${project.url}', '_blank')">Visit</button>
      `;
      projectsContainer.appendChild(projectDiv);
    });

    // Contact info
    const contactContainer = document.getElementById('contact-info');
    data.contact.forEach(contact => {
      const div = document.createElement('div');
      div.textContent = `${Object.keys(contact)[0]}: ${Object.values(contact)[0]}`;
      contactContainer.appendChild(div);
    });

    // Resume button
    const resumeButton = document.getElementById('resume-button');
    resumeButton.addEventListener('click', () => {
      window.open(data.resume, '_blank');
    });
  })
  .catch(err => console.error('Error loading JSON:', err));

// Toggle theme
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
