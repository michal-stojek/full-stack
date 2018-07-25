import "whatwg-fetch";

function jsonApi<T>(
    url: string,
    success: (data: T) => void,
    error: (response: Response) => void,
) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                error(response);
            }

            return response.json<T>();
        })
        .then((data: T) => success(data));
}

function plaintextApi(
    url: string,
    success: (data: string) => void,
    error: (response: Response) => void,
) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                error(response);
            }

            return response.text();
        })
        .then((data: string) => success(data));
}

export function getWord(
    success: (data: string) => void,
    error: (response: Response) => void,
) {
    return plaintextApi("api/word", success, error);
}
