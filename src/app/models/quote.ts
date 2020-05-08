export class Quote {
    showDetails: boolean;
    constructor(public quote: string,public author: string,public submitter: string,public submissionDate: Date,public upVote: number,public downVote: number){
    this.showDetails=false;
  }
}
