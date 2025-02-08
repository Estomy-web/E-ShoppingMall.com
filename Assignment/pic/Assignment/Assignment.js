// Function to filter product categories dynamically
function myFunction() {
    let input, filter, div, a, i, txtValue;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    div = document.querySelector(".product"); // Select the product div
    a = div.getElementsByTagName("a"); // Get all anchor tags

    // Loop through all list items, hide those that don't match the search query
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}


<button onclick="location.href='page2.html'">Go to Page 2</button>

// Ensure all links work correctly
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".product a");
    
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior
            alert("You clicked on " + this.textContent);
        });
    });
});
// Function to filter search results
function filterSearch() {
    let input, filter, links, i, txtValue;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    links = document.querySelectorAll(".product a");

    links.forEach(link => {
        txtValue = link.textContent || link.innerText;
        link.style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
    });
}

// Function to handle image clicks
function imageClickHandler() {
    let images = document.querySelectorAll("img");
    images.forEach(img => {
        img.addEventListener("click", function () {
            alert("You clicked on " + this.alt);
        });
    });
}

// Function to confirm order before opening links
function confirmOrder() {
    let orderLinks = document.querySelectorAll("ul li a");
    orderLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            let confirmOrder = confirm("Do you want to proceed with the order?");
            if (!confirmOrder) {
                event.preventDefault();
            }
        });
    });
}

// Function to validate Contact & Login links
function validateNavigationLinks() {
    let navLinks = document.querySelectorAll(".my-Class a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            alert("Redirecting to: " + this.textContent);
        });
    });
}

// Execute functions after page loads
document.addEventListener("DOMContentLoaded", function () {
    imageClickHandler();
    confirmOrder();
    validateNavigationLinks();
});
        // Function to return to the home page
        document.getElementById("homeButton").onclick = function() {
            window.location.href = "assignment.html"; // Replace "index.html" with your home page URL
        };
    
