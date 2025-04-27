var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Forest_1 = new ol.format.GeoJSON();
var features_Forest_1 = format_Forest_1.readFeatures(json_Forest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_1.addFeatures(features_Forest_1);
var lyr_Forest_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forest_1, 
                style: style_Forest_1,
                popuplayertitle: 'Forest',
                interactive: true,
                title: '<img src="styles/legend/Forest_1.png" /> Forest'
            });
var format_lakes_2 = new ol.format.GeoJSON();
var features_lakes_2 = format_lakes_2.readFeatures(json_lakes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lakes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lakes_2.addFeatures(features_lakes_2);
var lyr_lakes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lakes_2, 
                style: style_lakes_2,
                popuplayertitle: 'lakes',
                interactive: true,
                title: 'lakes'
            });
var format_streams_filtered_3 = new ol.format.GeoJSON();
var features_streams_filtered_3 = format_streams_filtered_3.readFeatures(json_streams_filtered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streams_filtered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streams_filtered_3.addFeatures(features_streams_filtered_3);
var lyr_streams_filtered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_streams_filtered_3, 
                style: style_streams_filtered_3,
                popuplayertitle: 'streams_filtered',
                interactive: true,
                title: 'streams_filtered'
            });
var format_NF_roads_4 = new ol.format.GeoJSON();
var features_NF_roads_4 = format_NF_roads_4.readFeatures(json_NF_roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NF_roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NF_roads_4.addFeatures(features_NF_roads_4);
var lyr_NF_roads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NF_roads_4, 
                style: style_NF_roads_4,
                popuplayertitle: 'NF_roads',
                interactive: true,
                title: '<img src="styles/legend/NF_roads_4.png" /> NF_roads'
            });
var format_NF_trails_5 = new ol.format.GeoJSON();
var features_NF_trails_5 = format_NF_trails_5.readFeatures(json_NF_trails_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NF_trails_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NF_trails_5.addFeatures(features_NF_trails_5);
var lyr_NF_trails_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NF_trails_5, 
                style: style_NF_trails_5,
                popuplayertitle: 'NF_trails',
                interactive: true,
                title: '<img src="styles/legend/NF_trails_5.png" /> NF_trails'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Forest_1.setVisible(true);lyr_lakes_2.setVisible(true);lyr_streams_filtered_3.setVisible(true);lyr_NF_roads_4.setVisible(true);lyr_NF_trails_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Forest_1,lyr_lakes_2,lyr_streams_filtered_3,lyr_NF_roads_4,lyr_NF_trails_5];
lyr_Forest_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fid': 'fid', 'ArcIds': 'ArcIds', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ADMIN_FORE': 'ADMIN_FORE', 'ADMIN_FO_1': 'ADMIN_FO_1', 'GP': 'GP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_lakes_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_streams_filtered_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_NF_roads_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GlobalID': 'GlobalID', 'RTE_CN': 'RTE_CN', 'RTE_NO': 'RTE_NO', 'Name': 'Name', 'BMP': 'BMP', 'EMP': 'EMP', 'RT_ACTION': 'RT_ACTION', 'ACTIONSTAM': 'ACTIONSTAM', 'REV_DATE': 'REV_DATE', 'DATA_SOURC': 'DATA_SOURC', 'ACCURACY': 'ACCURACY', 'Shape_Leng': 'Shape_Leng', });
lyr_NF_trails_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GlobalID': 'GlobalID', 'RTE_CN': 'RTE_CN', 'TRL_NO': 'TRL_NO', 'Name': 'Name', 'BMP': 'BMP', 'EMP': 'EMP', 'RT_ACTION': 'RT_ACTION', 'ACTIONSTAM': 'ACTIONSTAM', 'REV_DATE': 'REV_DATE', 'DATA_SOURC': 'DATA_SOURC', 'ACCURACY': 'ACCURACY', 'Shape_Leng': 'Shape_Leng', });
lyr_Forest_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'fid': 'TextEdit', 'ArcIds': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ADMIN_FORE': 'TextEdit', 'ADMIN_FO_1': 'TextEdit', 'GP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_lakes_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_streams_filtered_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_NF_roads_4.set('fieldImages', {'OBJECTID': '', 'GlobalID': '', 'RTE_CN': '', 'RTE_NO': '', 'Name': '', 'BMP': '', 'EMP': '', 'RT_ACTION': '', 'ACTIONSTAM': '', 'REV_DATE': '', 'DATA_SOURC': '', 'ACCURACY': '', 'Shape_Leng': '', });
lyr_NF_trails_5.set('fieldImages', {'OBJECTID': 'Range', 'GlobalID': 'TextEdit', 'RTE_CN': 'TextEdit', 'TRL_NO': 'TextEdit', 'Name': 'TextEdit', 'BMP': 'TextEdit', 'EMP': 'TextEdit', 'RT_ACTION': 'TextEdit', 'ACTIONSTAM': 'DateTime', 'REV_DATE': 'DateTime', 'DATA_SOURC': 'TextEdit', 'ACCURACY': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Forest_1.set('fieldLabels', {'OBJECTID': 'no label', 'fid': 'no label', 'ArcIds': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ADMIN_FORE': 'no label', 'ADMIN_FO_1': 'no label', 'GP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_lakes_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_streams_filtered_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_NF_roads_4.set('fieldLabels', {'OBJECTID': 'no label', 'GlobalID': 'no label', 'RTE_CN': 'no label', 'RTE_NO': 'no label', 'Name': 'inline label - always visible', 'BMP': 'no label', 'EMP': 'no label', 'RT_ACTION': 'no label', 'ACTIONSTAM': 'no label', 'REV_DATE': 'no label', 'DATA_SOURC': 'no label', 'ACCURACY': 'no label', 'Shape_Leng': 'no label', });
lyr_NF_trails_5.set('fieldLabels', {'OBJECTID': 'no label', 'GlobalID': 'no label', 'RTE_CN': 'no label', 'TRL_NO': 'no label', 'Name': 'inline label - always visible', 'BMP': 'no label', 'EMP': 'no label', 'RT_ACTION': 'no label', 'ACTIONSTAM': 'no label', 'REV_DATE': 'no label', 'DATA_SOURC': 'no label', 'ACCURACY': 'no label', 'Shape_Leng': 'no label', });
lyr_NF_trails_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});