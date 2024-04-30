export const files = [
    {
        id: "/Code",
        date: new Date(2023, 11, 2, 17, 25),
        type: "folder",
    },
    {
        id: "/Music",
        date: new Date(2023, 11, 1, 14, 45),
        type: "folder",
    },
    {
        id: "/Music/Animal_sounds.mp3",
        size: 1457296,
        date: new Date(2023, 11, 1, 14, 45),
        type: "file",
    },
    {
        id: "/Music/The_sounds_of_silence.mp3",
        size: 6825661,
        date: new Date(2023, 11, 9, 14, 45),
        type: "file",
    },
    {
        id: "/Music/Dont_worry_Be_happy.mp3",
        size: 3522968,
        date: new Date(2023, 11, 4, 14, 1),
        type: "file",
    }
];

export const tasks = [
    {
        id: 1,
        start: new Date(2024, 3, 2),
        end: new Date(2024, 3, 17),
        text: "Project planning",
        progress: 30,
        parent: 0,
        type: "project",
        open: true,
        details: "Outline the project's scope and resources.",
    },
    {
        id: 10,
        start: new Date(2024, 3, 2),
        end: new Date(2024, 3, 5),
        text: "Marketing analysis",
        progress: 100,
        parent: 1,
        type: "task",
        details: "Analyze market trends and competitors.",
    },
    {
        id: 11,
        start: new Date(2024, 3, 5),
        end: new Date(2024, 3, 7),
        text: "Discussions",
        progress: 100,
        parent: 1,
        type: "task",
        details: "Team discussions on project strategies.",
    }
];