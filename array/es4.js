/*
  ESERCIZIO 4 - includes()

  .includes() verifica se un array contiene un determinato elemento.

  Sintassi:  array.includes(elemento)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es4_1(arr, elemento) {
  // 1. Restituisci true se arr contiene elemento
  // TODO: scrivi qui la tua soluzione
  if (arr.includes(elemento)) {
    return true
  }
  else {
    return false
  }
}

function es4_2() {
  // 2. Verifica se ["rosso", "verde", "blu"] contiene "giallo"
  // TODO: scrivi qui la tua soluzione
  if (["rosso", "verde", "blu"].includes("giallo")) {
    return true
  }
  else{
    return false
  }
}

function es4_3(arr, a, b) {
  // 3. Restituisci true se arr contiene sia a che b
  // TODO: scrivi qui la tua soluzione
  if (arr.includes(a && b)) {
    return true
  }
  else {
    return false
  }
}

// --- NON MODIFICARE SOTTO ---
export { es4_1, es4_2, es4_3 };
