console.log("Website is working!");document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const cards = document.querySelectorAll(".cards .card");

function searchExam() {
    const searchText = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

searchButton.addEventListener("click", searchExam);

searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchExam();
    }
});