import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        src?: string | undefined;
        href?: string | undefined;
        rounded?: boolean | undefined;
        border?: boolean | undefined;
        stacked?: boolean | undefined;
        dot?: object | undefined;
        alt?: string | undefined;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type AvatarProps = typeof __propDef.props;
export type AvatarEvents = typeof __propDef.events;
export type AvatarSlots = typeof __propDef.slots;
export default class Avatar extends SvelteComponentTyped<AvatarProps, AvatarEvents, AvatarSlots> {
}
export {};
//# sourceMappingURL=Avatar.svelte.d.ts.map