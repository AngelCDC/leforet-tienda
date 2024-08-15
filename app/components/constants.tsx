import { HomeIcon, Icon } from "lucide-react";
import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Home",
        path: "/",
        icon: <HomeIcon width={24} height={24}/>
    },
    {
        title: "Damas",
        path: "/Damas",
        icon: <HomeIcon width={24} height={24}/>,
        submenu: true,
        subMenuItems: [
            {
                title: "Perfumes",
                path: "/Damas/Perfumes"
            },
            {
                title: "Carteras y Bandoleros",
                path: "/Damas/Carteras"
            },
            {
                title: "Camisas",
                path: "/Damas/Camisas"
            }
        ]
    },
    {
        title: "Caballeros",
        path: "/Caballeros",
        icon: <HomeIcon width={24} height={24}/>,
        submenu: true,
        subMenuItems: [
            {
                title: "Perfumes",
                path: "/Caballeros/Perfumes"
            },
            {
                title: "Accesorios",
                path: "/Caballeros/Accesorios"
            },
            {
                title: "Camisas",
                path: "/Caballeros/Camisas"
            }
        ]
    },

]
    
