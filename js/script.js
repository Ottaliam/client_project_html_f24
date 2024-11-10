const footer = `
  <img src="images/UMSI_signature_vertical_informal_solidblue.jpg" alt="UMSI Logo">
  <p id="copyright">Copyright &copy; ${new Date().getFullYear().toString()} University of Michigan</p>
  <p><a href="https://sites.google.com/umich.edu/msiacademicadvising/student-support-resources">UMSI Academic Advising</a></p>
  <p><a href="https://sites.google.com/umich.edu/msiacademicadvising/academic-advising/connecting-with-an-advisor?authuser=0">Contact Us</a></p>
`;

document.querySelector('footer').innerHTML = footer;