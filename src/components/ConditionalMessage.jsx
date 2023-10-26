
const ConditionalMessage = ({ children, className }) => {
    const classNames = ["text-center mt-4"];
    if (className) {
        classNames.push(className)
    }
    return <p className={classNames.join(" ")}>{children}</p>
}

export default ConditionalMessage;