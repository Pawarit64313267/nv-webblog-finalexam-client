import Api from '@/services/Api'
export default {
    index(search) {
        return Api().get('http://10.10.59.14:8081/books')
    },
    show(bookId) {
        return Api().get('http://10.10.59.14:8081/book/bookId' + bookId)
    },
    post(book) {
        return Api().post('http://10.10.59.14:8081/book/bookId', book)
    },
    put(book) {
        return Api().put('http://10.10.59.14:8081/book' + book.id, book)
    },
    delete(book) {
        return Api().delete('http://10.10.59.14:8081/book/bookId' + book.id, book)
    },
}