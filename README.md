# Projet_Pendu
Projet du pendu 1TM1

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
