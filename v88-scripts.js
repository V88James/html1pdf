document.addEventListener('DOMContentLoaded', function() {
  console.log('Document loaded. Running scripts...');

  // Handle boolean cell replacements
  var booleanCells = document.querySelectorAll('td.v88-boolean');
  booleanCells.forEach(function(cell) {
    var text = cell.textContent.trim().toLowerCase();
    if (text === 'true') {
      cell.textContent = '✓';
    } else {
      cell.textContent = '✕';
    }
  });

  // Handle hiding rows based on empty 'v88-hide-empty' cells
  var hideEmptyCells = document.querySelectorAll('td.v88-hide-empty');
  hideEmptyCells.forEach(function(cell) {
    if (cell.textContent.trim() === '') {
      cell.parentNode.style.display = 'none';
    }
  });
});
