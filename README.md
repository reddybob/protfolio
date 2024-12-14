# Portfolio

Welcome to my portfolio! This repository contains information about my projects, skills, and experience.

## Table of Contents

- [About Me](#about-me)
- [Projects](#projects)
- [Skills](#skills)
- [Experience](#experience)
- [Contact](#contact)
- [Configuration](#configuration)
- [Deployment](#deployment)

## About Me

A brief introduction about yourself.

## Projects

### Project 1
- **Description:** A short description of the project.
- **Technologies:** List of technologies used.
- **Repository:** [Link to the repository](#)

## Skills

- Skill 1

## Experience

### Job Title at Company
- **Duration:** Start Date - End Date
- **Responsibilities:** Brief description of your responsibilities.

### Job Title at Company
- **Duration:** Start Date - End Date
- **Responsibilities:** Brief description of your responsibilities.

## Contact

- **Email:** your.email@example.com
- **LinkedIn:** [Your LinkedIn Profile](#)
- **GitHub:** [Your GitHub Profile](#)

## Configuration

To configure the portfolio, you can use a `user.json` file with the following structure:

| Variable   | Type                | Description                                                                                                                                               |
|------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`     | String              | The full name of the user (e.g., "Seshu Sai"). This will be displayed as the user's name in the portfolio.                                                 |
| `tags`     | Array of Strings    | An array of tags describing the user's profession or expertise (e.g., ["Developer", "Programmer", "Engineer"]). These tags will be used in the typewriter effect. |
| `image`    | String              | A URL or file path to the user's profile image (e.g., "https://avatars.githubusercontent.com/u/105602908?v=4"). This image is used for the profile picture and favicon. |
| `social`   | Array of Objects    | An array of objects containing social media information. Each object includes: `name` (String) - Name of the social media platform, `icon` (String) - URL to the icon image, `url` (String) - URL to the social media profile. |
| `contact`  | Array of Objects    | An array of contact details. Each object contains a key-value pair representing the contact info, such as: `{"location": "Vadodara, India"}` or `{"email": "saiseshu599@gmail.com"}`. |
| `resume`   | String              | A URL pointing to the user's resume (e.g., a Google Drive link or hosted file link). This is used for the resume download button.                       |
| `about`    | String              | A brief text description about the user, highlighting their background, skills, and experience.                                                            |
| `projects` | Array of Objects    | An array of project details, where each object contains: `name` (String) - Name of the project, `description` (String) - A short description of the project, `url` (String) - URL to the project repository or website. |


### Example `user.json`

```json
{
    "name": "Your Name",
    "email": "your.email@example.com",
    "linkedin": "Your LinkedIn Profile URL",
    "github": "Your GitHub Profile URL",
    "projects": [
        {
            "name": "Project 1",
            "description": "A short description of the project.",
            "technologies": ["Tech1", "Tech2"],
            "repository": "Link to the repository"
        },
        {
            "name": "Project 2",
            "description": "A short description of the project.",
            "technologies": ["Tech1", "Tech2"],
            "repository": "Link to the repository"
        }
    ],
    "skills": ["Skill 1", "Skill 2", "Skill 3"],
    "experience": [
        {
            "jobTitle": "Job Title at Company",
            "duration": "Start Date - End Date",
            "responsibilities": "Brief description of your responsibilities."
        },
        {
            "jobTitle": "Job Title at Company",
            "duration": "Start Date - End Date",
            "responsibilities": "Brief description of your responsibilities."
        }
    ]
}
```

## Deployment

To deploy this portfolio using GitHub Pages, follow these steps:

1. Fork this repository.
2. Add images and files.
3. Go to the repository settings.
4. Scroll down to the "GitHub Pages" section.
5. Select the branch you want to deploy from (usually `main` or `master`).
6. Click "Save".

Your portfolio will be available at `https://<your-username>.github.io/<repository-name>/`.
