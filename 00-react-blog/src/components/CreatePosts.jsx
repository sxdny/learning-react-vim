import { useRef, useState, useEffect } from "react";

import Nav from "./Nav";
import Modal from "./Modal";
import "./css/CreatePosts.css";

export default function CreatePost() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const title = useRef();
  const author = useRef();
  const content = useRef();

  // mostrar errores
  const [titleError, setTitleError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [contentError, setContentError] = useState("");

  // show or hide modal
  const [showModal, setShowModal] = useState(false);

  // validate the input of the user
  function handleSubmit(e) {
    e.preventDefault();

    if (validateInputs(title, author, content)) {
      // creamos el nuevo post con el contenido de los inputs
      let post = {
        title: title.current.value,
        author: author.current.value,
        content: content.current.value,
      };

      const newPosts = [...posts, post];
      setPosts(newPosts);

      // reset the input values of the fields
      title.current.value = "";
      author.current.value = "";
      content.current.value = "";

      // show modal
      setShowModal(true);

    } else {
      // show un modal o algo
    }
  }

  function validateInputs(title, author, content) {
    let isAllOk = true;

    // si está vacio...
    if (!title.current.value.trim()) {
      setTitleError("Debes introducir un título...");
      isAllOk = false;
    } else {
      setTitleError("");
    }

    if (!author.current.value.trim()) {
      setAuthorError("Debes introducir un autor al post...");
      isAllOk = false;
    } else {
      setAuthorError("");
    }

    if (!content.current.value.trim()) {
      setContentError("El contenido del post no puede estar vacio...");
      isAllOk = false;
    } else {
      setContentError("");
    }

    return isAllOk;
  }

  return (
    <>
      <Nav />
      <p className="ok-message">
        Soon we will enable Markdown ✨. Coming fall 2024
      </p>
      <form action="">
        <div>
          <label htmlFor="">Title</label>
          <input
            ref={title}
            maxLength={50}
            type="text"
            name="title"
            id="title"
          />
          <p className="errMessage">{titleError}</p>
        </div>
        <div>
          <label htmlFor="">Author</label>
          <input
            ref={author}
            maxLength={40}
            type="text"
            name="author"
            id="author"
          />
          <p className="errMessage">{authorError}</p>
        </div>
        <div>
          <label htmlFor="">Content</label>
          <textarea
            ref={content}
            maxLength={4500}
            rows="10"
            name="content"
            id="content"
          ></textarea>
          <p className="errMessage">{contentError}</p>
        </div>

        <button onClick={(e) => handleSubmit(e)} type="submit">
          Create Post
        </button>
      </form>

      <Modal title="Post creado correctamente" content="Ahora puedes verlo en la lista de publicaciones." showModal={showModal}>
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modal>
    </>
  );
}
