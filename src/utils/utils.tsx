import { Injectable } from "@nestjs/common";

@Injectable()
export class Utils {
    
    public static isBlank(str: string | undefined | null): boolean {
        return (str === null || str === undefined || str.trim() === "");
    };

    public static isInvalidDate(date: Date | undefined | null): boolean {
        return (date === undefined || date === null);
    };

};