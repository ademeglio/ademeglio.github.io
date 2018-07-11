(function() {   
    
    // Project Constructor
    function Project(projectName, description, skills, imageUrl, gitRepo)  {
    this.projectName = projectName;
    this.description = description;
    this.skills = skills;
    this.imageUrl = imageUrl;
    this.gitRepo = gitRepo;
    }

    // Projects
    const project1 = new Project(
        //Project Name
        "Virtual Pets Amock",
        // Project Description
        "Based off an earlier project, this console application took us furthen into Java to understand OOP concepts such as encapsulation and the use of Interfaces. This projet was also the first time we did pair programming which I found to be very rewarding as the two of us worked together to sub out the application and think of program flow.",
        // Project Skills
        "Eclipse IDE, Git, Java, Junit, Test Driven Development, Pair-Programming.",
        // Project Snapshot Image URL
        "./images/VisualCode_med.png",
        // Project GitHub URL
        "https://github.com/ademeglio/ademeglio.github.io"
    )

    const project2 = new Project(
        //Project Name
        'Reviews Site Full Stack',
        // Project Description
        'This is an evolution of the &quot;Reviews Site&quot; project where we built our first website to understand the use of Spring and Thymeleaf Templates. In this iteration, we extended the functionality by using the Spring Java Persistence API to learn how to connect to an internal H2 database. I found this project particulary rewarding because it relates to some of the functionality I will need to implement in the applications I will be creating at Bartha',
        // Project Skills
        "Eclipse IDE, Microsoft Visual Studio Code, Google Chrome Developer Tools, Git, Test Driven Development, Java, Junit, ThymeLeaf, HTML5, CSS3, JavaScript, Mobile-First Design, Responsive Design.",
        // Project Snapshot Image URL
        "./images/eclipseIde2_med.png",
        // Project GitHub URL
        "https://github.com/ademeglio/reviews-site-full-stack"
    )

    const project3 = new Project(
        //Project Name
        'Professional Portfolio - JavaScript',
        // Project Description
        'Using HTML5, CSS3, and JavaScript I created this website to showcase my front-end work. I used Microsoft Visual Studio Code and Chrome Developer Tools to program the site starting with Responsive/Mobile-First design followed by making adjustments for tables and desktop views.',
        // Project Skills
        'Microsoft Visual Studio Code, Google Chrome Developer Tools, Git, HTML5, CSS3, JavaScript, Mobile-First Design, Responsive Design.',
        // Project Snapshot Image URL
        "./images/VisualCode_med.png",
        // Project GitHub URL
        'https://github.com/ademeglio/ademeglio.github.io'
    )

    // Array of Projects
    const projects = [ 
        project1,
        project2,
        project3,
    ];

    // create html elements in #projectsDiv
    const projectsDiv = document.getElementById("projectsDiv");

    // TODO: Create the HTML elements within #projectsDiv for each project
    for (let project of projects) {
        // You should make sure the carausel is going to work first this is harder?

        // Create div with class of "fullProjDesc" var div1
        // Create h3 with class of "underline"
        // Create a with class of "moreInfo" and link to open more info var a1
        // Create an image source for image url
        // Create description text variable p1
        // create hard coded h4 "Skills/Technologies:"
        // Create skills text variable p2 goes into projectSkills div2
        // Create div with class of projectskills var div2
        // Create Button with class gitButton
        // Create a with class "gitReposit" that links to project github

        // put each element into correct divs
        
        


        let art = projectsDiv.createElement("article");

        

    }

  
    // TODO: Create image carousel. As you cycle through the images, the selected image should be larger(have the most focus) and the description should slide out when clicked or something like that.
    // CAROUSEL
    let slideIndex = 1;

    // Carousel previous or next image
    function PlusDivs(n) {
        ShowDivs(slideIndex += n);
    }

    // Carousel show image
    function ShowDivs(n) {
        let i;
        const x = document.getElementsByClassName("imgs");
        if (n > x.length) {
            slideIndex = 1
        };
        if (n < 1) {
            slideIndex = x.length;
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }

})();