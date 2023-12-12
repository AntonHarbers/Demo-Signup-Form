# The Odin Project - Sign-up Form

A Sign up form made using html, css and javascript for the odin project.

[Live Link](https://antonharbers.github.io/Odin_Form/)

![Screenshot of the final Sign up Page](/assets/repoImage.png)

## Folder Structure

```
    /.git           -> This git repository
    /assets         -> Contains the favicon, the repo Image, logo and background pictures.
    index.html      -> Contains all the HTML for this project
    README.md       -> This Readme file
    script.js       -> Contains all the functionality
    style.css       -> Contains all the project styles for all screen sizes
```

## Key Concepts

### The HTML <form> element

This was a great project to get familiar with the <form> element. I was able to make use of the min, max, required and placeholder attributes to create a form with multiple user inputs as shown below:

HTML:

```
    <form action="">
        <fieldset>
            <legend>Lets do this!</legend>
            <div class="row">
              <label for="firstNameInput">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstNameInput"
                min="1"
                max="15"
                required
                />
                <label for="lastNameInput">Last Name</label>
                <input
                type="text"
                name="lastName"
                id="lastNameInput"
                min="1"
                max="15"
                required
                />
            </div>
            <div class="row">
              <label for="emailInput">EMAIL</label>
              <input
                type="email"
                name="email"
                id="emailInput"
                min="1"
                max="20"
                required
              />
              <label for="phoneInput">Phone Number</label>
              <input type="number" name="phone" id="phoneInput" required />
            </div>
            <div class="row">
              <label for="passwordInput">Password</label>
              <input
                type="password"
                name="password"
                id="passwordInput"
                min="5"
                max="20"
                required
              />
              <label for="confirmPasswordInput">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPasswordInput"
                min="5"
                max="20"
                required
              />
            </div>
        </fieldset>
        <button id="submitBtn" type="submit">Create Account</button>
        <h2 id="errorText" class="hidden">
            *Please make sure your password and confirmed passwords match!
        </h2>
    </form>
```

### The submit event

When adding a button of type "submit" into the <form> you are able to access the "submit" form event whenever this button is clicked. Below is an example based on my implementation in this project:

HTML:

```
    <button id="submitBtn" type="submit">Create Account</button>
```

JS:

```
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        HandleFormSubmit();
        event.target.submit();
    });
```

In the HTML we define the button with type of "submit" and then in our Javascript we add some functionality to the 'submit' event on the form object.

### Form Validation

It was Interesting to learn and apply the different form validation concepts.

I have two different validation implementations in this project (shown below), however there are so many different ways and levels to form validation its hard to apply all of them to a single project:

HTML:

```
    <input
        type="password"
        name="confirmPassword"
        id="confirmPasswordInput"
        min="5"
        max="20"
        required
    />
```

In the above snippit I make use of the inbuilt HTML validators like min and max to constrict what the user is able to enter into the individual form fields.

JS:

```
    function HandleFormSubmit() {
        var password = passwordInput.value;
        var confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            errorText.classList.remove('hidden');
            return;
        } else {
            errorText.classList.add('hidden');
        }
    }

```

In the above snippit I check for equality amongst the provided passwords directly in my Javascript code on the submit event of the form. If the passwords do not match then an errortext will appear and the submit event will return null. Javascript can and should be used to validate users inputs after these have already been added to the input fields (HTML inbuilt validation is a good protective measure to be applied before the submit event is fired).

### Custom Cursor Implementation

I tried to challange myself in this project by adding a custom cursor image that would replace the default cursor when visiting this page. I accomplished this in 3 basic steps:

#### 1 - Remove default Cursor

CSS:

```
    * {
    cursor: none;
    }
```

#### 2 - Find and hook up cursor image with <img>

HTML:

```
    <svg
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      class="cursor" <- Here the cursor class is applied to the svg
    >
      SVG Content Here
    </svg>
```

CSS:

```
    .cursor {
        position: absolute;
        z-index: 10;
        pointer-events: none;
    }
```

Important to make the cursor absolute and position it infront of all other elements with the z-index.

#### 3 - Make cursor Interactive using Javascript

JS:

```
    // Get the cursor element from our DOM
    const foxCursor = document.querySelector('.cursor');

    // Event Listeners for moving and clicking the mouse
    document.addEventListener('mousemove', (e) => {
        UpdateCursorPosition(e.pageY, e.pageX);
    });

    document.addEventListener('mousedown', () => {
        // here we simply add the animated expand class
        foxCursor.classList.add('expand');
    });

    document.addEventListener('mouseup', () => {
        // here we remove the animated expand class
        foxCursor.classList.remove('expand');
    });

    // This function sets the cursor position to the mouse posiiton, and hides the cursor when user leaves page with their mouse
    function UpdateCursorPosition(pageY, pageX) {
        foxCursor.setAttribute(
            'style',
            'top: ' + (pageY - 10) + 'px; left: ' + (pageX - 10) + 'px;'
        );

        pageX < 10 || pageY < 10
            ? foxCursor.classList.add('hidden')
            : foxCursor.classList.remove('hidden');
    }
```

## Final Notes

Although this was a relatively simple task it was fun to come up with a creative design an then implement some of the key concepts learned in the odin project thus far. As far as Form validation goes, this project really helped illustrate the workflow and implementation of validation without too much other information around so one could focus just on this key peace.
