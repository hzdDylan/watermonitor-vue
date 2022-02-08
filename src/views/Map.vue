<template>
    <div>
        <div id="container" style="width:100%;height:500px"></div>
    </div>
</template>

<script>
import ComplexCustomOverlay from "@/components/maps/ComplexCustomOverlay.js"

export default {
    setup() {
        
    },
    mounted() {
        const mp = this.mapInit();  //地图初始化
        this.customOverlayPoints(mp);   //添加自定义点（
    },
    methods: {
        mapInit() {
            const map = new BMap.Map("container", {enableMapClick:false});
            let point = new BMap.Point(126.630, 45.750);
            map.centerAndZoom(point, 15);
            map.enableScrollWheelZoom(false);    // 鼠标滚轮缩放

            // 添加控件
            map.addControl(new BMap.NavigationControl());
            map.addControl(new BMap.ScaleControl());    
            map.addControl(new BMap.OverviewMapControl());    
            // map.addControl(new BMap.MapTypeControl());    

            return map;
        },
        
        customOverlayPoints(mp) {
            // 可用：颜色代码：五级黑色#303133 四级红色#F56C6C，三级橙色#E6A23C，二级蓝色#409EFF，一级绿色#67C23A
            
            const monitoringSite = this.$store.state.monitoringSite;
            monitoringSite.forEach((item, index) => {
                const location = new BMap.Point(item.longitude, item.latitude);
                const color = function() {
                    switch(item.degree) {
                        case "Ⅰ": return "#67C23A";
                        case "Ⅱ": return "#409EFF";
                        case "Ⅲ": return "#E6A23C";
                        case "Ⅳ": return "#F56C6C";
                        case "Ⅴ": return "#303133";
                    }
                    return "white"
                }();
                const infoTxt = `
                经纬度: (${item.longitude}, ${item.latitude})<br>
                站点名: ${item.name} , 预警等级: ${item.degree}<br>
                监测参数: <br>
                    PH: ${item.PH}<br>
                    temperature": ${item.temperature}<br>
                    EC: ${item.EC}<br>
                `;

                const myCompOverlay = new ComplexCustomOverlay(location, item.degree, infoTxt, color);

                mp.addOverlay(myCompOverlay);

                const timer = window.setInterval(() => {
                    console.log("刷新站点数据")
                    const infoText = infoTxt || myCompOverlay.this._infoText;
                    const div = myCompOverlay._infoDiv;
                    div.innerHTML = infoText;
                    myCompOverlay._infoWindow.setContent(div);
                }, 300000) //5分钟
            })
            
        },
    }
}
</script>