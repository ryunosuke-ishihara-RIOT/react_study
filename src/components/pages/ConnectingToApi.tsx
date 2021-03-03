import React, { useState, useEffect } from "react";

import { Button } from "../core/Button/Button";
import { Resources } from "../core/Resources/Resources";
import jsonplaceholder from "../../apis/jsonplaceholder";

export const ConnectingToApi = () => {
  const [resources, setResources] = useState<never[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange: () => void = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await jsonplaceholder.get<never[]>("/posts");
        setResources(data);
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
