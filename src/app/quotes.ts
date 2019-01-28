export class Quotes {
    public description:boolean
    constructor(public id:number,public name:string,public author:string,public upvote:number,public completeDate:Date){
        this.description=false

    }
}
