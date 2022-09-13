"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAGS_WITHOUT_MARKUP = exports.VOID_ELEMENTS = exports.BLOCKS = exports.liquidHtmlGrammar = exports.liquidHtmlGrammars = void 0;
const ohm_js_1 = __importDefault(require("ohm-js"));
exports.liquidHtmlGrammars = ohm_js_1.default.grammars(require('../../grammar/liquid-html.ohm.js'));
exports.liquidHtmlGrammar = exports.liquidHtmlGrammars['LiquidHTML'];
exports.BLOCKS = exports.liquidHtmlGrammar.rules.blockName.body.factors[0].terms.map((x) => x.obj);
exports.VOID_ELEMENTS = exports.liquidHtmlGrammar.rules.voidElementName.body.factors[0].terms.map((x) => x.args[0].obj);
exports.TAGS_WITHOUT_MARKUP = [
    'style',
    'schema',
    'javascript',
    'else',
    'break',
    'continue',
    'comment',
    'raw',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhbW1hci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvZ3JhbW1hci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBeUI7QUFFWixRQUFBLGtCQUFrQixHQUFHLGdCQUFHLENBQUMsUUFBUSxDQUM1QyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FDNUMsQ0FBQztBQUVXLFFBQUEsaUJBQWlCLEdBQUcsMEJBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFHckQsUUFBQSxNQUFNLEdBQ2pCLHlCQUFpQixDQUFDLEtBQ25CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBYSxDQUFDO0FBR3hELFFBQUEsYUFBYSxHQUN4Qix5QkFBaUIsQ0FBQyxLQUNuQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ3pDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDZCxDQUFDO0FBRUQsUUFBQSxtQkFBbUIsR0FBRztJQUNqQyxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDVixTQUFTO0lBQ1QsS0FBSztDQUNOLENBQUMifQ==