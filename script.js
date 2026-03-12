// --- 1. CONFIGURATION ---
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
            // --- BLOC 1 : LES BASES ABSOLUES (1 à 10) ---
            {
                type: "normal",
                title: "L'éveil du serpent",
                course: "En Python, l'instruction print() permet de parler au monde entier. Le texte doit toujours être encadré de guillemets simples ou doubles.",
                task: "Affiche le texte 'Hello World'.",
                expected: "print('HelloWorld')", 
                xpReward: 10
            },
            {
                type: "normal",
                title: "Les boîtes magiques",
                course: "Une variable est une boîte avec un nom. Contrairement à JavaScript, on n'a pas besoin de 'let'. On écrit juste le nom = la valeur.",
                task: "Crée une variable nommée 'or' contenant le nombre 100.",
                expected: "or=100", 
                xpReward: 15
            },
            {
                type: "normal",
                title: "Le forgeron des mots",
                course: "Les textes s'appellent des 'strings' (chaînes de caractères). Tu peux stocker un texte dans une variable.",
                task: "Crée une variable 'arme' contenant le texte 'Epée'.",
                expected: "arme='Epée'", 
                xpReward: 15
            },
            {
                type: "normal",
                title: "L'art de l'arithmétique",
                course: "Python est une excellente calculatrice. Tu peux utiliser les symboles +, -, * et /.",
                task: "Crée une variable 'degats' qui est le résultat de 10 * 5.",
                expected: "degats=10*5", 
                xpReward: 20
            },
            {
                type: "boss",
                title: "👹 BOSS : L'Ogre des Additions",
                course: "Le boss attaque ! Tu dois additionner la force de ton épée et de ton bouclier pour te défendre.",
                task: "Crée une variable 'defense' contenant le résultat de 50 + 25.",
                expected: "defense=50+25", 
                xpReward: 50
            },
            {
                type: "normal",
                title: "Assembler des mots",
                course: "On peut coller deux textes ensemble avec le signe +. C'est la concaténation.",
                task: "Crée une variable 'cri' contenant l'addition de 'A l' et 'attaque !'.",
                expected: "cri='Al'+'attaque!'", 
                xpReward: 20
            },
            {
                type: "normal",
                title: "Dévoiler les secrets",
                course: "Maintenant que tu sais créer des variables, il faut les afficher. Tu peux mettre le nom d'une variable directement dans print(), SANS guillemets.",
                task: "Affiche la variable nommée 'score' (que l'on imagine déjà créée).",
                expected: "print(score)", 
                xpReward: 20
            },
            {
                type: "normal",
                title: "Vrai ou Faux ?",
                course: "Les variables Booléennes (booleans) ne peuvent avoir que deux valeurs : True (Vrai) ou False (Faux). Attention, la majuscule est obligatoire en Python !",
                task: "Crée une variable 'vivant' et donne-lui la valeur True.",
                expected: "vivant=True", 
                xpReward: 25
            },
            {
                type: "normal",
                title: "Mise à jour d'équipement",
                course: "Tu peux changer la valeur d'une variable qui existe déjà en la redéfinissant.",
                task: "La variable 'niveau' existe déjà. Change sa valeur pour qu'elle soit égale à 2.",
                expected: "niveau=2", 
                xpReward: 25
            },
            {
                type: "boss",
                title: "👹 BOSS : Le Spectre du Typage",
                course: "Python différencie les nombres (int) et les textes (str). '5' (avec guillemets) n'est pas pareil que 5 (sans guillemets) !",
                task: "Crée une variable 'code' contenant le TEXTE '404' (et non le nombre).",
                expected: "code='404'", 
                xpReward: 75
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

    pendingHash: null, // Mémorise temporairement la mise à jour

    init: function() {
        this.generateLanguageButtons();
        
        document.getElementById('home-btn').addEventListener('click', () => this.navigate('view-home'));
        
        // --- GESTION AUTOMATIQUE DU HASH ---
        let localHash = localStorage.getItem('codequest_hash') || "Aucun";
        document.getElementById('app-hash').textContent = localHash;

        // Bouton Rafraîchir
        document.getElementById('refresh-btn').addEventListener('click', () => {
            // Si une mise à jour est en attente, on la sauvegarde
            if (this.pendingHash) {
                localStorage.setItem('codequest_hash', this.pendingHash);
            }
            window.location.reload();
        });
        
        // --- GESTION DE LA FENÊTRE (MODALE) ---
        const infoModal = document.getElementById('info-modal');
        const closeModalBtn = document.getElementById('close-modal');

        document.getElementById('info-btn').addEventListener('click', () => {
            infoModal.classList.remove('hidden');
            // Met à jour l'affichage au cas où il a changé
            document.getElementById('app-hash').textContent = localStorage.getItem('codequest_hash') || "Aucun";
            this.fetchGitHubHash();
        });

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                infoModal.classList.add('hidden');
            });
        }

        window.addEventListener('click', (event) => {
            if (event.target === infoModal) {
                infoModal.classList.add('hidden');
            }
        });

        // Lance une vérification silencieuse au démarrage
        this.checkForUpdates();
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

    // --- NOUVELLE FONCTION : VÉRIFICATION SILENCIEUSE ---
    async checkForUpdates() {
        try {
            let response = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits/main`);
            if (!response.ok) {
                response = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits/master`);
            }
            if (!response.ok) return; // Si ça rate, on ne fait rien (ex: pas de connexion)
            
            const data = await response.json();
            const latestHash = data.sha.substring(0, 7);
            const currentHash = localStorage.getItem('codequest_hash');

            if (!currentHash) {
                // Première visite : on enregistre le hash direct
                localStorage.setItem('codequest_hash', latestHash);
                document.getElementById('app-hash').textContent = latestHash;
            } else if (currentHash !== latestHash) {
                // MISE À JOUR DÉTECTÉE !
                this.pendingHash = latestHash;
                const refreshBtn = document.getElementById('refresh-btn');
                refreshBtn.style.backgroundColor = "var(--boss-color)"; // Bouton en rouge
                refreshBtn.textContent = "⚠️🔄"; // Change l'icône
                refreshBtn.title = "Nouvelle version disponible ! Cliquez ici.";
            }
        } catch (error) {
            console.log("Mode hors-ligne, impossible de vérifier les mises à jour.");
        }
    },

    // --- MODIFICATION DE LA RECHERCHE MANUELLE ---
    async fetchGitHubHash() {
        const ghText = document.getElementById('github-hash');
        ghText.textContent = "Recherche...";
        
        try {
            let response = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits/main`);
            
            if (!response.ok) {
                response = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits/master`);
            }

            if (!response.ok) throw new Error("Dépôt introuvable");
            
            const data = await response.json();
            const latestHash = data.sha.substring(0, 7); 
            
            const currentHash = localStorage.getItem('codequest_hash');
            
            // Affichage avec un code couleur
            if (currentHash && currentHash !== latestHash) {
                ghText.innerHTML = `${latestHash} <span style="color: var(--boss-color); font-size: 0.9em;">(Mise à jour dispo !)</span>`;
            } else {
                ghText.innerHTML = `${latestHash} <span style="color: var(--success); font-size: 0.9em;">(À jour)</span>`;
            }

        } catch (error) {
            ghText.textContent = "Introuvable ou hors-ligne";
        }
    }
};

// --- 5. DÉMARRAGE DU JEU ---
window.onload = () => app.init();
