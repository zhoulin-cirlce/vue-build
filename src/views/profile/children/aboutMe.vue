<template>
    <div class="index">
        <header-Top :head-title="'关于我们'" :go-back="true"></header-Top>
        <div class="content">
            <div class="ment-main">
                <div class="profile">
                    <div class="about">
                        <p>（1）人品宝－高年化收益率的“活期” 51人品作为一款理财app，拥有两款增值服务，分别为存钱罐和人品宝。 [图片]人品宝 存钱罐，用户将钱存入存钱罐，即不需要任何手续费，又可以获得一定的收益，并且与银行的活期存款利息相比收益更高（获得3.5%－5%的货币基金收益）。存钱罐投资项目为与北京新浪支付科技有限公司合作的汇添富基金管理股份有限公司的货币基金。 人品宝，当用户将钱存入存钱罐后，系统将会自动为其排入竞购人品宝的队列中。而人品宝，收益高于存钱罐，并且做到绝对的本息保障以及随时取现，2小时到账。人品宝的年化收益率长期维持在8.1%，同时偶尔还会出现双倍收益。人品宝项目为平台及平台合作机构发布的p2p理财产品。</p>
                        <p>（2）人品贷－变现用户的人品影响力 51人品贷，是国内最先实现计算用户人品价值的功能，用户可以通过通讯录、微博、财力等信息（社交影响力）获得人品值。凭借人品值，可以获得借贷额度，并提出相应额度的借贷申请，审核通过即可借款。用户可以在借贷页面看到借贷情况的最新进展。</p>
                    </div>
                </div>
            </div>
    
        </div>
    
    </div>
</template>

<script>
    import headerTop from 'components/headTop'
    export default {
        data() {
            return {
    
            }
        },
        components: {
            headerTop
        }
    }
</script>

<style lang="scss" scoped>
    .index{
        z-index:101
    }
    .about p{
        padding: 10px;
        line-height: 30px;
    }
</style>