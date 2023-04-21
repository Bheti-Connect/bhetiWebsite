const LinksAPI = {
    projets: "https://api.bheticonnect.com/api/projets",
    projetsPage: function(page){
        return `https://api.bheticonnect.com/api/projets?page=${page}`
    },
    projetsSearch: "https://api.bheticonnect.com/api/projets/search",
    projetsSearchPage: function(page){
        return `https://api.bheticonnect.com/api/projets/search?page=${page}`
    },
    entrevues: "https://api.bheticonnect.com/api/entrevues",
    entrevuesPage: function(page){
        return `https://api.bheticonnect.com/api/entrevues?page=${page}`
    },
    entrevuesSearch : "https://api.bheticonnect.com/api/entrevues/search",
    entrevuesSearchPage: function(page){
        return `https://api.bheticonnect.com/api/entrevues/search?page=${page}`
    },
    stories: "https://api.bheticonnect.com/api/stories",
    storiesPage: function(page){
        return `https://api.bheticonnect.com/api/stories?page=${page}`
    },
    storiesSearch: "https://api.bheticonnect.com/api/stories/search",
    storiesSearchPage: function(page){
        return `https://api.bheticonnect.com/api/stories/search?page=${page}`
    }

}

export default LinksAPI;