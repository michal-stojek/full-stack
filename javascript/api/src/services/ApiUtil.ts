import "whatwg-fetch";

export function jsonApi<T>(
    url: string,
    opts: RequestInit,
    success: (data: T) => void,
    error: (response: Response) => void,
): void {
    fetch(url, opts)
        .then((response) => {
            if (!response.ok) {
                error(response);
            }

            return response.json<T>();
        })
        .then((data: T) => success(data));
}

export function plaintextApi(
    url: string,
    opts: RequestInit,
    success: (data: string) => void,
    error: (response: Response) => void,
): void {
    fetch(url, opts)
        .then((response) => {
            if (!response.ok) {
                error(response);
            }

            return response.text();
        })
        .then((data: string) => success(data));
}
