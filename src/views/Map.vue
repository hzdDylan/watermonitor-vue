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
            
            // let mouseoverTxt = "txt" + " " + parseInt(Math.random() * 1000,10) + "套" ;
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
                const mouseoverTxt = `
                longitude: ${item.longitude}<br>
                latitude: ${item.latitude}<br>
                name: ${item.name}<br>
                degree: ${item.degree}<br>
                PH: ${item.PH}<br>
                temperature": ${item.temperature}<br>
                EC: ${item.EC}
                `;

                const myCompOverlay = new ComplexCustomOverlay(location, item.degree, mouseoverTxt, color);

                mp.addOverlay(myCompOverlay);
            })

            // var myCompOverlay1 = new ComplexCustomOverlay(new BMap.Point(126.630, 45.750), "Ⅰ",mouseoverTxt, "#67C23A");
            // var myCompOverlay2 = new ComplexCustomOverlay(new BMap.Point(126.640, 45.750), "Ⅱ",mouseoverTxt, "#409EFF");
            // var myCompOverlay3 = new ComplexCustomOverlay(new BMap.Point(126.650, 45.750), "Ⅲ",mouseoverTxt, "#E6A23C");
            // var myCompOverlay4 = new ComplexCustomOverlay(new BMap.Point(126.660, 45.750), "Ⅳ",mouseoverTxt, "#F56C6C");
            // var myCompOverlay5 = new ComplexCustomOverlay(new BMap.Point(126.670, 45.750), "Ⅴ",mouseoverTxt, "#303133");

            // let myCompOverlay = [];
            // for(let i=0; i<1; i++) {
                
            // }

            // mp.addOverlay(myCompOverlay1);
            // mp.addOverlay(myCompOverlay2);
            // mp.addOverlay(myCompOverlay3);
            // mp.addOverlay(myCompOverlay4);
            // mp.addOverlay(myCompOverlay5);
            
        },

        
    }
}
</script>