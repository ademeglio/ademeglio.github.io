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
        "./images/eclipseIde_med.png",
        // Project GitHub URL
        "https://github.com/ademeglio/virtual-pets-amok"
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

    console.log(projects);
    // Carousel Setup
    let slideIndex = 0    // Index of currently displayed URL
    let rotation;           // For slide rotation

    // Carousel DOM elements
    const prev = document.querySelector('.carousel .arrowLeft .prev');
    const next = document.querySelector('.carousel .arrowRight .next');
    const view = document.querySelector('.carousel .view');
   console.log(view);
    
    const thumbs = document.querySelector('.carousel .thumbs');
    const h3 = document.querySelector('.carousel .projectInfo .underline');
    const p1 = document.querySelector('.carousel .projectInfo .projectDesc');
    const h4A = document.querySelector('.carousel .projectInfo .skillHdr');
    const p2 = document.querySelector('.carousel .projectInfo .projectSkills');
    const h4B = document.querySelector('.carousel .projectInfo .endTag');

    // Create thumbnails
    for (let i = 0; i < projects.length; i++) {
        console.log("THUMBNAIL INDEX: " + slideIndex);
        console.log("THUMBNAIL i === " + i);
        // Create the <img> element
        let imgUrl = projects[i].imageUrl;
        
        const thumbImg = document.createElement('img');
        thumbImg.setAttribute('src', imgUrl);
        thumbs.appendChild(thumbImg);

        // When preview is clicked, display that image
        thumbImg.addEventListener('click', function() {
            slideIndex = i;
            ShowSlide();
            clearInterval(rotation);
        });
    }   
    
    // Clicking "Left/Previous" button displays previous image
    prev.addEventListener('click', function() {
        prevSlide();
        clearInterval(rotation);
    })

    // Clicking "Right/Next" button displays next image
    next.addEventListener('click', function() {
        nextSlide();
        clearInterval(rotation);
    })

    // Display slide in view based on the value of SlideIndex
    function ShowSlide() {        
        view.innerHTML = '';
        const imgUrl = projects[slideIndex].imageUrl;
        const link = document.createElement('a');
        const img = document.createElement('img');
        let projGitRepo = projects[slideIndex].gitRepo;
        link.setAttribute('href', projGitRepo);
        img.setAttribute('src', imgUrl);
        view.appendChild(link);
        link.appendChild(img);
        console.log(projects[slideIndex].imageUrl);
        console.log(view);
    }

    // Change slideIndex, looping if needed, then show slide
    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = projects.length - 1;
        }
        ShowSlide();
    }

    function nextSlide() {
        slideIndex++;
        console.log("Anthony, the projects length is " + projects.length)
        console.log("slideIndex is now " + slideIndex)
        if (slideIndex === projects.length) {
            slideIndex = 0;
        }
        console.log("SLIDE INDEX: " + slideIndex)
        ShowSlide();
    }

    // Display the first slide in the carousel
    ShowSlide();

    // Begin by setting an interval to loop through the images
    // Store is in a variable to be cleared on user interaction
    // rotation = setInterval(function() {
    //     nextSlide();
    // }, 2000);



    
    // create html elements in #projectsDiv
    // const projectsDiv = document.getElementById("projectsDiv");

    // function GenerateProjects() {

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
        
        


        // let art = projectsDiv.createElement("article");

        

    // }

  
    // TODO: Create image carousel. As you cycle through the images, the selected image should be larger(have the most focus) and the description should slide out when clicked or something like that.
    // CAROUSEL
 



  

})();