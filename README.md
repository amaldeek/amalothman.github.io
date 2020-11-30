<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">       
    <title>Amal deek</title>   
    <style>
        td {
            text-align: center
        }

        ul {
            list-style-type: none;
        }

        li {
            text-align: center
        }

        h5 {
            text-align: center;
            color: magenta;
        }

        .my-name{
            color: darkcyan;
            font-size: 300%;
        }

        .summary{
            font-family: 'Courier New', Courier, monospace;
            background-color: lightgray;
        }

        #printMyCV
        {
            float: right !important;
        }
    </style>
</head>

<body>
    <button id="printMyCV">Print My CV</button>
    <h1 class="my-name">Amal deek</h1>
    <img style="width: 300px;height: 300px" src="https://i.ibb.co/JxxXBMg/item.png" />
    <p class="summary">I study networks and information security. I chose this major because I loved it and it has many fields in the
        world of technology. Through my studies of it, I learned a lot of information for a mission that will help me
        develop myself more and more. I hope I develop and learn more.</p>

    <table>
        <tr>
            <td>
                <a href="https://www.facebook.com/"> <img src="https://image.flaticon.com/icons/png/512/124/124010.png"
                        style="width: 50px;height: 50px;margin: 15px" /></a>
            </td>
            <td>
                <a href="https://www.instagram.com/"> <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/480px-Instagram-Icon.png"
                        style="width: 50px;height: 50px;margin: 15px" /></a>
            </td>
        </tr>
    </table>


    <table style="width: 100%;background-color: lightblue">
        <tr>
            <td>
                <h5>LIST OF EDUCATION BACKGROUND</h5>
            </td>
            <td>
                <h5>LIST OF WORK EXPERIENCE</h5>
            </td>
            <td>
                <h5>LIST OF HoBBIES </h5>
            </td>
        </tr>
        <tr>
            <td>
                <ul class="education-list">
                    <li>Data Structure</li>
                    <li>DataBase</li>
                    <li>Java</li>

                </ul>
            </td>
            <td>
                <ul>
                    <li>Discrete Mathematics</li>
                    <li>Accounting principles</li>
                    <li>java2</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Reading books</li>
                    <li>Swimming</li>
                    <li>singing</li>

                </ul>
            </td>
        </tr>


    </table>



</body>

<script>
    var welcomeMessage = document.querySelector(".my-name");
    var ededucationList = document.querySelectorAll(".education-list > li");
    var printMyCV = document.getElementById("printMyCV");

    welcomeMessage.addEventListener("click", DisplayWelcomeMessage);

    function DisplayWelcomeMessage() {
        alert("Welcome, please let me know if you have any questions");
    }

    ededucationList.forEach((item) => {
        item.addEventListener("mouseover", () =>{
            item.style.color = "red";
        }, false);
        item.addEventListener("mouseout", () =>{
            item.style.color = "";
        }, false);   
    });

    printMyCV.addEventListener("click", PrintPage);

    function PrintPage()
    {
        window.print();
    }
</script>

</html>
