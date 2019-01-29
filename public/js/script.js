// Test Unitario:  Beat Mix Problem Set - script.js file

  // Drum Arrays:
  
  // Quattro variabili per rappresentare gli array di drum pad.  Questi array prendono il nome dalla batteria che rappresentano: kicks, snares, hiHats, rideCymbals.  Questi array dovrebbero avere tutti una lunghezza di 16 e essere riempiti con false.

  // Questa funzione restituisce una matrice che viene utilizzata per inizializzare le variabili per i Drum Array.
  const createEmptyDrumArray = () => new Array(16).fill(false);

  // 9) each drum array variable should point to a unique Array.
  // Dichiarare le variabili e inizializzarle utilizzando la funzione 'createEmptyDrumArray()'.
    
    // 1) a variable called kicks should exist
    // 5) the kicks array should have 16 elements initialized to false.
    let kicks = createEmptyDrumArray();
    
    // 2) a variable called snares should exist
    // 6) the snares array should have 16 elements initialized to false.
    let snares = createEmptyDrumArray();
    
    // 3) a variable called hiHats should exist
    // 7) the hiHats array should have 16 elements initialized to false.
    let hiHats = createEmptyDrumArray();
    
    // 4) a variable called rideCymbals should exist
    // 8) the rideCymbals array should have 16 elements initialized to false.
    let rideCymbals = createEmptyDrumArray();


  // toggleDrum() function:
  
  // una funzione chiamata toggleDrum che accetta due argomenti: una stringa che rappresenta il nome dell'array ('kicks', 'snares', 'hiHats' o 'rideCymbals') e un numero di indice.  Questa funzione dovrebbe capovolgere il valore booleano nell'array corretto all'indice specificato.

    // Questa funzione verrà utilizzata da toggleDrum () per ottenere il drum array in base al nome.
    const getDrumArrayByName = (name) => {
      switch (name) {
        case 'kicks':
        return kicks;
        case 'snares':
        return snares;
        case 'hiHats':
        return hiHats;
        case 'rideCymbals':
        return rideCymbals;
        default:
        return;
      }
    }
    
  // 1) should exist and be a function
  const toggleDrum = (drumArrayName, index) => {
    // Utilizzare la funzione 'getDrumArrayByName()' per ottenere il nome dell'array dalla stringa.
    const drums = getDrumArrayByName(drumArrayName);
    
    // 2) should not alter any arrays when called with missing arguments
    // 3) should not mutate any arrays with out-of-range index arguments
    // 4) should not mutate any arrays with negative index arguments
    if (!drums || index > 15 || index < 0) {
      return;
    }

    // 5) should mutate the correct array
    // 6) can toggle true -> false and false -> true
    // 7) toggles a drum in a single array at a time, not all four
    // 8) should only toggle a single drum in a single array
    drums[index] = !drums[index];
  }


  // clear() function:

  // Una funzione denominata 'clear()' che accetta una stringa nome array e imposta su falso tutti i valori dell'array corretto.
  
  // 1) should exist and be a function
  const clear = (drumArrayName) => {
    // 3) should not perform any mutation when called with an invalid array name
    // getDrumArrayByName() restituisce nulla per impostazione predefinita.
    // 4) mutates only a single array at a time
    const drums = getDrumArrayByName(drumArrayName);

    // 2) should perform no array mutation when called with no arguments
    if (drums) {
      // 5) should set all values in an array to false when called with a valid array name
      drums.fill(false);
    }
  }


  // invert() function:

  // Una funzione denominata 'invert()' che prende una stringa nome array e capovolge il valore booleano di tutti gli elementi dell'array corretto.


  // 1) should exist and be a function
  const invert = (drumArrayName) => {
  // 2) should perform no array mutation when called with no arguments
  // 3) should not perform any mutation when called with an invalid array name
  // getDrumArrayByName() restituisce nulla per impostazione predefinita.
  // 4) mutates only a single array at a time
  const drums = getDrumArrayByName(drumArrayName);

  if (!drums) {
    return;
  }
  // 5) should invert all values in an array when called with a valid array name
  for (let i = 0; i < drums.length; i++) {
    drums[i] = !drums[i];
  }
}


// Test Unitario:  BONUS:  getNeighborPads() function

  // Una funzione chiamata 'getNeighborPads()' che accetta un parametro x, ye una dimensione.  Nell'applicazione, questi valori si riferiscono alla griglia synth: x e y sono indicizzati a zero dalla parte inferiore sinistra della griglia e la dimensione è un numero che rappresenta il numero di righe / colonne nel quadrato.  'getNeighborPads()' dovrebbe restituire una matrice di vicini, ognuno nella forma [xValore, yValore].  I vicini sono i quadrati immediatamente a sinistra, a destra, sopra e sotto la posizione della griglia.


  // 1) should exist and be a function
  const getNeighborPads = (x, y, size) => {
    // 2) should return an array
    const neighborPads = [];
    if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
      // 3) should return an empty array when called with an x or y argument outside the size range
      return neighborPads;
    }
  
    // 4) should return an array of four neighbor locations when called with a valid input
    // 5) should only return two neighbors when called with a location in a corner of the grid
    // 6) should only return three neighbors when called with a location on the edge of the grid
    neighborPads.push([x - 1, y]);
    neighborPads.push([x, y - 1]);
    neighborPads.push([x + 1, y]);
    neighborPads.push([x, y + 1]);
    
    return neighborPads.filter((neighbor) => {
      return neighbor.every((val) => {
        return val >= 0 && val < size;
      });
    });
  };