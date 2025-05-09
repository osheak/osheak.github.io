var wms_layers = [];

var lyr_CONUS_Land_Cover_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geogwapp2.umd.edu/geoserver/wms/",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ebrash:CONUS_Land_Cover",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'CONUS_Land_Cover',
                            popuplayertitle: 'CONUS_Land_Cover',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CONUS_Land_Cover_0, 1]);
var lyr_nyc_roads_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geogwapp2.umd.edu/geoserver/wms/",
                              attributions: ' ',
                              params: {
                                "LAYERS": "xtao:nyc_roads",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'nyc_roads',
                            popuplayertitle: 'nyc_roads',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_nyc_roads_1, 0]);

lyr_CONUS_Land_Cover_0.setVisible(true);lyr_nyc_roads_1.setVisible(true);
var layersList = [lyr_CONUS_Land_Cover_0,lyr_nyc_roads_1];
