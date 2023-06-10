// declaring variable 
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let resetBtn = document.getElementById("resetBtn");
let initialLeftBoxHTML = leftBox.innerHTML;


// event listener to the rightBox element for the "dragover" event. 
rightBox.addEventListener("dragover", function(e) {
    e.preventDefault();
});


// event listener to the rightBox element for the "drop" event.
rightBox.addEventListener("drop", function(e) {
    let selected = document.querySelector(".list.dragging");
    rightBox.appendChild(selected);
    displaySuccessMessage();
});

//  event listener to the resetBtn element for the "click" event. 
resetBtn.addEventListener("click", function() {
    resetContainers();
});

function displaySuccessMessage() {
    // Update the UI or display a success message here
    alert("Item successfully dropped!");
}

function resetContainers() {
    // Clear the right container
    rightBox.innerHTML = "";

    // Reset the left container to its original state
    leftBox.innerHTML = initialLeftBoxHTML;

    // Re-attach event listeners to the reset list items
    attachDragListeners();
}

function attachDragListeners() {
    for (let list of lists) {
        list.addEventListener("dragstart", function(e) {
            e.target.classList.add("dragging");
        });

        list.addEventListener("dragend", function(e) {
            e.target.classList.remove("dragging");
        });
    }
}

attachDragListeners();
