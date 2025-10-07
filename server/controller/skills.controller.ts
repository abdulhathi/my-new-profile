import type { NextFunction, Request, Response } from 'express'
import { SkillsService } from '../services/skills.service'

export const SkillsController = {
  async getSkills(req: Request, res: Response, next: NextFunction) {
    try {
      const skills: string[] = await SkillsService.getSkills()
      res.send(skills)
    } catch (error) {
      next(error)
    }
  },
}
