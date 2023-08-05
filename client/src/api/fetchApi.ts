export const fetchData = async (data: string) => {
    try {
        const response = await fetch(`http://localhost:8800/${data}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const fetchedData = await response.json();
        return fetchedData;
    } catch (error) {
        console.error('Error:', error);
    }
};
