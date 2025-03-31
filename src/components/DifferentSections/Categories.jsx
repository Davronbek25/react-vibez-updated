import React from "react";

const Categories = () => {
  let genres = [
    [["African", '#FFE780'], ["Arabic", '#CC0000'], ["Autumn", '#FF8983'], ["Blues", '#FFC200']],
    [
      ["Christian & Gospel", '#FF78FF'],
      ["Classical", '#A4FFA4'],
      ["Country & Americana", '#0092BF'],
      ["Dance & Electronic", '#CCCCCC'],
    ],
    [["Decades", '#4DEEFF'], ["Family", '#7B3EDB'], ["Folk & Acoustic", '#337DFF'], ["Hip-Hop", '#606060']],
    [["Indie & Alternative", '#E24B00'], ["J-Pop", '#00A513'], ["Jazz", '#FFE7cd'], ["K-pop", '#CC0043']],
    [["Latin", '#FF89'], ["Mandopop & Cantopop", '#FFC263'], ["Metal", '#0092ef'], ["Pop", '#E24B20']],
    [["R&B & Soul", '#00A313'], ["Reggae & Caribbean", '#FF8543'], ["Rock", '#FFd200'], ["Soundtrack & Musicals", '#606590']],
  ];

  let category = (genre, i, bCol) => {
    return (
      <div key={i} className="col">
        <div className="category"><span style={{backgroundColor: bCol}}></span>{genre}</div>
      </div>
    );
  };

  let genreCards = genres.map((gCol, i) => (
    <div key={i} className="row">
      {gCol.map((g, i) => category(g[0], i, g[1]))}
    </div>
  ));
  return <div className="container categories">{genreCards}</div>;
};

export default Categories;
