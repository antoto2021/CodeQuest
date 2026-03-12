// --- CONFIGURATION ---
const APP_HASH = "a1b2c3d"; // Change ceci à chaque mise à jour manuelle de ton code
const GITHUB_USER = "antoto2021"; // <-- À modifier
const GITHUB_REPO = "CodeQuest";   // <-- À modifier

// --- BASE DE DONNÉES DES NIVEAUX ---
const levelsData = [
    {
        type: "normal",
        title: "Leçon 1 : La naissance d'une variable",
        course: "Une variable est une boîte dans laquelle on range une donnée. En JavaScript moderne, on utilise 'let'.",
        task: "Crée une variable nommée 'score' et donne-lui la valeur 10.",
        expected: "letscore=10;", // On compare sans espaces
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
        task: "Crée une constante nommée 'PAYS' ayant pour valeur 'France' (avec les guillemets).",
        expected: "constPAYS='France';",
        xpReward: 100
    }
];

// --- ÉTAT DU JEU ---
let currentLevel = 0;
let totalXP = 0;

// --- ÉLÉMENTS DU DOM ---
const levelDisplay = document.getElementById('level-display');
const xpDisplay = document.getElementById('xp-display');
const lessonTitle = document.getElementById('lesson-title');
const lessonText = document.getElementById('lesson-text');
const taskText = document.getElementById('task-text');
const codeInput = document.getElementById('code-input');
const feedbackMessage = document.getElementById('feedback-message');
const submitBtn = document.getElementById('submit-btn');

// --- FONCTIONS DE JEU ---
function loadLevel() {
    if (currentLevel >= levelsData.length) {
        lessonTitle.textContent = "🏆 Jeu Terminé !";
        lessonText.textContent = "Félicitations, tu as vaincu tous les bugs et maîtrisé les bases !";
        document.getElementById('practice-area').style.display = 'none';
        return;
    }

    const level = levelsData[currentLevel];
    lessonTitle.textContent = level.title;
    lessonText.textContent = level.course;
    taskText.textContent = level.task;
    codeInput.value = "";
    feedbackMessage.textContent = "";
    
    // Style Boss
    if (level.type === "boss") {
        levelDisplay.classList.add('boss-level');
        levelDisplay.textContent = "Niveau BOSS";
    } else {
        levelDisplay.classList.remove('boss-level');
        levelDisplay.textContent = `Niveau ${currentLevel + 1}`;
    }
}

function checkCode() {
    const level = levelsData[currentLevel];
    // Validation basique : on enlève tous les espaces et les sauts de ligne pour comparer
    const cleanInput = codeInput.value.replace(/\s+/g, '');
    
    if (cleanInput === level.expected) {
        feedbackMessage.style.color = "var(--success)";
        feedbackMessage.textContent = "✨ Sortilège réussi ! + " + level.xpReward + " XP";
        totalXP += level.xpReward;
        xpDisplay.textContent = `${totalXP} XP`;
        currentLevel++;
        
        setTimeout(loadLevel, 1500); // Passe au niveau suivant après 1.5s
    } else {
        feedbackMessage.style.color = "var(--boss-color)";
        feedbackMessage.textContent = "❌ Erreur de syntaxe... Essaie encore !";
    }
}

// --- GESTION DE L'APPLICATION ET DU VERSIONING ---
document.getElementById('app-hash').textContent = APP_HASH;

// Bouton Rafraîchir
document.getElementById('refresh-btn').addEventListener('click', () => {
    // Force le rechargement depuis le serveur si possible
    window.location.reload(); 
});

// Gestion Modale Info
const infoModal = document.getElementById('info-modal');
document.getElementById('info-btn').addEventListener('click', () => {
    infoModal.classList.remove('hidden');
    fetchGitHubHash();
});
document.getElementById('close-modal').addEventListener('click', () => {
    infoModal.classList.add('hidden');
});

// Récupération du Hash GitHub
async function fetchGitHubHash() {
    const ghText = document.getElementById('github-hash');
    ghText.textContent = "Recherche...";
    try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits/main`);
        if (!response.ok) throw new Error("Dépôt introuvable");
        const data = await response.json();
        // Affiche les 7 premiers caractères du commit
        ghText.textContent = data.sha.substring(0, 7); 
    } catch (error) {
        ghText.textContent = "Hors ligne ou erreur";
    }
}

// --- INITIALISATION ---
submitBtn.addEventListener('click', checkCode);
loadLevel();
