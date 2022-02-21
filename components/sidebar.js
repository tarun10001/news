function sidebar() {


    // return your html component here
    //Make sure to give input search box id as ""

    return `
    <div id="news_logo">
    <input onkeypress="search()" type="text" id="searchbar" />
    <div onclick="window.location.href='index.html'" id="click">Click to get News</div>
    <div>API</div>
    </div>
    `
}
export default sidebar;