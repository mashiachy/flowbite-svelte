import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        striped?: boolean | undefined;
        hoverable?: boolean | undefined;
        noborder?: boolean | undefined;
        shadow?: boolean | undefined;
        color?: "red" | "yellow" | "green" | "indigo" | "default" | "purple" | "pink" | "blue" | "custom" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
export default class Table extends SvelteComponentTyped<TableProps, TableEvents, TableSlots> {
}
export {};
//# sourceMappingURL=Table.svelte.d.ts.map