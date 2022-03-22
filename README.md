# HSLayers grafana plugin

[![Build](https://github.com/grafana/grafana-starter-panel/workflows/CI/badge.svg)](https://github.com/grafana/grafana-starter-panel/actions?query=workflow%3A%22CI%22)

This template is a starting point for building Grafana Panel Plugins in Grafana 7.0+

## Getting started

Clone this repo inside /var/lib/grafana/plugins or your own plugins directory.

```bash
cd hslayers-grafana
```

1. Install dependencies

   ```bash
   yarn install
   ```
   
1.1. Currently needs to be compiled agains a special hslayers branch https://github.com/hslayers/hslayers-ng/tree/enable-source-maps
This checkout hslayers at this branch and in hslayers repo directory do `npm run build-app && cd dist/hslayers-app && npm link` and inside hslayers-graphana directory do `npm link hslayers-app`

2. Build plugin in development mode or run in watch mode

   ```bash
   yarn dev --skipLint
   ```

   or

   ```bash
   yarn watch
   ```

3. Build plugin in production mode

   ```bash
   yarn build --skipLint
   ```

## Grafana config

Currently the plugin is not signed so set in grafana.ini:
```
[plugins]
enable_alpha = true
allow_loading_unsigned_plugins = "hslayers-grafana"
```

and restart grafana 
```bash
sudo systemctl restart grafana
```

In grafana.log should see
```
logger=plugin.signature.validator t=2022-03-22T16:44:43.78+0200 lvl=warn msg="Permitting unsigned plugin. This is not recommended" pluginID=hslayers-grafana pluginDir=/var/lib/grafana/plugins/hslayers-grafana/dist
logger=plugin.manager t=2022-03-22T16:44:43.78+0200 lvl=info msg="Plugin registered" pluginId=hslayers-grafana
```


## Learn more

- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System
