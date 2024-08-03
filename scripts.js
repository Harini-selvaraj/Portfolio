// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all skill bars and animate them
    document.querySelectorAll('.skill-level').forEach(skillLevel => {
      skillLevel.style.width = skillLevel.dataset.width;
    });
  });
  