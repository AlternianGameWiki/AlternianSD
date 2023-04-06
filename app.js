// Get the navbar element
var navbar = document.querySelector('nav');

// Store the current scroll position
var prevScrollpos = window.pageYOffset;

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Get the current scroll position
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    // If the user scrolled up, show the navbar
    navbar.style.opacity = 1;
  } else {
    // If the user scrolled down, hide the navbar
    navbar.style.opacity = 0;
  }

  // Store the new scroll position
  prevScrollpos = currentScrollPos;
});

// Add a hover event listener to the navbar
navbar.addEventListener('mouseenter', function() {
  navbar.style.opacity = 1;
});

navbar.addEventListener('mouseleave', function() {
  // Only hide the navbar if the user has scrolled down
  if (prevScrollpos > 0) {
    navbar.style.opacity = 0;
  }
});

// Transition
var characters = document.querySelectorAll('.character');

characters.forEach(function(character) {
  var characterFull = character.querySelector('.character-full');

  character.addEventListener('mouseover', function() {
    if (characterFull) {
      characterFull.classList.add('show');
    }
  });

  character.addEventListener('mouseout', function() {
    if (characterFull) {
      characterFull.classList.remove('show');
    }
  });
});

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // get form data
  const name = document.querySelector('#name').value;
  const photo = document.querySelector('#photo').files[0];
  const bio = document.querySelector('#bio').value;
  const appearance = document.querySelector('#appearance').value;
  const powers = document.querySelector('#powers').value;
  const personality = document.querySelector('#personality').value;

   // read photo file as data URL
   const reader = new FileReader();
   reader.onload = function() {
     const photoUrl = reader.result;
  
  // create new page
  const pageContent = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${name}</title>
      <style>
      nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #333;
        color: #fff;
        padding: 10px;
        transition: opacity 0.2s ease-in-out;
        opacity: 1;
        z-index: 1000;
      }
      
      nav.scrolled {
        opacity: 0;
      }
      
      nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
      }
      
      nav ul li {
        margin: 0 10px;
      }
      
      nav ul li a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease-in-out;
      }
      
      nav ul li a:hover {
        color: #ab01c3;
        
      }
      
      header img{
        max-width: 500px;
       margin-left: 32%;
      }
    
      body {
        margin: 0;
        padding-top: 50px;
        background-image: url(https://i.imgur.com/9uWxZuR.jpg);
        background-size: cover;
        color: #fff;
        font-size: 1.5em;
        text-align: justify;
      }
    
      .box {
            margin-left: 10%;
            margin-right: 10%;
            padding: 7%;
            background-color: #242424;
            border: 5px solid #AA00C3;
            border-radius: 5px;
          }
          
          /* CSS for images */
          img {
            max-width: 50%;
            height: auto;
            display: block;
            margin: 10px auto;
          }
    
      h1{
        text-align: center;
    }
    </style>
      </head>
  
      <body>
          <header>
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Characters</a></li>
                  <li><a href="#">Locations</a></li>
                </ul>
              </nav>
            </header>
            <main>
              <div class="box">
        <h1>${name}</h1>
        <img src="${photoUrl}" alt="Photo">
        <h2>Bio</h2>
        <p>${bio}</p>
        <h2>Appearance</h2>
        <p>${appearance}</p>
        <h2>Powers and Skills</h2>
        <p>${powers}</p>
        <h2>Personality</h2>
        <p>${personality}</p>
        </div>
        </main>
        <script src="app.js"></script>
    </body>
    
    </html>
  `;
  
  // create URL for new page
  const blob = new Blob([pageContent], {type: 'text/html'});
  const url = URL.createObjectURL(blob);
  
  // redirect to new page
  window.location.href = url;
   };
  reader.readAsDataURL(photo);
});