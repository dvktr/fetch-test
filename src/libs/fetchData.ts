interface FetchDataOptions<T> extends Omit<RequestInit, "body"> {
  body?: T;
  headers?: Record<string, string>;
  method?: "HEAD" | "GET" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH";
}

export default async function fetchData<T, U>(endpoint: string, options: FetchDataOptions<T> = {}) {
  const { body, headers: optionHeaders, method, ...otherOptions } = options;

  const headers = new Headers(optionHeaders);

  if (body) {
    headers.append("Content-Type", "application/json");
  }

  const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`, {
    method: method ?? "GET",
    body: body ? JSON.stringify(body) : null,
    headers,
    ...otherOptions,
  });

  if (!response.ok) {
    throw new Error("Erro ao tentar realizar requisição");
  }

  let responseBody = null;

  const contentType = response.headers.get("Content-Type");
  if (contentType?.includes("application/json")) {
    responseBody = await response.json();
  }

  return responseBody as U;
}
