const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/Emre_Lofca_CV.pdf'));

doc.font('Helvetica-Bold').fontSize(24).text('EMRE LOFCA', { align: 'center' });
doc.font('Helvetica').fontSize(14).text('Computer Engineer | Automation & Analytics', { align: 'center' });
doc.moveDown();

doc.fontSize(10).text('Phone: +90 542 336 37 14 | Email: emrelofca@gmail.com | LinkedIn: linkedin.com/in/e-lofca', { align: 'center' });
doc.moveDown(2);

doc.font('Helvetica-Bold').fontSize(16).text('ABOUT ME');
doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text(
  "Experienced Computer Engineer specializing in Automation, Business Analytics, and Data Visualization. " +
  "I combine my technical background with Canias ERP management to drive operational efficiency through TPM. " +
  "Additionally, I have built 200+ PC rigs, manage a Raspberry Pi home server for Langflow/AI apps, and won a slam dunk contest."
);
doc.moveDown();

doc.font('Helvetica-Bold').fontSize(16).text('EXPERIENCE');
doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(0.5);
doc.font('Helvetica-Bold').fontSize(12).text('Automation Engineer / Business Analyst - YUNSA A.S.');
doc.font('Helvetica-Oblique').fontSize(10).text('2021 - Present');
doc.font('Helvetica').fontSize(11).text(
  "- Managed product costing on Canias ERP and operational profitability analyses.\n" +
  "- Developed 300+ reports on Tableau for process optimization.\n" +
  "- Optimized MES and ERP integrations.\n" +
  "- Led TPM methodologies and Focused Improvement projects."
);
doc.moveDown();
doc.font('Helvetica-Bold').fontSize(12).text('Football Referee - Turkish Football Federation');
doc.font('Helvetica-Oblique').fontSize(10).text('2018 - 2019');
doc.font('Helvetica').fontSize(11).text("- Amateur league football refereeing.");
doc.moveDown();

doc.font('Helvetica-Bold').fontSize(16).text('EDUCATION & CERTIFICATES');
doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(0.5);
doc.font('Helvetica-Bold').fontSize(12).text('B.Sc. Computer Engineering - Duzce University (2016-2021)');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text(
  "- Google Data Analytics (2024)\n" +
  "- Bureau Veritas ISO 27001 Internal Auditor (2022)\n" +
  "- Academy Peak Business Analytics (2021)\n" +
  "- Iienstitu Leadership & Design Thinking (2021)"
);
doc.moveDown();

doc.font('Helvetica-Bold').fontSize(16).text('SKILLS');
doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('Python, T-SQL, Canias ERP, Tableau, Automation, MES, AI & Langflow, Raspberry Pi & Linux, TPM, Business Analytics');

doc.end();
console.log('PDF generated successfully!');
