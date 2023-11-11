import agricclienthttp from "../../https/AgricClientHttp";

export class Pagination {
    page = 0;
    limit = 10;
    search;
    constructor(page: number, limit: number, search: any) {
        this.page = page;
        this.limit = limit;
        this.search = search;

    }

}

class BovinService {
    async getAll(params: Pagination | undefined): Promise<Array<any>> {
        try {
            if(params?.search == undefined || params.search== ''){

                return []
            }
            let result = await agricclienthttp.get('/bovins', { params: { search:params?.search } });
            return result.data
        } catch (e) {
            console.log(e)
            return []
        }

    }

}
export const bovinService = new BovinService();
