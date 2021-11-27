const ValidationMsg = ({ValidMsg}) => {
    return (
        <>
                <p data-testid="validationMsg" className="msgColor">{ValidMsg}</p>
        </>
    );
}

export default ValidationMsg;