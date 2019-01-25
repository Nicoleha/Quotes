export class Quotes {
    public showDescription:boolean
    constructor(public name:string,public author:string,public upvote:number,public downvote:number){
        this.showDescription=false

    }
}
