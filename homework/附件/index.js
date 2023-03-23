window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });
    document.getElementsByTagName('input')[0].addEventListener('keydown',function(event){
        if(event.which == 13){
            search();
        }
    });
    // document.getElementsByTagName("input")[0].bind('keypress',function(event){
    //     if(event.key == 'ENTER'){
    //         $("search-btn").click();;
    //     }
    // }) ;

    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
    document.getElementById('top-right').addEventListener('click',clickLogin);
}

function search() {
    // TODO: 搜索触发后的行为
    console.log('');
    var inputs = document.getElementsByTagName("input");
    if(inputs[0].value != ""){
        alert(inputs[0].value);
        var searchvalue = inputs[0].value;
        window.location.href = "http://www.baidu.com/s?ie=UTF-8&wd="+searchvalue;
    }else{
        alert("请输入搜索内容");
    }
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    let username = Kernal.getUserName();
    let content = `<div id="user">
                        <span id="user-img">
                            <img src="img/user.jpg" />
                        </span>
                        <span id="name"> ${username} </span>
                    </div>`;
    document.getElementById('top-right').textContent = content;
    
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}