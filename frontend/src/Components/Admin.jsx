import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {
  Modal,
  Form,
  Button,
  Table,
  ButtonGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      nome: "",
      endereco: "",
      bairro: "",
      segmento: "",
      telefone: "",
      whatsapp: "",
      imagem: "",
      modalAberta: false,
      mostraTabela: true,
      estabs: [],
    };

    this.deletarEstab = this.deletarEstab.bind(this);
    this.buscaEstabs = this.buscaEstabs.bind(this);
    this.cadastraEstab = this.cadastraEstab.bind(this);
    this.atualizaNome = this.atualizaNome.bind(this);
    this.atualizaEndereco = this.atualizaEndereco.bind(this);
    this.atualizaBairro = this.atualizaBairro.bind(this);
    this.atualizaSegmento = this.atualizaSegmento.bind(this);
    this.atualizaTelefone = this.atualizaTelefone.bind(this);
    this.atualizaWhatsapp = this.atualizaWhatsapp.bind(this);
    this.atualizaImagem = this.atualizaImagem.bind(this);
    this.submit = this.submit.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.abrirModal = this.abrirModal.bind(this);
  }

  componentDidMount() {
    this.buscaEstabs();
  }

  buscaEstabs() {
    fetch("https://foodbairro.onrender.com/")
      .then((resposta) => resposta.json())
      .then((dados) => {
        this.setState({ estabs: dados });
      });
  }

  cadastraEstab(estab) {
    fetch("https://foodbairro.onrender.com/admin/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(estab),
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscaEstabs();
      } else {
        alert("Não foi possível adicionar o estabelecimeto!");
      }
    });
  }

  carregarDados(id) {
    fetch("https://foodbairro.onrender.com/estab/" + id)
      .then((resposta) => resposta.json())
      .then((estab) => {
        this.setState({
          id: estab.id,
          nome: estab.nome,
          endereco: estab.endereco,
          bairro: estab.bairro,
          segmento: estab.segmento,
          telefone: estab.telefone,
          whatsapp: estab.whatsapp,
          imagem: estab.imagem,
        });
        this.abrirModal();
      });
  }

  atualizarEstab(estab) {
    fetch("https://foodbairro.onrender.com/admin/update/" + estab.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(estab),
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscaEstabs();
      } else {
        alert("Erro ao atualizar!");
      }
    });
  }

  deletarEstab(id) {
    fetch("https://foodbairro.onrender.com/admin/delete/" + id, {
      method: "DELETE",
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscaEstabs();
      }
    });
  }

  renderTabela() {
    const listaEstabs = this.state.estabs.map((estab) => (
      <tr key={estab.id}>
        <td>{estab.nome}</td>
        <td>{estab.endereco}</td>
        <td>{estab.bairro}</td>
        <td>{estab.segmento}</td>
        <td>{estab.telefone}</td>
        <td>{estab.whatsapp}</td>
        <td>{estab.imagem}</td>
        <td>
          <Button
            icon=""
            class="bttable"
            variant="outline-primary"
            onClick={() => this.carregarDados(estab.id)}
          >
            Atualizar
          </Button>
          <Button
            class="bttable"
            variant="outline-dark"
            onClick={() => this.deletarEstab(estab.id)}
          >
            Deletar
          </Button>
        </td>
      </tr>
    ));

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Segmento</th>
            <th>Telefone</th>
            <th>Whatsapp</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>{listaEstabs}</tbody>
      </Table>
    );
  }

  fecharModal() {
    this.setState({
      modalAberta: false,
      id: 0,
      nome: "",
      endereco: "",
      bairro: "",
      segmento: "",
      telefone: "",
      whatsapp: "",
      imagem: "",
    });
  }

  abrirModal() {
    this.setState({
      modalAberta: true,
    });
  }

  renderForm() {
    return (
      <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="cadastro">
            <div class="mb-3">
              <label class="form-label">Nome</label>
              <input
                type="text"
                class="form-control"
                value={this.state.nome}
                onChange={this.atualizaNome}
              ></input>
              <br />
              <label class="form-label">Endereço</label>
              <input
                type="text"
                class="form-control"
                value={this.state.endereco}
                onChange={this.atualizaEndereco}
              ></input>
              <br />
              <label class="form-label">Bairro</label>
              <input
                type="text"
                class="form-control"
                value={this.state.bairro}
                onChange={this.atualizaBairro}
              ></input>
              <br />
              <label class="form-label">Segmento</label>
              <input
                type="text"
                class="form-control"
                value={this.state.segmento}
                onChange={this.atualizaSegmento}
              ></input>
              <br />
              <label class="form-label">Telefone</label>
              <input
                type="text"
                class="form-control"
                value={this.state.telefone}
                onChange={this.atualizaTelefone}
              ></input>
              <br />
              <label class="form-label">Whatsapp</label>
              <input
                type="text"
                class="form-control"
                value={this.state.whatsapp}
                onChange={this.atualizaWhatsapp}
              ></input>
              <br />
              <label class="form-label">imagem</label>
              <input
                type="text"
                class="form-control"
                value={this.state.imagem}
                onChange={this.atualizaImagem}
              ></input>
              <br />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.fecharModal}>
            Cancelar
          </Button>
          <Button form="cadastro" variant="primary" onClick={this.submit}>
            Confimar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  atualizaNome(e) {
    this.setState({
      nome: e.target.value,
    });
  }

  atualizaEndereco(e) {
    this.setState({
      endereco: e.target.value,
    });
  }
  atualizaBairro(e) {
    this.setState({
      bairro: e.target.value,
    });
  }
  atualizaSegmento(e) {
    this.setState({
      segmento: e.target.value,
    });
  }
  atualizaTelefone(e) {
    this.setState({
      telefone: e.target.value,
    });
  }
  atualizaWhatsapp(e) {
    this.setState({
      whatsapp: e.target.value,
    });
  }
  atualizaImagem(e) {
    this.setState({
      imagem: e.target.value,
    });
  }

  submit() {
    const estab = {
      id: this.state.id,
      nome: this.state.nome,
      endereco: this.state.endereco,
      bairro: this.state.bairro,
      segmento: this.state.segmento,
      telefone: this.state.telefone,
      whatsapp: this.state.whatsapp,
      imagem: this.state.imagem,
    };
    if (this.state.id == 0) {
      this.cadastraEstab(estab);
    } else {
      this.atualizarEstab(estab);
    }
    this.fecharModal();
  }

  mostraTabela = () => {
    this.setState({
      mostraTabela: true,
    });
  };

  mostraLista = () => {
    this.setState({ mostraTabela: false });
  };

  render() {
    return (
      <div class="tabelaAlunos">
        <Header />
        <Container fluid>
          <Row className="justify-content-md-center mt-4">
            <Col md="auto">
              <Button class="bt" variant="primary" onClick={this.abrirModal}>
                Adicionar Estabelecimento
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            {this.renderForm()}
            {this.renderTabela()}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Admin;
