export const showToastWithTimeout = (
    message: string,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
    setToastMessage(message);
    setTimeout(() => {
        setToastMessage("");
    }, 3000);
};
