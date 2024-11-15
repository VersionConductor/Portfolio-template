
document.querySelectorAll('nav a').forEach(anchor => {
    
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); //prevent default the anchor default behaviour

        const targetID = this.getAttribute('href'); //select the target section id
        const targetSection = document.querySelector(targetID); //select the section

        //scroll the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth'});

        //update the URL without reloding the page
        history.pushState(null, null, targetID);
    });

});