var wms_layers = [];
var format_CCAA_0 = new ol.format.GeoJSON();
var features_CCAA_0 = format_CCAA_0.readFeatures(json_CCAA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCAA_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CCAA_0.addFeatures(features_CCAA_0);var lyr_CCAA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCAA_0, 
                style: style_CCAA_0,
                title: '<img src="styles/legend/CCAA_0.png" /> CCAA'
            });var format_PROVINCIA_1 = new ol.format.GeoJSON();
var features_PROVINCIA_1 = format_PROVINCIA_1.readFeatures(json_PROVINCIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIA_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PROVINCIA_1.addFeatures(features_PROVINCIA_1);var lyr_PROVINCIA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROVINCIA_1, 
                style: style_PROVINCIA_1,
                title: '<img src="styles/legend/PROVINCIA_1.png" /> PROVINCIA'
            });

lyr_CCAA_0.setVisible(true);lyr_PROVINCIA_1.setVisible(true);
var layersList = [lyr_CCAA_0,lyr_PROVINCIA_1];
lyr_CCAA_0.set('fieldAliases', {'NAMEUNIT': 'NAMEUNIT', });
lyr_PROVINCIA_1.set('fieldAliases', {'NAMEUNIT': 'NAMEUNIT', 'VIVENDAS': 'VIVENDAS', 'NEGOCIOS': 'NEGOCIOS', 'TIERRAS': 'TIERRAS', });
lyr_CCAA_0.set('fieldImages', {'NAMEUNIT': 'TextEdit', });
lyr_PROVINCIA_1.set('fieldImages', {'NAMEUNIT': 'TextEdit', 'VIVENDAS': 'Range', 'NEGOCIOS': 'Range', 'TIERRAS': 'Range', });
lyr_CCAA_0.set('fieldLabels', {'NAMEUNIT': 'no label', });
lyr_PROVINCIA_1.set('fieldLabels', {'NAMEUNIT': 'no label', 'VIVENDAS': 'no label', 'NEGOCIOS': 'no label', 'TIERRAS': 'no label', });
lyr_PROVINCIA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});