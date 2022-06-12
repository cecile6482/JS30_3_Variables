# JS30_3_Variables

Deuxième challenge de <a href="https://github.com/wesbos">Wes Bos</a> avec le "30 Day Vanilla JS Coding Challenge".

La page web fournie dans cet exercice affiche une image et comprte 3 inputs à partir desquels on peut manipuler le padding, le flouttage et la couleur du background de l'image. Il faut donc mettre à jour le CSS et écrire le JS nécessaire pour rendre tout cela fonctionnel. 

## Pour le CSS : 

1. Déclarer un nouveau style pour l'élément ```:root```et déclarer trois variables dans la définition de style pour ```:root```avec les mêmes noms que les inputs. 

```css script 
/* deux tirets (--) suivi du nom de la variable */

:root {
    --base: #ffc600;
    --blur: 10px; 
    --padding: 10px;
}
```

2. Déclarer un nouveau style pour l'```img``` et définir les propriétés ```background```,```filter``` et ```padding```dans les variables que nous avons définies à l'élément racine : 

```css script 
img {
    background: var(--base);
    filter: blur(var(--blur));
    padding: var(--padding); 
}
```

3. Déclarer un nouveau style pour la class ```.hl``` et définir la couleur sur la variable de base. 


## Pour le JS: 

1. Déclarer et définir une variable en tant que référence pour tous les inputs de la page. 

2. Parcourir les éléments du HTML Node que les variables référencient et ajouter un écouteur d'événement à chaque variable qui appelle un gestionnaire chaque fois que la valeur de l'input change. 

3. Répeter l'étape 2, en écoutant les mouvements de la souris sur les inputs au lieu des changements de valeurs (l'évent ```mousemove```)

4. Définir une fonction qui sera utilisée comme gestionnaire d'événements. Elle va permettre de mettre à jour la valeur de la variable en CSS au niveau du document racine correspondant à la propriété ```name``` de l'```input``` qui a appelé cette fonction. 

>> Attention : les propriétés telles que le ```padding``` et le ```blur``` ne seront pas mises à jour car la valeur de l'input n'inclut pas l'unité de mesure que nous utilisons ('px', 'em', etc...). Les ```input``` ont également une propriété de dimension des données s'ils nécessitent un suffixe. Nous pouvons donc l'utiliser pour ajouter le suffixe correct à la valeur nécessaire. 

Et voilà ! C'est fait ! 