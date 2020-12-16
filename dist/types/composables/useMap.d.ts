/// <reference types="googlemaps" />
import { IMap } from '../@types/index';
export declare const useMap: () => {
    map: import("vue").Ref<{
        addListener: {
            <N extends "idle" | "click" | "dblclick" | "drag" | "dragend" | "dragstart" | "mousemove" | "mouseout" | "mouseover" | "rightclick" | "bounds_changed" | "center_changed" | "heading_changed" | "maptypeid_changed" | "projection_changed" | "tilesloaded" | "tilt_changed" | "zoom_changed">(eventName: N, handler: google.maps.MapHandlerMap<IMap>[N]): google.maps.MapsEventListener;
            (eventName: string, handler: (this: IMap, ...args: any[]) => void): google.maps.MapsEventListener;
        };
        fitBounds: (bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral, padding?: number | google.maps.Padding | undefined) => void;
        getBounds: () => google.maps.LatLngBounds | null | undefined;
        getCenter: () => google.maps.LatLng;
        getClickableIcons: () => boolean;
        getDiv: () => Element;
        getHeading: () => number;
        getMapTypeId: () => google.maps.MapTypeId;
        getProjection: () => google.maps.Projection | null;
        getStreetView: () => google.maps.StreetViewPanorama;
        getTilt: () => number;
        getZoom: () => number;
        panBy: (x: number, y: number) => void;
        panTo: (latLng: google.maps.LatLng | google.maps.LatLngLiteral) => void;
        panToBounds: (latLngBounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral, padding?: number | google.maps.Padding | undefined) => void;
        setCenter: (latlng: google.maps.LatLng | google.maps.LatLngLiteral) => void;
        setHeading: (heading: number) => void;
        setMapTypeId: (mapTypeId: string) => void;
        setOptions: (options: google.maps.MapOptions) => void;
        setStreetView: (panorama: google.maps.StreetViewPanorama | null) => void;
        setTilt: (tilt: number) => void;
        setZoom: (zoom: number) => void;
        controls: {
            addListener: {
                <N_1 extends "insert_at" | "remove_at" | "set_at">(eventName: N_1, handler: google.maps.MVCArrayHandlerMap<google.maps.MVCArray<Node>, Node>[N_1]): google.maps.MapsEventListener;
                (eventName: string, handler: (this: google.maps.MVCArray<Node>, ...args: any[]) => void): google.maps.MapsEventListener;
            };
            clear: () => void;
            forEach: (callback: (elem: Node, i: number) => void) => void;
            getArray: () => Node[];
            getAt: (i: number) => Node;
            getLength: () => number;
            insertAt: (i: number, elem: Node) => void;
            pop: () => Node;
            push: (elem: Node) => number;
            removeAt: (i: number) => Node;
            setAt: (i: number, elem: Node) => void;
            bindTo: (key: string, target: google.maps.MVCObject, targetKey?: string | undefined, noNotify?: boolean | undefined) => void;
            changed: (key: string) => void;
            get: (key: string) => any;
            notify: (key: string) => void;
            set: (key: string, value: any) => void;
            setValues: (values: any) => void;
            unbind: (key: string) => void;
            unbindAll: () => void;
        }[];
        data: {
            add: (feature: google.maps.Data.Feature | google.maps.Data.FeatureOptions) => google.maps.Data.Feature;
            addGeoJson: (geoJson: object, options?: google.maps.Data.GeoJsonOptions | undefined) => google.maps.Data.Feature[];
            contains: (feature: google.maps.Data.Feature) => boolean;
            forEach: (callback: (feature: google.maps.Data.Feature) => void) => void;
            getControlPosition: () => google.maps.ControlPosition;
            getControls: () => google.maps.DrawingMode[];
            getDrawingMode: () => "Polygon" | "Point" | "LineString" | null;
            getFeatureById: (id: string | number) => google.maps.Data.Feature;
            getMap: () => google.maps.Map<Element>;
            getStyle: () => google.maps.Data.StylingFunction | google.maps.Data.StyleOptions;
            loadGeoJson: (url: string, options?: google.maps.Data.GeoJsonOptions | undefined, callback?: ((features: google.maps.Data.Feature[]) => void) | undefined) => void;
            overrideStyle: (feature: google.maps.Data.Feature, style: google.maps.Data.StyleOptions) => void;
            remove: (feature: google.maps.Data.Feature) => void;
            revertStyle: (feature?: google.maps.Data.Feature | undefined) => void;
            setControlPosition: (controlPosition: google.maps.ControlPosition) => void;
            setControls: (controls: google.maps.DrawingMode[] | null) => void;
            setDrawingMode: (drawingMode: "Polygon" | "Point" | "LineString" | null) => void;
            setMap: (map: google.maps.Map<Element> | null) => void;
            setStyle: (style: google.maps.Data.StylingFunction | google.maps.Data.StyleOptions) => void;
            toGeoJson: (callback: (feature: object) => void) => void;
            addListener: (eventName: string, handler: (this: google.maps.Data, ...args: any[]) => void) => google.maps.MapsEventListener;
            bindTo: (key: string, target: google.maps.MVCObject, targetKey?: string | undefined, noNotify?: boolean | undefined) => void;
            changed: (key: string) => void;
            get: (key: string) => any;
            notify: (key: string) => void;
            set: (key: string, value: any) => void;
            setValues: (values: any) => void;
            unbind: (key: string) => void;
            unbindAll: () => void;
        };
        mapTypes: {
            set: (id: string, mapType: google.maps.MapType) => void;
            addListener: (eventName: string, handler: (this: google.maps.MapTypeRegistry, ...args: any[]) => void) => google.maps.MapsEventListener;
            bindTo: (key: string, target: google.maps.MVCObject, targetKey?: string | undefined, noNotify?: boolean | undefined) => void;
            changed: (key: string) => void;
            get: (key: string) => any;
            notify: (key: string) => void;
            setValues: (values: any) => void;
            unbind: (key: string) => void;
            unbindAll: () => void;
        };
        overlayMapTypes: {
            addListener: {
                <N_2 extends "insert_at" | "remove_at" | "set_at">(eventName: N_2, handler: google.maps.MVCArrayHandlerMap<google.maps.MVCArray<google.maps.MapType>, google.maps.MapType>[N_2]): google.maps.MapsEventListener;
                (eventName: string, handler: (this: google.maps.MVCArray<google.maps.MapType>, ...args: any[]) => void): google.maps.MapsEventListener;
            };
            clear: () => void;
            forEach: (callback: (elem: google.maps.MapType, i: number) => void) => void;
            getArray: () => google.maps.MapType[];
            getAt: (i: number) => google.maps.MapType;
            getLength: () => number;
            insertAt: (i: number, elem: google.maps.MapType) => void;
            pop: () => google.maps.MapType;
            push: (elem: google.maps.MapType) => number;
            removeAt: (i: number) => google.maps.MapType;
            setAt: (i: number, elem: google.maps.MapType) => void;
            bindTo: (key: string, target: google.maps.MVCObject, targetKey?: string | undefined, noNotify?: boolean | undefined) => void;
            changed: (key: string) => void;
            get: (key: string) => any;
            notify: (key: string) => void;
            set: (key: string, value: any) => void;
            setValues: (values: any) => void;
            unbind: (key: string) => void;
            unbindAll: () => void;
        };
        setClickableIcons: (clickable: boolean) => void;
        bindTo: (key: string, target: google.maps.MVCObject, targetKey?: string | undefined, noNotify?: boolean | undefined) => void;
        changed: (key: string) => void;
        get: (key: string) => any;
        notify: (key: string) => void;
        set: (key: string, value: any) => void;
        setValues: (values: any) => void;
        unbind: (key: string) => void;
        unbindAll: () => void;
    } | null>;
    api: import("vue").Ref<{
        Map: typeof google.maps.Map;
        MapTypeId: {
            readonly HYBRID: google.maps.MapTypeId.HYBRID;
            readonly ROADMAP: google.maps.MapTypeId.ROADMAP;
            readonly SATELLITE: google.maps.MapTypeId.SATELLITE;
            readonly TERRAIN: google.maps.MapTypeId.TERRAIN;
        };
        MapTypeRegistry: typeof google.maps.MapTypeRegistry;
        TrafficLayer: typeof google.maps.TrafficLayer;
        TransitLayer: typeof google.maps.TransitLayer;
        BicyclingLayer: typeof google.maps.BicyclingLayer;
        LatLng: typeof google.maps.LatLng;
        LatLngBounds: typeof google.maps.LatLngBounds;
        Point: typeof google.maps.Point;
        Size: typeof google.maps.Size;
        event: {
            addDomListener: typeof google.maps.event.addDomListener;
            addDomListenerOnce: typeof google.maps.event.addDomListenerOnce;
            addListener: typeof google.maps.event.addListener;
            addListenerOnce: typeof google.maps.event.addListenerOnce;
            clearInstanceListeners: typeof google.maps.event.clearInstanceListeners;
            clearListeners: typeof google.maps.event.clearListeners;
            removeListener: typeof google.maps.event.removeListener;
            trigger: typeof google.maps.event.trigger;
        };
        MVCObject: typeof google.maps.MVCObject;
        MVCArray: typeof google.maps.MVCArray;
        MapTypeControlStyle: {
            [x: number]: string;
            readonly DEFAULT: google.maps.MapTypeControlStyle.DEFAULT;
            readonly HORIZONTAL_BAR: google.maps.MapTypeControlStyle.HORIZONTAL_BAR;
            readonly DROPDOWN_MENU: google.maps.MapTypeControlStyle.DROPDOWN_MENU;
            readonly INSET: google.maps.MapTypeControlStyle.INSET;
            readonly INSET_LARGE: google.maps.MapTypeControlStyle.INSET_LARGE;
        };
        ScaleControlStyle: {
            [x: number]: string;
            readonly DEFAULT: google.maps.ScaleControlStyle.DEFAULT;
        };
        ZoomControlStyle: {
            [x: number]: string;
            readonly DEFAULT: google.maps.ZoomControlStyle.DEFAULT;
            readonly SMALL: google.maps.ZoomControlStyle.SMALL;
            readonly LARGE: google.maps.ZoomControlStyle.LARGE;
        };
        ControlPosition: {
            [x: number]: string;
            readonly BOTTOM_CENTER: google.maps.ControlPosition.BOTTOM_CENTER;
            readonly BOTTOM_LEFT: google.maps.ControlPosition.BOTTOM_LEFT;
            readonly BOTTOM_RIGHT: google.maps.ControlPosition.BOTTOM_RIGHT;
            readonly LEFT_BOTTOM: google.maps.ControlPosition.LEFT_BOTTOM;
            readonly LEFT_CENTER: google.maps.ControlPosition.LEFT_CENTER;
            readonly LEFT_TOP: google.maps.ControlPosition.LEFT_TOP;
            readonly RIGHT_BOTTOM: google.maps.ControlPosition.RIGHT_BOTTOM;
            readonly RIGHT_CENTER: google.maps.ControlPosition.RIGHT_CENTER;
            readonly RIGHT_TOP: google.maps.ControlPosition.RIGHT_TOP;
            readonly TOP_CENTER: google.maps.ControlPosition.TOP_CENTER;
            readonly TOP_LEFT: google.maps.ControlPosition.TOP_LEFT;
            readonly TOP_RIGHT: google.maps.ControlPosition.TOP_RIGHT;
        };
        geometry: {
            encoding: {
                decodePath: typeof google.maps.geometry.encoding.decodePath;
                encodePath: typeof google.maps.geometry.encoding.encodePath;
            };
            spherical: {
                computeArea: typeof google.maps.geometry.spherical.computeArea;
                computeDistanceBetween: typeof google.maps.geometry.spherical.computeDistanceBetween;
                computeHeading: typeof google.maps.geometry.spherical.computeHeading;
                computeLength: typeof google.maps.geometry.spherical.computeLength;
                computeOffset: typeof google.maps.geometry.spherical.computeOffset;
                computeOffsetOrigin: typeof google.maps.geometry.spherical.computeOffsetOrigin;
                computeSignedArea: typeof google.maps.geometry.spherical.computeSignedArea;
                interpolate: typeof google.maps.geometry.spherical.interpolate;
            };
            poly: {
                containsLocation: typeof google.maps.geometry.poly.containsLocation;
                isLocationOnEdge: typeof google.maps.geometry.poly.isLocationOnEdge;
            };
        };
        Marker: typeof google.maps.Marker;
        SymbolPath: {
            [x: number]: string;
            readonly BACKWARD_CLOSED_ARROW: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW;
            readonly BACKWARD_OPEN_ARROW: google.maps.SymbolPath.BACKWARD_OPEN_ARROW;
            readonly CIRCLE: google.maps.SymbolPath.CIRCLE;
            readonly FORWARD_CLOSED_ARROW: google.maps.SymbolPath.FORWARD_CLOSED_ARROW;
            readonly FORWARD_OPEN_ARROW: google.maps.SymbolPath.FORWARD_OPEN_ARROW;
        };
        Animation: {
            [x: number]: string;
            readonly BOUNCE: google.maps.Animation.BOUNCE;
            readonly DROP: google.maps.Animation.DROP;
        };
        InfoWindow: typeof google.maps.InfoWindow;
        Polyline: typeof google.maps.Polyline;
        Polygon: typeof google.maps.Polygon;
        Rectangle: typeof google.maps.Rectangle;
        Circle: typeof google.maps.Circle;
        StrokePosition: {
            [x: number]: string;
            readonly CENTER: google.maps.StrokePosition.CENTER;
            readonly INSIDE: google.maps.StrokePosition.INSIDE;
            readonly OUTSIDE: google.maps.StrokePosition.OUTSIDE;
        };
        Data: typeof google.maps.Data;
        OverlayView: typeof google.maps.OverlayView;
        MapCanvasProjection: typeof google.maps.MapCanvasProjection;
        KmlLayer: typeof google.maps.KmlLayer;
        KmlLayerStatus: {
            readonly DOCUMENT_NOT_FOUND: google.maps.KmlLayerStatus.DOCUMENT_NOT_FOUND;
            readonly DOCUMENT_TOO_LARGE: google.maps.KmlLayerStatus.DOCUMENT_TOO_LARGE;
            readonly FETCH_ERROR: google.maps.KmlLayerStatus.FETCH_ERROR;
            readonly INVALID_DOCUMENT: google.maps.KmlLayerStatus.INVALID_DOCUMENT;
            readonly INVALID_REQUEST: google.maps.KmlLayerStatus.INVALID_REQUEST;
            readonly LIMITS_EXCEEDED: google.maps.KmlLayerStatus.LIMITS_EXCEEDED;
            readonly OK: google.maps.KmlLayerStatus.OK;
            readonly TIMED_OUT: google.maps.KmlLayerStatus.TIMED_OUT;
            readonly UNKNOWN: google.maps.KmlLayerStatus.UNKNOWN;
        };
        ImageMapType: typeof google.maps.ImageMapType;
        GroundOverlay: typeof google.maps.GroundOverlay;
        StyledMapType: typeof google.maps.StyledMapType;
        drawing: {
            DrawingManager: typeof google.maps.drawing.DrawingManager;
            OverlayType: {
                readonly CIRCLE: google.maps.drawing.OverlayType.CIRCLE;
                readonly MARKER: google.maps.drawing.OverlayType.MARKER;
                readonly POLYGON: google.maps.drawing.OverlayType.POLYGON;
                readonly POLYLINE: google.maps.drawing.OverlayType.POLYLINE;
                readonly RECTANGLE: google.maps.drawing.OverlayType.RECTANGLE;
            };
        };
        visualization: {
            HeatmapLayer: typeof google.maps.visualization.HeatmapLayer;
            MapsEngineLayer: typeof google.maps.visualization.MapsEngineLayer;
            MapsEngineStatus: {
                readonly INVALID_LAYER: google.maps.visualization.MapsEngineStatus.INVALID_LAYER;
                readonly OK: google.maps.visualization.MapsEngineStatus.OK;
                readonly UNKNOWN_ERROR: google.maps.visualization.MapsEngineStatus.UNKNOWN_ERROR;
            };
            MouseEvent: typeof google.maps.visualization.MouseEvent;
            MapsEventListener: typeof google.maps.visualization.MapsEventListener;
        };
        MaxZoomService: typeof google.maps.MaxZoomService;
        MaxZoomStatus: {
            readonly ERROR: google.maps.MaxZoomStatus.ERROR;
            readonly OK: google.maps.MaxZoomStatus.OK;
        };
        StreetViewPanorama: typeof google.maps.StreetViewPanorama;
        StreetViewCoverageLayer: typeof google.maps.StreetViewCoverageLayer;
        StreetViewService: typeof google.maps.StreetViewService;
        StreetViewStatus: {
            readonly OK: google.maps.StreetViewStatus.OK;
            readonly UNKNOWN_ERROR: google.maps.StreetViewStatus.UNKNOWN_ERROR;
            readonly ZERO_RESULTS: google.maps.StreetViewStatus.ZERO_RESULTS;
        };
        StreetViewPreference: {
            readonly BEST: google.maps.StreetViewPreference.BEST;
            readonly NEAREST: google.maps.StreetViewPreference.NEAREST;
        };
        StreetViewSource: {
            readonly DEFAULT: google.maps.StreetViewSource.DEFAULT;
            readonly OUTDOOR: google.maps.StreetViewSource.OUTDOOR;
        };
        places: {
            Autocomplete: typeof google.maps.places.Autocomplete;
            SearchBox: typeof google.maps.places.SearchBox;
            PlacesService: typeof google.maps.places.PlacesService;
            RankBy: {
                [x: number]: string;
                readonly PROMINENCE: google.maps.places.RankBy.PROMINENCE;
                readonly DISTANCE: google.maps.places.RankBy.DISTANCE;
            };
            PlacesServiceStatus: {
                readonly INVALID_REQUEST: google.maps.places.PlacesServiceStatus.INVALID_REQUEST;
                readonly NOT_FOUND: google.maps.places.PlacesServiceStatus.NOT_FOUND;
                readonly OK: google.maps.places.PlacesServiceStatus.OK;
                readonly OVER_QUERY_LIMIT: google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT;
                readonly REQUEST_DENIED: google.maps.places.PlacesServiceStatus.REQUEST_DENIED;
                readonly UNKNOWN_ERROR: google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR;
                readonly ZERO_RESULTS: google.maps.places.PlacesServiceStatus.ZERO_RESULTS;
            };
            AutocompleteService: typeof google.maps.places.AutocompleteService;
            AutocompleteSessionToken: typeof google.maps.places.AutocompleteSessionToken;
        };
        Geocoder: typeof google.maps.Geocoder;
        GeocoderStatus: {
            readonly ERROR: google.maps.GeocoderStatus.ERROR;
            readonly INVALID_REQUEST: google.maps.GeocoderStatus.INVALID_REQUEST;
            readonly OK: google.maps.GeocoderStatus.OK;
            readonly OVER_QUERY_LIMIT: google.maps.GeocoderStatus.OVER_QUERY_LIMIT;
            readonly REQUEST_DENIED: google.maps.GeocoderStatus.REQUEST_DENIED;
            readonly UNKNOWN_ERROR: google.maps.GeocoderStatus.UNKNOWN_ERROR;
            readonly ZERO_RESULTS: google.maps.GeocoderStatus.ZERO_RESULTS;
        };
        GeocoderLocationType: {
            readonly APPROXIMATE: google.maps.GeocoderLocationType.APPROXIMATE;
            readonly GEOMETRIC_CENTER: google.maps.GeocoderLocationType.GEOMETRIC_CENTER;
            readonly RANGE_INTERPOLATED: google.maps.GeocoderLocationType.RANGE_INTERPOLATED;
            readonly ROOFTOP: google.maps.GeocoderLocationType.ROOFTOP;
        };
        DirectionsService: typeof google.maps.DirectionsService;
        DirectionsStatus: {
            readonly INVALID_REQUEST: google.maps.DirectionsStatus.INVALID_REQUEST;
            readonly MAX_WAYPOINTS_EXCEEDED: google.maps.DirectionsStatus.MAX_WAYPOINTS_EXCEEDED;
            readonly NOT_FOUND: google.maps.DirectionsStatus.NOT_FOUND;
            readonly OK: google.maps.DirectionsStatus.OK;
            readonly OVER_QUERY_LIMIT: google.maps.DirectionsStatus.OVER_QUERY_LIMIT;
            readonly REQUEST_DENIED: google.maps.DirectionsStatus.REQUEST_DENIED;
            readonly UNKNOWN_ERROR: google.maps.DirectionsStatus.UNKNOWN_ERROR;
            readonly ZERO_RESULTS: google.maps.DirectionsStatus.ZERO_RESULTS;
        };
        DirectionsRenderer: typeof google.maps.DirectionsRenderer;
        TravelMode: {
            readonly BICYCLING: google.maps.TravelMode.BICYCLING;
            readonly DRIVING: google.maps.TravelMode.DRIVING;
            readonly TRANSIT: google.maps.TravelMode.TRANSIT;
            readonly TWO_WHEELER: google.maps.TravelMode.TWO_WHEELER;
            readonly WALKING: google.maps.TravelMode.WALKING;
        };
        TrafficModel: {
            readonly BEST_GUESS: google.maps.TrafficModel.BEST_GUESS;
            readonly OPTIMISTIC: google.maps.TrafficModel.OPTIMISTIC;
            readonly PESSIMISTIC: google.maps.TrafficModel.PESSIMISTIC;
        };
        TransitMode: {
            readonly BUS: google.maps.TransitMode.BUS;
            readonly RAIL: google.maps.TransitMode.RAIL;
            readonly SUBWAY: google.maps.TransitMode.SUBWAY;
            readonly TRAIN: google.maps.TransitMode.TRAIN;
            readonly TRAM: google.maps.TransitMode.TRAM;
        };
        TransitRoutePreference: {
            readonly FEWER_TRANSFERS: google.maps.TransitRoutePreference.FEWER_TRANSFERS;
            readonly LESS_WALKING: google.maps.TransitRoutePreference.LESS_WALKING;
        };
        VehicleType: {
            [x: number]: string;
            readonly BUS: google.maps.VehicleType;
            readonly CABLE_CAR: google.maps.VehicleType;
            readonly COMMUTER_TRAIN: google.maps.VehicleType;
            readonly FERRY: google.maps.VehicleType;
            readonly FUNICULAR: google.maps.VehicleType;
            readonly GONDOLA_LIFT: google.maps.VehicleType;
            readonly HEAVY_RAIL: google.maps.VehicleType;
            readonly HIGH_SPEED_TRAIN: google.maps.VehicleType;
            readonly INTERCITY_BUS: google.maps.VehicleType;
            readonly METRO_RAIL: google.maps.VehicleType;
            readonly MONORAIL: google.maps.VehicleType;
            readonly OTHER: google.maps.VehicleType;
            readonly RAIL: google.maps.VehicleType;
            readonly SHARE_TAXI: google.maps.VehicleType;
            readonly SUBWAY: google.maps.VehicleType;
            readonly TRAM: google.maps.VehicleType;
            readonly TROLLEYBUS: google.maps.VehicleType;
        };
        UnitSystem: {
            [x: number]: string;
            readonly METRIC: google.maps.UnitSystem.METRIC;
            readonly IMPERIAL: google.maps.UnitSystem.IMPERIAL;
        };
        DistanceMatrixService: typeof google.maps.DistanceMatrixService;
        DistanceMatrixStatus: {
            readonly INVALID_REQUEST: google.maps.DistanceMatrixStatus.INVALID_REQUEST;
            readonly MAX_DIMENSIONS_EXCEEDED: google.maps.DistanceMatrixStatus.MAX_DIMENSIONS_EXCEEDED;
            readonly MAX_ELEMENTS_EXCEEDED: google.maps.DistanceMatrixStatus.MAX_ELEMENTS_EXCEEDED;
            readonly OK: google.maps.DistanceMatrixStatus.OK;
            readonly OVER_QUERY_LIMIT: google.maps.DistanceMatrixStatus.OVER_QUERY_LIMIT;
            readonly REQUEST_DENIED: google.maps.DistanceMatrixStatus.REQUEST_DENIED;
            readonly UNKNOWN_ERROR: google.maps.DistanceMatrixStatus.UNKNOWN_ERROR;
        };
        DistanceMatrixElementStatus: {
            readonly NOT_FOUND: google.maps.DistanceMatrixElementStatus.NOT_FOUND;
            readonly OK: google.maps.DistanceMatrixElementStatus.OK;
            readonly ZERO_RESULTS: google.maps.DistanceMatrixElementStatus.ZERO_RESULTS;
        };
        ElevationService: typeof google.maps.ElevationService;
        ElevationStatus: {
            readonly INVALID_REQUEST: google.maps.ElevationStatus.INVALID_REQUEST;
            readonly OK: google.maps.ElevationStatus.OK;
            readonly OVER_QUERY_LIMIT: google.maps.ElevationStatus.OVER_QUERY_LIMIT;
            readonly REQUEST_DENIED: google.maps.ElevationStatus.REQUEST_DENIED;
            readonly UNKNOWN_ERROR: google.maps.ElevationStatus.UNKNOWN_ERROR;
        };
        readonly version: string;
        SaveWidget: typeof google.maps.SaveWidget;
        FusionTablesLayer: typeof google.maps.FusionTablesLayer;
        adsense: {
            AdUnit: typeof google.maps.adsense.AdUnit;
            AdFormat: {
                readonly BANNER: google.maps.adsense.AdFormat.BANNER;
                readonly BUTTON: google.maps.adsense.AdFormat.BUTTON;
                readonly HALF_BANNER: google.maps.adsense.AdFormat.HALF_BANNER;
                readonly LARGE_HORIZONTAL_LINK_UNIT: google.maps.adsense.AdFormat.LARGE_HORIZONTAL_LINK_UNIT;
                readonly LARGE_RECTANGLE: google.maps.adsense.AdFormat.LARGE_RECTANGLE;
                readonly LARGE_VERTICAL_LINK_UNIT: google.maps.adsense.AdFormat.LARGE_VERTICAL_LINK_UNIT;
                readonly LEADERBOARD: google.maps.adsense.AdFormat.LEADERBOARD;
                readonly MEDIUM_RECTANGLE: google.maps.adsense.AdFormat.MEDIUM_RECTANGLE;
                readonly MEDIUM_VERTICAL_LINK_UNIT: google.maps.adsense.AdFormat.MEDIUM_VERTICAL_LINK_UNIT;
                readonly SKYSCRAPER: google.maps.adsense.AdFormat.SKYSCRAPER;
                readonly SMALL_HORIZONTAL_LINK_UNIT: google.maps.adsense.AdFormat.SMALL_HORIZONTAL_LINK_UNIT;
                readonly SMALL_RECTANGLE: google.maps.adsense.AdFormat.SMALL_RECTANGLE;
                readonly SMALL_SQUARE: google.maps.adsense.AdFormat.SMALL_SQUARE;
                readonly SMALL_VERTICAL_LINK_UNIT: google.maps.adsense.AdFormat.SMALL_VERTICAL_LINK_UNIT;
                readonly SQUARE: google.maps.adsense.AdFormat.SQUARE;
                readonly VERTICAL_BANNER: google.maps.adsense.AdFormat.VERTICAL_BANNER;
                readonly WIDE_SKYSCRAPER: google.maps.adsense.AdFormat.WIDE_SKYSCRAPER;
                readonly X_LARGE_VERTICAL_LINK_UNIT: google.maps.adsense.AdFormat.X_LARGE_VERTICAL_LINK_UNIT;
            };
        };
    } | null>;
};
