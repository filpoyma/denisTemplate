export const template = (tableData: string[]) => {
  return `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, maximum-scale=1" />
    <meta charset="utf-8" />
    <link rel="stylesheet" href="css/main.css" />
    <script src="scripts/jquery-2.2.4.min.js"></script>
    <title>Jewish Avant-Garde. Chagall, Altman, Shterenberg, and Others</title>

    <style>
      @font-face {
        font-family: "basis_grotesque_proBl";
        src: url("fonts/basisGrotesquePro-Bold.woff") format("woff");
      }

      @font-face {
        font-family: "basis_grotesque_proMd";
        src: url("fonts/basisGrotesquePro-Medium.woff") format("woff");
      }

      body {
        background-color: #000;
        font-size: 0;
        font-family: "basis_grotesque_proMd";
        padding: 20px 20px;
      }

      #title {
        display: inline;
        background-color: #fff;
        font-size: 40px;
        font-family: "basis_grotesque_proBl";
      }

      .item {
        display: inline-block;
        width: 30%;
        margin-right: 5%;
        margin-bottom: 10px;
        cursor: pointer;
      }
      .item:nth-child(3n + 2) {
        margin-right: 0;
      }
      .img img {
        width: 100%;
      }
      .name {
        font-size: 14px;
        color: #fff;
        font-family: "basis_grotesque_proBl";
        padding-top: 4px;
      }

      .fullitem {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        cursor: pointer;
        display: none;
      }
      .fullimg img {
        width: 100%;
      }
      .fulname {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 12px;
        color: #fff;
        padding: 10px;
        background-color: black;
      }

      .c4:nth-child(1) {
        font-size: 16px;
      }
      .c4:nth-child(2) {
        font-size: 16px;
      }
    </style>

    <script>
      $(document).ready(function () {
        $(".fullitem").click(function () {
          $(this).fadeOut();
        });

        $(".item").click(function () {
          num = $(this).attr("data-num");
          $("#full" + num + " img").attr("src", "images/full/" + num + ".jpg");
          $("#full" + num).fadeIn();
        });
      });
    </script>
  </head>
  <body>
    <div id="title">
      Jewish Avant-Garde. <br />
      Chagall, Altman, Shterenberg, and&nbsp;Others
      <br />
    </div>

    <div style="height: 20px"></div>

${tableData
  .filter((item) => item[0] !== null)
  .map((item) => {
    return `
    <div class="item" data-num="${item[0]}">
      <div class="img"><img src="images/preview/${item[0]}.jpg" /></div>
    </div>\n`;
  })
  .join("")}

${tableData
  .filter((item) => item[0] !== null)
  .map((item) => {
    return `
    <div class="fullitem" id="full${item[0]}">
      <div class="fullimg"><img src="" /></div>
      <div class="fulname">
        <p class="c4"><span class="c0">${item[2] || ""}</span></p>
        <p class="c4"><span class="c0">${item[3] || ""}</span></p>
        <p class="c4"><span class="c0">${item[4] || ""}</span></p>
        <p class="c4"><span class="c0">${item[5] || ""}</span></p>
        <p class="c4"><span class="c0">${item[6] || ""}</span></p>
        <p class="c4">
          <span class="c0">${item[7] || ""}</span>
        </p>
      </div>
    </div>\n`;
  })
  .join("")}
      
  </body>
  <script>
    document.oncontextmenu = function () {
      return false;
    };
  </script>
</html>`;
};
