/*
  ESERCIZIO 3 - includes()

  Controlla se una stringa contiene un determinato testo.
  Restituisce true oppure false.

  Sintassi:  stringa.includes(valore)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es3_1() {
  // 1. Restituisci true se "JavaScript" contiene "Script"
  // TODO: scrivi qui la tua soluzione
  if ("JavaScript".includes("Script")) {
    return true
  }
  else {
    return false
  }
}

function es3_2() {
  // 2. Restituisci true se "Programmazione" contiene "Python"
  // TODO: scrivi qui la tua soluzione
  if ("Programmazione".includes("Python")) {
    return true
  }
  else {
    return false
  }
}

function es3_3(email) {
  // 3. Verifica se la mail ricevuta contiene "@"
  // TODO: scrivi qui la tua soluzione
  if (email.includes("@")) {
    return true
  }
  else {
    return false
  }
}

// --- NON MODIFICARE SOTTO ---
export { es3_1, es3_2, es3_3 };
