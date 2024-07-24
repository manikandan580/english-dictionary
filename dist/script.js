document.getElementById('searchButton').addEventListener('click', function() {
    const word = document.getElementById('wordInput').value.trim();
    if (word) {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => response.json())
            .then(data => {
                if (data && data[0] && data[0].meanings && data[0].meanings[0] && data[0].meanings[0].definitions) {
                    const definition = data[0].meanings[0].definitions[0].definition;
                    document.getElementById('definition').textContent = definition;
                } else {
                    document.getElementById('definition').textContent = 'No definition found.';
                }
            })
            .catch(() => {
                document.getElementById('definition').textContent = 'Error fetching definition.';
            });
    } else {
        document.getElementById('definition').textContent = 'Please enter a word.';
    }
});