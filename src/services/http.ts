/**
 * Thin transport layer. Every service goes through `request` so that swapping
 * the mock resolver for a real HTTP backend is a one-file change.
 *
 * Set VITE_API_BASE_URL to point the app at a live API; without it the
 * services resolve their in-memory fixtures instead.
 */
const API_BASE_URL = import.meta.env["VITE_API_BASE_URL"] as string | undefined;

export const isLiveApi = Boolean(API_BASE_URL);

const LATENCY = 260;

export class ApiError extends Error {
  status: number;
  constructor(message: string, status = 500) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

/** Resolves mock data with realistic latency, or calls the real API when configured. */
export async function request<T>(
  path: string,
  fallback: () => T,
  init?: RequestInit,
): Promise<T> {
  if (API_BASE_URL) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
      ...init,
    });
    if (!response.ok) {
      throw new ApiError(`Request to ${path} failed`, response.status);
    }
    return (await response.json()) as T;
  }

  await new Promise((resolve) => setTimeout(resolve, LATENCY));
  return fallback();
}
