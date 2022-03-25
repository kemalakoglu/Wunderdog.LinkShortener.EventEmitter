class linkResponseModel {
    constructor(link, longUrl, createdAt, id){
        this.link = link;
        this.longUrl = longUrl;
        this.createdAt = createdAt;
        this.id = id;
    }
}

module.exports = linkResponseModel;