"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOut = exports.LoggedIn = void 0;
var react_1 = __importDefault(require("react"));
var Header_1 = require("./Header");
exports.default = {
    title: 'Example/Header',
    component: Header_1.Header,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};
var Template = function (args) { return <Header_1.Header {...args}/>; };
exports.LoggedIn = Template.bind({});
exports.LoggedIn.args = {
    user: {
        name: 'Jane Doe',
    },
};
exports.LoggedOut = Template.bind({});
exports.LoggedOut.args = {};
