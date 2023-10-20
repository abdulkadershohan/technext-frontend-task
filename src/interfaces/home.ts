export interface IHome {
    title: string;
    text: string;
    footerText: string;

}
export interface ICard {
    item: {
        links: {
            mission_patch_small: string
        }
        mission_name: string
        launch_date_local: string
        rocket: {
            rocket_name: string
        }
        launch_success: boolean
    }
}