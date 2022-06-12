(()=>{
    'use strict';
    // Déclarer et définir une variable de réf pour tous les inputs 
    const inputs = document.querySelectorAll('.controls input');

    // fonction Event Handler. Un tel objet déstructure beaucoup de paramètres par défaut wow
    const handleUpdate = ({ target: { name, value, dataset: { sizing: suffix = '' } } }) => {
      document.documentElement.style.setProperty(`--${name}`, value + suffix)
    }

    // fonction d'assistance pour ajouter/supprimer des écouteurs d'événements car la syntaxe standard est longue
    const listen = (event, element, handler, cb = false, add = true) => (
      add ?
        cb ?
          () => element.addEventListener(event, handler) :
          element.addEventListener(event, handler) :
        cb ?
          () => element.removeEventListener(event, handler) :
          element.removeEventListener(event, handler)
    );

    // Atjouter un event listenenr à chaque input 
    inputs.forEach(inp => {
      // Lorsque la value de l'input change, appeler la fonction handleUpdate
      listen('change', inp, handleUpdate)

      // Lorsqu'il y a un mousedown event, ajouter un autre event listener à l'input
    
      // Ce nouvel event listener va écouter le 'mousemove', et appeler la fonction handleUpdate.
      listen('mousedown', inp, listen('mousemove', inp, handleUpdate, true))
      
      // Lorsqu'il y a un mouseup event, il faut supprimer l'event listener pour le 'mousemove'
      listen('mouseup', inp, listen('mousemove', inp, handleUpdate, true, false))
    });
  })();