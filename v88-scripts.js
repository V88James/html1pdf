document.addEventListener('DOMContentLoaded', function() {
  // Handle boolean cell replacements, ensuring we target only td elements
  var booleanCells = document.querySelectorAll('td.v88-boolean');
  booleanCells.forEach(function(cell) {
    var text = cell.textContent.trim().toLowerCase();
    if (text === 'true') {
      cell.textContent = '✓';
    } else {
      cell.textContent = '✕'; // Covers 'false', empty, and any unexpected values
    }
  });

  // Handle hiding rows based on empty 'td.v88-hide-empty' cells
  var hideEmptyCells = document.querySelectorAll('td.v88-hide-empty');
  hideEmptyCells.forEach(function(cell) {
    if (cell.textContent.trim() === '') {
      cell.parentNode.style.display = 'none'; // Hides the parent row of the empty cell
    }
  });
});
