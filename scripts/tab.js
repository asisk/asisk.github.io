const tabBtns = document.querySelectorAll(".tablinks");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tabBtns.forEach(f => f.classList.replace("active", "tablinks"));
    e.target.classList.toggle("active");
  });
});

function openStage(evt, stageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace("active", "tablinks");
    // }
    document.getElementById(stageName).style.display = "block";
    evt.currentTarget.className = "active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
