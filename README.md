# Projet_Pendu
Projet du pendu 1TM1

Delime Thibault
Koninckx Corentin
Mertens Pierre
Robin Simon
Loïc Dero

Projet du pendu :

Cahier des charges:
Il faut faire la liste de mots possibles qui sont à trouver.
On demande au joueur d’encoder un pseudo.
Une fonction qui choisit aléatoirement un des mots de la liste.
Le nombre de lettres doit être affiché.
Il faut demander au joueur quel lettre il veut essayer.
Si le joueur introduit plus qu’une lettre, cela sera considéré comme étant la tentative de
trouver le mot.
Selon le mot (longueur, difficulté,...) le joueur aura un certain nombre de chances.
Si la lettre qu’il a encodée se trouve dans le mot choisi aléatoirement, il lui ait indiqué qu’il
a eu juste et où se trouve la lettre dans le mot.
S’il a faux, il lui ait indiqué qu’il a fait une erreur (même pour la tentative de trouver
directement le mot).
Pour chaque erreur, il lui est retiré une chance.
Quand le joueur réussi à trouver le mot dans le nombre de chance qu’il a, il reçoit un
certain nombre de points selon la difficulté du mot.
Et s’il ne réussit pas, il perd un certain nombre de points selon la difficulté du mot.
Il est demandé au joueur s’il veut continuer de jouer (O/N). S’il décide d’arrêter de jouer, le
pseudo indiqué au début et les points finaux est indiqué.
S’il décide de continuer, le jeu continue et le pseudo et les points du joueur
sont conservés (pour les points, s’il y a déjà des points d’autres parties, ils sont
additionnés).
Les infos telles que difficulté, points gagnés ou perdus pour un mot sont mémorisés avec le
mot dans la liste. Il en va de même pour celles permettant de savoir si le mot a été choisi,
voire trouvé.
Le jeu s'arrête si tous les mots ont été joués au moins une fois

Description algorithmique du programme : 

Tout d’abord nous avons des constantes qui sont déjà déclarées. La liste de mots avec les mots à deviner, ensuite la variable qui dit qu’on continue la partie qui stocke la lettre « o », enfin le score qui est de 0.
La première fonction que j’ai créée est une fonction qui va chercher le mot à deviner dans la liste, donc je demande un chiffre entre 0 et la longueur de la liste en maximum, ce qui désignera le mot et le retourne.
La deuxième fonction que j’ai créée demande le nom du joueur, je demande en boucle au joueur d’écrire son nom, tant que le nom n’est pas valide on continue de demander, une fois que le nom correspond bien à un nom on retourne le nom ou pseudo.
La troisième fonction demande à l’utilisateur de proposer une lettre pour le mot, si ce n’est pas une lettre entre ‘’a’’ et ‘’b’’ nous redemandons d’introduire cette lettre. Une fois correcte, nous la retournons.
La quatrième fonction cache les lettres non trouvées, c’est-à-dire qu’elle remplace les lettres par « * » ou des simples tirets. Pour cela on crée une variable qui s’applique lorsque la lettre n’est pas encore trouvée. Si la lettre est trouvée, le masque ne s’applique pas. On retourne le masque adapté à la bonne lettre. Elle à besoin en paramètre du mot entier et des lettres déjà trouvées.
Ensuite la dernière fonction du jeu, et pas des moindres puisqu’elle contient tout le code du jeu. Premièrement, nous stockons le nom du joueur dans une variable. Après nous faisons une boucle tant que le joueur n’introduit pas qu’il veut pas arrêter de jouer, nous continuons. Nous de stockons donc le mot à trouver dans une variable, nous l’épelons et nous stockons toutes les lettres dans un tableau, seulement les lettres différentes du mot. (exemple : papier = [p, a ,i , e, r]). Ensuite, nous mettons en place le nombre de vies, si le mot contient 10 lettres ou plus, le joueur a droit à 5 chances, si le mot contient entre 10 et 5 lettres, alors ce sera 7 chances, en dessous de 5 lettres différentes ce sera 10 chances. Il faudra stocker le nombre de chances dans une variable. (cette règle permet que le nombre de chances soit proportionnel au nombre de lettres différentes dans l’alphabet). Encore, nous avons de stocker la fonction des lettres cachées pour montrer le mot, avec les lettres encore cachées, si non trouvées. Ensuite tant que TOUTES les lettres OU que le nombre de vies n’est pas égal à 0, afficher en console une phrase avec le mot à trouver avec les caches et le nombre de vies restantes (exemple : « le mot est _h_t : reste 2 vies ) et proposer une lettre grâce à la bonne fonction. Si la lettre proposée a déjà été dite, alors écrire un message adapté mais quand même retirer une chance, Si la lettre est bien dans le mot, écrire un message adapté et rajouter la lettre au tableau des lettres trouvées, sinon retirer une vie et écrire un message adapté. Après cette boucle, si le mot à été trouvé, alors adapter le score au nombre de lettres différentes à trouver, et afficher un message adapté avec le score. Sinon, soustraire le nombre de lettres du mot au score et afficher un message adapté avec le score. Enfin demander si le joueur veut arrêter de jouer ou continuer.
En toute fin, faire une fonction qui reprend le jeu, afin de faire un bouton cliquable depuis la page HTML.
