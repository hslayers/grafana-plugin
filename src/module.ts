import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace JSX {
  interface IntrinsicElements {
    'hslayers-app': any;
  }
}
export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'hslayerConfigFn',
      name: 'HSlayers config function',
      description: 'Javascript code providing global function for configuring HSlayers',
      defaultValue: `window.hslayersNgConfig = function(ol) {
        return {
          default_layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM(),
              title: "OpenStreetMap",
              base: true,
              visible: true,
              removable: false
            })
          ],
    
          default_view: new ol.View({
            center: ol.proj.fromLonLat([17.474129, 52.574000]),
            zoom: 4,
            units: "m"
          })
        }
      }`,
      settings: {
        useTextarea:true,
        rows: 10,
    }
    })
});
