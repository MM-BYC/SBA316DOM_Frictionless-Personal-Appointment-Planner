/*
account name
*/
const acctFirstName = document.getElementById("acctFirstName");
acctFirstName.innerHTML += " Michael";

const acctLastName = document.querySelector("#acctLastName");
acctLastName.innerHTML += " Marquez";

/* Preferred vendors */
const vendors = [
  "FireStone AutoCare",
  "BrightSmile Family Dental",
  "Meridian Health",
];

// Select the element where the vendors list will be added
const vendorsList = document.querySelector(".vendorsList");

// Create a new <ul> element
const ul = document.createElement("ul");

// Iterate over the vendors array
vendors.forEach((vendor) => {
  // Create a new <li> element for each vendor
  const li = document.createElement("li");
  li.textContent = vendor;
  li.classList.add("vendorItem");
  li.style.backgroundColor = "white";
  ul.appendChild(li); // Append the <li> to the <ul>
});

// Append the <ul> to the vendorsList element
vendorsList.appendChild(ul);

/*
Prepend
 a date to the list
 Get the current date 
 */
// Get the current date
const today = new Date();
const options = { year: "numeric", month: "long", day: "numeric" };
const formattedDate = today.toLocaleDateString(undefined, options);

// Create a new paragraph element
const dateParagraph = document.createElement("p");
dateParagraph.textContent = `Today's Date: ${formattedDate}`;

// Get the date container element
const dateContainer = document.getElementById("dateContainer");

// Prepend the date to the dateContainer
dateContainer.prepend(dateParagraph);

/* Registration event handler*/
const registrationForm = document.querySelector("#RegistrationForm");
registrationForm.addEventListener("submit", (event) => {
  // Stops the browser from automatically refreshing
    event.preventDefault();
      // Variables
  const userNameInput = document.querySelector('input[name="username"]');
  const userNamePattern =
    /^(?=(?:.*([a-zA-Z0-9]))(?:.*(?!\1)[a-zA-Z0-9]))[a-zA-Z0-9]{4,}$/;
  const errorDisplay = document.getElementById("errorDisplay");
  const userEmailInput = document.querySelector("input[name='email']");

  // Reset/Clear previous error messages
  errorDisplay.innerHTML = "";

  // Validate username input field
  if (userNamePattern.test(userNameInput.value)) {
    errorDisplay.style.display = "none";
  } else {
    errorDisplay.style.display = "block";
    const errorMessageList = generateMessageList([
      "The username cannot be blank",
      "The username must be at least four characters long",
      "The username must contain at least two unique characters",
      "The username cannot contain any special characters or whitespace",
    ]);
    errorDisplay.appendChild(errorMessageList);
  }
  // Validate email input field
  if (validateEmail(userEmailInput.value)) {
    errorDisplay.style.display = "none";
  } else {
    errorDisplay.style.display = "block";
    const errorMessageList = generateMessageList([
      "The email cannot be blank",
      "The email must not be from the domain example.com",
    ]);
    errorDisplay.appendChild(errorMessageList);
  }
});

// Helper function to create a list of error messages
function generateMessageList(errorMessageArr) {
  const ul = document.createElement("ul");
  for (let i = 0; i < errorMessageArr.length; i++) {
    const li = document.createElement("li");
    li.textContent = errorMessageArr[i];
    ul.appendChild(li);
  }
  return ul;
}

function validateEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidFormat = emailRegex.test(email);

  // Check if email is from the domain "example.com"
  const isNotTheExampleDomain = !email.endsWith("@example.com");

  return isValidFormat && isNotTheExampleDomain;
}
});
