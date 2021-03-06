import bcrypt from 'bcrypt'
export const users = [
    {
        name: 'Adeyemi',
        email: 'test@gmail.com',
        password: bcrypt.hashSync('123456', 8),
        isAdmin: true
    },
    {
        name: 'Adeyanju',
        email: 'test2@gmail.com',
        password: bcrypt.hashSync('123456', 8),
        isAdmin: false
    }
]

export const products = [
    {
        name: 'Nike Slim Pants',
        category: 'pants',
        img: '/img/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'High Quality Products'
    },
    {
        name: 'Addidas Slim Pants',
        category: 'pants',
        img: '/img/p2.jpg',
        price: 200,
        countInStock: 20,
        brand: 'Addidas',
        rating: 5,
        numReviews: 15,
        description: 'Super High Quality Products'
    },
    {
        name: 'Puma Slim Shirt',
        category: 'Shirt',
        img: '/img/p3.jpg',
        price: 100,
        countInStock: 0,
        brand: 'Puma',
        rating: 3.5,
        numReviews: 8,
        description: 'Low Quality Products'
    },
    {
        name: 'Yizzy Shoes',
        category: 'shoes',
        img: '/img/p4.jpg',
        price: 250,
        countInStock: 30,
        brand: 'Yizzy',
        rating: 4.5,
        numReviews: 12,
        description: 'Super High Quality Products'
    },
    {
        name: 'Fendi Slim Shirt',
        category: 'shirt',
        img: '/img/p5.jpg',
        price: 120,
        countInStock: 5,
        brand: 'Fendi',
        rating: 5,
        numReviews: 20,
        description: 'Very High Quality Products'
    },
    {
        name: 'Versace Slim Shirt',
        category: 'Shirt',
        img: '/img/p6.jpg',
        price: 120,
        countInStock: 15,
        brand: 'Versace',
        rating: 4,
        numReviews: 9,
        description: 'High Quality Products'
    },
]