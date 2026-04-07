import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),

  OLLAMA_HOST: Joi.string().required(),
});