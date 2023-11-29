const shortenText = (title) => {
    return title.split(" ").slice(0,3).join(" ");
}
export default shortenText;