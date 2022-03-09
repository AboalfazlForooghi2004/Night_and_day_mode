<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
line-height:1.5;
  padding: 25px;
  background-color: white;
  color: black;
  font-size: 25px;
}
 
.dark-mode {
    background: #272727;
    filter: invert(1) hue-rotate(210deg);
}
button{padding: 10px 35px;}
</style>
</head>
<body dir="rtl">
<h2> لورم ایسوم متن</h2>
<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد</p>
<br>
<center><button onclick="myFunction()"><strong>Dark Mode</strong></button>
</center>
<script>
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
</script>
 
</body>
</html>
