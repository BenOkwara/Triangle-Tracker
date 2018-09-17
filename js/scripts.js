function typeOf() {
  var a = document.getElementById("length").value;
  var b = document.getElementById("width").value;
  var c = document.getElementById("height").value;

  console.log(a);
  console.log(b);
  console.log(c);

  if (a===b && a===c && b===c) {
      alert("This is Equilateral");
    }
    else if (a===b || a===c || b===c) {
      alert("This is Isoceles")
    }
    else if ((a+b)<=c || (a+c)<=b || (b+c)<=a) {
      alert("Oops Ain't an Triangle pass");
    }
    else {
      alert("Am Scalene");
    }
  }
