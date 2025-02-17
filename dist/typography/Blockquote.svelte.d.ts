import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        border?: boolean | undefined;
        italic?: boolean | undefined;
        borderClass?: string | undefined;
        bgClass?: string | undefined;
        bg?: boolean | undefined;
        baseClass?: string | undefined;
        alignment?: "center" | "left" | "right" | undefined;
        size?: "xs" | "sm" | "lg" | "xl" | "base" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BlockquoteProps = typeof __propDef.props;
export type BlockquoteEvents = typeof __propDef.events;
export type BlockquoteSlots = typeof __propDef.slots;
export default class Blockquote extends SvelteComponentTyped<BlockquoteProps, BlockquoteEvents, BlockquoteSlots> {
}
export {};
//# sourceMappingURL=Blockquote.svelte.d.ts.map