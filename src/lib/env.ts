import { z } from 'zod';

/** 仅包含代码中真实读取的变量（见 `parseEnv` 使用处）。 */
const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().default('/api'),
  API_TIMEOUT: z.coerce.number().default(10000),
  NEXT_PUBLIC_ENABLE_DEBUG: z.coerce.boolean().default(false),

  OPENAI_API_KEY: z.string().optional(),
  OPENAI_BASE_URL: z.string().default('https://api.openai.com/v1'),
  OPENAI_MODEL: z.string().default('gpt-4o-mini'),
});

type Env = z.infer<typeof envSchema>;

export function parseEnv(input: Partial<NodeJS.ProcessEnv> = process.env): Env {
  try {
    return envSchema.parse(input);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('❌ Invalid environment variables:', error.issues);
    } else {
      console.error('❌ Failed to parse environment variables:', error);
    }
    return envSchema.parse({});
  }
}

export const env = parseEnv();
