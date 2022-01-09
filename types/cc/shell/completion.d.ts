/** @noResolution **/
declare module "cc.shell.completion" {
    export function file(text: string): string[];
    export function dir(text: string): string[];
    export function dirOrFile(text: string, previous: string[], add_space?: boolean): string[];
    export function program(text: string): string[];
    export function programWithArgs(text: string, previous: string[], starting: number): string[];
    export function help(text: string, previous: string[]): string[];
    export function choice(text: string, previous: string[], choices: string[], add_space?: boolean): string[];
    export function peripheral(text: string, previous: string[], add_space?: boolean): string[];
    export function side(text: string, previous: string[], add_space?: boolean): string[];
    export function setting(text: string, previous: string[], add_space?: boolean): string[];
    export function command(text: string, previous: string[], add_space?: boolean): string[];
    /** @noSelf **/
    export function build(...args: (null | ((text: string, previous: string[]) => string[]) | [(text: string, previous: string[], ...args: any[]) => string[], ...any[]])[]): (index: number, arg: string, previous: string[]) => string[];
}