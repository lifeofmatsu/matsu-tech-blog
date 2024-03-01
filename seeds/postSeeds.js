const { Post } = require('../models');


const postData = [
/**
 * Array of `Post` objects was generated by ChatGPT 4 (excluding `id: 12`).
 */
    {
        id: 10,
        title: 'Why MVC is Essential for Web Development',
        content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        userId: 1, // This identifies which user posted to the blog. 
        createdAt: new Date('2020-05-08')
    },
    {
        id: 11,
        title: 'Authentication vs. Authorization',
        content: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
        userId: 1,
        createdAt: new Date('2022-02-01')
    },
    {
        id: 12,
        title: 'Understanding MVC Architecture Using Insomnia',
        content: 'Insomnia is used to check the validity and functioning of the project CRUD operations. CRUD involves the HTTP methods POST, GET, PUT, and DELETE, which represent the create, read, update, and delete (or CRUD) operations, respectively.',
        userId: 2,
        createdAt: new Date('2024-03-01')
    },
    {
        id: 13,
        title: 'Introduction to Machine Learning',
        content: 'Machine learning is transforming industries around the world...',
        userId: 4,
        createdAt: new Date('2022-04-01')
    },
    {
        id: 14,
        title: 'Demystifying Cryptography',
        content: "A beginner's guide to understanding cryptography in computing...",
        userId: 5,
        createdAt: new Date('2022-05-01')
    },
    {
        id: 15,
        title: 'Best Practices in Responsive Design',
        content: 'How to create flexible designs for various screen sizes...',
        userId: 6,
        createdAt: new Date('2022-06-01')
    },
    {
        id: 16,
        title: 'Optimizing Database Performance',
        content: 'Techniques and strategies for enhancing database efficiency...',
        userId: 7,
        createdAt: new Date('2022-07-01')
    },
    {
        id: 17,
        title: 'Secure Coding Principles',
        content: 'Ensuring security in your code from the ground up...',
        userId: 8,
        createdAt: new Date('2022-08-01')
    },
    {
        id: 18,
        title: 'Exploring the Internet of Things',
        content: "The role of IoT in today's tech-driven world...",
        userId: 9,
        createdAt: new Date('2022-09-01')
    },
    {
        id: 19,
        title: 'The Evolution of Cloud Computing',
        content: "How cloud computing has evolved and what's next...",
        userId: 10,
        createdAt: new Date('2022-10-01')
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

