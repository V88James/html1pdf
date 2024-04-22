document.addEventListener('DOMContentLoaded', function() {
    
  // Handle boolean cell replacements
  var booleanCells = document.querySelectorAll('.v88-boolean');
  booleanCells.forEach(function(cell) {
    var text = cell.textContent.trim().toLowerCase();
    if (text === 'true') {
      cell.textContent = '✓';
    } else {
      cell.textContent = '✕'; // Covers 'false', empty, and any unexpected values
    }
  });

  // Handle hiding rows based on empty 'v88-hide-empty' cells
  var rows = document.querySelectorAll('tr');
  rows.forEach(function(row) {
    var cells = row.querySelectorAll('td.v88-hide-empty');
    
    // Check each such cell to see if it is empty
    cells.forEach(function(cell) {
      if (cell.textContent.trim() === 'X' || cell.textContent.trim() === '') { // Assuming 'X' can also denote emptiness
        row.style.display = 'none'; // Hides the entire row if any cell is empty or 'X'
      }
    });
  });
});
