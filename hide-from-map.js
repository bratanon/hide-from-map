"use strict";

const Name = "Hide-From-Map";
const Version = "20220420";
const Description = "Hide entities from map";
const Url = "https://github.com/bratanon/hide-from-map";
console.info(
  `%c  ${Name}  \n%c  Version ${Version} ${Description}`,
  "color: gold; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: steelblue"
);

const hideFromMap = () => {

  const lightOrShadow = (elem, selector) => elem.shadowRoot ? elem.shadowRoot.querySelector(selector) : elem.querySelector(selector);

  const installMapHook = () => {
    customElements.whenDefined("ha-map").then(() => {
      const map = customElements.get('ha-map');
      const originalUpdate = map.prototype.update;
      map.prototype.update = function customUpdate(changedProps) {
        const { hass, entities } = this;

        this.entities = entities.filter((entity_id) =>
          hass.states[entity_id].attributes?.hide_from_map !== true)

        originalUpdate.call(this, changedProps);
      };
    });
  };

  installMapHook();

  window.CUSTOM_UI_LIST = window.CUSTOM_UI_LIST || [];
  window.CUSTOM_UI_LIST.push({
    name: `${Name}`,
    version: `${Version} ${Description}`,
    url: `${Url}`
  });
};

hideFromMap();
