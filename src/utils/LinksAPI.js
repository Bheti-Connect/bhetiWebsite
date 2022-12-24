const LinksAPI = {
    projets: "https://bheti-connect.smirltech.com/api/projets",
    projetsPage: function(page){
        return `https://bheti-connect.smirltech.com/api/projets?page=${page}`
    },
    projetsSearch: "https://bheti-connect.smirltech.com/api/projets/search",
    projetsSearchPage: function(page){
        return `https://bheti-connect.smirltech.com/api/projets/search?page=${page}`
    },
    
}

export default LinksAPI;