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

document.addEventListener('DOMContentLoaded', function() {
    var cells = document.querySelectorAll('.v88-hide-empty');
    cells.forEach(function(cell) {
      if (cell.textContent.trim() === '') {
        cell.parentNode.style.display = 'none';
      }
    });
  });
