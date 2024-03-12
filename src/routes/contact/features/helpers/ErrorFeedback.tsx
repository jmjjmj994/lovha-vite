function ErrorHandler(error: string) {
  return <label htmlFor={error}>{error}</label>;
}
export default ErrorHandler;
