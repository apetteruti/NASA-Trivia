
# NASA-Trivia
NASA-Trivia is a web application designed using both NASA's API and the Ope Trivia API to generate space trivia questions based on NASA's photo of the day. This application not only connects users with the amazing work NASA does but allows the to learn something new everyday about our solar system so they can become space explorers of their own! 

Features:
 -Generates NASA's Photo of the Day or the day prior with a description for the user using NASA's API
 -Analyzes generated photo to create a trivia question about the photo using the Open Trivia Database API
 -Keeps score of the users correct answers in local storage
 -Allows users to store their favorite photos for later refrence in local storage


APIs used: 
- NASA Astronomy Picture of the Day (APOD): https://apod.nasa.gov/apod/
- Open Trivia: https://opentdb.com/

jQuery:
  APOD
    - AJAX query calls the picture and the title.
    - Renders buttons associated with calling the current picture, as well as yesterday's and the favorite
    - Title is split into array for comparison with the Trivia question

    Open Trivia
    -  AJAX query calls trivia questions and answers from the Science and Nature category
    -  The question is split into an array and the words are compared to the title from the APOD so that the questions are associated with the picture
    -  Generates a field for an answer to be written by the user
    -  Renders a submit button to submit the answer for comparison to the answer to the question stored in the Trivia database
    -  Returns an affirmative response and adds a score of 1 if correct. Returns a "Try again" response if the answer is incorrect. Both are alerted in the form of toast. The score is also recorded in an HTML 5 Canvas progress bar.

    Local Storage
    - APOD can be added as a favorite and stored locally to be called when the user clicks the "Favorite" button in the upper right-hand corner.


CSS Framework: Materialize
- The entire webpage is built on a grid system to ensure responsivity
- Nav bar format centers the logo and dictates position of buttons, including buttons to call the APOD, yesterday's APOD, the "Plus" to add favorites, the button to call favorites, and the submit button
- Buttons change colors when clicked
- Toast pops up to alert when the user answers questions correctly
- CSS dictates small changes to colors and position

HTML 5 Canvas:
- Generates the shooting stars in the background. The code inspiration can be attributed to https://codepen.io/bobwonch/, with changes to the color, background, velocity, and radius of the shooting stars.
- Positions the <progress> bar to track the score
- HTML 5 includes both jquery/JavaScript and HTML features


