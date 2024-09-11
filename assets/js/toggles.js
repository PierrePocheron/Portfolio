// Toggle Dark Mode
const darkModeToggle = document.querySelector('.input'); // Sélectionne l'input pour le mode sombre

// Appliquer la préférence utilisateur ou le mode sombre par défaut lors du chargement de la page
window.addEventListener('load', () => {
  const darkModePreference = localStorage.getItem('darkMode');

  if (darkModePreference === 'enabled' || darkModePreference === null) {
    // Si aucune préférence n'existe, on active par défaut le dark mode
    document.body.classList.add('light-mode');
    darkModeToggle.checked = true; // Assure que l'input est coché si le mode sombre est activé
  } else {
    document.body.classList.remove('light-mode');
    darkModeToggle.checked = false; // Assure que l'input est décoché si le mode clair est activé
  }
});

// Sauvegarde la préférence et bascule le thème
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light-mode', darkModeToggle.checked); // Active/désactive le mode sombre si coché

  // Sauvegarder la préférence utilisateur dans le localStorage
  const isDarkMode = darkModeToggle.checked;
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});


// Toggle Language
const languageToggle = document.querySelector('.input-lang'); // Sélectionne l'input pour la langue
const elementsEn = document.querySelectorAll('[data-lang="en"]');
const elementsFr = document.querySelectorAll('[data-lang="fr"]');

// Fonction pour basculer entre l'anglais et le français
function updateLanguage(isEnglish) {
  elementsEn.forEach(el => {
    el.style.display = isEnglish ? 'block' : 'none';
  });

  elementsFr.forEach(el => {
    el.style.display = isEnglish ? 'none' : 'block';
  });
}

// Écouteur pour le basculement de la langue
languageToggle.addEventListener('change', () => {
  const isEnglish = languageToggle.checked; // Si l'input est coché, on est en anglais

  updateLanguage(isEnglish);

  // Sauvegarder la préférence de langue dans le localStorage
  localStorage.setItem('language', isEnglish ? 'en' : 'fr');

  // Mettre à jour les liens de navigation et l'état des filtres
  updateNavLinksState();
  updateFilterState();
});

// Appliquer la langue sélectionnée lors du chargement de la page
window.addEventListener('load', () => {
  const savedLanguage = localStorage.getItem('language');
  const isEnglish = savedLanguage === 'en';
  languageToggle.checked = isEnglish; // Met à jour l'état de l'input
  updateLanguage(isEnglish); // Applique la bonne langue à l'interface
});
