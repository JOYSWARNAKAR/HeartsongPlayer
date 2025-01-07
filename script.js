function goToNextPage() {
    const crushName = document.getElementById("crushName").value;
    if (crushName.trim() !== "") {
        // Redirect to another page with the song
        window.location.href = `song.html?name=${encodeURIComponent(crushName)}`;
    } else {
        alert("Please enter a name!");
    }
}
