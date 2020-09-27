import { Drash } from '../../deps.ts';

export default class Users extends Drash.Http.Resource{
    static paths = ['/users']

    public GET(){
        this.response.body = {
            id:1,
            name:'Hello'
        }

        return this.response
    }
}