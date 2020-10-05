<body>
  <link rel="stylesheet" href="styles.css">
  <div class="tab">
    <button class="tablinks" onclick="clickHandle(event, 'Resume')">Resume</button>
    <button class="tablinks" onclick="clickHandle(event, 'Work Experience')">Work Experience</button>
  </div>

  <div id="Resume" class="tabcontent">
    <zero-md src="resume.md"></zero-md>
  </div>

  <div id="Work Experience" class="tabcontent">
    <h3>Rawrrr.</h3>
  </div>

  <div id="Dog" class="tabcontent">
    <h3>Bork Bork.</h3>
</div>

<!-- Lightweight client-side loader that feature-detects and load polyfills only when necessary -->
<script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2/webcomponents-loader.min.js"></script>

<!-- Load the element definition -->
<script type="module" src="https://cdn.jsdelivr.net/gh/zerodevx/zero-md@1/src/zero-md.min.js"></script>

<script>
function clickHandle(evt, animalName) {
  let i, tabcontent, tablinks;

  // This is to clear the previous clicked content.
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Set the tab to be "active".
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Display the clicked tab and set it to active.
  document.getElementById(animalName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>
</body>
