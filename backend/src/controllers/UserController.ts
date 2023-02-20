import { Request, Response } from 'express';

import EmailService from '../services/EmailServices';

const users = [
  { name: 'Maria', email: 'maria@teste.com' },
  { name: 'João', email: 'joao@teste.com' },
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: {
        name: 'João',
        email: 'joao@teste.com'
      },
      message: {
        subject: 'Bem-vindo ao sistema',
        body: 'Seja bem-vindo'
      }
    });

    return res.send();
  }
};
