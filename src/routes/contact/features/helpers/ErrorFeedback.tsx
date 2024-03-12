function ErrorHandler(error) {
    console.log(error, ' Error handler')
  return <label htmlFor={error}>{error}</label>;
}
export default ErrorHandler;
