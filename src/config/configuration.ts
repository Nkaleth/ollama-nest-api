export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),

  ollama: {
    host: process.env.OLLAMA_HOST,
  }
});