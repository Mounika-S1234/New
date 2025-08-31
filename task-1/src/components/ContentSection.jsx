import React from "react";
import "./ContentSection.css";

const images = [
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfJvJClXuoB8hNN1saoSbLBeMJxQKYcw8vMOpekISuidGl7_u", alt: "Image 1" },
  { url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjFBqZfkExcRRrDnV5re06xu5XGB9_nK1fAqMmI41c-ud1oMqI", alt: "Image 2" },
  { url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRED_1WAshWyfrOBpCWd1drZOU2qpDy6oCCWATnVajRq7rk00sf", alt: "Image 3" },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDlPnv6l-jUqx9RycHjyFZg3bH2V4UwhGc5v-MnFf5CitHyXGmNyH6oURF9ZtUb1USbM&usqp=CAU", alt: "Image 4" },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-MACOo-3DwZgbxB_hiKrxuZPQ62Elnmm307Xw1znzilZqisc", alt: "Image 5" },
  { url: "https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg", alt: "Image 6" },
];

const contentData = [
  { title: "UMF", text: "We provide top-notch services to help your business grow." },
  { title: "Our Mission", text: "To empower businesses with innovative solutions and create lasting impact through technology." },
  { title: "Our Vision", text: "Deliver innovative products that transform industries and improve lives." },
];

const ContentSection = () => {
  return (
    <section className="content-section">
      {contentData.map((item, index) => (
        <div key={index} className="content-item">
          <div
            className="image"
            style={{ backgroundImage: `url(${images[index % images.length].url})` }}
          ></div>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default ContentSection;

