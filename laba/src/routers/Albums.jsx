import React from "react";
import styles from "./Albums.module.css";
import { useLoaderData, useNavigate } from "react-router-dom";

export const loader = async () => {
  const albums = await fetch(
    `https://jsonplaceholder.typicode.com/albums`
  ).then((r) => r.json());
  return { albums };
};

export default function Albums() {
  const { albums } = useLoaderData();
  const navigate = useNavigate();

  const goToAlbum = (albumId, userId) => {
    navigate(`/albums/${albumId}/${userId}`);
  };

  return (
    <div>
      <h1>Albums</h1>

      {albums.map((album) => (
        <div
          key={album.id}
          onClick={() => goToAlbum(album.id, album.userId)}
          className={styles.album}
        >
          - {album.title}
        </div>
      ))}
    </div>
  );
}
