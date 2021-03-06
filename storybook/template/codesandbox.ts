import {
    DEFAULT_VANILLA_CODESANDBOX,
    DEFAULT_REACT_CODESANDBOX,
    DEFAULT_ANGULAR_CODESANDBOX,
    DEFAULT_SVELTE_CODESANDBOX,
} from "storybook-addon-preview";

export const VANILLA_CODESANDBOX = DEFAULT_VANILLA_CODESANDBOX(["moveable"]);
export const REACT_CODESANDBOX = DEFAULT_REACT_CODESANDBOX(["react-moveable"]);
export const ANGULAR_CODESANDBOX = DEFAULT_ANGULAR_CODESANDBOX(["ngx-moveable"]);
export const SVELTE_CODESANDBOX = DEFAULT_SVELTE_CODESANDBOX(["svelte-moveable"]);

export const VANILLA_SCENEJS_CODESANDBOX = DEFAULT_VANILLA_CODESANDBOX(["moveable", "scenejs"]);
export const REACT_SCENEJS_CODESANDBOX = DEFAULT_REACT_CODESANDBOX(["react-moveable", "scenejs"]);
export const ANGULAR_SCENEJS_CODESANDBOX = DEFAULT_ANGULAR_CODESANDBOX(["ngx-moveable", "scenejs"]);
export const SVELTE_SCENEJS_CODESANDBOX = DEFAULT_SVELTE_CODESANDBOX(["svelte-moveable", "scenejs"]);
