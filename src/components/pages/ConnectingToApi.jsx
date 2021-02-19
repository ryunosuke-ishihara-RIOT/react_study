import React, { useState, useEffect } from "react";

import { Button } from "../core/Button/Button";
import { Resources } from "../core/Resources/Resources";
import jsonplaceholder from "../../apis/jsonplaceholder";

export const ConnectingToApi = () => {
  const [resources, setResources] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const handleChange = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const getPosts = async () => {
      const posts = await jsonplaceholder.get("/posts");
      setResources(posts.data);
    };
    getPosts();
  }, [resources]);

  return (
    <>
      {(isOpen && <Button onClick={handleChange} value="表示" />) || (
        <section>
          <Button onClick={handleChange} value="閉じる" />
          <Resources resources={resources} />
        </section>
      )}
    </>
  );
};
