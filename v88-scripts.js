document.addEventListener('DOMContentLoaded', function() {
  console.log('Document loaded. Running scripts...');

  // Handle boolean cell replacements
  var booleanCells = document.querySelectorAll('td.v88-boolean');
  booleanCells.forEach(function(cell) {
    var text = cell.textContent.trim().toLowerCase();
    console.log('Boolean cell found:', cell, 'with value:', text);
    if (text === 'true') {
      cell.textContent = '✓';
    } else {
      cell.textContent = '✕';
    }
  });

  // Handle hiding rows based on empty 'v88-hide-empty' cells
  var hideEmptyCells = document.querySelectorAll('td.v88-hide-empty');
  console.log('Found', hideEmptyCells.length, 'empty hideable cells.');
  hideEmptyCells.forEach(function(cell) {
    console.log('Checking cell:', cell, 'with content:', cell.textContent.trim());
    if (cell.textContent.trim() === '') {
      cell.parentNode.style.display = 'none';
      console.log('Hiding row:', cell.parentNode);
    }
  });
});
