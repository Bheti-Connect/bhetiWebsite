const LinksAPI = {
    projets: "https://bheti-connect.smirltech.com/api/projets",
    projetsPage: function(page){
        return `https://bheti-connect.smirltech.com/api/projets?page=${page}`
    },
    projetsSearch: "https://bheti-connect.smirltech.com/api/projets/search",
    projetsSearchPage: function(page){
        return `https://bheti-connect.smirltech.com/api/projets/search?page=${page}`
    },
    entrevues: "https://bheti-connect.smirltech.com/api/entrevues",
    entrevuesPage: function(page){
        return `https://bheti-connect.smirltech.com/api/entrevues?page=${page}`
    },
    entrevuesSearch : "https://bheti-connect.smirltech.com/api/entrevues/search",
    entrevuesSearchPage: function(page){
        return `https://bheti-connect.smirltech.com/api/entrevues/search?page=${page}`
    },
    stories: "https://bheti-connect.smirltech.com/api/stories",
    storiesPage: function(page){
        return `https://bheti-connect.smirltech.com/api/stories?page=${page}`
    },
    storiesSearch: "https://bheti-connect.smirltech.com/api/stories/search",
    storiesSearchPage: function(page){
        return `https://bheti-connect.smirltech.com/api/stories/search?page=${page}`
    }

}

export default LinksAPI;