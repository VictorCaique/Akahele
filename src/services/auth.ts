interface Response {
    token: string,
    user: {
        name: string,
        email: string
    }
}

export function singIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'bdhasbdhasby161234bhaas1252fdasfbahsdfbha',
                user: {
                    name: 'Victor Caique',
                    email: 'victor.caique@email.com',
                }
            })
        }, 2000)
    })
}