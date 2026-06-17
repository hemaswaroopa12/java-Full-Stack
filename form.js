document.getElementById("details")
.addEventListener("submit",function(event)
{
    event.preventDefault();
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("mail").value;
    let Phone = document.getElementById("phone").value;
    let Age = document.getElementById("age").value;
    let DOB = document.getElementById("dob").value;
    let Education = document.getElementById("edu").value;
    let Skills = document.getElementById("skills").value;
    let Experience = document.getElementById("exp").value;
    let Image = document.getElementById("image").files[0];

    document.getElementById("p1").textContent = "Name: " + Name;
    document.getElementById("p2").textContent = "Email: " + Email;
    document.getElementById("p3").textContent = "Phone: " + Phone;
    document.getElementById("p4").textContent = "Age: " + Age;
    document.getElementById("p5").textContent = "Date of Birth: " + DOB;
    document.getElementById("p6").textContent = "Education: " + Education;
    document.getElementById("p7").textContent = "Skills: " + Skills;
    document.getElementById("p8").textContent = "Experience: " + Experience;

    let reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("dp").src = e.target.result;
    }
    reader.readAsDataURL(Image);
});