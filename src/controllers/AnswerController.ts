import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AsnwerController {

    async execute(req: Request, res: Response) {
        const { value } = req.params;
        const { u } = req.query;

        const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveyUsersRepository.findOne({
            id: String(u)
        });

        if (surveyUser) {
            return res.status(400).json({
                error: "Survey User does not exists"
            })
        }

        surveyUser.value = Number(value);

        await surveyUsersRepository.save(surveyUser);

        return res.json(surveyUser)

    }
}

export { AsnwerController }