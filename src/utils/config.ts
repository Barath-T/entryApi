require("dotenv").config();

const PORT: number = parseInt(process.env.PORT as string);

const config = { PORT };
export default config;
