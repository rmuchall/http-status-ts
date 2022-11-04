import {test} from "tap";
import {HttpStatus, httpStatusTextByCode} from "../src/HttpStatus.js";

void test("textByCode()", t => {
    t.equal(HttpStatus.OK, 200);
    t.equal(httpStatusTextByCode(200), "OK");
    t.equal(httpStatusTextByCode("200"), "OK");
    t.throws(() => httpStatusTextByCode("xxxx"));
    t.throws(() => httpStatusTextByCode(9999));
    t.throws(() => httpStatusTextByCode(undefined as any));
    t.throws(() => httpStatusTextByCode(null as any));
    t.throws(() => httpStatusTextByCode({} as any));
    t.end();
});
