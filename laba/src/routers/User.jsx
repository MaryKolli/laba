import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import styles from "./User.module.css";

export const loader = async ({ params }) => {
  const [user, albums] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then((r) =>
      r.json()
    ),
    fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}/albums`
    ).then((r) => r.json())
  ]);

  return { user, albums };
};

export default function User() {
  const { user, albums } = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.inf}>
        <h1>{user.name}</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone:{user.phone}</p>
        <p>Site: {user.website}</p>
      </div>

      <div className={styles.albumList}>
        <h1>Albums</h1>
        {albums.map((album) => (
          <div key={album.id}>
            <Link
              to={`/albums/${album.id}/${user.id}`}
              className={styles.albumLink}
            >
              - {album.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
