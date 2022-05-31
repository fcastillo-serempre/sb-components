"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
require("./my-label.css");
exports.MyLabel = function (_a) {
    var _b = _a.allCaps, allCaps = _b === void 0 ? false : _b, backgroundColor = _a.backgroundColor, _c = _a.color, color = _c === void 0 ? 'primary' : _c, fontColor = _a.fontColor, _d = _a.label, label = _d === void 0 ? 'No label' : _d, _e = _a.size, size = _e === void 0 ? 'normal' : _e;
    return (<span className={"label " + size + " text-" + color} style={{ color: fontColor, backgroundColor: backgroundColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>);
};
exports.default = exports.MyLabel;
