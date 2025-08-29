
// set.js - Assign a random set A–J only once per session and send to Make webhook
(function () {
  const existingSet = sessionStorage.getItem('assignedSet');
  if (!existingSet) {
    const sets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const randomSet = sets[Math.floor(Math.random() * sets.length)];
    sessionStorage.setItem('assignedSet', randomSet);

    // Send to Make webhook
    fetch("https://hook.eu2.make.com/clt1fmm89gnxx3is72cil1044n3g2p70", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ set: randomSet })
    });
  }
})();
