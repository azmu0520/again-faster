"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liquidHtmlParser = exports.liquidHtmlLanguageName = exports.liquidHtmlAstFormat = void 0;
const utils_1 = require("../utils");
const ast_1 = require("../parser/ast");
function parse(text, _parsers, _opts) {
    return (0, ast_1.toLiquidHtmlAST)(text);
}
exports.liquidHtmlAstFormat = 'liquid-html-ast';
exports.liquidHtmlLanguageName = 'liquid-html';
exports.liquidHtmlParser = {
    parse,
    astFormat: exports.liquidHtmlAstFormat,
    locStart: utils_1.locStart,
    locEnd: utils_1.locEnd,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhcnNlci9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUNBQTJDO0FBQzNDLHNDQUErRDtBQUUvRCxTQUFTLEtBQUssQ0FDWixJQUFZLEVBQ1osUUFBaUIsRUFDakIsS0FBb0M7SUFFcEMsT0FBTyxJQUFBLHFCQUFlLEVBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVZLFFBQUEsbUJBQW1CLEdBQUcsaUJBQWlCLENBQUM7QUFFeEMsUUFBQSxzQkFBc0IsR0FBRyxhQUFhLENBQUM7QUFFdkMsUUFBQSxnQkFBZ0IsR0FBMkI7SUFDdEQsS0FBSztJQUNMLFNBQVMsRUFBRSwyQkFBbUI7SUFDOUIsUUFBUSxFQUFSLGdCQUFRO0lBQ1IsTUFBTSxFQUFOLGNBQU07Q0FDUCxDQUFDIn0=