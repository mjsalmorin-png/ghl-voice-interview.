
// question.js - Display the assigned set on the page for reference or debugging
(function () {
  const set = sessionStorage.getItem('assignedSet');
  const questionBox = document.getElementById('questionBox');
  if (questionBox) {
    questionBox.innerText = set ? `Assigned Set: ${set}` : "No set assigned.";
  }
})();
