"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasLineBreakInRange = exports.originallyHadLineBreaks = exports.reindent = exports.markupLines = exports.bodyLines = exports.trimEnd = exports.trim = exports.isWhitespace = void 0;
function isWhitespace(source, loc) {
    if (loc < 0 || loc >= source.length)
        return false;
    return !!source[loc].match(/\s/);
}
exports.isWhitespace = isWhitespace;
const trim = (x) => x.trim();
exports.trim = trim;
const trimEnd = (x) => x.trimEnd();
exports.trimEnd = trimEnd;
function bodyLines(str) {
    return str
        .replace(/^\n*|\s*$/g, '')
        .split(/\r?\n/);
}
exports.bodyLines = bodyLines;
function markupLines(markup) {
    return markup.trim().split('\n');
}
exports.markupLines = markupLines;
function reindent(lines, skipFirst = false) {
    const minIndentLevel = lines
        .filter((_, i) => (skipFirst ? i > 0 : true))
        .filter((line) => line.trim().length > 0)
        .map((line) => line.match(/^\s*/)[0].length)
        .reduce((a, b) => Math.min(a, b), Infinity);
    if (minIndentLevel === Infinity) {
        return lines;
    }
    const indentStrip = new RegExp('^' + ' '.repeat(minIndentLevel));
    return lines.map((line) => line.replace(indentStrip, '')).map(exports.trimEnd);
}
exports.reindent = reindent;
function originallyHadLineBreaks(path, { locStart, locEnd }) {
    const node = path.getValue();
    return hasLineBreakInRange(node.source, locStart(node), locEnd(node));
}
exports.originallyHadLineBreaks = originallyHadLineBreaks;
function hasLineBreakInRange(source, locStart, locEnd) {
    const indexOfNewLine = source.indexOf('\n', locStart);
    return 0 <= indexOfNewLine && indexOfNewLine < locEnd;
}
exports.hasLineBreakInRange = hasLineBreakInRange;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByaW50ZXIvdXRpbHMvc3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLFNBQWdCLFlBQVksQ0FBQyxNQUFjLEVBQUUsR0FBVztJQUN0RCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDbEQsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBSEQsb0NBR0M7QUFFTSxNQUFNLElBQUksR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQS9CLFFBQUEsSUFBSSxRQUEyQjtBQUNyQyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQXJDLFFBQUEsT0FBTyxXQUE4QjtBQUVsRCxTQUFnQixTQUFTLENBQUMsR0FBVztJQUNuQyxPQUFPLEdBQUc7U0FDUCxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztTQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUpELDhCQUlDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLE1BQWM7SUFDeEMsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxLQUFlLEVBQUUsU0FBUyxHQUFHLEtBQUs7SUFDekQsTUFBTSxjQUFjLEdBQUcsS0FBSztTQUN6QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN4QyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ3BELE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTlDLElBQUksY0FBYyxLQUFLLFFBQVEsRUFBRTtRQUMvQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNqRSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQU8sQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFiRCw0QkFhQztBQUVELFNBQWdCLHVCQUF1QixDQUNyQyxJQUFtQixFQUNuQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQXVCO0lBRXpDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixPQUFPLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFORCwwREFNQztBQUVELFNBQWdCLG1CQUFtQixDQUNqQyxNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsTUFBYztJQUVkLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELE9BQU8sQ0FBQyxJQUFJLGNBQWMsSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDO0FBQ3hELENBQUM7QUFQRCxrREFPQyJ9