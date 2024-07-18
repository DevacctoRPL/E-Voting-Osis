export const cobarequest = async () => {
    const response = await fetch('http://devacctorpl.my.id:5000');
    if(!response.ok) {
        console.log("hadah")
        throw new Error('Something went wrong');
    }
    console.log("bisa cog")
    return response.json();
}