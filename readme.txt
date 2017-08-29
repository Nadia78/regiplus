//1.Déclenchement de la vidéo après son apparition

1) si le statut du scroll est "terminé", on déclenche la fonction play(). On utilise un écouteur window.addEventListener("scroll",function(){});
2) on vérifie une condition : lorsque le scroll dépasse la limite récupéré dans les indications de la console window.pageYOffset
3) on utilise les dimensions de la fenêtres, ou média queries ou breakpoints 

//2. J'ai stocké deux fonctions:

- displayPlayButton(); une dans la balise video qui affiche le bouton lecture (à la base hidden), une fois la vidéo terminée. Avec un setAttribute("style","")
 qui modifie la visibilité du bouton, dans l'évènement onended, de <video> ou si la condition de l'écouteur est vérifié
 
- window.location.reload(), stocker dans le bouton "Play" qui apparaît à la fin de la vidéo. 
Je comptais utiliser Ajax (hpttrequest) pour charger uniquement la "div" contenant le bouton et la vidéo et optimiser le chargement, FAUTE DE TEMPS. 

//3. Essai de superposer le bouton avec un z-index supérieur à celle de la vidéo

//4.utilisation de bootstrap seulement pour le css 
//5. La Fonction Iterate(variable) fonctionne lorsqu'elle est utilisée dans la console, mais itère que le premier élément d'un tableau. Elle fonctionne pour les objets.
Sur le site, elle ne se comporte pas de la même façon.

