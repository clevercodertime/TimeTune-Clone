import { NgModule } from "@angular/core";
// import { AboutPage } from "./about/about.page";
// import { ContactPage } from "./contact/contact.page";
// import { ServicesPage } from "./services/services.page";
import { HomePage } from "src/app/home/home.page";
import { SettingsPage } from "./settings.page";
import { InterfacePage } from "../interface/interface.page";
import { IonicPage } from "../ionic/ionic.page";
import { RoutinePage } from "../routine/routine.page";
import { SetRoutinesPage } from "../set-routines/set-routines.page";
import { BlocksPage } from "../blocks/blocks.page";
import { TagsPage } from "../tags/tags.page";

@NgModule({
    declarations : [HomePage,SettingsPage,InterfacePage,IonicPage,RoutinePage,SetRoutinesPage,BlocksPage,TagsPage],
    exports : [HomePage,SettingsPage,InterfacePage,IonicPage,RoutinePage,SetRoutinesPage,BlocksPage,TagsPage]
})
export class PagesModule{}