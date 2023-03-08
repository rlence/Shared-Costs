interface Environment {
    PORT: string,
    ENVIRONMENT: string,
    POSTGRES_USER: string,
    POSTGRES_PASSWORD: string,
    POSTGRES_PORT: number,
    POSTGRES_DATABASE: string,
    POSTGRES_HOST: string
}

const Environment: Environment = {
    PORT: process.env.PORT,
    ENVIRONMENT: process.env.NODE_ENV,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT),
    POSTGRES_DATABASE:  process.env.POSTGRES_DATABASE,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
}

export default Environment;