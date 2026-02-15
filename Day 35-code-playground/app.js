function runCode() {
  const html = document.getElementById("html").value;
  const css = document.getElementById("css").value;
  const js = document.getElementById("js").value;

  const output = document.getElementById("output");
  const documentContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>
        try {
          ${js}
        } catch (err) {
          document.body.innerHTML += 
            '<pre style="color:red;">' + err + '</pre>';
        }
      </script>
    </body>
    </html>
  `;

  output.srcdoc = documentContent;
}
