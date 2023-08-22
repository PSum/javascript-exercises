function removeFromArray(arr, ...valuesToRemove) {
  // Die Funktion erhält ein Array 'arr' und eine Liste von Werten 'valuesToRemove',
  // die aus dem Array entfernt werden sollen.
  // Die Syntax ...valuesToRemove wird in JavaScript als "Rest-Parameter" bezeichnet. Sie ermöglicht es, eine unbestimmte Anzahl von Argumenten als Array darzustellen.

  // Iteriere über die Werte, die entfernt werden sollen.
  for (const value of valuesToRemove) {
    // Finde den Index des aktuellen Werts im Array.
    const index = arr.indexOf(value);

    // Überprüfe, ob der Wert im Array gefunden wurde.
    if (index !== -1) {
      // Wenn der Wert gefunden wurde (Index ist nicht -1),
      // entferne den Wert aus dem Array an der gefundenen Position.
      arr.splice(index, 1);
    }
    // Wenn der Wert nicht gefunden wurde, wird dieser Schritt übersprungen.
  }

  // Gib das bearbeitete Array zurück, unabhängig davon, ob Werte entfernt wurden oder nicht.
  return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
