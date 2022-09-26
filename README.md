# cc-tstl-template
Template project for ComputerCraft programs written in TypeScript. Uses [TypeScriptToLua](https://typescripttolua.github.io) to compile with ComputerCraft typing declarations.

## Usage
1. Clone the repository (or download the ZIP). You can also use the [Use this template](https://github.com/MCJack123/cc-tstl-template/generate) button on GitHub to fork the repo directly.
2. Run `npm install` to install dependencies, including TypeScriptToLua.
3. Customize `package.json` if you want - it's not used in CC.
4. Add your code to `main.ts`, and add other files as desired.
5. Build the project with `npm run build`.
6. Copy `main.lua` to ComputerCraft, either by copying into the computer folder, dropping on the terminal, using Pastebin, or with [CraftOS-PC Remote](https://remote.craftos-pc.cc) or [cloud-catcher](https://cloud-catcher.squiddev.cc).

## Libraries

### Built-in CraftOS APIs
All base CraftOS APIs are available in the global namespace.
Peripherals are also implemented as classes that inherit from the `IPeripheral` interface, so you can call `wrap` and cast it to the desired class to get typings for the peripheral.

### `cc.*` Modules
All modules available in `/rom/modules/main/cc` have typings included. To import them, just use the `import` statement like normal:
```ts
import * as strings from "cc.strings";
// ...
let str = strings.ensure_width(arg, 20);
```

### Events
A library for handling events in a nicer way (e.g. using named properties rather than indexes) is included as a separate source file. The first line in `main.ts` includes the `event` library, which has classes for each event type as well as functions that can automatically or manually pull events with the specified type.

Example:
```ts
import * as event from "./event";

const timer = os.startTimer(5);
while (true) {
    const ev = event.pullEventAs(event.TimerEvent, "timer");
    if (ev.id == timer) break;
}
```

All types are included in the compiled output, even if they were never used. To avoid this, comment out the event class declarations you don't need, and remove the init functions from `eventInitializers`. Do not remove `GenericEvent`, as this is the fallback event type when other types aren't available.

## `tsconfig.json` Options
The `tsconfig.json` file contains some options used by TypeScriptToLua to adjust how Lua code is generated. Some of these may be useful for CC development. See [the TSTL webpage](https://typescripttolua.github.io/docs/configuration) for the rest of the options.

* `luaTarget`: Sets the version of Lua the compiler should target. This affects things like bitwise operators and `continue` support. CC has a feature set mixed between multiple versions; it uses 5.1 as a base language but supports many of 5.2 and 5.3's library features, including `bit32`. By default, TSTL will not compile bitwise operators in 5.1 mode even though CC supports it, but using 5.2 will enable `continue`, which is not supported in CC. I have made a fork of TSTL that adds a specific CC mode with only the features that CC supports. However, if you're using a different version (e.g. the 5.2 updated fork or CraftOS-PC Accelerated), you may change this to whatever fits best.
* `noImplicitSelf`: Controls whether functions have a `this`/`self`. By default, all functions are given a `self` parameter (even ones not in tables!) to allow JavaScript's `this` value to work. This can be disabled per-function with `/** @noSelf **/` or per-file with `/** @noSelfInFile **/`; but if you don't use `this` or don't want to have `self` added to functions, you can set this option to `true` to disable `this`/`self`.
* `luaLibImport`: Controls how TypeScript polyfills are emitted in the Lua code. The following options are available:
  * `inline`: Inserts the only required boilerplate code in each file. This is the default, and is recommended for projects with few files. However, this may generate duplicate code in projects with lots of files.
  * `require`: Generates a single `lualib_bundle.lua` file with all of the boilerplate, and each script `require`s the file. This can generate more code than you need, however. Recommended for projects with lots of files and/or uses lots of JavaScript language features.
  * `always`: Appears to be the same as `require`.
  * `none`: Generates no boilerplate code. **Do not use this if you use ANY JavaScript features that do not have a 1:1 conversion to Lua.** Not recommended unless size is a major concern and TS is used simply for syntax. (You'll need to remove `event.ts` to use it.)
* `sourceMapTraceback`: Overrides `debug.traceback` to add TypeScript source line numbers instead of Lua lines. This changes globals, so it's not recommended in production, but it can be useful for debugging.
* `luaBundle`: Defines the name of the output Lua file - all TypeScript sources are bundled into this file. If unset, each file will be output separately with the same name as the TS source. This defaults to `main.lua`, matching `main.ts`.
* `luaBundleEntry`: If `luaBundle` is set, this marks the TypeScript file that should be executed. This defaults to `main.ts`.

## License
The typings in `types/` and `event.ts` are licensed under the MIT license. Projects are free to use these files as provisioned under the license (i.e. do whatever you want, but include the license notice somewhere in your project). Anything else is public domain.
