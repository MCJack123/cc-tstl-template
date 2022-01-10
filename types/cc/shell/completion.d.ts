/** @noSelfInFile **/
/** @noResolution **/
declare module "cc.shell.completion" {
    export function file(shell: Object|LuaTable, text: string): string[];
    export function dir(shell: Object|LuaTable, text: string): string[];
    export function dirOrFile(shell: Object|LuaTable, text: string, previous: string[], add_space?: boolean): string[];
    export function program(shell: Object|LuaTable, text: string): string[];
    export function programWithArgs(shell: Object|LuaTable, text: string, previous: string[], starting: number): string[];
    export function help(shell: Object|LuaTable, text: string, previous: string[]): string[];
    export function choice(shell: Object|LuaTable, text: string, previous: string[], choices: string[], add_space?: boolean): string[];
    export function peripheral(shell: Object|LuaTable, text: string, previous: string[], add_space?: boolean): string[];
    export function side(shell: Object|LuaTable, text: string, previous: string[], add_space?: boolean): string[];
    export function setting(shell: Object|LuaTable, text: string, previous: string[], add_space?: boolean): string[];
    export function command(shell: Object|LuaTable, text: string, previous: string[], add_space?: boolean): string[];
    export function build(...args: (null | ((text: string, previous: string[]) => string[]) | [(text: string, previous: string[], ...args: any[]) => string[], ...any[]])[]): (index: number, arg: string, previous: string[]) => string[];
}