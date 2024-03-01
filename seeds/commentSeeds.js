const { Comment } = require('../models');


const commentData = [
    {
        id: 100,
        content: 'Great post! I found this really helpful for understanding MVC.',
        postId: 10,
        userId: 2, // Indicates that a different user (ID 2) commented on user (ID 1)'s post.
        createdAt: new Date('2022-01-05T07:00:00Z')
    },
    {
        id: 101,
        content: 'Really insightful post! Thanks for sharing.',
        postId: 11,
        userId: 5,
        createdAt: new Date('2022-02-15T10:30:00Z')
    },
    {
        id: 102,
        content: "I've always found MVC confusing, but this clears it up.",
        postId: 12,
        userId: 6,
        createdAt: new Date('2022-03-20T09:20:00Z')
    },
    {
        id: 103,
        content: "Can't wait to see how machine learning evolves!",
        postId: 13,
        userId: 7,
        createdAt: new Date('2022-04-25T08:45:00Z')
    },
    {
        id: 104,
        content: 'Cryptography is fascinating. Great overview for beginners.',
        postId: 14,
        userId: 8,
        createdAt: new Date('2022-05-30T11:00:00Z')
    },
    {
        id: 105,
        content: "Responsive design is crucial in today's mobile-first world.",
        postId: 15,
        userId: 9,
        createdAt: new Date('2022-06-15T07:30:00Z')
    },
    {
        id: 106,
        content: 'Database optimization is an art. Thanks for the tips!',
        postId: 16,
        userId: 10,
        createdAt: new Date('2022-07-22T06:15:00Z')
    },
    {
        id: 107,
        content: 'Security should always be a top priority in coding.',
        postId: 17,
        userId: 2,
        createdAt: new Date('2022-08-18T05:50:00Z')
    },
    {
        id: 108,
        content: 'IoT is changing everything. Great read!',
        postId: 18,
        userId: 3,
        createdAt: new Date('2022-09-12T04:35:00Z')
    },
    {
        id: 109,
        content: 'The cloud is the future, and the future is now.',
        postId: 19,
        userId: 4,
        createdAt: new Date('2022-10-28T03:40:00Z')
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
