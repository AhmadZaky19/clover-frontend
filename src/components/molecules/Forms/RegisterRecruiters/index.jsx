import React from "react";
import { Form, Button } from "react-bootstrap";
import "./index.css";

const FormRegisterWorkers = () => {
  return (
    <>
      <div className="formSignUp">
        <h1>Halo, Clovers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam quas similique
          earum sequi autem, dolorem culpa atque nulla ipsa debitis,
        </p>
        <Form className="formSignUp__formInput">
          <Form.Group className="mb-3 formSignUp__name" style={{ paddingBottom: "15px" }}>
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama panjang" />
          </Form.Group>
          <Form.Group
            className="mb-3 formSignUp__email"
            controlId="formBasicEmail"
            style={{ paddingBottom: "15px" }}
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Masukkan alamat email" />
          </Form.Group>
          <Form.Group className="mb-3 formSignUp__company" style={{ paddingBottom: "15px" }}>
            <Form.Label>Perusahaan</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama perusahaan" />
          </Form.Group>
          <Form.Group className="mb-3 formSignUp__companySector" style={{ paddingBottom: "15px" }}>
            <Form.Label>Bidang Perusahaan</Form.Label>
            <Form.Control type="text" placeholder="Bidang perusahaan anda" />
          </Form.Group>
          <Form.Group className="mb-3 formSignUp__phone" style={{ paddingBottom: "15px" }}>
            <Form.Label>No handphone</Form.Label>
            <Form.Control type="text" placeholder="Masukkan no handphone" />
          </Form.Group>
          <Form.Group
            className="mb-3 formSignUp__password"
            controlId="formBasicPassword"
            style={{ paddingBottom: "15px" }}
          >
            <Form.Label>Kata Sandi</Form.Label>
            <Form.Control type="password" placeholder="Masukkan kata sandi" />
          </Form.Group>
          <Form.Group
            className="mb-3 formSignUp__confirmPassword"
            controlId="formBasicPassword"
            style={{ paddingBottom: "15px" }}
          >
            <Form.Label>Konfirmasi kata Sandi</Form.Label>
            <Form.Control type="password" placeholder="Masukkan konfirmasi kata sandi" />
          </Form.Group>
        </Form>
        <Button className="formSignUp__button">Masuk</Button>
        <p className="formSignUp__login">
          Anda sudah punya akun? <a href="">Masuk disini</a>
        </p>
      </div>
    </>
  );
};

export default FormRegisterWorkers;
