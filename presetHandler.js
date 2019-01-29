// Use this presets array inside your presetHandler
const presets = require('./presets');


// Test Unitario:  Preset function - presetHandler.js file

  // Una funzione denominata 'presetHandler()'.  Questa funzione verrà richiamata dal tuo server per ottenere un preset esistente o creare / aggiornare un preset.

  // Una funzione utilizzata da 'presetHandler()' per ottenere l'indice preimpostato o restituire null.
  const getPreset = (index) => {
    return presets[index] || null;
  }

  // Una funzione utilizzata da 'presetHandler()' per creare nuovi preset o aggiornare quelli esistenti.
  const createOrUpdatePreset = (index, array) => {
    if (!presets[index]) {
      return;
    }
    presets[index] = array;
    return presets[index];
  }

  // 'presetHandler()' richiede fino a tre argomenti. Il primo argomento è una stringa che rappresenta il tipo di richiesta: 'GET' o 'PUT'.  Il secondo argomento è l'indice dell'array della matrice dei preset.  Per le richieste 'PUT', verrà inoltrato anche un terzo argomento, newPresetArray, che rappresenta la nuova matrice di preset drum per salvare in quell'indice.

   // 1) should exist and be a function
  const presetHandler = (req_type, pArray, newPresetArray) => {
    // 'presetHandler()' dovrebbe restituire un array.  Questo array avrà uno o due elementi a seconda di come viene chiamato.  Se presetHandler viene chiamato con un indice non valido, dovrebbe restituire un array con 404 come primo elemento, il che significa che tale indice di array non è trovato.  Se l'indice è valido, il primo elemento dell'array di restituzione deve essere 200, il che significa che la richiesta era OK.
    
    // method === 'GET'
    if (req_type === 'GET') {
      let preset = getPreset(pArray);
      if (preset) {
        // 2) should return an array
        // 3) should return 200 as the first element for a valid array index
        // 4) should return the correct preset array as the second element
        return [200, preset];
      } else {
        // 5) should return 404 as the first element for an out-of-range array index
        return [404];
      }
    } else if (req_type === 'PUT') {
      // method === 'PUT'

      const newPreset = createOrUpdatePreset(pArray, newPresetArray);
      if (newPreset) {
        // 5) should return an array
        // 6) should return 200 as the first element for a valid array index
        // 7) should return the updated preset array as the second element
        // 8) should set the preset at the correct index with the new presetArray
        return [200, newPreset];
      } else {
        // 9) should return 404 as the first element for an out-of-range array index
        return [404];
      }
    } else {
      // invalid method argument:
      // 10) should return 400 as the first element if called without a 'GET' or 'PUT' method
      return[400];
    }
  };


// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;