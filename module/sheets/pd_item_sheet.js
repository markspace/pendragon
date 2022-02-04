export default class pd_item_sheet extends ItemSheet {
    get template() {
        return `systems/pendragon/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}