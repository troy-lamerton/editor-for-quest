export interface IState {
  firebase: any;
  quest: any;
}

export interface ICommunityQuester {
  id: string;
  name: string;
  author: string;
  created_at: string;
  steps: any[];
}
