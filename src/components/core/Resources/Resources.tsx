import React from "react";

type Props = {
  props: {};
  propsResources: [];
};

export const Resources: React.FC<Props> = (props) => {
  const { propsResources } = props;
  return (
    <>
      {propsResources.map((resource: { id: string; title: string }) => (
        <p key={resource.id}>{resource.title}</p>
      ))}
    </>
  );
};
