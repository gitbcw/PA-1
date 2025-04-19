import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { Document } from "@langchain/core/documents";
import { getEmbeddings } from "./embeddings";

// In-memory vector store for development
// For production, consider using a persistent vector store like Supabase, Pinecone, etc.
let vectorStore: MemoryVectorStore | null = null;

export async function getVectorStore() {
  if (!vectorStore) {
    const embeddings = await getEmbeddings();
    vectorStore = new MemoryVectorStore(embeddings);
  }
  return vectorStore;
}

export async function addDocumentsToVectorStore(documents: Document[]) {
  const store = await getVectorStore();
  await store.addDocuments(documents);
  return store;
}

export async function similaritySearch(query: string, k = 4) {
  const store = await getVectorStore();
  return store.similaritySearch(query, k);
}
