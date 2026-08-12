'use client';

import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";

const Dropdown = () => {
    return (
        <Menu>
            <MenuButton className={"outline-2 rounded"}>Filter by Training</MenuButton>
            <MenuItems anchor={"bottom"}>
                <MenuItem>
                    <a className={"block bg-background data-focus:text-blue-100"} href="/">Home Page</a>
                </MenuItem>
                <MenuItem>
                    <a className={"block bg-background data-focus:text-blue-100"} href="/">Home Page</a>
                </MenuItem>
            </MenuItems>
        </Menu>
    )
}
export default Dropdown
