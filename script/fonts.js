function myFunction(value) {
    // let copyElements = document.querySelectorAll
    var copyText = document.getElementById("myInput").innerHTML;
    const copyContent = async () => {
        try {
          await navigator.clipboard.writeText(copyText);
          console.log('Content copied to clipboard');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }
      copyContent();
  }