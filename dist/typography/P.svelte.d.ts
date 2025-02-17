import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string | undefined;
        height?: "normal" | "relaxed" | "loose" | undefined;
        align?: "center" | "left" | "right" | undefined;
        justify?: boolean | undefined;
        italic?: boolean | undefined;
        firstupper?: boolean | undefined;
        upperClass?: string | undefined;
        opacity?: number | undefined;
        whitespace?: "pre" | "normal" | "nowrap" | "preline" | "prewrap" | undefined;
        size?: "xs" | "sm" | "lg" | "xl" | "base" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        space?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | undefined;
        weight?: "light" | "normal" | "thin" | "extralight" | "medium" | "semibold" | "bold" | "extrabold" | "black" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PProps = typeof __propDef.props;
export type PEvents = typeof __propDef.events;
export type PSlots = typeof __propDef.slots;
export default class P extends SvelteComponentTyped<PProps, PEvents, PSlots> {
}
export {};
//# sourceMappingURL=P.svelte.d.ts.map