// этот сервис отвечает за получение данных о книгах

export default class BookstoreService {

	data = [
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

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.data)
				// reject(new Error('Something bad happend'));  // test of  error catching
			}, 700);
		});
	}
}