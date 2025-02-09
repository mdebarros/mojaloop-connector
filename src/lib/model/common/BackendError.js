/**************************************************************************
 *  (C) Copyright ModusBox Inc. 2019 - All rights reserved.               *
 *                                                                        *
 *  This file is made available under the terms of the license agreement  *
 *  specified in the corresponding source code repository.                *
 *                                                                        *
 *  ORIGINAL AUTHOR:                                                      *
 *       Yevhen Kyriukha - yevhen.kyriukha@modusbox.com                   *
 **************************************************************************/

'use strict';


const TransferStateEnum = {
    'WAITING_FOR_PARTY_ACEPTANCE': 'WAITING_FOR_PARTY_ACCEPTANCE',
    'QUOTE_REQUEST_RECEIVED': 'QUOTE_REQUEST_RECEIVED',
    'WAITING_FOR_QUOTE_ACCEPTANCE': 'WAITING_FOR_QUOTE_ACCEPTANCE',
    'PREPARE_RECEIVED': 'PREPARE_RECEIVED',
    'ERROR_OCCURRED': 'ERROR_OCCURRED',
    'COMPLETED': 'COMPLETED',
    'ABORTED': 'ABORTED',
};


class BackendError extends Error {
    constructor(msg, httpStatusCode) {
        super(msg);
        this.httpStatusCode = httpStatusCode;
    }

    toJSON() {
        const ret = {
            httpStatusCode: this.httpStatusCode
        };

        //copy across any other properties
        for(let prop in this) {
            if(this.hasOwnProperty(prop)) {
                ret[prop] = this[prop];
            }
        }

        return ret;
    }
}


module.exports = {
    BackendError,
    TransferStateEnum,
};
