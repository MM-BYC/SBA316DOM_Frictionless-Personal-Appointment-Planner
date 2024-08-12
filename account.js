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
});
