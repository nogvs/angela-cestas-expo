import icone from '../../assets/logo.png';
import imagem from '../../assets/topo.png';
import bandejaMadeira from '../../assets/produtos/bandeja-madeira.png'
import flor from '../../assets/produtos/kalanchoe.png'
import miniBolo from '../../assets/produtos/mini-bolo.png'
import casadinhas from '../../assets/produtos/biscoito-casadinha.png'
import paoRecheado from '../../assets/produtos/pao-recheado.png'
import biscoitoAmanteigado from '../../assets/produtos/biscoito-amanteigado.png'
import mel from '../../assets/produtos/mel.png'
import paoDeMel from '../../assets/produtos/pao-de-mel.png'
import geleia from '../../assets/produtos/geleia.png'
import iogurteGrego from '../../assets/produtos/iogurte-grego.png'
import granola from '../../assets/produtos/granola.png'
import sucoLaranja from '../../assets/produtos/suco-laranja.png'
import empadaoFrango from '../../assets/produtos/empadao-frango.png'
import uva from '../../assets/produtos/uva.png'
import mamaoPapaya from '../../assets/produtos/mamao-papaya.png'
import morango from '../../assets/produtos/morango.png'
import capuccinoCaseiro from '../../assets/produtos/capuccino-caseiro.png'


const cesta = {
    topo: {
        imagemCesta: imagem
    },
    detalhes: {
        nomeCesta: "Cesta Café da Manhã de Rainha",
        descricao: "Linda cesta com produtos selecionados, para presentear uma pessoa que merece um tratamento real.",
        preco: "220"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Bandeja de Madeira",
            imagem: bandejaMadeira,
          },
          {
            nome: "Vaso de Flor (Kalanchoe ou Calandiva)",
            imagem: flor,
          },
          {
            nome: "Mini Bolo (Churros, Chocolate com Café, ou Cenoura)",
            imagem: miniBolo,
          },
          {
            nome: "Casadinhas (8 unid. - Doce de Leite ou Goiabada)",
            imagem: casadinhas,
          },
          {
            nome: "Pão Recheado (2 unid. - Calabresa ou Requeijão",
            imagem: paoRecheado,
          },
          {
            nome: "Biscoito Amanteigado",
            imagem: biscoitoAmanteigado,
          },
          {
            nome: "Mel",
            imagem: mel,
          },
          {
            nome: "Pão de Mel",
            imagem: paoDeMel,
          },
          {
            nome: "Geleia Caseira",
            imagem: geleia,
          },
          {
            nome: "Iogurte Grego",
            imagem: iogurteGrego,
          },
          {
            nome: "Granola",
            imagem: granola,
          },
          {
            nome: "Suco de Laranja Natural",
            imagem: sucoLaranja,
          },
          {
            nome: "Empadão de Frango",
            imagem: empadaoFrango,
          },
          {
            nome: "Uva s/ semente (1 cacho)",
            imagem: uva,
          },
          {
            nome: "Mamão Papaya (1/2 unidade)",
            imagem: mamaoPapaya,
          },
          {
            nome: "Morango",
            imagem: morango,
          },
          {
            nome: "Capuccino Caseiro",
            imagem: capuccinoCaseiro,
          }
        ]
      }
    }


export default cesta;