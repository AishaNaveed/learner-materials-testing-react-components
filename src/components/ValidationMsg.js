const ValidationMsg = ({ValidMsg}) => {
    return (
        <>
            <div data-testid="validationMsg">
                <p>{ValidMsg}</p>
            </div>
        </>
    );
}

export default ValidationMsg;