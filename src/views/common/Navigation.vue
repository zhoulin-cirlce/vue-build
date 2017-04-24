<template>
  <div>
    <header class="header">
      <div class="account-box" aria-label="Account" role="region">
        <div class="info status-online">
          <div class="thumb" data-status="online">
            <div class="avatar">
              <div class="avatar-image"><img :src="this.sysUserAvatar"  width="42"  height="42" /></div>
            </div>
          </div>
          <div class="data">
            <h4>
              {{sysUserName}}
            </h4>
          </div>
        </div>
        <nav class="options animated-hidden">
          <div class="wrapper">
            <button data-status="online" class="status online">
              <span>
                在线
              </span>
            </button>
            <button data-status="away" class="status away">
              <span>
                离开
              </span>
            </button>
            <button data-status="busy" class="status busy">
              <span>
                忙碌
              </span>
            </button>
            <button data-status="offline" class="status offline">
              <span>
                隐身
              </span>
            </button>
            <button id="account" class="account-link">
              <i class="icon-sliders">
              </i>
              <span>
                我的账户
              </span>
            </button>
            <button id="logout" @click.native="logout">
              <i class="icon-logout">
              </i>
              <span>
                退出
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
    <div class="unread-rooms top-unread-rooms hidden">
      更多未阅读
      <i class="icon-up-big">
      </i>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                sysUserName: 'suneee',
                sysUserAvatar: 'http://suneee.ucp.weilian.cn:3001/assets/logo.png'
            }
        },
        methods: {
        }
    }

</script>
<style type="text/css">
.header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 110;
    width: 100%;
    height: 60px;
    min-height: 60px;
    cursor: pointer;
}
.unread-rooms {
    position: absolute;
    z-index: 1000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    background-color: #068fe4;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 24px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-justify-content: center;
}

.unread-rooms.top-unread-rooms {
    top: 60px;
}

.unread-rooms.bottom-unread-rooms {
    bottom: 70px;
}

.unread-rooms i {
    margin-left: 5px;
    font-size: 12px;
}



.account-box {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
.account-box .info {
    background-color: #404040;
}

.account-box .info {
    position: relative;
    z-index: 100;
    padding: 10px 0 10px 18px;
    height: 100%;
}

.status-offline,.icon-at.status-offline {
    color: rgba(150,150,150,0.5);
}

.status-online,.icon-at.status-online {
    color: #35ac19;
}

.status-busy,.icon-at.status-busy {
    color: #d30230;
}

.status-away,.icon-at.status-away {
    color: #fcb316;
}
.account-box .info .thumb {
    position: relative;
    float: left;
    padding: 0;
    width: 42px;
    height: 42px;
}
.hidden{ display: none; }
/*头像*/
.avatar {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
.avatar .avatar-image {
    background-color: transparent;
}
.avatar .avatar-image {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    min-width: 20px;
    min-height: 20px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
/*·*/
.account-box .info.status-online .thumb:after {
    border-color: #2e9616;
    background-color: #35ac19;
}
.account-box .info .thumb:after {
    position: absolute;
    top: 18px;
    left: -14px;
    z-index: 10;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    content: " ";
}

.account-box .info .data {
    position: relative;
    float: left;
    padding: 0 25px 0 10px;
    width: calc(100% - 60px);
    height: 100%;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
}
.account-box .info h4 {
    color: #bcbcbc;
}
.account-box .info h4 {
    position: relative;
    display: block;
    overflow: hidden;
    margin-top: 3px;
    width: 130px;
    text-align: left;
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    -webkit-transition: color 0.15s ease-out;
    transition: color 0.15s ease-out;
}

.arrow {
    top: calc(50% - 13px);
    z-index: 100;
    display: block;
    width: 25px;
    height: 25px;
    -lh-property: 0;
}
.arrow {
    position: absolute;
    top: 18px;
    right: 8px;
    z-index: 1000;
    cursor: pointer;
}
.arrow:before,.arrow:after {
    position: absolute;
    top: calc(50% - 5px);
    left: calc(50% - 5px);
    display: block;
    width: 2px;
    height: 10px;
    content: " ";
    -lh-property: 0;
    ;-lh-property: 0;
}

.arrow:before {
    -webkit-transition: -webkit-transform 0.185s ease-out, background 0.15s ease-out;
    transition: -webkit-transform 0.185s ease-out,-moz-transform 0.185s ease-out,-o-transform 0.185s ease-out,transform 0.185s ease-out, background 0.15s ease-out;
    -webkit-transform: rotate(135deg) translateX(-4px);
    transform: rotate(135deg) translateX(-4px);
}

.arrow:after {
    -webkit-transition: -webkit-transform 0.185s ease-out, background 0.15s ease-out;
    transition: -webkit-transform 0.185s ease-out,-moz-transform 0.185s ease-out,-o-transform 0.185s ease-out,transform 0.185s ease-out, background 0.15s ease-out;
    -webkit-transform: rotate(-135deg) translateX(-4px);
    transform: rotate(-135deg) translateX(-4px);
}

.arrow.left:before {
    -webkit-transform: rotate(45deg) translateY(-4px);
    transform: rotate(45deg) translateY(-4px);
}

.arrow.left:after {
    -webkit-transform: rotate(-45deg) translateY(4px);
    transform: rotate(-45deg) translateY(4px);
}

.arrow.top:before {
    -webkit-transform: rotate(-135deg) translateX(2px) translateY(-2px);
    transform: rotate(-135deg) translateX(2px) translateY(-2px);
}

.arrow.top:after {
    -webkit-transform: rotate(135deg) translateX(-2px) translateY(-2px);
    transform: rotate(135deg) translateX(-2px) translateY(-2px);
}

.arrow.bottom:before {
    -webkit-transform: rotate(-45deg) translateX(-2px) translateY(-2px);
    transform: rotate(-45deg) translateX(-2px) translateY(-2px);
}

.arrow.bottom:after {
    -webkit-transform: rotate(45deg) translateX(2px) translateY(-2px);
    transform: rotate(45deg) translateX(2px) translateY(-2px);
}

.arrow.close:before {
    -webkit-transform: rotate(-135deg) translateX(0px) translateY(0);
    transform: rotate(-135deg) translateX(0px) translateY(0);
}

.arrow.close:after {
    -webkit-transform: rotate(135deg) translateX(0px) translateY(0);
    transform: rotate(135deg) translateX(0px) translateY(0);
}
.arrow:before, .arrow:after {
    background-color: #bcbcbc;
}

.account-box .options {
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 99;
    overflow-x: hidden;
    overflow-y: auto;
    padding-top: 15px;
    width: 260px;
    height: calc(100% -  115px);
    transition: -webkit-transform 0.3s cubic-bezier(0.5, 0, 0.1, 1),-moz-transform 0.3s cubic-bezier(0.5, 0, 0.1, 1),-o-transform 0.3s cubic-bezier(0.5, 0, 0.1, 1),transform 0.3s cubic-bezier(0.5, 0, 0.1, 1);
    direction: rtl;
    -webkit-overflow-scrolling: touch;
    -lh-property: 0;
    ;-webkit-transition: -webkit-transform 0.3s cubic-bezier(0.5, 0, 0.1, 1);
}

.account-box .options.animated-hidden {
    -webkit-transform: translateY(-100%) translateY(-50px);
    transform: translateY(-100%) translateY(-50px);
}

.account-box .options>.wrapper {
    direction: ltr;
}

.account-box .options .status {
    position: relative;
    padding-left: 38px;
}

.account-box .options .status:after {
    position: absolute;
    top: calc(50% - 8px);
    left: 18px;
    z-index: 5;
    display: block;
    width: 13px;
    height: 13px;
    border: 1px solid;
    border-radius: 50%;
    content: " ";
    -lh-property: 0;
}

.account-box .options span.soon {
    position: absolute;
    top: 17px;
    right: -30px;
    width: 100px;
    font-size: 10px;
}

.account-box .options i {
    display: inline-block;
    margin-left: 0 -1px 0 1px;
    width: 26px;
    text-align: center;
}

.account-box .options button,.account-box .options a {
    position: relative;
    display: table;
    padding: 15px 12px;
    width: 100%;
    text-decoration: none;
    line-height: 1;
}

.account-box .options button:hover,.account-box .options a:hover {
    text-decoration: none;
}

.account-box .options .icon-logout:before {
    margin-right: 0;
}

.account-box .options .icon-camera:before {
    margin-left: 1px;
}

</style>
