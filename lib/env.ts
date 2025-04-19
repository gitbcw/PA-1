/**
 * 获取环境变量
 * @param key 环境变量名称
 * @param defaultValue 默认值
 * @returns 环境变量值
 */
export function getEnv(key: string, defaultValue?: string): string {
  // 首先尝试从process.env获取
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not set`);
  }

  return value;
}

/**
 * 环境变量配置
 */
export const env = {
  // LLM提供商
  LLM_PROVIDER: getEnv("LLM_PROVIDER", "openai"),

  // 嵌入模型提供商
  EMBEDDING_PROVIDER: getEnv("EMBEDDING_PROVIDER", "openai"),

  // OpenAI配置
  OPENAI_API_KEY: getEnv("OPENAI_API_KEY", ""),
  OPENAI_MODEL: getEnv("OPENAI_MODEL", "gpt-3.5-turbo"),

  // Anthropic配置
  ANTHROPIC_API_KEY: getEnv("ANTHROPIC_API_KEY", ""),
  ANTHROPIC_MODEL: getEnv("ANTHROPIC_MODEL", "claude-3-sonnet-20240229"),

  // 智谱AI GLM-4配置
  GLM_API_KEY: getEnv("GLM_API_KEY", ""),
  GLM_BASE_URL: getEnv("GLM_BASE_URL", "https://open.bigmodel.cn"),
  GLM_MODEL: getEnv("GLM_MODEL", "glm-4"),

  // 自定义LLM API配置
  CUSTOM_LLM_API_KEY: getEnv("CUSTOM_LLM_API_KEY", ""),
  CUSTOM_LLM_BASE_URL: getEnv("CUSTOM_LLM_BASE_URL", ""),
  CUSTOM_LLM_MODEL: getEnv("CUSTOM_LLM_MODEL", ""),

  // GeekAI配置
  GEEKAI_API_KEY: getEnv("GEEKAI_API_KEY", ""),
  GEEKAI_EMBEDDING_MODEL: getEnv("GEEKAI_EMBEDDING_MODEL", "text-embedding-3-small"),

  // 模拟模式配置
  USE_MOCK_EMBEDDINGS: getEnv("USE_MOCK_EMBEDDINGS", "true"), // 默认使用模拟模式
  MOCK_EMBEDDING_DIMENSION: getEnv("MOCK_EMBEDDING_DIMENSION", "1536"),

  // 通用LLM配置
  LLM_TEMPERATURE: parseFloat(getEnv("LLM_TEMPERATURE", "0.7")),
  LLM_MAX_TOKENS: parseInt(getEnv("LLM_MAX_TOKENS", "1000")),
  LLM_STREAMING: getEnv("LLM_STREAMING", "true") === "true",

  // 数据库配置
  DATABASE_URL: getEnv("DATABASE_URL", ""),

  // 阿里云OSS配置
  ALIYUN_OSS_REGION: getEnv("ALIYUN_OSS_REGION", ""),
  ALIYUN_OSS_BUCKET: getEnv("ALIYUN_OSS_BUCKET", ""),
  ALIYUN_OSS_ACCESS_KEY_ID: getEnv("ALIYUN_OSS_ACCESS_KEY_ID", ""),
  ALIYUN_OSS_ACCESS_KEY_SECRET: getEnv("ALIYUN_OSS_ACCESS_KEY_SECRET", ""),
};
