import SearchBar from "./Components/SearchBar";
import SearchImages from "./api";
import ImageList from "./Components/ImageList";
import { useState } from "react";
import "./styles.css";
import Footer from "./Components/Footer";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    // console.log(result);
    setImages(result);
  };
  // console.log(images);
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {!!images.length && <hr className="hr"></hr>}
      {!!images.length && <ImageList images={images} />}
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
