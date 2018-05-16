import { requestHelper } from "app/helper/request.helper";
import { IQueryName } from "app/simple/simple.interface";
import { injectable } from 'inversify';

@injectable()
export class SimpleService {
    public query(name: string) {
        return requestHelper.get<IQueryName>('example/query', {
            params: {
                name
            }
        })
    }
}