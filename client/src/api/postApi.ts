const postApi = async (url: string, data: any, getToken: any) => {
    const token = await getToken();
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Succesfully send');
        } else {
            throw new Error("Network response was not ok.");
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export default postApi;
