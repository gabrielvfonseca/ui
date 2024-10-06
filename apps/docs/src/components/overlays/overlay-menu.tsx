'use client';

import React from "react";

import { Icons } from "@components/icons";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../../../../../ui/src/components/drawer";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../../../../../ui/src/components/dialog';

import { Button } from "../../../../../ui/src/components/button";

import { useMediaQuery } from "@hooks/use-media-query";

export default function OverlayMenu () {
    const [open, setOpen] = React.useState<boolean>(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
 
    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button 
                        variant='secondary'
                        size='medium'
                        shape='circle'
                        aria-label='Search'
                        svg
                    >
                        <Icons.search />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        )
    }
 
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button 
                    variant='secondary'
                    size='medium'
                    shape='circle'
                    aria-label='Search'
                    svg
                >
                    <Icons.search />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    )
}