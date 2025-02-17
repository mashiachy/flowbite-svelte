import { SvelteComponentTyped } from "svelte";
import type { drawerTransitionParamTypes, drawerTransitionTypes } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        activateClickOutside?: boolean | undefined;
        hidden?: boolean | undefined;
        position?: "fixed" | "absolute" | undefined;
        leftOffset?: string | undefined;
        rightOffset?: string | undefined;
        topOffset?: string | undefined;
        bottomOffset?: string | undefined;
        width?: string | undefined;
        backdrop?: boolean | undefined;
        bgColor?: string | undefined;
        bgOpacity?: string | undefined;
        placement?: "bottom" | "left" | "right" | "top" | undefined;
        id?: string | undefined;
        divClass?: string | undefined;
        transitionParams?: drawerTransitionParamTypes | undefined;
        transitionType?: drawerTransitionTypes;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            hidden: boolean;
        };
    };
};
export type DrawerProps = typeof __propDef.props;
export type DrawerEvents = typeof __propDef.events;
export type DrawerSlots = typeof __propDef.slots;
export default class Drawer extends SvelteComponentTyped<DrawerProps, DrawerEvents, DrawerSlots> {
}
export {};
//# sourceMappingURL=Drawer.svelte.d.ts.map