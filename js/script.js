function createPDF() {
  var pdf = document.getElementById("main-content");
  var opt = {
      margin: 1,
      filename: 'LeandroVecchiResume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 1 },
      jsPDF: { unit: 'mm', format: 'c1', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(pdf).save();
}