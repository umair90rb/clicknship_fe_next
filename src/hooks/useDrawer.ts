import { useState } from "react";

export default function useDrawer(){
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => setOpen(!open);


    return {toggleDrawer, open}
}