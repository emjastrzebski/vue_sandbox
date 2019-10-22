const tasks = {
    'new':     [
        {
            id: 1,
            title: "Task 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in mauris cursus, sagittis nisi nec, tincidunt justo. Vestibulum fermentum eros elit, in malesuada mi tincidunt vitae. In suscipit lacinia odio, ac sollicitudin orci vehicula eu. Morbi vel ultricies orci. Sed placerat, quam eu efficitur commodo, nunc eros hendrerit tellus, in auctor purus eros non lorem. Nulla auctor risus vitae dolor elementum, eu efficitur ante dictum. ",
            date: new Date("2019-01-01"),
            statusString: "new",
            new_owner_id: 1,
            owner: {
                id: 1,
                avatarSmall: "/images/avatar.jpg",
                name: "emjastrzebski"
            }
        },
        {
            id: 2,
            title: "Task 2",
            description: "Ut condimentum tellus at interdum aliquam. Cras eu magna sem. Maecenas ac molestie neque. Donec id sagittis orci, sed pellentesque mauris. Aliquam volutpat elit convallis blandit sollicitudin. Pellentesque porta neque magna, faucibus finibus purus suscipit eget. Phasellus semper mi at ornare volutpat. Mauris cursus magna in cursus tristique. Etiam tortor erat, ullamcorper a magna quis, aliquet vestibulum odio. ",
            date: new Date("2019-01-01"),
            statusString: "new",
            new_owner_id: 1,
            owner: {
                id: 1,
                avatarSmall: "/images/avatar.jpg",
                name: "emjastrzebski"
            }
        },
        {
            id: 3,
            title: "Task 3",
            description: "Sed semper leo id justo lacinia mattis. In quis ante eu tortor sodales facilisis. Aenean mattis laoreet velit non interdum. Suspendisse suscipit est sit amet mi sagittis ultricies. Nulla suscipit auctor tristique. Curabitur vulputate justo ex, eu porta mauris scelerisque in. Donec porttitor, metus in vehicula facilisis, nunc sem volutpat lectus, at rutrum tellus neque a nunc. Nullam a efficitur lorem, id convallis purus. ",
            date: new Date("2019-01-01"),
            statusString: "new",
            new_owner_id: 1,
            owner: {
                id: 1,
                avatarSmall: "/images/avatar.jpg",
                name: "emjastrzebski"
            }
        },
    ],
    'inProgress': [],
    'inReview': [],
    'done': [],
    'closed': []
}

export default tasks;