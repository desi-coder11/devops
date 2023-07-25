        document.getElementById("jsonForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const jsonData = document.getElementById("jsonData").value;

            try {
                const parsedData = JSON.parse(jsonData);
                displayJsonForm(parsedData);
            } catch (error) {
                document.getElementById("formEditor").textContent = "Invalid JSON data!";
            }
        });

        function displayJsonForm(data) {
            let formHTML = '<form>';
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    formHTML += `<label for="${key}">${key}:</label>`;
                    formHTML += `<input type="text" id="${key}" name="${key}" value="${data[key]}"><br>`;
                }
            }
            formHTML += '</form>';
            document.getElementById("formEditor").innerHTML = formHTML;
        }


        // Get references to the form and formEditor elements
const jsonForm = document.getElementById('jsonForm');
const formEditor = document.getElementById('formEditor');
const errorContainer = document.getElementById('errorContainer');

// Function to handle form submission
function submitJsonForm(event) {
    event.preventDefault();

    // Get the JSON data from the textarea
    const jsonData = document.getElementById('jsonData').value;

    try {
        // Parse the JSON data into a JavaScript object
        const jsonObject = JSON.parse(jsonData);

        // Create a dynamic form with editable input fields
        formEditor.innerHTML = '';
        for (const key in jsonObject) {
            if (jsonObject.hasOwnProperty(key)) {
                const divContainer = document.createElement('div');
                divContainer.className = 'form-row';

                const label = document.createElement('label');
                label.textContent = key;

                const input = document.createElement('input');
                input.type = 'text';
                input.value = jsonObject[key];
                input.name = key;

                divContainer.appendChild(label);
                divContainer.appendChild(input);
                formEditor.appendChild(divContainer);
            }
        }

        // Hide the error message if JSON parsing is successful
        errorContainer.style.display = 'none';
    } catch (error) {
        // Handle JSON parsing errors here
        console.error('Error parsing JSON:', error);
        errorContainer.textContent = 'Invalid JSON data. Please enter valid JSON.';
        errorContainer.style.display = 'block';
    }
}
