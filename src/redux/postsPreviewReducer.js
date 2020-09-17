let initial_value = {
    posts: [{
        id: "1",
        category: "Design",
        title: "Post title",
        content: "Typography is the work of typesetters, compositors, typographers, graphic designers, art " +
            "directors, manga artists, comic book artists....",
        date: "17. SEP 20",
        likes: "10",
        comments: "2"
    },
        {
            id: "2",
            photo: "https://www.equatorial.by/sites/default/files/01.jpg",
            category: "Design",
            title: "Something else",
            content: "Typography is the work of typesetters, compositors, typographers, graphic designers, art " +
                "directors, manga artists, comic book artists....",
            date: "17. SEP 20",
            likes: "2",
            comments: "0"
        },
        {
            id: "3",
            photo: null,
            category: "Program",
            title: "My big success",
            content: "Typography is the work of typesetters, compositors, typographers, graphic designers, art " +
                "directors, manga artists, comic book artists....",
            date: "20. SEP 20",
            likes: "0",
            comments: "0"
        },
        {
            id: "4",
            photo: null,
            category: "Design",
            title: "Cat",
            content: "Typography is the work of typesetters, compositors, typographers, graphic designers, art " +
                "directors, manga artists, comic book artists....",
            date: "10. OCT 20",
            likes: "10",
            comments: "2"
        },
        {
            id: "5",
            photo: null,
            category: "Design",
            title: "Cat",
            content: "Typography is the work of typesetters, compositors, typographers, graphic designers, art " +
                "directors, manga artists, comic book artists....",
            date: "10. OCT 20",
            likes: "10",
            comments: "2"
        }
    ],
    pageCount: 4,
    totalPages: 5,
    isFetching: false
}

const postPreviewReducer = (state = initial_value, action) => {
    return state
}

export default postPreviewReducer;