export abstract class BaseService {

    protected async FetchGet<T>(url: string): Promise<T> {
        const response = await fetch(url);
        return (await response.json()) as T;
    }

    protected async XMLGet<T>(url: string): Promise<T> {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.onload = function () {
                if (request.status !== 200) {
                    reject(request.response);
                }
                resolve(JSON.parse(request.responseText));
            }

            request.onerror = function () {
                reject(request.statusText)
            }

            request.send()
        })

    }
}