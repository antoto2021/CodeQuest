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
            <h3>Chapitre 1 : Les bases absolues</h3>
            <p>Bienvenue dans le grimoire de Python ! C'est un langage réputé pour sa lisibilité : ici, pas de points-virgules obligatoires à la fin de chaque ligne ni d'accolades complexes pour commencer.</p>
            <br>

            <h4 style="color: var(--accent-color);">1. Le sortilège de base : print()</h4>
            <p>Pour que ton programme affiche quelque chose à l'écran, on utilise la fonction <code>print()</code>. N'oublie jamais les guillemets pour le texte !</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                print('Hello World')
            </div>

            <h4 style="color: var(--accent-color);">2. Les variables : Tes boîtes d'inventaire</h4>
            <p>Une variable est comme une boîte dans laquelle tu ranges une donnée. Tu lui donnes un nom et tu lui assignes une valeur avec le signe <code>=</code>.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                or = 100<br>
                arme = 'Epée'
            </div>
            <p><strong>Attention :</strong> Le texte (les chaînes de caractères ou <em>strings</em>) doit toujours être encadré de guillemets simples ou doubles.</p>

            <h4 style="color: var(--accent-color);">3. Les mathématiques de combat</h4>
            <p>Python est une excellente calculatrice. Tu peux utiliser <code>+</code> (addition), <code>-</code> (soustraction), <code>*</code> (multiplication) et <code>/</code> (division).</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                degats = 10 * 5<br>
                defense = 50 + 25
            </div>

            <h4 style="color: var(--accent-color);">4. Assembler des mots (Concaténation)</h4>
            <p>Le signe <code>+</code> sert à additionner des nombres, mais aussi à "coller" des textes entre eux !</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                cri = 'A l' + 'attaque !'
            </div>

            <h4 style="color: var(--accent-color);">5. Révéler le contenu d'une boîte</h4>
            <p>Tu peux afficher le contenu d'une variable en la glissant dans <code>print()</code>. <strong>Surtout ne mets pas de guillemets</strong>, sinon Python affichera le nom de la variable, pas son contenu !</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                score = 50<br>
                print(score) <span style="color: #6272a4;"># Affichera 50</span>
            </div>

            <h4 style="color: var(--accent-color);">6. Vrai ou Faux ? (Les Booléens)</h4>
            <p>Parfois, une variable répond juste par oui ou non. Ce sont les variables booléennes : <code>True</code> (Vrai) ou <code>False</code> (Faux). La majuscule est stricte et obligatoire en Python !</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                vivant = True
            </div>

            <h4 style="color: var(--accent-color);">7. L'illusion d'optique (Les Types)</h4>
            <p>Pour Python, le nombre <code>404</code> et le texte <code>'404'</code> sont deux mondes différents. Le premier permet de faire des calculs mathématiques (Type: <em>Integer</em>), l'autre non (Type: <em>String</em>).</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                code = '404' <span style="color: #6272a4;"># Ceci est du texte !</span>
            </div>
            
            <hr>
            <p style="text-align: center; color: var(--success);"><em>Fin du Chapitre 1. Pratique ces sorts dans l'arène (Niveaux 1 à 10) avant de passer à la suite !</em></p>
            <br><br>
            <h3>Chapitre 2 : Les chemins du destin (Conditions)</h3>
            <p>Jusqu'ici, ton code s'exécutait de haut en bas sans réfléchir. Maintenant, tu vas apprendre à ton programme à prendre des décisions selon la situation !</p>
            <br>

            <h4 style="color: var(--accent-color);">1. L'embranchement (L'instruction if)</h4>
            <p>L'instruction <code>if</code> (si) permet de vérifier une condition. <strong>Règle d'or absolue en Python :</strong> on termine toujours la ligne de la condition par des deux-points <code>:</code>.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                if pv > 0:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;print('Tu es en vie !')
            </div>
            <p style="font-size: 0.9em; color: var(--text-muted);"><em>Note : Dans un vrai éditeur, le décalage (les espaces) avant le print est obligatoire. Cela s'appelle l'indentation. C'est ce qui dit à Python que cette action appartient au "if".</em></p>

            <h4 style="color: var(--accent-color);">2. L'épreuve de l'égalité (== et !=)</h4>
            <p>Attention au piège classique ! Un seul signe <code>=</code> sert à ranger une valeur. Pour <strong>comparer</strong> si deux choses sont égales, il faut utiliser le double égal <code>==</code>. Pour vérifier si elles sont différentes, on utilise <code>!=</code>.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                if arme == 'arc': <span style="color: #6272a4;"># Vérifie l'égalité</span><br>
                if statut != 'poison': <span style="color: #6272a4;"># Vérifie la différence</span>
            </div>

            <h4 style="color: var(--accent-color);">3. Le Plan B et les choix multiples (else et elif)</h4>
            <p>Que faire si la condition du <code>if</code> est fausse ? On utilise <code>else:</code> (sinon) pour exécuter un plan B. Si on a plusieurs conditions à tester à la chaîne, on utilise <code>elif</code> (contraction de "else if", sinon si).</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                if niveau >= 10: <span style="color: #6272a4;"># Supérieur ou égal à 10</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;print('Boss débloqué')<br>
                elif niveau == 5:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;print('Moitié du chemin !')<br>
                else:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;print('Continue de t\'entraîner')
            </div>

            <h4 style="color: var(--accent-color);">4. L'alliance des conditions (and, or)</h4>
            <p>Tu peux combiner plusieurs vérifications en une seule ligne :</p>
            <ul>
                <li style="margin-left: 20px;"><code>and</code> (et) : <strong>Toutes</strong> les conditions doivent être vraies.</li>
                <li style="margin-left: 20px;"><code>or</code> (ou) : Il suffit qu'<strong>une seule</strong> condition soit vraie.</li>
            </ul>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                if cle == True and porte == 'ouverte':<br>
                if piece > 100 or gemme > 5:
            </div>

            <h4 style="color: var(--accent-color);">5. La vérité absolue et l'inversion (not)</h4>
            <p>Si ta variable est déjà un Booléen (True/False), il est inutile d'écrire <code>if vivant == True:</code>. Python est intelligent, tu peux l'écrire directement. Et pour vérifier le contraire, utilise <code>not</code> !</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                if vivant: <span style="color: #6272a4;"># Si vivant est True</span><br>
                if not vivant: <span style="color: #6272a4;"># Si vivant est False</span>
            </div>

            <hr>
            <p style="text-align: center; color: var(--success);"><em>Fin du Chapitre 2. Pratique ces sortilèges logiques dans l'arène (Niveaux 11 à 20) !</em></p>
            <br><br>
            <h3>Chapitre 3 : L'Arsenal et la Maîtrise (Listes, Boucles, Fonctions)</h3>
            <p>Un vrai Maître du Code ne fait jamais deux fois la même chose et sait organiser son inventaire. Voici les concepts avancés pour devenir un pro !</p>
            <br>

            <h4 style="color: var(--accent-color);">1. Le sac à dos (Les Listes)</h4>
            <p>Une liste permet de ranger plusieurs objets dans une seule variable. On utilise les crochets <code>[]</code> pour la créer et on sépare les éléments par des virgules.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                sac = ['potion', 'carte']
            </div>

            <h4 style="color: var(--accent-color);">2. Fouiller le sac (Les Index)</h4>
            <p>Règle d'or en informatique : <strong>on commence toujours à compter à partir de 0 !</strong> Le premier objet de ta liste est à la position 0, le deuxième à la position 1, etc. On accède à un élément en mettant son numéro (index) entre crochets.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                print(sac[0]) <span style="color: #6272a4;"># Affichera 'potion'</span>
            </div>

            <h4 style="color: var(--accent-color);">3. Gérer le butin (Append, Remove, Len)</h4>
            <p>Ta liste est vivante ! Tu peux ajouter ou retirer des choses, ou compter ce qu'il y a dedans :</p>
            <ul>
                <li style="margin-left: 20px;"><code>.append()</code> : Ajoute un élément à la toute fin de la liste.</li>
                <li style="margin-left: 20px;"><code>.remove()</code> : Cherche et détruit un élément spécifique.</li>
                <li style="margin-left: 20px;"><code>len()</code> : Te donne la "longueur" (length) de ta liste.</li>
            </ul>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                sac.append('or')<br>
                sac.remove('carte')<br>
                print(len(sac)) <span style="color: #6272a4;"># Affichera le nombre d'objets</span>
            </div>

            <h4 style="color: var(--accent-color);">4. Répéter l'histoire (Boucle While)</h4>
            <p>La boucle <code>while</code> (tant que) répète un bloc de code <strong>tant que</strong> sa condition est vraie. N'oublie pas les deux-points <code>:</code> !</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                while pv > 0:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;print('Tu te bats !')
            </div>

            <h4 style="color: var(--accent-color);">5. Passer en revue et Compter (Boucle For et Range)</h4>
            <p>La boucle <code>for</code> est parfaite pour regarder tous les objets d'un inventaire un par un, ou pour compter un nombre précis de fois avec <code>range()</code>.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                <span style="color: #6272a4;"># Parcourir une liste :</span><br>
                for objet in sac:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;print(objet)<br><br>
                <span style="color: #6272a4;"># Répéter 5 fois :</span><br>
                for i in range(5):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;print(i)
            </div>

            <h4 style="color: var(--accent-color);">6. Le frein d'urgence (Break)</h4>
            <p>Si une boucle devient folle ou que tu as trouvé ce que tu cherchais avant la fin, tu peux briser la boucle immédiatement avec le mot-clé <code>break</code>.</p>

            <h4 style="color: var(--accent-color);">7. Créer ses propres sortilèges (Les Fonctions)</h4>
            <p>Le niveau ultime ! Le mot-clé <code>def</code> permet de définir tes propres fonctions réutilisables. Tu dois leur donner un nom, suivi de parenthèses <code>()</code> et de deux-points <code>:</code>.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                def frapper():<br>
                &nbsp;&nbsp;&nbsp;&nbsp;print('Coup d\'épée !')
            </div>

            <hr>
            <p style="text-align: center; color: var(--success);"><em>Fin du Chapitre 3. Tu es maintenant prêt à vaincre le boss final de l'Arène Python !</em></p>
        `,
        js: `
            <h3>JavaScript : Le langage du Web</h3>
            <p>C'est lui qui donne vie aux pages internet !</p>
            <p>Une <strong>variable</strong> est une boîte dans laquelle on range une donnée. En JavaScript moderne, on utilise <code>let</code>.</p>
        `,
        html: `
            <h3>Chapitre 1 : Les Fondations du Web</h3>
            <p>Bienvenue dans le monde du Web ! Le HTML (HyperText Markup Language) est le squelette de toutes les pages internet. Il ne fait pas de calculs, il sert uniquement à structurer l'information.</p>
            <br>

            <h4 style="color: var(--accent-color);">1. Le concept de Balise (Tag)</h4>
            <p>En HTML, on encadre le texte avec des <strong>balises</strong> pour dire au navigateur ce qu'il doit en faire. Une balise s'ouvre avec les signes <code>&lt; &gt;</code> et se ferme avec un slash <code>&lt;/ &gt;</code>.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;balise&gt;Mon texte encadré&lt;/balise&gt;
            </div>

            <h4 style="color: var(--accent-color);">2. Le Squelette d'une page</h4>
            <p>Toute page web commence par une structure stricte et obligatoire. La balise <code>&lt;html&gt;</code> enveloppe tout. Le <code>&lt;head&gt;</code> contient les réglages invisibles (comme le titre de l'onglet), et le <code>&lt;body&gt;</code> contient tout ce qui est visible à l'écran.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;!DOCTYPE html&gt;<br>
                &lt;html&gt;<br>
                &nbsp;&nbsp;&lt;head&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Mon Super Site&lt;/title&gt;<br>
                &nbsp;&nbsp;&lt;/head&gt;<br>
                &nbsp;&nbsp;&lt;body&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Tout ce qu'on voit sur la page va ici !<br>
                &nbsp;&nbsp;&lt;/body&gt;<br>
                &lt;/html&gt;
            </div>

            <h4 style="color: var(--accent-color);">3. Les Titres (Headings)</h4>
            <p>Pour structurer ton texte, HTML propose 6 niveaux d'importance pour les titres. De <code>&lt;h1&gt;</code> (le titre principal de la page, unique) jusqu'à <code>&lt;h6&gt;</code> (le plus petit sous-titre).</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;h1&gt;Titre principal&lt;/h1&gt;<br>
                &lt;h2&gt;Un sous-titre de section&lt;/h2&gt;
            </div>

            <h4 style="color: var(--accent-color);">4. Les Paragraphes</h4>
            <p>Pour écrire du texte normal, on utilise simplement la balise <code>&lt;p&gt;</code> (pour paragraph).</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;p&gt;Ceci est une phrase normale dans un paragraphe.&lt;/p&gt;
            </div>

            <h4 style="color: var(--accent-color);">5. Les exceptions : Les balises orphelines</h4>
            <p>Certaines balises n'ont pas besoin d'être refermées avec un slash, car elles n'encadrent pas de texte : elles insèrent directement un élément. Par exemple, pour forcer un retour à la ligne, on utilise la balise orpheline <code>&lt;br&gt;</code> (pour break).</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                Première ligne de texte &lt;br&gt;<br>
                Deuxième ligne juste en dessous
            </div>

            <hr>
            <p style="text-align: center; color: var(--success);"><em>Fin du Chapitre 1 du grimoire HTML.</em></p>
            <br><br>
            <h3>Chapitre 2 : Les Portails et les Illusions (Attributs, Liens, Images)</h3>
            <p>Maintenant que la structure est en place, ajoutons un peu de magie. Voici comment connecter tes pages entre elles et afficher des visuels.</p>
            <br>

            <h4 style="color: var(--accent-color);">1. Le secret des Balises : Les Attributs</h4>
            <p>Les balises peuvent contenir des informations supplémentaires cachées à l'intérieur de la balise d'ouverture. Ce sont les <strong>attributs</strong>. Ils s'écrivent toujours sous la forme <code>nom="valeur"</code> (la valeur doit toujours avoir des guillemets).</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;balise attribut="valeur"&gt;Texte&lt;/balise&gt;
            </div>

            <h4 style="color: var(--accent-color);">2. Créer des Portails (Les Liens)</h4>
            <p>Pour voyager d'une page à l'autre, on utilise la balise <code>&lt;a&gt;</code> (pour <em>anchor</em>, l'ancre). Elle a absolument besoin de l'attribut <code>href</code> (hypertext reference) pour savoir vers quelle adresse web t'envoyer !</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;a href="https://google.com"&gt;Clique ici pour aller sur Google&lt;/a&gt;
            </div>

            <h4 style="color: var(--accent-color);">3. Invoquer des Illusions (Les Images)</h4>
            <p>La balise <code>&lt;img&gt;</code> est une balise orpheline (elle n'a pas de balise de fermeture <code>&lt;/img&gt;</code>). Elle a besoin de deux attributs indispensables : <code>src</code> (la source, le chemin vers l'image) et <code>alt</code> (un texte alternatif si l'image ne charge pas, crucial pour les non-voyants).</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;img src="logo.png" alt="Le logo de CodeQuest"&gt;
            </div>

            <h4 style="color: var(--accent-color);">4. Organiser son inventaire (Les Listes)</h4>
            <p>En HTML, pour faire une liste, on utilise deux balises imbriquées. D'abord on déclare le conteneur global : <code>&lt;ul&gt;</code> (liste à puces, <em>unordered list</em>) ou <code>&lt;ol&gt;</code> (liste numérotée, <em>ordered list</em>). Ensuite, chaque élément de la liste est encadré par <code>&lt;li&gt;</code> (<em>list item</em>).</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;ul&gt;<br>
                &nbsp;&nbsp;&lt;li&gt;Épée en bois&lt;/li&gt;<br>
                &nbsp;&nbsp;&lt;li&gt;Potion de soin&lt;/li&gt;<br>
                &lt;/ul&gt;
            </div>

            <hr>
            <p style="text-align: center; color: var(--success);"><em>Fin du Chapitre 2 du grimoire HTML.</em></p>
            <br><br>
            <h3>Chapitre 3 : Les Coffres et l'Interaction (Conteneurs et Formulaires)</h3>
            <p>Pour terminer ton apprentissage du HTML, tu dois savoir comment regrouper tes éléments pour mieux les ranger, et comment demander des informations au joueur.</p>
            <br>

            <h4 style="color: var(--accent-color);">1. Les boîtes invisibles (div et span)</h4>
            <p>En HTML, on utilise très souvent des "boîtes" génériques pour regrouper d'autres balises. Cela sera absolument indispensable quand tu apprendras le CSS pour faire ta mise en page !</p>
            <ul>
                <li style="margin-left: 20px;"><code>&lt;div&gt;</code> (Division) : C'est un gros coffre. Il prend toute la largeur disponible et crée un bloc de contenu.</li>
                <li style="margin-left: 20px;"><code>&lt;span&gt;</code> : C'est une petite bourse. Il s'utilise à l'intérieur d'un texte pour cibler un mot précis sans forcer le passage à la ligne.</li>
            </ul>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;div&gt;<br>
                &nbsp;&nbsp;&lt;p&gt;Ton épée inflige &lt;span style="color: red;"&gt;50&lt;/span&gt; dégâts.&lt;/p&gt;<br>
                &lt;/div&gt;
            </div>

            <h4 style="color: var(--accent-color);">2. Demander le mot de passe (Les Formulaires)</h4>
            <p>Pour demander au joueur son pseudo ou son mot de passe, on crée une zone de formulaire avec la balise <code>&lt;form&gt;</code>.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;form&gt;<br>
                &nbsp;&nbsp;... les champs iront ici ...<br>
                &lt;/form&gt;
            </div>

            <h4 style="color: var(--accent-color);">3. Les zones de saisie (Input)</h4>
            <p>À l'intérieur du formulaire, on place des balises orphelines <code>&lt;input&gt;</code>. Grâce à l'attribut <code>type</code>, tu peux changer le comportement de la case ! L'attribut <code>placeholder</code> permet d'afficher un texte grisé en indice pour guider le joueur.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;input type="text" placeholder="Entrez votre pseudo"&gt;<br>
                &lt;input type="password" placeholder="Mot de passe secret"&gt;
            </div>

            <h4 style="color: var(--accent-color);">4. Passer à l'action (Le Bouton)</h4>
            <p>Enfin, pour valider tout ça, il faut un bouton cliquable avec la balise <code>&lt;button&gt;</code>.</p>
            <div style="background: #191a21; padding: 10px; border-radius: 5px; margin: 10px 0; font-family: monospace;">
                &lt;button type="submit"&gt;Commencer l'aventure&lt;/button&gt;
            </div>

            <hr>
            <p style="text-align: center; color: var(--success);"><em>Fin du Chapitre 3. Tu es maintenant un initié de l'ordre du HTML !</em></p>
        `,
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
            },
            // --- BLOC 2 : CONDITIONS ET LOGIQUE (11 à 20) ---
            {
                type: "normal",
                title: "Le croisement du destin (if)",
                course: "L'instruction 'if' (si) permet de vérifier une condition. En Python, n'oublie jamais les deux points ':' à la fin de la ligne !",
                task: "Écris une condition qui vérifie si 'pv' est strictement supérieur à 0.",
                expected: "ifpv>0:", 
                xpReward: 20
            },
            {
                type: "normal",
                title: "L'épreuve de l'égalité (==)",
                course: "Pour vérifier si deux éléments sont égaux, on utilise '==' (deux signes égal). Un seul '=' sert uniquement à ranger une valeur dans une boîte !",
                task: "Vérifie si la variable 'arme' est égale à 'arc' (avec des guillemets simples pour arc).",
                expected: "ifarme=='arc':", 
                xpReward: 25
            },
            {
                type: "normal",
                title: "L'esquive ou la parade (!=)",
                course: "Le symbole '!=' signifie 'différent de'. C'est très pratique pour savoir si une condition n'est pas remplie.",
                task: "Vérifie si le 'statut' est différent de 'poison'.",
                expected: "ifstatut!='poison':", 
                xpReward: 25
            },
            {
                type: "normal",
                title: "Le plan B (else)",
                course: "Si la condition du 'if' est fausse, le programme peut exécuter un plan B avec 'else:' (sinon). Il ne prend pas de condition.",
                task: "Écris simplement l'instruction 'else' avec ses deux points finaux.",
                expected: "else:", 
                xpReward: 15
            },
            {
                type: "boss",
                title: "👹 BOSS : Le Gardien des Portes",
                course: "Le boss exige une condition de niveau. Pour passer, ton niveau doit être supérieur ou égal. On écrit ça '>='.",
                task: "Écris la condition vérifiant si 'niveau' est supérieur ou égal à 10.",
                expected: "ifniveau>=10:", 
                xpReward: 60
            },
            {
                type: "normal",
                title: "Les chemins multiples (elif)",
                course: "Et si on a plus de deux choix ? 'elif' (sinon si) permet de vérifier une autre condition si la première a échoué.",
                task: "Écris une condition 'elif' vérifiant si la variable 'choix' est égale à 2.",
                expected: "elifchoix==2:", 
                xpReward: 30
            },
            {
                type: "normal",
                title: "L'alliance des conditions (and)",
                course: "Le mot-clé 'and' (et) permet de vérifier deux conditions en même temps. Les deux doivent obligatoirement être vraies !",
                task: "Vérifie si 'cle' est égal à True AND 'porte' est égal à 'ouverte'.",
                expected: "ifcle==Trueandporte=='ouverte':", 
                xpReward: 35
            },
            {
                type: "normal",
                title: "L'un ou l'autre (or)",
                course: "Le mot-clé 'or' (ou) est plus souple : il suffit qu'une seule des deux conditions soit vraie pour que ça passe.",
                task: "Vérifie si 'piece' est supérieur à 100 OR 'gemme' est supérieur à 5.",
                expected: "ifpiece>100orgemme>5:", 
                xpReward: 35
            },
            {
                type: "normal",
                title: "La vérité absolue",
                course: "Si une variable contient déjà un booléen (True ou False), pas besoin d'écrire '== True'. Tu peux juste tester la variable directement !",
                task: "Écris un 'if' qui vérifie simplement la variable 'vivant' (sans utiliser de ==).",
                expected: "ifvivant:", 
                xpReward: 30
            },
            {
                type: "boss",
                title: "👹 BOSS : L'Énigme du Sphinx",
                course: "Le Sphinx teste ta logique inversée. Le mot-clé 'not' inverse une condition (True devient False, et inversement).",
                task: "Vérifie si 'vivant' est FAUX en utilisant 'if not'.",
                expected: "ifnotvivant:", 
                xpReward: 80
            },
            // --- BLOC 3 : LISTES ET BOUCLES (21 à 30) ---
            {
                type: "normal",
                title: "Le sac à dos (Listes)",
                course: "Une liste permet de ranger plusieurs objets dans une seule variable, entre crochets [].",
                task: "Crée une liste 'sac' contenant 'potion' et 'carte' (dans cet ordre).",
                expected: "sac=['potion','carte']",
                xpReward: 30
            },
            {
                type: "normal",
                title: "Fouiller le sac (Index)",
                course: "En informatique, on commence toujours à compter à partir de 0 ! Le premier objet d'une liste est à la position [0].",
                task: "Affiche le premier objet de la liste 'sac' en utilisant print() et l'index [0].",
                expected: "print(sac[0])",
                xpReward: 30
            },
            {
                type: "normal",
                title: "Le butin (Append)",
                course: "Tu as trouvé un trésor ! La méthode .append() permet d'ajouter un élément à la toute fin d'une liste.",
                task: "Ajoute l'objet 'or' à ta liste 'sac'.",
                expected: "sac.append('or')",
                xpReward: 35
            },
            {
                type: "normal",
                title: "L'inventaire plein (Len)",
                course: "Pour connaître le nombre total d'éléments dans une liste, on utilise la fonction len() (pour length = longueur).",
                task: "Utilise len() pour obtenir la taille de la liste 'sac'.",
                expected: "len(sac)",
                xpReward: 35
            },
            {
                type: "boss",
                title: "👹 BOSS : Le Voleur de sac",
                course: "Un voleur t'attaque ! Il essaie de te voler ta carte. La méthode .remove() retire un objet spécifique de la liste.",
                task: "Retire l'objet 'carte' de la liste 'sac'.",
                expected: "sac.remove('carte')",
                xpReward: 80
            },
            {
                type: "normal",
                title: "La boucle infinie (While)",
                course: "La boucle 'while' (tant que) répète du code tant que sa condition est vraie. Attention à ne pas bloquer l'ordinateur !",
                task: "Crée une boucle qui tourne TANT QUE 'pv' est supérieur à 0. N'oublie pas les deux points !",
                expected: "whilepv>0:",
                xpReward: 40
            },
            {
                type: "normal",
                title: "Passer en revue (For)",
                course: "La boucle 'for' parcourt une liste objet par objet. La syntaxe magique est : for element in liste:",
                task: "Crée une boucle 'for' qui parcourt la liste 'sac' en appelant chaque élément 'objet'.",
                expected: "forobjetinsac:",
                xpReward: 45
            },
            {
                type: "normal",
                title: "Compter les moutons (Range)",
                course: "Pour faire une boucle un nombre précis de fois, on utilise range(). Par exemple, range(5) comptera de 0 à 4.",
                task: "Fais une boucle 'for' avec la variable 'i' qui se répète 5 fois avec range().",
                expected: "foriinrange(5):",
                xpReward: 45
            },
            {
                type: "normal",
                title: "L'esquive d'urgence (Break)",
                course: "Le mot-clé 'break' permet de casser (arrêter) une boucle immédiatement, même si elle n'a pas fini son travail.",
                task: "Écris simplement le mot-clé pour stopper net une boucle.",
                expected: "break",
                xpReward: 30
            },
            {
                type: "boss",
                title: "👹 BOSS FINAL : Le Maître des Fonctions",
                course: "Le boss final exige que tu crées ta propre attaque ! Le mot-clé 'def' sert à définir une nouvelle fonction réutilisable.",
                task: "Définis une fonction nommée 'frapper' qui ne prend pas de paramètres (n'oublie pas les parenthèses () et les deux points :).",
                expected: "deffrapper():",
                xpReward: 150
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
let userState = {
    xp: 0,
    badges: [],
    progress: {}, // NOUVEAU : Mémorise le niveau atteint pour chaque langage (ex: { python: 15 })
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

    pendingHash: null, 

    // --- NOUVEAU : SYSTÈME DE SAUVEGARDE ---
    saveProgress: function() {
        const dataToSave = {
            xp: userState.xp,
            badges: userState.badges,
            progress: userState.progress
        };
        localStorage.setItem('codequest_save', JSON.stringify(dataToSave));
    },

    loadProgress: function() {
        const savedData = localStorage.getItem('codequest_save');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                userState.xp = parsed.xp || 0;
                userState.badges = parsed.badges || [];
                userState.progress = parsed.progress || {};
            } catch (e) {
                console.error("Erreur lors de la lecture de la sauvegarde");
            }
        }
    },

    init: function() {
        this.loadProgress(); // Charge la sauvegarde au démarrage de l'appli
        this.generateLanguageButtons();
        
        document.getElementById('home-btn').addEventListener('click', () => this.navigate('view-home'));
        
        let localHash = localStorage.getItem('codequest_hash') || "Aucun";
        document.getElementById('app-hash').textContent = localHash;

        document.getElementById('refresh-btn').addEventListener('click', () => {
            if (this.pendingHash) {
                localStorage.setItem('codequest_hash', this.pendingHash);
            }
            window.location.reload();
        });
        
        const infoModal = document.getElementById('info-modal');
        const closeModalBtn = document.getElementById('close-modal');

        document.getElementById('info-btn').addEventListener('click', () => {
            infoModal.classList.remove('hidden');
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

        this.checkForUpdates();
    },

    generateLanguageButtons: function() {
        const courseList = document.getElementById('course-list');
        const trainingList = document.getElementById('training-list');
        courseList.innerHTML = ''; trainingList.innerHTML = '';

        database.languages.forEach(lang => {
            const btnCourse = document.createElement('button');
            btnCourse.className = 'lang-btn';
            btnCourse.style.borderColor = lang.color;
            btnCourse.innerHTML = `${lang.icon} <span>${lang.name}</span>`;
            btnCourse.onclick = () => this.openCourse(lang.id);
            courseList.appendChild(btnCourse);

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
        // On charge le niveau mémorisé, ou le niveau 0 si c'est la première fois
        userState.currentLevelIndex = userState.progress[langId] || 0; 
        
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
                this.saveProgress(); // Sauvegarde l'obtention du badge
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
            
            // SAUVEGARDE L'AVANCEMENT INSTANTANÉMENT
            userState.progress[userState.currentLangId] = userState.currentLevelIndex;
            this.saveProgress();
            
            setTimeout(() => this.loadGameLevel(), 1500);
        } else {
            feedbackMessage.style.color = "var(--boss-color)";
            feedbackMessage.textContent = "❌ L'attaque échoue (Erreur de syntaxe)...";
        }
    },

    async checkForUpdates() {
        try {
            let response = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits/main`);
            if (!response.ok) {
                response = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits/master`);
            }
            if (!response.ok) return; 
            
            const data = await response.json();
            const latestHash = data.sha.substring(0, 7);
            const currentHash = localStorage.getItem('codequest_hash');

            if (!currentHash) {
                localStorage.setItem('codequest_hash', latestHash);
                document.getElementById('app-hash').textContent = latestHash;
            } else if (currentHash !== latestHash) {
                this.pendingHash = latestHash;
                const refreshBtn = document.getElementById('refresh-btn');
                refreshBtn.style.backgroundColor = "var(--boss-color)"; 
                refreshBtn.textContent = "⚠️🔄"; 
                refreshBtn.title = "Nouvelle version disponible ! Cliquez ici.";
            }
        } catch (error) {
            console.log("Mode hors-ligne, impossible de vérifier les mises à jour.");
        }
    },

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
