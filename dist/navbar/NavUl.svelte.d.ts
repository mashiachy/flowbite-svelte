import { SvelteComponentTyped } from "svelte";
export type NavbarLiType = {
    activeClass: string;
    nonActiveClass: string;
};
import { type SlideParams } from 'svelte/transition';
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        ulClass?: string | undefined;
        hidden?: boolean | undefined;
        slideParams?: SlideParams | undefined;
        activeClass?: string | undefined;
        nonActiveClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NavUlProps = typeof __propDef.props;
export type NavUlEvents = typeof __propDef.events;
export type NavUlSlots = typeof __propDef.slots;
export default class NavUl extends SvelteComponentTyped<NavUlProps, NavUlEvents, NavUlSlots> {
}
export {};
//# sourceMappingURL=NavUl.svelte.d.ts.map