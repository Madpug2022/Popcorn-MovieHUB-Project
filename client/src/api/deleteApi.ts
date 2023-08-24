const deleteApi = async (url: string, data: any, getToken: any) => {
    const token = await getToken();
    const formData = new FormData();
    formData.append("id", data);
    try {
        const response = await fetch(url, {
            method: "DELETE",
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

export default deleteApi;
