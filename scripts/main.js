document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    var closeButton = document.getElementById('close-button');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        closeButton.style.display = navLinks.classList.contains('show') ? 'block' : 'none';
    });

    var navLinksArray = Array.from(document.querySelectorAll('.nav-links a'));
    navLinksArray.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('show');
            closeButton.style.display = 'none';
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar') && !event.target.classList.contains('menu-toggle')) {
            navLinks.classList.remove('show');
            closeButton.style.display = 'none';
        }
    });

    closeButton.addEventListener('click', function () {
        navLinks.classList.remove('show');
        closeButton.style.display = 'none';
    });
});

function openStage(evt, stageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(stageName).style.display = "block";
    evt.currentTarget.className += "active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
