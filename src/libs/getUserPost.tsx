export default async function getUsersPosts(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    if(!response.ok){
        throw new Error('Fetch error')
    }

    return response.json();
}