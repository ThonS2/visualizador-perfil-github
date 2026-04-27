export async function fetchGithubUser(userName) {
    const BASE_URL = 'https://api.github.com';
    // Aqui você pode adicionar a lógica para usar o valor do input
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
        throw new Error('Usuário não encrontado.');
    }
    return await response.json();
}