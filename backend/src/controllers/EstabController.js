import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  async criarEstab(req, res) {
    try {
      const { nome, endereco, bairro, segmento, telefone, whatsapp, imagem } = req.body;

      const estab = await prisma.estabelecimento.create({
        data: { nome, endereco, bairro, segmento, telefone, whatsapp, imagem },
      });

      return res.json(estab);
    } catch (error) {
      return res.json({ error });
    }
  },

  async listarEstab(req, res) {
    try {
      const { id } = req.params;

      const estab = await prisma.estabelecimento.findUnique({
        where: { id: Number(id) },
      });

      if (!estab) {
        return res.json({ error: "Usuário não encontrado" });
      } else {
        return res.json(estab);
      }
    } catch (error) {
      return res.json({ error });
    }
  },

  async listarEstabs(req, res) {
    try {
      const estabs = await prisma.estabelecimento.findMany();
      return res.json(estabs);
    } catch (error) {
      return res.json({ error });
    }
  },

  async atualizarEstab(req, res) {
    try {
      const { id } = req.params;

      const { nome, endereco, bairro, segmento, telefone, whatsapp, imagem } = req.body;

      const estab = await prisma.estabelecimento.findUnique({
        where: { id: Number(id) },
      });

      if (!estab) {
        return res.json({ error: "Usuário não encontrado" });
      } else {
        await prisma.estabelecimento.update({
          where: { id: Number(id) },
          data: { nome, endereco, bairro, segmento, telefone, whatsapp, imagem },
        });
        return res.json({ message: "Usuário atualizado" });
      }
    } catch (error) {
      return res.json({error});
    }
  },

  async deletarEstab(req, res) {
    try {
      const { id } = req.params;

      const estab = await prisma.estabelecimento.findUnique({
        where: { id: Number(id) },
      });

      if (!estab) {
        return res.json({ error: "Usuário não encontrado" });
      } else {
        await prisma.estabelecimento.delete({ where: { id: Number(id) } });

        return res.json({ message: "Usuário deletado" });
      }
    } catch (error) {
      return res.json({ error });
    }
  }
};
