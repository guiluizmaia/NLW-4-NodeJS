import { request, Request, response, Response } from "express"
import { getRepository } from "typeorm";
import { User } from "../models/user";

class UserController {
    async create(req: Request, res: Response) {
        const { name, email } = req.body

        const usersRepository = getRepository(User)

        const userAlreadyExist = await usersRepository.findOne({ email })

        if (userAlreadyExist) {
            return res.status(400).json({
                error: "User already exists!"
            })
        }

        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user)

        return res.json(user);
    }
}

export { UserController }