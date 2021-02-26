export const useSubmitButton: () => {
  handleLog: () => void;
} = () => {
  const handleLog = () => {
    console.log("送信");
  };

  return { handleLog };
};
