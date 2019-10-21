const tasks = {
    'new':     [
        {
            id: 1,
            title: "Task 1",
            date: new Date("2019-01-01"),
            statusString: "new",
            owner: {
                avatarSmall: "/images/avatar.jpg",
                name: "Task 1 owner name"
            }
        },
        {
            id: 2,
            title: "Task 2",
            date: new Date("2019-01-01"),
            statusString: "new",
            owner: {
                avatarSmall: "/images/avatar.jpg",
                name: "Task 2 owner name"
            }
        },
        {
            id: 3,
            title: "Task 3",
            date: new Date("2019-01-01"),
            statusString: "new",
            owner: {
                avatarSmall: "/images/avatar.jpg",
                name: "Task 1 owner name"
            }
        },
    ],
    'inProgress': [],
    'inReview': [],
    'done': [],
    'closed': []
}

export default tasks;