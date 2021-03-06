import React, { useEffect, useState } from "react";
import { Cloud, Expand, Photo } from "../../assets/images/ProfilePageImage";
import axios from "../../utils/axios";
import { Modal, Button } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Portofolio(props) {
  const submitDataDiri = (event) => {
    event.preventDefault();

    if (!dataNewPorto.nama_aplikasi || !dataNewPorto.image || !dataNewPorto.link_repository) {
      toast.error(
        `Tolong Isi Kolom ${
          !dataNewPorto.nama_aplikasi
            ? "Nama Aplikasi"
            : !dataNewPorto.link_repository
            ? "Link Repository Aplikasi"
            : !dataNewPorto.image
            ? "Gambar Aplikasi"
            : ""
        }`
      );
    } else {
      setDataNewPorto({ ...dataNewPorto, user_id: localStorage.getItem("id") });
      setDataNewPorto({ ...dataNewPorto, user_id: localStorage.getItem("id") });

      setTimeout(() => {
        postPorto();
      }, 100);
    }
  };

  const [dataPortoUser, setDataPortoUser] = useState([]);

  const getPortoFolioUser = () => {
    axios
      .get(`portfolio/${localStorage.getItem("id")}`)
      .then((res) => {
        // console.log(res);
        setDataPortoUser(res.data.data);
      })
      .catch((err) => {
        setDataPortoUser([]);
      });
  };

  useEffect(() => {
    getPortoFolioUser();
  }, []);

  const postPorto = () => {
    if (
      dataNewPorto.image.type == "image/jpeg" ||
      dataNewPorto.image.type == "image/png" ||
      dataNewPorto.image.type == "image/jpg"
    ) {
      if (dataNewPorto.image.size > 1024 * 1024 * 3) {
        toast.error("Ukuran File Terlalu Besar ( Max 3 MB )");
      } else {
        const formData = new FormData();

        for (const data in dataNewPorto) {
          formData.append(data, dataNewPorto[data]);
        }

        for (const pair of formData.entries()) {
          // console.log(pair[0] + ", " + pair[1]);
        }

        axios
          .post("portfolio", formData)
          .then((res) => {
            toast.success(res.data.msg);
            setDataNewPorto({});
            getPortoFolioUser();
          })
          .catch((err) => {
            toast.error(err.msg);
          });
      }
    } else {
      toast.error("Hanya File Bertipe Gambar Yang Diperbolehkan");
    }
  };

  const [dataNewPorto, setDataNewPorto] = useState({});
  const [image, setImage] = useState("");

  const handleInputPorto = (event) => {
    setDataNewPorto({
      ...dataNewPorto,
      [event.target.name]: event.target.value,
      user_id: localStorage.getItem("id")
    });
  };

  useEffect(() => {
    // console.log(dataNewPorto);
  }, [dataNewPorto]);

  useEffect(() => {
    // console.log(image);
    setDataNewPorto({ ...dataNewPorto, image: image });
  }, [image]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [portoName, setPortoName] = useState("");
  const [delPortoId, setDelPortoId] = useState("");

  const confirmDelete = (data) => {
    setShow(true);
    setDelPortoId(data.id);
    setPortoName(data.nama_aplikasi);
  };

  const deletePorto = (data) => {
    setShow(false);
    axios
      .delete(`portfolio/${data}`)
      .then((res) => {
        toast.success(res.data.msg);
        getPortoFolioUser();
      })
      .catch((err) => {
        toast.error(err.msg);
      });
  };

  const [isUpdate, setIsUpdate] = useState(false);

  const selectUpdateData = (item) => {
    setIsUpdate(true);
    setDataNewPorto(item);
  };

  useEffect(() => {}, [dataNewPorto]);

  const updatePorto = (event) => {
    event.preventDefault();

    if (dataNewPorto.image) {
      if (
        dataNewPorto.image.type == "image/jpeg" ||
        dataNewPorto.image.type == "image/png" ||
        dataNewPorto.image.type == "image/jpg"
      ) {
        if (dataNewPorto.image.size > 1024 * 1024 * 3) {
          toast.error("Ukuran File Terlalu Besar ( Max 3 MB )");
        } else {
          const formData = new FormData();

          for (const data in dataNewPorto) {
            formData.append(data, dataNewPorto[data]);
          }

          for (const pair of formData.entries()) {
            // console.log(pair[0] + ", " + pair[1]);
          }

          axios.patch(`portfolio/${id}`, formData).then((res) => {
            toast.success("Success Update Portofolio");
            setIsUpdate(false);
            setDataNewPorto({});
            getPortoFolioUser();
          });
        }
      } else {
        toast.error("Data Harus Berupa Gambar");
      }
    } else {
      delete dataNewPorto.image;

      axios.patch(`portfolio/${id}`, dataNewPorto).then((res) => {
        toast.success("Success Update Portofolio");
        setIsUpdate(false);
        setDataNewPorto({});
        getPortoFolioUser();
      });
    }
  };

  const { link_repository, nama_aplikasi, id } = dataNewPorto;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="justify-content-center">
          <Modal.Title>Konfirmasi Delete Portofolio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">Hapus Portofolio {portoName}?</div>
        </Modal.Body>
        <Modal.Footer className="justify-content-evenly">
          <div style={{ width: "40%" }}>
            <Button className="ack-btn-2" onClick={handleClose}>
              Close
            </Button>
          </div>
          <div style={{ width: "40%" }}>
            <Button
              className="ack-btn-prim"
              style={{ width: "40%" }}
              onClick={() => deletePorto(delPortoId)}
            >
              Delete
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <div className="user-profile__porto-exp mb-4 ack-bg-white">
        <p className="p-4 updateForm__header margin-reset ack-fw-600 ack-fsize-22">Portofolio</p>
        <form
          className="px-4 formDataDiri row"
          onSubmit={isUpdate ? (event) => updatePorto(event) : (event) => submitDataDiri(event)}
        >
          <div className="col-12">
            <label htmlFor="name" className="d-blok col-12 mt-4">
              Nama Aplikasi
            </label>
            <input
              type="text"
              placeholder="Masukkan Nama Aplikasi"
              name="nama_aplikasi"
              className="p-2 col-12"
              value={nama_aplikasi ? nama_aplikasi : ""}
              onChange={(event) => handleInputPorto(event)}
              // required
            />

            <label htmlFor="name" className="d-blok col-12 mt-4">
              Link Repository
            </label>
            <input
              type="text"
              placeholder="Masukkan Job Desk"
              name="link_repository"
              className="p-2 col-12"
              value={link_repository ? link_repository : ""}
              onChange={(event) => handleInputPorto(event)}
              // required
            />
          </div>

          <div className="col-12">
            <label htmlFor="" className="mt-4 col-12">
              Upload Gambar
            </label>
            <div className="col-12 portoInput d-flex justify-content-center">
              <input
                type="file"
                name="image"
                onChange={(event) => setImage(event.target.files[0])}
                style={{
                  // display: "",
                  potition: "absolute",
                  zIndex: "1",
                  height: "100%",
                  width: "100%"
                }}
                // required
              />
            </div>
          </div>

          <div className="mt-3 col-12 d-flex justify-content-end ">
            <button
              type="submit"
              // onClick={() => uploadNewDataPorto()}
              className="p-3 mb-4 col-12 btn-add-exp"
            >
              {isUpdate ? "Update Portofolio" : "Tambah Portofolio"}
            </button>
          </div>
        </form>

        <div className="row container margin-reset">
          {dataPortoUser.map((item, index) => (
            <div key={index} className="col-lg-4 col-12 text-center my-3 ">
              <div
                className="col-12 text-center p-2"
                style={{
                  border: "1px solid #5e50a1",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 5px #5e50a1"
                }}
              >
                <img
                  src={`${
                    process.env.REACT_APP_NAME === "dev"
                      ? process.env.REACT_APP_DEV
                      : process.env.REACT_APP_PROD
                  }images/${item.image}`}
                  alt=""
                  className="portoImage"
                />
                <p className="ack-fsize-18 ack-fw-700 mb-1">{item.nama_aplikasi}</p>

                <button
                  className="ack-btn-prim text-center p-2 my-1"
                  onClick={() => selectUpdateData(item)}
                >
                  UPDATE
                </button>
                <button
                  onClick={() => confirmDelete(item)}
                  className="ack-btn-2 text-center p-2 my-1"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portofolio;
