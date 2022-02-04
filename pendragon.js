import pd_item_sheet from "./module/sheets/pd_item_sheet.js";

Hooks.once("init", function () {
    console.log("pendragon | Initialising Pendragon 5th edition");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("pendragon", pd_item_sheet, {makeDefault: true});
});