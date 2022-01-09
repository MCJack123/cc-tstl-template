# cc-tstl-template
Template project for ComputerCraft programs written in TypeScript.

## Usage
Simply clone this repository, run `npm install`, modify the `package.json` as you wish, and add your code to `main.ts`. Then use `npx tstl` to compile.

## Libraries

### Built-in CraftOS APIs
All base CraftOS APIs are available in the global namespace - no need to import them. `turtle` and `commands` are not yet available, but planned for a future version.

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
const timer = os.startTimer(5)
while (true) {
    const ev = event.pullEventAs<event.TimerEvent>("timer");
    if (ev.id == timer) break;
}
```

## License
The typings in `types/` and `event.ts` are licensed under the MIT license. Projects are free to use these files as provisioned under the license (i.e. do whatever you want, but include the license notice somewhere in your project). Anything else is public domain.