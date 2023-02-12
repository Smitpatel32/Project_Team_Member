const Footer = () => {
  var today = new Date();
  return (
    <footer className="container bg-body-tertiary sticky-bottom bg-primary text-white rounded">
      <div className="row justify-content-center mb-3 mt-3 ">
        <div class="col-8 ">
          <h2>Team Allocation App - {today.getFullYear()}</h2>
        </div>
      </div>
    </footer>
  )
}
export default Footer;