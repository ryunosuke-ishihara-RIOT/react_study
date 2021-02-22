import React, { useState, useEffect } from "react";

import { Button } from "../core/Button/Button";
import { Resources } from "../core/Resources/Resources";
import jsonplaceholder from "../../apis/jsonplaceholder";

export const ConnectingToApi = () => {
  const [resources, setResources] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await jsonplaceholder.get("/posts");
        setResources(result.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [resources]);

  return (
    <>
      <section>
        <Button onClick={handleChange} value={isOpen ? "閉じる" : "表示"} />
        {isOpen && <Resources propsResources={resources} />}
      </section>
    </>
  );
};
