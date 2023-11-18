import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import styles from "./Album.module.css";

export const loader = async ({ params }) => {
  const [album, user] = await Promise.all([
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${params.id}`
    ).then((r) => r.json()),
    fetch(
      `https://jsonplaceholder.typicode.com/users/${params.userId}`
    ).then((r) => r.json())
  ]);

  return { album, user };
};

export default function Album() {
  const { album, user } = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`)
      .then((r) => r.json())
      .then((data) => {
        setPhotos(data);
        setIsLoading(false);
      });
  }, [album.id]);

  if (isLoading || photos.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Album: {album.title}</h1>
      <p>
        Created by:
        <Link to={`/users/${user.id}`} className={styles.user}>
          {" "}
          {user.name}
        </Link>
      </p>
      <h1>Photos</h1>
      <div className={styles.container}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.photo}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
