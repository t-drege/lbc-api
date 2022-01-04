export interface PaypalRequestImpl {
    post(url: string, body: object)

    put(url: string, body: object)

    read(url: string)

    delete(url: string)

    patch(url: string, body: object)
}