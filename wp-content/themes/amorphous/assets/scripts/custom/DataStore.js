/*global themeApi, settings */
import axios from "axios";

class DataStore {

    constructor( params ) {
        const appUrl = themeApi.home;

        this.postType = params.postType ? params.postType : 'card';
        this.category = params.category ? params.category : '';
        this.categoryId = params.categoryId ? params.categoryId : 0;
        this.page = params.page ? params.page : 1;

        this.settings = settings;
        this.endPoint = `${appUrl}/wp-json/wp/v2/${this.postType}`;
        this.pageEndpoint = `${appUrl}/wp-json/amorph/v2/querypage/`;
    }

    api( endPoint ) {
        console.log(endPoint, 'point');
        return new Promise( ( resolve, reject ) => {
            axios.get( endPoint ).then( ( response ) => {
                resolve( response.data );
            }).catch( ( error ) => {
                reject( error );
            });
        });
    }

    setPage( pageNum ) {
        this.page = pageNum;
        return this.api( `${this.pageEndpoint}${pageNum}`).then( payload => {
            return payload;
        });
    }

    getPage() {
        return this.api( `${this.endPoint}?per_page=5&page=${this.page}`).then( payload => {
            return payload;
        });
    }
}

export default DataStore;