import Joi from "joi";
import { genAlphaNumeric, genNumber, genSample } from "./Gen";
import { getEncodeDecodePair } from "./Joi";

export enum Direction{
    N = 'N',
    S = 'S',
    E = 'E',
    W = 'W',
    SE = 'SE',
    SW = 'SW',
    NE = 'NE',
    NW = 'NW',
    NNE = 'NNE',
    NNW = 'NNW',
    SSE = 'SSE',
    SSW = 'SSW',
    ENE = 'ENE',
    ESE = 'ESE',
    WNW = 'WNW',
    WSW = 'WSW',
}

export interface Report{
    id: string
    swellSize: number;
    swellDirection: Direction;
    tide: number;
    windStrength: number;
    windDirection: Direction;
    rating: number
}

export const genReport = ():Report => ({
    id: genAlphaNumeric(),
    swellSize: genNumber(),
    swellDirection: genSample(Object.values(Direction)),
    tide: genNumber(),
    windStrength: genNumber(),
    windDirection: genSample(Object.values(Direction)),
    rating: genNumber(0,10)
})

export const ReportSchema = Joi.object({
    id: Joi.string().required(),
    swellSize: Joi.number().required(),
    swellDirection: Joi.string().required(),
    tide: Joi.number().required(),
    windStrength: Joi.number().required(),
    windDirection: Joi.string().required(),
    rating: Joi.number().required(),
})

export const { decoder: decodeReport, encoder: encodeReport } =
  getEncodeDecodePair<Report>(ReportSchema);