//1.D�clenchement de la vid�o apr�s son apparition

1) si le statut du scroll est "termin�", on d�clenche la fonction play(). On utilise un �couteur window.addEventListener("scroll",function(){});
2) on v�rifie une condition : lorsque le scroll d�passe la limite r�cup�r� dans les indications de la console window.pageYOffset
3) on utilise les dimensions de la fen�tres, ou m�dia queries ou breakpoints 

//2. J'ai stock� deux fonctions:

- displayPlayButton(); une dans la balise video qui affiche le bouton lecture (� la base hidden), une fois la vid�o termin�e. Avec un setAttribute("style","")
 qui modifie la visibilit� du bouton, dans l'�v�nement onended, de <video> ou si la condition de l'�couteur est v�rifi�
 
- window.location.reload(), stocker dans le bouton "Play" qui appara�t � la fin de la vid�o. 
Je comptais utiliser Ajax (hpttrequest) pour charger uniquement la "div" contenant le bouton et la vid�o et optimiser le chargement, FAUTE DE TEMPS. 

//3. Essai de superposer le bouton avec un z-index sup�rieur � celle de la vid�o

//4.utilisation de bootstrap seulement pour le css 
//5. La Fonction Iterate(variable) fonctionne lorsqu'elle est utilis�e dans la console, mais it�re que le premier �l�ment d'un tableau. Elle fonctionne pour les objets.
Sur le site, elle ne se comporte pas de la m�me fa�on.

