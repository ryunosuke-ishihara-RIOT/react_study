import React from "react";

type Props = {
  propsResources: never[];
};

export const Resources: React.FC<Props> = ({ propsResources }) => {
  return (
    <>
      {propsResources.map((resource: { id: string; title: string }) => (
        <p key={resource.id}>{resource.title}</p>
      ))}
    </>
  );
};
