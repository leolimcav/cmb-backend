import client from '../../lib/TotalVoice';
import Parcel from '../models/Parcel';

class CallerController {
  async show(req, res) {
    const { id } = req.params;

    const call = await client.composto.buscar(id);

    return res.json(call);
  }

  async create(req, res) {
    const { id } = req.params;

    const parcel = await Parcel.findByPk(id);

    const call = await client.composto.enviar(parcel.receiver_phone, [
      {
        acao: 'tts',
        acao_dados: {
          mensagem:
            'Sua encomenda será entregue nas proximas 24 horas, digite 1 para confirmar que poderá receber a encomenda, ou 2 caso não esteja disponível para receber.',
          velocidade: '-4',
          resposta_usuario: true,
          tipo_voz: 'br-Vitoria',
        },
      },
      {
        acao: 'tts',
        opcao: '1',
        acao_dados: {
          mensagem:
            'Sua resposta foi registrada, agora é só aguardar a chegada da sua encomenda.',
          velocidade: '-4',
          tipo_voz: 'br-Vitoria',
        },
      },
      {
        acao: 'tts',
        opcao: '2',
        acao_dados: {
          mensagem:
            'Sua resposta foi registrada, entraremos em contato para um novo agendamento da entrega.',
          velocidade: '-4',
          tipo_voz: 'br-Vitoria',
        },
      },
    ]);
    return res.json(call);
  }
}

export default new CallerController();
