Hide from map
=================
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
[![GH-release](https://img.shields.io/github/v/release/bratanon/hide-from-map.svg?style=flat-square)](https://github.com/bratanon/hide-from-map/releases)
[![GH-downloads](https://img.shields.io/github/downloads/bratanon/hide-from-map/total?style=flat-square)](https://github.com/bratanon/hide-from-map/releases)
[![GH-last-commit](https://img.shields.io/github/last-commit/bratanon/hide-from-map.svg?style=flat-square)](https://github.com/bratanon/hide-from-map/commits/master)
[![GH-code-size](https://img.shields.io/github/languages/code-size/bratanon/hide-from-map.svg?color=red&style=flat-square)](https://github.com/bratanon/hide-from-map)


Lets you hide entities from the map in Home Assistant.

## Installation
While this plugin can be installed by HACS, it is not included in the default repository of HACS.

1. Add this repository as a custom repository inside HACS settings. Make sure you select 
`Lovelace` as Category.

2. Install the plugin from the Overview page.

### Manual install
1. Download and copy `hide-from-map.js` from the 
[latest release](https://github.com/bratanon/hide-from-map/releases/latest) into your`config/www` 
directory.

2. Add the following to your [resources](https://www.home-assistant.io/dashboards/dashboards/#resources)

```yaml
resources:
  - url: /local/hide-from-map.js
    type: module
```

## Usage
Add an attribute (`hide_from_map: true`) to the entity you want to hide from the map. This can be 
done in many ways but its similar configuration.

Read the [manual customizing entities](https://www.home-assistant.io/docs/configuration/customizing-devices/#manual-customization)
section on how to customize entities.

```yaml
sensor.test_sensor:
  hide_from_map: true
```

