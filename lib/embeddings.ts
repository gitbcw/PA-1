import { Embeddings } from "@langchain/core/embeddings";
import { OpenAIEmbeddings } from "@langchain/openai";
import { GeekAIEmbeddings } from "./embeddings-geekai";
import { env } from "./env";

// 缓存嵌入模型实例
let embeddingsInstance: Embeddings | null = null;

/**
 * 获取嵌入模型实例
 * @param useMock 是否使用模拟模式（用于测试）
 * @returns 嵌入模型实例
 */
export async function getEmbeddings(useMock: boolean = false): Promise<Embeddings> {
  if (!embeddingsInstance || useMock) {
    // 根据环境变量配置选择嵌入模型
    const embeddingProvider = env.EMBEDDING_PROVIDER || "openai";

    // 如果强制使用模拟模式或环境变量指定使用模拟模式
    const shouldUseMock = useMock || env.USE_MOCK_EMBEDDINGS === "true";

    switch (embeddingProvider.toLowerCase()) {
      case "geekai":
        embeddingsInstance = new GeekAIEmbeddings({
          apiKey: env.GEEKAI_API_KEY,
          model: env.GEEKAI_EMBEDDING_MODEL as any,
          mock: shouldUseMock,
          mockDimension: parseInt(env.MOCK_EMBEDDING_DIMENSION || "1536"),
        });
        break;

      case "openai":
      default:
        if (shouldUseMock) {
          // 如果使用模拟模式，使用GeekAI的模拟实现
          embeddingsInstance = new GeekAIEmbeddings({
            mock: true,
            mockDimension: parseInt(env.MOCK_EMBEDDING_DIMENSION || "1536"),
          });
        } else {
          embeddingsInstance = new OpenAIEmbeddings({
            openAIApiKey: env.OPENAI_API_KEY,
          });
        }
        break;
    }
  }

  return embeddingsInstance;
}

/**
 * 获取GeekAI嵌入模型实例
 * @param useMock 是否使用模拟模式（用于测试）
 * @returns GeekAI嵌入模型实例
 */
export function getGeekAIEmbeddings(useMock: boolean = false): GeekAIEmbeddings {
  // 如果强制使用模拟模式或环境变量指定使用模拟模式
  const shouldUseMock = useMock || env.USE_MOCK_EMBEDDINGS === "true";

  return new GeekAIEmbeddings({
    apiKey: env.GEEKAI_API_KEY,
    model: env.GEEKAI_EMBEDDING_MODEL as any,
    mock: shouldUseMock,
    mockDimension: parseInt(env.MOCK_EMBEDDING_DIMENSION || "1536"),
  });
}
