"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let GlobalService = class GlobalService {
    constructor() {
        this.baseurl = "http://antonycastaner.ddns.net/api";
    }
    /**
     * Display the action
     *
     * @param log
     */
    log(log) {
        console.info(log);
    }
    /**
     * Display the error
     *
     * @param operation
     * @param result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.log(error);
            console.log(`${operation} failded ${error.message}`);
            return rxjs_1.of(result);
        };
    }
};
GlobalService = __decorate([
    core_1.Injectable()
], GlobalService);
exports.GlobalService = GlobalService;
//# sourceMappingURL=global.service.js.map