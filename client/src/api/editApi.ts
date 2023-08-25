const editApi = async (url: string, id: string, data: any, getToken: any) => {
    const token = await getToken();
    const { name, review, score } = data
    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("score", score);
    formData.append("review", review);

    try {
        const response = await fetch(url, {
            method: "PUT",
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
        console.error("There was a problem with the operation:", error);
    }
};

export default editApi;
