const postRecipeApi = async (url: string, data: any, email: any, getToken: any) => {
    const token = await getToken();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("type", data.type);
    formData.append("link", data.link);
    formData.append("imageLink", data.imageLink);
    formData.append("userEmail", email);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
            },
            body: formData,
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

export default postRecipeApi;
