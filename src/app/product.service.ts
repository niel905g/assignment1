export class ProductService {
  getProducts() {
    return [
      {
        imageUrl: 'http://loremflickr.com/150/150?random=1',
        productName: 'Product 1',
        releasedDate: new Date(2016,5-1,30),
        // tslint:disable-next-line: max-line-length
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 4,
        numOfReviews: 2
      },
      {
        imageUrl: 'http://loremflickr.com/150/150?random=2',
        productName: 'Product 2',
        releasedDate: new Date(2016,10-1,31),
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 2,
        numOfReviews: 12
      },
      {
        imageUrl: 'http://loremflickr.com/150/150?random=3',
        productName: 'Product 3',
        releasedDate: new Date(2016,7-1,30),
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 5,
        numOfReviews: 2
      },
      {
        imageUrl: 'http://loremflickr.com/150/150?random=4',
        productName: 'Product 4',
        releasedDate: new Date(2016,10-1,25),
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 0,
        numOfReviews: 0
      }];
  }
}

