document.addEventListener('DOMContentLoaded', function() {
    var booleanCells = document.querySelectorAll('.v88-boolean');
    booleanCells.forEach(function(cell) {
      var text = cell.textContent.trim().toLowerCase();
      if (text === 'true') {
        cell.textContent = '✓';
      } else {
        cell.textContent = '✕'; // Covers 'false', empty, and any unexpected values
      }
    });
  });
