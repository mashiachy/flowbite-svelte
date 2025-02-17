import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        asideClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SidebarProps = typeof __propDef.props;
export type SidebarEvents = typeof __propDef.events;
export type SidebarSlots = typeof __propDef.slots;
export default class Sidebar extends SvelteComponentTyped<SidebarProps, SidebarEvents, SidebarSlots> {
}
export {};
//# sourceMappingURL=Sidebar.svelte.d.ts.map