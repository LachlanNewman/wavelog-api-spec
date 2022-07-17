import Joi from "joi";
import { genAlphaNumeric, genNumber, genSample } from "./Gen";
import { getEncodeDecodePair } from "./Joi";

export interface FeedbackRecord extends Feedback{
    id: string
    test: string
}

export interface Feedback{
    rating: number;
    difficulty: number;
    fun: number;
    scary: number;
}

export const genFeedBack = ():Feedback => ({
    rating: genNumber(),
    difficulty: genNumber(),
    fun: genNumber(),
    scary: genNumber(),
})


export const FeedbackSchema = Joi.object({
    rating: Joi.number().required(),
    difficulty: Joi.number().required(),
    fun: Joi.number().required(),
    scary: Joi.number().required()
})

export const { decoder: decodeFeedback, encoder: encodeFeedback } =
  getEncodeDecodePair<Feedback>(FeedbackSchema);