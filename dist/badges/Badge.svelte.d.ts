import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "dark" | undefined;
        large?: boolean | undefined;
        border?: boolean | undefined;
        href?: string | undefined;
        rounded?: boolean | undefined;
        index?: boolean | undefined;
        dismissable?: boolean | undefined;
    };
    events: {
        dismiss: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        closeBtn: {
            handleHide: () => void;
        };
    };
};
export type BadgeProps = typeof __propDef.props;
export type BadgeEvents = typeof __propDef.events;
export type BadgeSlots = typeof __propDef.slots;
export default class Badge extends SvelteComponentTyped<BadgeProps, BadgeEvents, BadgeSlots> {
}
export {};
//# sourceMappingURL=Badge.svelte.d.ts.map