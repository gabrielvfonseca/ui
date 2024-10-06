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

export default function DrawerFeedback () {
    const [open, setOpen] = React.useState<boolean>(false);
 
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button 
                    variant='secondary'
                    size='medium'
                    shape='square'
                >
                    Feedback
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        Feedback
                    </DialogTitle>
                    <DialogDescription>
                        Let us know how we're doing. 
                        We're always looking to improve.
                    </DialogDescription>
                </DialogHeader>

                {/* Form goes here */}
            </DialogContent>
        </Dialog>
    );
};