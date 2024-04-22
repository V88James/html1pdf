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
  // Select all table rows in the document
  var rows = document.querySelectorAll('tr');

  rows.forEach(function(row) {
    // Within each row, find 'td' elements with the class 'v88-hide-empty'
    var cells = row.querySelectorAll('td.v88-hide-empty');
    
    // Check each such cell to see if it is empty
    cells.forEach(function(cell) {
      if (cell.textContent.trim() === '') {
        // If any cell is empty, hide the entire row
        row.style.display = 'none';
      }
    });
  });
});
