declare module 'react-native-geocoding' {
    export interface Position {
        lat: number;
        lng: number;
    }
    export interface GeocodingObject {
        formatted_address?: string;
        geometry?: {
            location: Position;
        };
        address_components: any[];
    }

    export interface GeocodingResult {
        results?: GeocodingObject[]
    }
    
    export default class Geocoder {
        static init(apiKey: string, options?: Object): void;
        static isInit(): boolean;
        static from(...params: any[]): Promise<void>;
        static getFromLocation(address: string): Promise<GeocodingResult>;
        static getFromLatLng(lat: number, lng: number): Promise<GeocodingResult>;
    }
}
