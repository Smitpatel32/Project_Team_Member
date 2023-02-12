const NotFound = () => {
  return (
    <div className="alert alert-warning" role="alert">
      <div className="position-relative">
        <h4 className="alert-heading">404 Page Not Found!</h4>
        <hr className="p-4" />
        <p className="position-absolute top-100 start-50 translate-middle">Sorry,This Page Is Not Found.</p>
      </div>
    </div>
  )
}
export default NotFound;