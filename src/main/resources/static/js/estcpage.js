function getNewTop( div_id) {
    document.getElementById(div_id).innerHTML="<B class=\"mainTitle\">置顶：</B> " +
        "<p class=\"mainTitle\"><a style=\"color: red;\" href=\"https://www.journals.elsevier.com/journal-of-systems-architecture/call-for-papers/special-issue-on-ubiquitous-and-intelligent-embedded-systems\"> Journal of Systems Architecture Special Issue已经申请下来</a> </p>"+
        "<p class=\"mainTitle\"><c style=\"color: blue;\">这仅是一个测试网站的界面 2020.4.20测试</c> </p>";

}


function getHeader(div_id) {
    document.getElementById(div_id).innerHTML= " <br><br><DIV class=\"csslider\" id=\"slider1\"><INPUT name=\"slides\" id=\"slides_1\" type=\"radio\"\n" +
        "                                              checked=\"\">\t\t <INPUT name=\"slides\" id=\"slides_2\" type=\"radio\">\n" +
        "        <UL>\n" +
        "            <LI>\n" +
        "                <DIV class=\"banner\" id=\"banner_2\" ;>\n" +
        "\n" +
        "\n" +
        "\n" +
        "                    <DIV class=\"title wrap\">\n" +
        "                        <H1>CCF ESTC 2020</H1>\n" +
        "                        <DIV>第18届全国嵌入式系统大会</DIV>\n" +
        "                        <DIV>2020 10月17-18日，中国，四川，成都</DIV></DIV></DIV></LI>\n" +
        "            <LI>\n" +
        "                <DIV class=\"banner\" id=\"banner_1\">\n" +
        "                    .banner_1\n" +
        "                    <DIV class=\"title wrap\">\n" +
        "                        <H1>CCF ESTC 2020</H1>\n" +
        "                        <DIV>第18届全国嵌入式系统大会</DIV>\n" +
        "                        <DIV>2020 10月17-18日，中国，四川，成都</DIV></DIV></DIV></LI></UL>\n" +
        "        <DIV class=\"arrows\"><LABEL for=\"slides_1\"></LABEL>\t\t\t <LABEL\n" +
        "                for=\"slides_2\"></LABEL></DIV>\n" +
        "        <DIV class=\"navigation\"><LABEL for=\"slides_1\"></LABEL>\t\t\t <LABEL\n" +
        "                for=\"slides_2\"></LABEL>\t\t </DIV></DIV>\n" +
        "    <DIV class=\"nav\">\n" +
        "        <UL class=\"wrap clearfix\">\n" +
        "            <li><a href=\"./ESTC2020\">大会首页</a></li>\n" +
        "            <li><a href=\"./Plan\">会议日程</a></li>\n" +
        "            <li><a href=\"./Organization\">组织机构</a></li>\n" +
        "            <LI><A href=\"./Paper\">论文征稿</A></LI><!--end of here-->\n" +
        "\n" +
        "            <LI><A href=\"./Guest\">特邀报告</A></LI>\n" +
        "            <LI><A href=\"./Register\">会议注册</A></LI>\n" +
        "            <LI><A href=\"./Wall_show\">墙报展示</A></LI>\n" +
        "            <LI><A href=\"./HotelAndTraffic\">住宿交通</A></LI>\n" +
        "            <LI><A href=\"./Support\">诚招赞助</A></LI>\n" +
        "            <LI><A\n" +
        "                    href=\"./Contact\">会务组联系方式</A></LI></UL></DIV>";

}
function getFooter(div_id) {
    document.getElementById(div_id).innerHTML=" <div class=\"wrap\">\n" +
        "        <div class=\"footer-box clearfix\">\n" +
        "          <div class=\"organizor npc\"><span>第18届全国嵌入式系统大会</span></div>\n" +
        "          <div class=\"organizor scu\"><a href=\"http://www.scu.edu.cn/\">四川大学</a></div>\n" +
        "        </div>" ;

}
function getZhuBanDanWei(div_id) {
    document.getElementById(div_id).innerHTML="";
}
function getChengBanDanWei() {
    document.getElementById(div_id).innerHTML="";
}