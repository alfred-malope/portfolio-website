$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');


        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

});

var typed = new Typed(".effect", {
    strings: ["full-stack developer", "frontend developer", 
    "backend developer", "cloud administrator", 
    "database administrator", "web developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

var typed = new Typed(".effect2", {
    strings: ["full-stack developer", "frontend developer", 
    "backend developer", "cloud administrator", 
    "database administrator", "web developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

function fetchSkills() {
    return fetch("./assets/json/skills.json")
      .then(response => response.json())
      .then(skillsData => {
        return skillsData;
      });
  }
  

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}


fetchSkills().then(data => {
    showSkills(data);
});


// Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "malopealfred12@gmail.com",
//     Password : "E4EC429C5453F1713D095109FF0CE253B1B0",
//     To : 'them@website.com',
//     From : "malopealfred12@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );