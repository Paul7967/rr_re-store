// этот сервис отвечает за получение данных о книгах

export default class BookstoreService {

	getBooks() {
		return [
			{
			id: 1,
			title: 'Production-Ready Microservices',
			author: 'Susan J. Fowler',
			price: 32,
			coverImage: 'img/book1.jpg'},
			{
			id: 2,
			title: 'Release It!',
			author: 'Michael T. Nygard',
			price: 45,
			coverImage: 'img/book2.jpg'}
		];
	}
}