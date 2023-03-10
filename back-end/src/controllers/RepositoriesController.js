import User from '../models/User.js';
import Repository from '../models/Repository.js';

class RepositoriesController {
  async index(req, res) {
    try {
      const { user_id } = req.params;
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      const repositories = await Repository.find({
        userId: user_id,
      });

      return res.status(200).json(repositories);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async create(req, res) {
    try {
      const { user_id } = req.params;
      const { name, url } = req.body;
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      const repositoryExists = await Repository.findOne({
        userId: user_id,
        name,
      });

      if (repositoryExists) {
        return res
          .status(422)
          .json({ message: `O repositório ${name} já existe!` });
      }

      const newRepository = await Repository.create({
        name,
        url,
        userId: user_id,
      });

      return res.status(201).json(newRepository);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async destroy(req, res) {
    try {
      const { user_id, id } = req.params;

      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      const repository = await Repository.findOne({
        userId: user_id,
        id
      });

      if (!repository) {
        return res.status(404).json({ message: "Repositório não encontrado!" });
      }

      await Repository.deleteOne();

      return res.status(200).json({ message: "Repositório deletado com sucesso!" })

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new RepositoriesController();