const footer = `
  <img src="images/UMSI_signature_vertical_informal_solidblue.jpg" alt="UMSI Logo">
  <p id="copyright">Copyright &copy; ${new Date().getFullYear().toString()} University of Michigan</p>
  <p><a href="https://sites.google.com/umich.edu/msiacademicadvising/student-support-resources">UMSI Academic Advising</a></p>
  <p><a href="https://sites.google.com/umich.edu/msiacademicadvising/academic-advising/connecting-with-an-advisor?authuser=0">Contact Us</a></p>
`;

document.querySelector('footer').innerHTML = footer;

const foodNews = [
  {
    title: "Fall 2024 Mobile Distribution for North Campus",
    content: "U-M’s Maize & Blue Cupboard (MBC), the College of Engineering, Student Life, and Ann Arbor-based Food Gatherers will host North Campus mobile food distributions to make MBC resources more accessible for North Campus residents."
  },
  {
    title: "Mobile Distribution for North Campus — Fall 2023 Semester",
    content: "Students who live on North Campus have easier access to free groceries thanks to U-M’s Maize & Blue Cupboard (MBC), the College of Engineering, Student Life, and Ann Arbor-based Food Gatherers."
  },
  {
    title: "Federal Assistance for Food Insecurity",
    content: "The U.S. Department of Agriculture offers a nationwide program to help people who are struggling with food insecurity. The national name for the program is Supplemental Nutrition Assistance Program (SNAP)."
  }
];

const newsDiv = document.querySelector('#news');
if (newsDiv) {
  newsDiv.innerHTML = foodNews.map((item) => {
    return `
      <article>
        <h3>${item.title}</h3>
        <p>${item.content}</p>
      </article>
    `;
  }).join('');
}