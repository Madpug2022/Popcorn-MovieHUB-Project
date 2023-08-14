const postApi = (url: string, data: any) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return console.log(response)
            }
            throw new Error("Network response was not ok.");
        })
        .then(responseText => {
            console.log("Request successful!");
            console.log(responseText); // Response from the server
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
}

export default postApi
