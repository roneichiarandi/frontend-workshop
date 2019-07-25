export abstract class BaseService {

    protected async FetchGet<T>(url: string): Promise<T> {
        const response = await fetch(url);
        return (await response.json()) as T;
    }
}