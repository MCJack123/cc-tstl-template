/** @noSelfInFile **/

// Latest CC version: 1.109.3

type Color = number;
type Colour = Color;

/** @noSelf **/
declare namespace colors {
    var white: Color;
    var orange: Color;
    var magenta: Color;
    var lightBlue: Color;
    var yellow: Color;
    var lime: Color;
    var pink: Color;
    var gray: Color;
    var lightGray: Color;
    var cyan: Color;
    var purple: Color;
    var blue: Color;
    var brown: Color;
    var green: Color;
    var red: Color;
    var black: Color;
    function combine(c1: Color, ...c2: Color[]): Color;
    function subtract(c1: Color, ...c2: Color[]): Color;
    function test(colors: Color, color: Color): boolean;
    function packRGB(r: number, g: number, b: number): number;
    function unpackRGB(rgb: number): LuaMultiReturn<[number, number, number]>;
    function toBlit(color: Color): string;
    function fromBlit(color: string): Color | undefined;
}

/** @noSelf **/
declare namespace colours {
    var white: Colour;
    var orange: Colour;
    var magenta: Colour;
    var lightBlue: Colour;
    var yellow: Colour;
    var lime: Colour;
    var pink: Colour;
    var grey: Colour;
    var lightGrey: Colour;
    var cyan: Colour;
    var purple: Colour;
    var blue: Colour;
    var brown: Colour;
    var green: Colour;
    var red: Colour;
    var black: Colour;
    function combine(c1: Colour, ...c2: Colour[]): Colour;
    function subtract(c1: Colour, ...c2: Colour[]): Colour;
    function test(colors: Colour, color: Colour): boolean;
    function packRGB(r: number, g: number, b: number): number;
    function unpackRGB(rgb: number): LuaMultiReturn<[number, number, number]>;
    function toBlit(color: Colour): string;
}
/** @noSelf **/
declare namespace commands {
  function exec(command: string): LuaMultiReturn<[boolean, string[], number | undefined]>;
  function execAsync(command: string): number;
  function list(command: string): string[];
  function getBlockPosition(): LuaMultiReturn<[number, number, number]>;
  function getBlockInfo(x: number, y: number, z: number, dimension?: string): LuaTable | Object;
  function getBlockInfos(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, dimension?: string): (LuaTable | Object)[];
}
/** @noSelf **/
declare namespace disk {
    function isPresent(name: string): boolean;
    function getLabel(name: string): string | undefined;
    function setLabel(name: string, label?: string | undefined): void;
    function hasData(name: string): boolean;
    function getMountPath(name: string): string | undefined;
    function hasAudio(name: string): boolean;
    function getAudioTitle(name: string): string | undefined;
    function playAudio(name: string): void;
    function stopAudio(name: string): void;
    function eject(name: string): void;
    function getID(name: string): number;
}
/** @noSelf */
declare class ReadFileHandle {
    public close(): void;
    public seek(whence?: "cur" | "set" | "end", offset?: number): number;
    public read(count?: number): string | number;
    public readLine(withTrailing?: boolean): string;
    public readAll(): string;
}

/** @noSelf */
declare class WriteFileHandle {
    public close(): void;
    public seek(whence?: "cur" | "set" | "end", offset?: number): number;
    public write(value: any): void;
    public writeLine(value: string): void;
    public flush(): void;
}

type FileAttributes = {
    size: number;
    isDir: boolean;
    isReadOnly: boolean;
    created: number;
    modified: number;
}

declare const fs: {
    list(this: void, path: string): string[];
    exists(this: void, path: string): boolean;
    isDir(this: void, path: string): boolean;
    isReadOnly(this: void, path: string): boolean;
    getName(this: void, path: string): string;
    getDrive(this: void, path: string): string;
    getSize(this: void, path: string): number;
    getFreeSpace(this: void, path: string): number;
    makeDir(this: void, path: string): void;
    move(this: void, from: string, to: string): void;
    copy(this: void, from: string, to: string): void;
    'delete'(this: void, path: string): void;
    combine(this: void, base: string, ...local: string[]): string;
    open(this: void, path: string, mode: "r" | "rb"): LuaMultiReturn<[ReadFileHandle] | [undefined, string]>;
    open(this: void, path: string, mode: "w" | "wb" | "a" | "ab"): LuaMultiReturn<[WriteFileHandle] | [undefined, string]>;
    open(this: void, path: string, mode: "r+" | "rb+" | "w+" | "wb+" | "a+" | "ab+"): LuaMultiReturn<[ReadFileHandle & WriteFileHandle] | [undefined, string]>;
    find(this: void, wildcard: string): string[];
    getDir(this: void, path: string): string;
    complete(this: void, partial: string, path: string, includeFiles?: boolean, includeSlashes?: boolean): string[];
    complete(this: void, partial: string, path: string, options: {include_dirs?: boolean, include_files?: boolean, include_hidden?: boolean}): string[];
    getCapacity(this: void, path: string): number;
    attributes(this: void, path: string): FileAttributes;
    isDriveRoot(this: void, path: string): boolean;
}
declare function sleep(time: number): void;
declare function write(str: string): number;
declare function print(...str: any[]): number;
declare function printError(...str: any[]): void;
declare function read(replaceChar?: string, history?: string[], completeFn?: (partial: string) => string[], defaultValue?: string): string;
declare var _CC_DEFAULT_SETTINGS: string;
declare var _CC_DISABLE_LUA51_FEATURES: boolean;
declare var _HOST: string;
/** @noSelf **/
declare namespace gps {
    var CHANNEL_GPS: number;
    function locate(timeout?: number, debug?: boolean): LuaMultiReturn<[number, number, number]>;
}
/** @noSelf **/
declare namespace help {
    function path(): string;
    function setPath(path: string): void;
    function lookup(topic: string): string | undefined;
    function topics(): string[];
    function completeTopic(prefix: string): string[];
}
type RequestOptions = {
    url: string;
    body?: string;
    headers?: LuaMap<string, string>;
    binary?: boolean;
    method?: string;
    redirect?: boolean;
    timeout?: number;
}
type WebSocketOptions = {
    url: string;
    headers?: LuaMap<string, string>;
    timeout?: number;
}

/** @noSelf */
declare class HTTPResponse {
    public getResponseCode(): number;
    public getResponseHeaders(): LuaMap<string, string>;
    public read(count?: number): string | number | undefined;
    public readLine(withTrailing: boolean): string | undefined;
    public readAll(): string | undefined;
    public close(): void;
}

/** @noSelf */
declare class WebSocket {
    public receive(timeout?: number): string | undefined;
    public send(message: string, binary?: boolean): void;
    public close(): void;
}

/** @noSelf **/
declare namespace http {
    function request(url: string, body?: string, headers?: LuaMap<string, string>, binary?: boolean): void;
    function request(options: RequestOptions): void;
    function get(url: string, headers?: LuaMap<string, string>, binary?: boolean): LuaMultiReturn<[HTTPResponse] | [undefined, string, HTTPResponse?]>;
    function get(options: RequestOptions): LuaMultiReturn<[HTTPResponse] | [undefined, string, HTTPResponse?]>;
    function post(url: string, body?: string, headers?: LuaMap<string, string>, binary?: boolean): LuaMultiReturn<[HTTPResponse] | [undefined, string, HTTPResponse?]>;
    function post(options: RequestOptions): LuaMultiReturn<[HTTPResponse] | [undefined, string, HTTPResponse?]>;
    function checkURLAsync(url: string): void;
    function checkURL(url: string): boolean;
    function websocket(url: string, headers?: LuaMap<string, string>): LuaMultiReturn<[WebSocket] | [false, string]>;
    function websocket(options: WebSocketOptions): LuaMultiReturn<[WebSocket] | [false, string]>;
    function websocketAsync(url: string, headers?: LuaMap<string, string>): void;
    function websocketAsync(options: WebSocketOptions): void;
}
type Key = number;

declare const keys: {
    a: Key;
    apostrophe: Key;
    at: Key;
    ax: Key;
    b: Key;
    backslash: Key;
    backspace: Key;
    c: Key;
    capsLock: Key;
    cimcumflex: Key;
    colon: Key;
    comma: Key;
    convert: Key;
    d: Key;
    'delete': Key;
    down: Key;
    e: Key;
    eight: Key;
    end: Key;
    enter: Key;
    equals: Key;
    f: Key;
    f1: Key;
    f10: Key;
    f11: Key;
    f12: Key;
    f13: Key;
    f14: Key;
    f15: Key;
    f2: Key;
    f3: Key;
    f4: Key;
    f5: Key;
    f6: Key;
    f7: Key;
    f8: Key;
    f9: Key;
    five: Key;
    four: Key;
    g: Key;
    grave: Key;
    h: Key;
    home: Key;
    i: Key;
    insert: Key;
    j: Key;
    k: Key;
    kana: Key;
    kanji: Key;
    l: Key;
    left: Key;
    leftAlt: Key;
    leftBracket: Key;
    leftCtrl: Key;
    leftShift: Key;
    m: Key;
    minus: Key;
    multiply: Key;
    n: Key;
    nine: Key;
    noconvert: Key;
    numLock: Key;
    numPad0: Key;
    numPad1: Key;
    numPad2: Key;
    numPad3: Key;
    numPad4: Key;
    numPad5: Key;
    numPad6: Key;
    numPad7: Key;
    numPad8: Key;
    numPad9: Key;
    numPadAdd: Key;
    numPadComma: Key;
    numPadDecimal: Key;
    numPadDivide: Key;
    numPadEnter: Key;
    numPadEquals: Key;
    numPadSubtract: Key;
    o: Key;
    one: Key;
    p: Key;
    pageDown: Key;
    pageUp: Key;
    pause: Key;
    period: Key;
    q: Key;
    r: Key;
    returnKey: Key;
    right: Key;
    rightAlt: Key;
    rightBracket: Key;
    rightCtrl: Key;
    rightShift: Key;
    s: Key;
    scollLock: Key;
    semiColon: Key;
    seven: Key;
    six: Key;
    slash: Key;
    space: Key;
    stop: Key;
    t: Key;
    tab: Key;
    three: Key;
    two: Key;
    u: Key;
    underscore: Key;
    up: Key;
    v: Key;
    w: Key;
    x: Key;
    y: Key;
    yen: Key;
    z: Key;
    zero: Key;
    getName(this: void, k: Key): string;
}
/** @noSelf **/
declare namespace multishell {
    function getFocus(): number;
    function setFocus(n: number): boolean;
    function getTitle(n: number): string | undefined;
    function setTitle(n: number, title: string): void;
    function getCurrent(): number;
    function launch(env: LuaTable, path: string, ...args: string[]): number;
    function getCount(): number;
}
declare type LuaDate = {
    year: number;
    month: number;
    day: number;
    hour: number;
    min: number;
    sec: number;
    wday: number;
    yday: number;
    isdst: boolean;
}
/** @noSelf **/
declare namespace os {
    function version(): string;
    function getComputerID(): number;
    function computerID(): number;
    function getComputerLabel(): string | undefined;
    function computerLabel(): string | undefined;
    function setComputerLabel(label?: string | undefined): void;
    function run(env: LuaTable, path: string, ...args: string[]): boolean;
    function queueEvent(type: string, ...param: any[]): void;
    function clock(): number;
    function startTimer(timeout: number): number;
    function cancelTimer(id: number): void;
    function time(mode?: string | undefined): number;
    function sleep(timeout: number): void;
    function day(mode?: string | undefined): number;
    function setAlarm(time: number): number;
    function cancelAlarm(id: number): void;
    function shutdown(): void;
    function reboot(): void;
    function epoch(mode?: string | undefined): number;
    function date(format?: string | undefined, time?: number | undefined): string | LuaDate;
    function pullEvent(filter?: string | undefined): LuaMultiReturn<[string, ...any[]]>;
    function pullEventRaw(filter?: string | undefined): LuaMultiReturn<[string, ...any[]]>;
}
/** @noSelf **/
declare namespace paintutils {
    function parseImage(image: string): number[][] | undefined;
    function loadImage(path: string): number[][] | undefined;
    function drawPixel(x: number, y: number, color?: Color): void;
    function drawLine(startX: number, startY: number, endX: number, endY: number, color?: Color): void;
    function drawBox(startX: number, startY: number, endX: number, endY: number, color?: Color): void;
    function drawFilledBox(startX: number, startY: number, endX: number, endY: number, color?: Color): void;
    function drawImage(image: number[][], x: number, y: number): void;
}
/** @noSelf **/
declare namespace parallel {
    function waitForAny(...args: (() => void)[]): void;
    function waitForAll(...args: (() => void)[]): void;
}
/** @noSelf */
interface IPeripheral {}

/** @noSelf */
declare class CommandPeripheral implements IPeripheral {
    getCommand(): string;
    setCommand(command: string): void;
    runCommand(): LuaMultiReturn<[boolean, string | undefined]>;
}

/** @noSelf */
declare class ComputerPeripheral implements IPeripheral {
    turnOn(): void;
    shutdown(): void;
    reboot(): void;
    getID(): number;
    isOn(): boolean;
    getLabel(): string;
}

/** @noSelf */
declare class DrivePeripheral implements IPeripheral {
    isDiskPresent(): boolean;
    getDiskLabel(): string;
    setDiskLabel(label?: string | undefined): void;
    hasData(): boolean;
    getMountPath(): string;
    hasAudio(): boolean;
    getAudioTitle(): string;
    playAudio(): void;
    stopAudio(): void;
    ejectDisk(): void;
    getDiskID(): number;
}

/** @noSelf */
declare class ModemPeripheral implements IPeripheral {
    open(channel: number): void;
    isOpen(channel: number): boolean;
    close(channel: number): void;
    closeAll(): void;
    transmit(channel: number, replyChannel: number, payload: any): void;
    isWireless(): boolean;
}

/** @noSelf */
declare class WiredModemPeripheral extends ModemPeripheral {
    getNamesRemote(): string[];
    isPresentRemote(name: string): boolean;
    getTypeRemote(name: string): string;
    getMethodsRemote(name: string): string[];
    callRemote(name: string, method: string, ...args: string[]): LuaMultiReturn<[...any[]]>;
    getNameLocal(): string;
}

/** @noSelf */
declare class MonitorPeripheral implements IPeripheral, ITerminal {
    write(text: string): void;
    blit(text: string, textColors: string, backgroundColors: string): void;
    clear(): void;
    clearLine(): void;
    getCursorPos(): LuaMultiReturn<[number, number]>;
    setCursorPos(x: number, y: number): void;
    getCursorBlink(): boolean;
    setCursorBlink(blink: boolean): void;
    isColor(): boolean;
    isColour(): boolean;
    getSize(mode?: boolean | number): LuaMultiReturn<[number, number]>;
    scroll(n: number): void;
    getTextColor(): Color;
    getTextColour(): Colour;
    setTextColor(color: Color): void;
    setTextColour(color: Colour): void;
    getBackgroundColor(): Color;
    getBackgroundColour(): Colour;
    setBackgroundColor(color: Color): void;
    setBackgroundColour(color: Colour): void;
    getPaletteColor(color: Color): LuaMultiReturn<[Color, Color, Color]>;
    getPaletteColour(color: Colour): LuaMultiReturn<[Colour, Colour, Colour]>;
    setPaletteColor(color: Color, rgb: number): void;
    setPaletteColor(color: Color, r: number, g: number, b: number): void;
    setPaletteColour(color: Colour, rgb: number): void;
    setPaletteColour(color: Colour, r: number, g: number, b: number): void;
    getGraphicsMode(): boolean | number;
    setGraphicsMode(mode: boolean | number): void;
    getPixel(x: number, y: number): number;
    setPixel(x: number, y: number, color: Color): void;
    getPixels(x: number, y: number, width: number, height: number, asString?: boolean): (string | Color[])[];
    setPixels(x: number, y: number, data: Color | (string | Color[])[]): void;
    getFrozen(): boolean;
    setFrozen(frozen: boolean): void;
    setTextScale(scale: number): void;
}

/** @noSelf */
declare class PrinterPeripheral implements IPeripheral {
    write(...args: (string | number)[]): void;
    getCursorPos(): LuaMultiReturn<[number, number]>;
    setCursorPos(x: number, y: number): void;
    getPageSize(): LuaMultiReturn<[number, number]>;
    newPage(): void;
    endPage(): void;
    setPageTitle(title?: string | undefined): void;
    getInkLevel(): number;
    getPaperLevel(): number;
}

/** @noSelf */
declare class SpeakerPeripheral implements IPeripheral {
    playSound(name: string, volume?: number, pitch?: number): void;
    playNote(name: string, volume?: number, pitch?: number): void;
    playAudio(data: number[], volume?: number): boolean;
    stop(): void;
}

/** @noSelf */
declare class EnergyStoragePeripheral implements IPeripheral {
    getEnergy(): number;
    getEnergyCapacity(): number;
}

/** @noSelf */
declare class FluidStoragePeripheral implements IPeripheral {
    tanks(): {[index: number]: {name: string, amount: number}};
    pushFluid(to: string, limit?: number, name?: string): number;
    pullFluid(from: string, limit?: number, name?: string): number;
}

declare type SlotDetail = {
    name: string;
    count: number;
    nbt?: string;
}

declare type ItemDetail = SlotDetail & {
    displayName: string;
    maxCount: number;
    damage?: number;
    maxDamage?: number;
    durability?: number;
    tags: string[];
    lore?: string[]; //?
    enchantments?: {name: string, level: number, displayName: string}[];
    unbreakable?: boolean;
}

/** @noSelf */
declare class InventoryPeripheral implements IPeripheral {
    size(): number;
    list(): {[index: number]: SlotDetail};
    getItemDetail(slot: number): ItemDetail|undefined;
    getItemLimit(slot: number): number;
    pushItems(to: string, slot: number, limit?: number, toSlot?: number): number;
    pullItems(from: string, slot: number, limit?: number, fromSlot?: number): number;
}
/** @noSelf **/
declare namespace peripheral {
    function getNames(): string[];
    function isPresent(name: string): boolean;
    function getType(peripheral: IPeripheral|string): LuaMultiReturn<[...string[]]>;
    function hasType(peripheral: IPeripheral|string, type: string): boolean|undefined;
    function getMethods(name: string): string[]|undefined;
    function getName(peripheral: IPeripheral): string;
    function call(side: string, method: string, ...args: any[]): LuaMultiReturn<[...any[]]>;
    function wrap(name: string): IPeripheral | undefined;
    function find(type: string, filter?: (name: string, peripheral: IPeripheral) => boolean): LuaMultiReturn<[...IPeripheral[]]>;
}
/** @noSelf **/
declare namespace pocket {
    function equipBack(): LuaMultiReturn<[boolean, string | undefined]>;
    function unequipBack(): LuaMultiReturn<[boolean, string | undefined]>;
}
/** @noSelf **/
declare namespace rednet {
    var CHANNEL_BROADCAST: number;
    var CHANNEL_REPEAT: number;
    var MAX_ID_CHANNELS: number;
    function open(modem: string): void;
    function close(modem?: string): void;
    function isOpen(modem?: string): boolean;
    function send(recipient: number, message: any, protocol?: string): boolean;
    function broadcast(message: any, protocol?: string): void;
    function receive(filter?: string, timeout?: number): LuaMultiReturn<[number, any, string | undefined] | [undefined]>;
    function host(protocol: string, hostname: string): void;
    function unhost(protocol: string): void;
    function lookup(protocol: string, hostname?: string): LuaMultiReturn<[...number[]]>;
    function run(): void;
}
/** @noSelf **/
declare namespace redstone {
    function getSides(): string[];
    function setOutput(side: string, on: boolean): void;
    function getOutput(side: string): boolean;
    function getInput(side: string): boolean;
    function setAnalogOutput(side: string, value: number): void;
    function getAnalogOutput(side: string): number;
    function getAnalogInput(side: string): number;
    function setAnalogueOutput(side: string, value: number): void;
    function getAnalogueOutput(side: string): number;
    function getAnalogueInput(side: string): number;
    function setBundledOutput(side: string, value: Color): void;
    function getBundledOutput(side: string): Color;
    function getBundledInput(side: string): Color;
    function testBundledInput(side: string, mask: number): boolean;
}
type SettingOptions = {
    description?: string;
    default?: any;
    type?: string;
}
/** @noSelf **/
declare namespace settings {
    function define(name: string, options?: SettingOptions): void;
    function undefine(name: string): void;
    function set(name: string, value: any): void;
    function get(name: string, defaultValue?: any): any;
    function getDetails(name: string): SettingOptions;
    function unset(name: string): void;
    function clear(): void;
    function getNames(): string[];
    function load(path?: string): boolean;
    function save(path?: string): boolean;
}
/** @noSelf **/
declare namespace shell {
    function exit(): void;
    function dir(): string;
    function setDir(path: string): void;
    function path(): string;
    function setPath(path: string): void;
    function resolve(path: string): string;
    function resolveProgram(name: string): string;
    function aliases(): {[name: string]: string};
    function setAlias(name: string, program: string): void;
    function clearAlias(name: string): void;
    function programs(showHidden?: boolean): string[];
    function getRunningProgram(): string;
    function run(command: string, ...args: string[]): boolean;
    function execute(command: string, ...args: string[]): boolean;
    function openTab(command: string, ...args: string[]): number;
    function switchTab(id: number): void;
    function complete(prefix: string): string[];
    function completeProgram(prefix: string): string[];
    function setCompletionFunction(path: string, completion: (shell: LuaTable|Object, index: number, partial: string, previous: string[]) => string[]): void;
    function getCompletionInfo(): {fnComplete: (shell: LuaTable|Object, index: number, partial: string, previous: string[]) => string[]}[];
}
/** @noSelf */
interface ITerminal {
    write(text: string): void;
    blit(text: string, textColors: string, backgroundColors: string): void;
    clear(): void;
    clearLine(): void;
    getCursorPos(): LuaMultiReturn<[number, number]>;
    setCursorPos(x: number, y: number): void;
    getCursorBlink(): boolean;
    setCursorBlink(blink: boolean): void;
    isColor(): boolean;
    isColour(): boolean;
    getSize(mode?: boolean | number): LuaMultiReturn<[number, number]>;
    scroll(n: number): void;
    getTextColor(): Color;
    getTextColour(): Colour;
    setTextColor(color: Color): void;
    setTextColour(color: Colour): void;
    getBackgroundColor(): Color;
    getBackgroundColour(): Colour;
    setBackgroundColor(color: Color): void;
    setBackgroundColour(color: Colour): void;
    getPaletteColor(color: Color): LuaMultiReturn<[number, number, number]>;
    getPaletteColour(color: Colour): LuaMultiReturn<[number, number, number]>;
    setPaletteColor(color: Color, rgb: number): void;
    setPaletteColor(color: Color, r: number, g: number, b: number): void;
    setPaletteColour(color: Colour, rgb: number): void;
    setPaletteColour(color: Colour, r: number, g: number, b: number): void;
    getGraphicsMode(): boolean | number;
    setGraphicsMode(mode: boolean | number): void;
    getPixel(x: number, y: number): number;
    setPixel(x: number, y: number, color: Color): void;
    getPixels(x: number, y: number, width: number, height: number, asString?: boolean): (string | Color[])[];
    setPixels(x: number, y: number, data: Color | (string | Color[])[]): void;
    getFrozen(): boolean;
    setFrozen(frozen: boolean): void;
}
/** @noSelf **/
declare namespace term {
    function redirect(term: ITerminal): ITerminal;
    function current(): ITerminal;
    function native(): ITerminal;
    function screenshot(): void;
    function showMouse(mouse: boolean): void;
    function write(text: string): void;
    function blit(text: string, textColors: string, backgroundColors: string): void;
    function clear(): void;
    function clearLine(): void;
    function getCursorPos(): LuaMultiReturn<[number, number]>;
    function setCursorPos(x: number, y: number): void;
    function getCursorBlink(): boolean;
    function setCursorBlink(blink: boolean): void;
    function isColor(): boolean;
    function isColour(): boolean;
    function getSize(mode?: boolean | number): LuaMultiReturn<[number, number]>;
    function scroll(n: number): void;
    function getTextColor(): Color;
    function getTextColour(): Colour;
    function setTextColor(color: Color): void;
    function setTextColour(color: Colour): void;
    function getBackgroundColor(): Color;
    function getBackgroundColour(): Colour;
    function setBackgroundColor(color: Color): void;
    function setBackgroundColour(color: Colour): void;
    function nativePaletteColor(color: number): LuaMultiReturn<[number, number, number]>;
    function nativePaletteColour(colour: number): LuaMultiReturn<[number, number, number]>;
    function getPaletteColor(color: Color): LuaMultiReturn<[number, number, number]>;
    function getPaletteColour(color: Colour): LuaMultiReturn<[number, number, number]>;
    function setPaletteColor(color: Color, rgb: number): void;
    function setPaletteColor(color: Color, r: number, g: number, b: number): void;
    function setPaletteColour(color: Colour, rgb: number): void;
    function setPaletteColour(color: Colour, r: number, g: number, b: number): void;
    function getGraphicsMode(): boolean | number;
    function setGraphicsMode(mode: boolean | number): void;
    function getPixel(x: number, y: number): number;
    function setPixel(x: number, y: number, color: Color): void;
    function getPixels(x: number, y: number, width: number, height: number, asString?: boolean): (string | Color[])[];
    function setPixels(x: number, y: number, data: Color | (string | Color[])[]): void;
    function getFrozen(): boolean;
    function setFrozen(frozen: boolean): void;
}
type UnserializeJSONOptions = {
    nbt_style?: boolean;
    parse_null?: boolean;
    parse_empty_array?: boolean;
}
type SerializeOptions = {
    compact?: boolean;
    allow_repetitions?: boolean;
}
type SerializeJSONOptions = {
    nbtStyle?: boolean;
    allow_repetitions?: boolean;
    unicode_strings?: boolean;
}
/** @noSelf **/
declare namespace textutils {
    var empty_json_array: Object;
    var json_null: Object;
    function slowWrite(text: string, rate?: number): void;
    function slowPrint(text: string, rate?: number): void;
    function formatTime(time: number, hour24?: boolean): string;
    function pagedPrint(text: string, freeLines?: number): number;
    function tabulate(...args: (LuaTable | Object | Color)[]): void;
    function pagedTabulate(...args: (LuaTable | Object | Color)[]): void;
    function serialize(tab: any, options?: SerializeOptions): string;
    function serialise(tab: any, options?: SerializeOptions): string;
    function serializeJSON(tab: any, nbtStyle?: boolean): string;
    function serialiseJSON(tab: any, nbtStyle?: boolean): string;
    function serializeJSON(tab: any, options: SerializeJSONOptions): string;
    function serialiseJSON(tab: any, options: SerializeJSONOptions): string;
    function unserialize(str: string): any;
    function unserialise(str: string): any;
    function unserializeJSON(str: string, options?: UnserializeJSONOptions): any;
    function unserialiseJSON(str: string, options?: UnserializeJSONOptions): any;
    function urlEncode(url: string): string;
    function complete(searchText: string, searchTable?: any): string[];
}
/** @noSelf **/
declare namespace turtle {
  function craft(quantity?: number): LuaMultiReturn<[true, undefined] | [false, string]>;
  function forward(): LuaMultiReturn<[boolean, string | undefined]>;
  function back(): LuaMultiReturn<[boolean, string | undefined]>;
  function up(): LuaMultiReturn<[boolean, string | undefined]>;
  function down(): LuaMultiReturn<[boolean, string | undefined]>;
  function turnLeft(): LuaMultiReturn<[boolean, string | undefined]>;
  function turnRight(): LuaMultiReturn<[boolean, string | undefined]>;
  function select(slotNum: number): true;
  function getSelectedSlot(): number;

  function getItemCount(slotNum?: number): number;

  function getItemSpace(slotNum?: number): number;

  function getItemDetail(slotNum?: number, detailed?: boolean): LuaTable | Object | undefined;

  function equipLeft(): LuaMultiReturn<[true, undefined] | [false, string]>;
  function equipRight(): LuaMultiReturn<[true, undefined] | [false, string]>;

  function attack(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;
  function attackUp(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;
  function attackDown(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;

  function dig(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;
  function digUp(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;
  function digDown(toolSide?: 'left' | 'right'): LuaMultiReturn<[boolean, string | undefined]>;

  function place(text?: string): LuaMultiReturn<[boolean, string | undefined]>;
  function placeUp(text?: string): LuaMultiReturn<[boolean, string | undefined]>;
  function placeDown(text?: string): LuaMultiReturn<[boolean, string | undefined]>;

  function detect(): boolean;
  function detectUp(): boolean;
  function detectDown(): boolean;

  function inspect(): LuaMultiReturn<[boolean, LuaTable | Object | string]>;
  function inspectUp(): LuaMultiReturn<[boolean, LuaTable | Object | string]>;
  function inspectDown(): LuaMultiReturn<[boolean, LuaTable | Object | string]>;

  function compare(): boolean;
  function compareUp(): boolean;
  function compareDown(): boolean;

  function drop(count?: number): LuaMultiReturn<[boolean, string | undefined]>;
  function dropUp(count?: number): LuaMultiReturn<[boolean, string | undefined]>;
  function dropDown(count?: number): LuaMultiReturn<[boolean, string | undefined]>;

  function suck(count?: number): LuaMultiReturn<[boolean, string | undefined]>;
  function suckUp(count?: number): LuaMultiReturn<[boolean, string | undefined]>;
  function suckDown(count?: number): LuaMultiReturn<[boolean, string | undefined]>;

  function refuel(count?: number): LuaMultiReturn<[true, undefined] | [false, string]>;
  function getFuelLevel(): number | 'unlimited';
  function getFuelLimit(): number | 'unlimited';

  function transferTo(slotNum: number, quantity?: number): boolean;
}
/** @customConstructor vector.new */
declare class Vector {
    constructor(x: number, y: number, z: number);
    public x: number;
    public y: number;
    public z: number;
    public add(this: Vector, o: Vector): Vector;
    public sub(this: Vector, o: Vector): Vector;
    public mul(this: Vector, o: number): Vector;
    public div(this: Vector, o: number): Vector;
    public unm(this: Vector): Vector;
    public dot(this: Vector, o: Vector): number;
    public cross(this: Vector, o: Vector): Vector;
    public length(this: Vector): number;
    public normalize(this: Vector): Vector;
    public round(this: Vector, tolerance?: number): Vector;
    public tostring(this: Vector): string;
    public equals(this: Vector, o: Vector): boolean;
}
/**
 * @customConstructor window.create
 * @noSelf */
declare class Window implements ITerminal {
    constructor(parent: ITerminal, x: number, y: number, width: number, height: number, visible?: boolean);
    public write(text: string): void;
    public blit(text: string, textColors: string, backgroundColors: string): void;
    public clear(): void;
    public clearLine(): void;
    public getCursorPos(): LuaMultiReturn<[number, number]>;
    public setCursorPos(x: number, y: number): void;
    public getCursorBlink(): boolean;
    public setCursorBlink(blink: boolean): void;
    public isColor(): boolean;
    public isColour(): boolean;
    public getSize(mode?: boolean | number): LuaMultiReturn<[number, number]>;
    public scroll(n: number): void;
    public getTextColor(): Color;
    public getTextColour(): Colour;
    public setTextColor(color: Color): void;
    public setTextColour(color: Colour): void;
    public getBackgroundColor(): Color;
    public getBackgroundColour(): Colour;
    public setBackgroundColor(color: Color): void;
    public setBackgroundColour(color: Colour): void;
    public getPaletteColor(color: Color): LuaMultiReturn<[number, number, number]>;
    public getPaletteColour(color: Colour): LuaMultiReturn<[number, number, number]>;
    public setPaletteColor(color: Color, rgb: number): void;
    public setPaletteColor(color: Color, r: number, g: number, b: number): void;
    public setPaletteColour(color: Colour, rgb: number): void;
    public setPaletteColour(color: Colour, r: number, g: number, b: number): void;
    public getGraphicsMode(): boolean | number;
    public setGraphicsMode(mode: boolean | number): void;
    public getPixel(x: number, y: number): number;
    public setPixel(x: number, y: number, color: Color): void;
    public getPixels(x: number, y: number, width: number, height: number, asString?: boolean): (string | Color[])[];
    public setPixels(x: number, y: number, data: Color | (string | Color[])[]): void;
    public getFrozen(): boolean;
    public setFrozen(frozen: boolean): void;
    public getVisible(): boolean;
    public setVisible(visible: boolean): void;
    public redraw(): void;
    public restoreCursor(): void;
    public getPosition(): LuaMultiReturn<[number, number]>;
    public reposition(x: number, y: number, width?: number, height?: number): void;
}
