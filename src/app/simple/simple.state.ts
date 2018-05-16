import { SimpleService } from "app/simple/simple.service";
import { inject, injectable } from "inversify";
import { observable } from 'mobx';

@injectable()
export class SimpleState {
    @observable public name: string;
    @inject(SimpleService) private simpleService: SimpleService;
    public query() {
        return this.simpleService.query('my name').then(res=>{
            this.name = res.data.name;
        });
    }
}