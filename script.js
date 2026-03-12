// --- 1. CONFIGURATION ---
const APP_HASH = "a1b2c3d"; // Change ceci à chaque mise à jour manuelle de ton code
const GITHUB_USER = "antoto2021"; 
const GITHUB_REPO = "CodeQuest";   

// --- 2. BASE DE DONNÉES DE L'APPLICATION ---
const database = {
    languages: [
        { id: "python", name: "Python", icon: "🐍", color: "var(--python)" },
        { id: "js", name: "JavaScript", icon: "⚡", color: "var(--js)" },
        { id: "cpp", name: "C++", icon: "⚙️", color: "var(--cpp)" },
        { id: "html", name: "HTML", icon: "🌐", color: "var(--html)" },
        { id: "css", name: "CSS", icon: "🎨", color: "var(--css)" }
    ],
    
    // Les cours théoriques (Grimoires)
    courses: {
        python: `
            <h3>Les bases de Python</h3>
            <p>Python est un langage génial car il se lit presque comme de l'anglais !</p>
            <p><strong>Afficher un message :</strong> On utilise la fonction <code>print()</code>.</p>
            <p>Exemple : <code>print("Bonjour")</code></p>
        `,
        js: `
            <h3>JavaScript : Le langage du Web</h3>
            <p>C'est lui qui donne vie aux pages internet !</p>
            <p>Une <strong>variable</strong> est une boîte dans laquelle on range une donnée. En JavaScript moderne, on utilise <code>let</code>.</p>
        `
    },

    // Les niveaux d'entraînement (L'Arène)
    training: {
        python: [
            {
                type: "normal",
                title: "L'éveil du serpent",
                course: "La fonction print() permet d'afficher des données à l'écran.",
                task: "Affiche le texte exact 'Hello World'.",
                expected: "print('HelloWorld')", 
                xpReward: 20
            }
        ],
        // Tes anciens niveaux intégrés ici :
        js: [
            {
                type: "normal",
                title: "Leçon 1 : La naissance d'une variable",
                course: "Une variable est une boîte dans laquelle on range une donnée. En JavaScript moderne, on utilise 'let'.",
                task: "Crée une variable nommée 'score' et donne-lui la valeur 10.",
                expected: "letscore=10;", 
                xpReward: 20
            },
            {
                type: "normal",
                title: "Leçon 2 : Modifier la réalité",
                course: "Tu peux changer la valeur d'une variable déclarée avec 'let' en l'appelant par son nom.",
                task: "Modifie la variable 'score' pour qu'elle soit égale à 50.",
                expected: "score=50;",
                xpReward: 30
            },
            {
                type: "boss",
                title: "👹 BOSS : Le Gardien des Constantes",
                course: "Les constantes ('const') ne peuvent pas être modifiées ! Le boss essaie de corrompre tes données.",
                task: "Crée une constante nommée 'PAYS' ayant pour valeur 'France' (avec les guillemets simples).",
                expected: "constPAYS='France';",
                xpReward: 100
            }
        ]
    }
};

// --- 3. GESTION DE L'ÉTAT DU JOUEUR ---
const userState = {
    xp: 0,
    badges: [],
    currentLangId: null,
    currentLevelIndex: 0
};

// --- 4. LOGIQUE DE L'APPLICATION (LE MOTEUR) ---
const app = {
    navigate: function(viewId) {
        document.querySelectorAll('.view').forEach(el => el.classList.replace('active', 'hidden'));
        document.getElementById(viewId).classList.replace('hidden', 'active');
        if (viewId === 'view-training') this.updateDashboard();
    },

    init: function() {
        this.generateLanguageButtons();
        
        document.getElementById('home-btn').addEventListener('click', () => this.navigate('view-home'));
        
        // Configuration Boutons Header
        document.getElementById('app-hash').textContent = APP_HASH;
        document.getElementById('refresh-btn').addEventListener('click', () => window.location.reload());
        
        // --- NOUVELLE GESTION DE LA FENÊTRE (MODALE) ---
        const infoModal = document.getElementById('info-modal');
        const closeModalBtn = document.getElementById('close-modal');

        // Ouvrir la fenêtre
        document.getElementById('info-btn').addEventListener('click', () => {
            infoModal.classList.remove('hidden');
            this.fetchGitHubHash();
        });

        // Fermer en cliquant sur la croix 'X'
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                infoModal.classList.add('hidden');
            });
        }

        // Fermer en cliquant n'importe où en dehors de la boîte
        window.addEventListener('click', (event) => {
            if (event.target === infoModal) {
                infoModal.classList.add('hidden');
            }
        });
    },

    generateLanguageButtons: function() {
        const courseList = document.getElementById('course-list');
        const trainingList = document.getElementById('training-list');
        courseList.innerHTML = ''; trainingList.innerHTML = '';

        database.languages.forEach(lang => {
            // Bouton Hub Cours
            const btnCourse = document.createElement('button');
            btnCourse.className = 'lang-btn';
            btnCourse.style.borderColor = lang.color;
            btnCourse.innerHTML = `${lang.icon} <span>${lang.name}</span>`;
            btnCourse.onclick = () => this.openCourse(lang.id);
            courseList.appendChild(btnCourse);

            // Bouton Hub Entraînement
            const btnTrain = document.createElement('button');
            btnTrain.className = 'lang-btn';
            btnTrain.style.borderColor = lang.color;
            btnTrain.innerHTML = `${lang.icon} <span>${lang.name}</span>`;
            btnTrain.onclick = () => this.startTraining(lang.id);
            trainingList.appendChild(btnTrain);
        });
    },

    updateDashboard: function() {
        document.getElementById('dash-xp').textContent = `${userState.xp} XP`;
        document.getElementById('dash-badges').textContent = userState.badges.length > 0 ? userState.badges.join(' ') : "Aucun 😢";
    },

    openCourse: function(langId) {
        const lang = database.languages.find(l => l.id === langId);
        document.getElementById('read-course-title').textContent = `Grimoire : ${lang.name}`;
        document.getElementById('read-course-content').innerHTML = database.courses[langId] || "<p>Ce grimoire est encore vide...</p>";
        this.navigate('view-read-course');
    },

    startTraining: function(langId) {
        if (!database.training[langId] || database.training[langId].length === 0) {
            alert("L'arène pour ce langage n'est pas encore prête !");
            return;
        }
        userState.currentLangId = langId;
        userState.currentLevelIndex = 0;
        this.loadGameLevel();
        this.navigate('view-game');
    },

    loadGameLevel: function() {
        const levels = database.training[userState.currentLangId];
        const uiTitle = document.getElementById('lesson-title');
        const uiText = document.getElementById('lesson-text');
        const uiTask = document.getElementById('task-text');
        const uiInput = document.getElementById('code-input');
        const uiFeedback = document.getElementById('feedback-message');
        const uiLevelBadge = document.getElementById('level-display');

        if (userState.currentLevelIndex >= levels.length) {
            uiTitle.textContent = "🏆 Arène Terminée !";
            uiText.textContent = "Tu as prouvé ta valeur.";
            document.getElementById('practice-area').style.display = 'none';
            
            const langName = database.languages.find(l => l.id === userState.currentLangId).name;
            if (!userState.badges.includes(`Maître ${langName}`)) {
                userState.badges.push(`Maître ${langName}`);
            }
            return;
        }

        document.getElementById('practice-area').style.display = 'block';
        const level = levels[userState.currentLevelIndex];
        
        uiTitle.textContent = level.title;
        uiText.textContent = level.course;
        uiTask.textContent = level.task;
        uiInput.value = "";
        uiFeedback.textContent = "";
        document.getElementById('xp-display').textContent = `${userState.xp} XP`;

        if (level.type === "boss") {
            uiLevelBadge.classList.add('boss-level');
            uiLevelBadge.textContent = "Niveau BOSS";
        } else {
            uiLevelBadge.classList.remove('boss-level');
            uiLevelBadge.textContent = `Niveau ${userState.currentLevelIndex + 1}`;
        }
    },

    checkCode: function() {
        const level = database.training[userState.currentLangId][userState.currentLevelIndex];
        const cleanInput = document.getElementById('code-input').value.replace(/['"]/g, "'").replace(/\s+/g, '');
        const cleanExpected = level.expected.replace(/['"]/g, "'").replace(/\s+/g, '');
        
        const feedbackMessage = document.getElementById('feedback-message');

        if (cleanInput === cleanExpected) {
            feedbackMessage.style.color = "var(--success)";
            feedbackMessage.textContent = `✨ Coup critique ! + ${level.xpReward} XP`;
            userState.xp += level.xpReward;
            userState.currentLevelIndex++;
            setTimeout(() => this.loadGameLevel(), 1500);
        } else {
            feedbackMessage.style.color = "var(--boss-color)";
            feedbackMessage.textContent = "❌ L'attaque échoue (Erreur de syntaxe)...";
        }
    },

    async fetchGitHubHash() {
        const ghText = document.getElementById('github-hash');
        ghText.textContent = "Recherche...";
        
        try {
            // On essaie d'abord sur la branche 'main'
            let response = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits/main`);
            
            // Si ça échoue, c'est peut-être la branche 'master'
            if (!response.ok) {
                response = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits/master`);
            }

            // Si ça échoue toujours (ex: dépôt vide ou privé)
            if (!response.ok) throw new Error("Dépôt introuvable ou vide");
            
            const data = await response.json();
            ghText.textContent = data.sha.substring(0, 7); 
        } catch (error) {
            // On affiche un message clair si ça plante
            ghText.textContent = "Introuvable (Dépôt vide ou privé ?)";
            console.error("Erreur GitHub :", error);
        }
    }
};

// --- 5. DÉMARRAGE DU JEU ---
window.onload = () => app.init();
