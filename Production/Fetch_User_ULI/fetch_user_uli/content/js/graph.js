/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 160.0, "minX": 0.0, "maxY": 2908.0, "series": [{"data": [[0.0, 160.0], [0.1, 169.0], [0.2, 173.0], [0.3, 177.0], [0.4, 179.0], [0.5, 180.0], [0.6, 182.0], [0.7, 183.0], [0.8, 185.0], [0.9, 189.0], [1.0, 194.0], [1.1, 200.0], [1.2, 202.0], [1.3, 203.0], [1.4, 206.0], [1.5, 208.0], [1.6, 217.0], [1.7, 220.0], [1.8, 222.0], [1.9, 227.0], [2.0, 229.0], [2.1, 232.0], [2.2, 236.0], [2.3, 240.0], [2.4, 243.0], [2.5, 249.0], [2.6, 256.0], [2.7, 261.0], [2.8, 265.0], [2.9, 267.0], [3.0, 270.0], [3.1, 273.0], [3.2, 281.0], [3.3, 287.0], [3.4, 289.0], [3.5, 290.0], [3.6, 293.0], [3.7, 297.0], [3.8, 301.0], [3.9, 301.0], [4.0, 304.0], [4.1, 305.0], [4.2, 309.0], [4.3, 311.0], [4.4, 311.0], [4.5, 319.0], [4.6, 321.0], [4.7, 326.0], [4.8, 329.0], [4.9, 333.0], [5.0, 335.0], [5.1, 337.0], [5.2, 338.0], [5.3, 344.0], [5.4, 350.0], [5.5, 355.0], [5.6, 357.0], [5.7, 360.0], [5.8, 364.0], [5.9, 366.0], [6.0, 372.0], [6.1, 373.0], [6.2, 375.0], [6.3, 376.0], [6.4, 380.0], [6.5, 383.0], [6.6, 387.0], [6.7, 389.0], [6.8, 392.0], [6.9, 396.0], [7.0, 401.0], [7.1, 403.0], [7.2, 407.0], [7.3, 410.0], [7.4, 412.0], [7.5, 415.0], [7.6, 416.0], [7.7, 420.0], [7.8, 432.0], [7.9, 437.0], [8.0, 439.0], [8.1, 444.0], [8.2, 447.0], [8.3, 450.0], [8.4, 462.0], [8.5, 467.0], [8.6, 470.0], [8.7, 477.0], [8.8, 480.0], [8.9, 481.0], [9.0, 483.0], [9.1, 485.0], [9.2, 488.0], [9.3, 490.0], [9.4, 492.0], [9.5, 498.0], [9.6, 501.0], [9.7, 507.0], [9.8, 507.0], [9.9, 511.0], [10.0, 519.0], [10.1, 523.0], [10.2, 528.0], [10.3, 530.0], [10.4, 532.0], [10.5, 537.0], [10.6, 539.0], [10.7, 540.0], [10.8, 543.0], [10.9, 550.0], [11.0, 554.0], [11.1, 557.0], [11.2, 561.0], [11.3, 567.0], [11.4, 570.0], [11.5, 572.0], [11.6, 577.0], [11.7, 579.0], [11.8, 586.0], [11.9, 588.0], [12.0, 592.0], [12.1, 599.0], [12.2, 603.0], [12.3, 607.0], [12.4, 610.0], [12.5, 614.0], [12.6, 622.0], [12.7, 624.0], [12.8, 629.0], [12.9, 633.0], [13.0, 635.0], [13.1, 637.0], [13.2, 644.0], [13.3, 648.0], [13.4, 653.0], [13.5, 655.0], [13.6, 660.0], [13.7, 666.0], [13.8, 673.0], [13.9, 677.0], [14.0, 682.0], [14.1, 687.0], [14.2, 692.0], [14.3, 694.0], [14.4, 696.0], [14.5, 698.0], [14.6, 700.0], [14.7, 706.0], [14.8, 708.0], [14.9, 713.0], [15.0, 716.0], [15.1, 719.0], [15.2, 724.0], [15.3, 727.0], [15.4, 732.0], [15.5, 738.0], [15.6, 740.0], [15.7, 744.0], [15.8, 746.0], [15.9, 749.0], [16.0, 756.0], [16.1, 759.0], [16.2, 762.0], [16.3, 766.0], [16.4, 767.0], [16.5, 769.0], [16.6, 771.0], [16.7, 776.0], [16.8, 778.0], [16.9, 781.0], [17.0, 782.0], [17.1, 784.0], [17.2, 787.0], [17.3, 790.0], [17.4, 796.0], [17.5, 805.0], [17.6, 807.0], [17.7, 809.0], [17.8, 811.0], [17.9, 814.0], [18.0, 821.0], [18.1, 824.0], [18.2, 829.0], [18.3, 834.0], [18.4, 837.0], [18.5, 839.0], [18.6, 840.0], [18.7, 844.0], [18.8, 847.0], [18.9, 850.0], [19.0, 852.0], [19.1, 856.0], [19.2, 862.0], [19.3, 872.0], [19.4, 874.0], [19.5, 877.0], [19.6, 881.0], [19.7, 882.0], [19.8, 888.0], [19.9, 892.0], [20.0, 894.0], [20.1, 899.0], [20.2, 902.0], [20.3, 911.0], [20.4, 914.0], [20.5, 921.0], [20.6, 922.0], [20.7, 923.0], [20.8, 928.0], [20.9, 931.0], [21.0, 932.0], [21.1, 939.0], [21.2, 941.0], [21.3, 942.0], [21.4, 946.0], [21.5, 949.0], [21.6, 950.0], [21.7, 951.0], [21.8, 955.0], [21.9, 958.0], [22.0, 963.0], [22.1, 967.0], [22.2, 970.0], [22.3, 971.0], [22.4, 975.0], [22.5, 977.0], [22.6, 982.0], [22.7, 988.0], [22.8, 990.0], [22.9, 992.0], [23.0, 998.0], [23.1, 1006.0], [23.2, 1012.0], [23.3, 1014.0], [23.4, 1017.0], [23.5, 1019.0], [23.6, 1023.0], [23.7, 1030.0], [23.8, 1036.0], [23.9, 1039.0], [24.0, 1043.0], [24.1, 1046.0], [24.2, 1049.0], [24.3, 1050.0], [24.4, 1051.0], [24.5, 1054.0], [24.6, 1054.0], [24.7, 1057.0], [24.8, 1058.0], [24.9, 1060.0], [25.0, 1066.0], [25.1, 1069.0], [25.2, 1070.0], [25.3, 1073.0], [25.4, 1075.0], [25.5, 1078.0], [25.6, 1080.0], [25.7, 1081.0], [25.8, 1083.0], [25.9, 1087.0], [26.0, 1088.0], [26.1, 1091.0], [26.2, 1093.0], [26.3, 1093.0], [26.4, 1095.0], [26.5, 1098.0], [26.6, 1099.0], [26.7, 1100.0], [26.8, 1104.0], [26.9, 1106.0], [27.0, 1108.0], [27.1, 1110.0], [27.2, 1111.0], [27.3, 1111.0], [27.4, 1114.0], [27.5, 1115.0], [27.6, 1116.0], [27.7, 1118.0], [27.8, 1119.0], [27.9, 1119.0], [28.0, 1119.0], [28.1, 1120.0], [28.2, 1120.0], [28.3, 1122.0], [28.4, 1123.0], [28.5, 1123.0], [28.6, 1124.0], [28.7, 1126.0], [28.8, 1126.0], [28.9, 1127.0], [29.0, 1128.0], [29.1, 1128.0], [29.2, 1130.0], [29.3, 1130.0], [29.4, 1130.0], [29.5, 1131.0], [29.6, 1131.0], [29.7, 1133.0], [29.8, 1133.0], [29.9, 1134.0], [30.0, 1134.0], [30.1, 1135.0], [30.2, 1135.0], [30.3, 1136.0], [30.4, 1136.0], [30.5, 1138.0], [30.6, 1138.0], [30.7, 1139.0], [30.8, 1139.0], [30.9, 1139.0], [31.0, 1140.0], [31.1, 1141.0], [31.2, 1141.0], [31.3, 1141.0], [31.4, 1142.0], [31.5, 1142.0], [31.6, 1143.0], [31.7, 1143.0], [31.8, 1144.0], [31.9, 1144.0], [32.0, 1146.0], [32.1, 1146.0], [32.2, 1146.0], [32.3, 1148.0], [32.4, 1148.0], [32.5, 1148.0], [32.6, 1149.0], [32.7, 1149.0], [32.8, 1149.0], [32.9, 1149.0], [33.0, 1149.0], [33.1, 1150.0], [33.2, 1150.0], [33.3, 1150.0], [33.4, 1150.0], [33.5, 1150.0], [33.6, 1150.0], [33.7, 1151.0], [33.8, 1151.0], [33.9, 1152.0], [34.0, 1152.0], [34.1, 1152.0], [34.2, 1153.0], [34.3, 1153.0], [34.4, 1153.0], [34.5, 1154.0], [34.6, 1154.0], [34.7, 1154.0], [34.8, 1155.0], [34.9, 1156.0], [35.0, 1156.0], [35.1, 1157.0], [35.2, 1158.0], [35.3, 1158.0], [35.4, 1158.0], [35.5, 1159.0], [35.6, 1159.0], [35.7, 1159.0], [35.8, 1160.0], [35.9, 1160.0], [36.0, 1160.0], [36.1, 1160.0], [36.2, 1161.0], [36.3, 1161.0], [36.4, 1161.0], [36.5, 1161.0], [36.6, 1161.0], [36.7, 1162.0], [36.8, 1162.0], [36.9, 1163.0], [37.0, 1164.0], [37.1, 1164.0], [37.2, 1165.0], [37.3, 1165.0], [37.4, 1165.0], [37.5, 1166.0], [37.6, 1167.0], [37.7, 1167.0], [37.8, 1167.0], [37.9, 1168.0], [38.0, 1168.0], [38.1, 1168.0], [38.2, 1168.0], [38.3, 1169.0], [38.4, 1169.0], [38.5, 1169.0], [38.6, 1170.0], [38.7, 1170.0], [38.8, 1170.0], [38.9, 1170.0], [39.0, 1170.0], [39.1, 1171.0], [39.2, 1171.0], [39.3, 1171.0], [39.4, 1172.0], [39.5, 1172.0], [39.6, 1172.0], [39.7, 1173.0], [39.8, 1173.0], [39.9, 1173.0], [40.0, 1173.0], [40.1, 1174.0], [40.2, 1174.0], [40.3, 1175.0], [40.4, 1175.0], [40.5, 1175.0], [40.6, 1175.0], [40.7, 1176.0], [40.8, 1176.0], [40.9, 1176.0], [41.0, 1177.0], [41.1, 1177.0], [41.2, 1178.0], [41.3, 1178.0], [41.4, 1178.0], [41.5, 1178.0], [41.6, 1179.0], [41.7, 1179.0], [41.8, 1179.0], [41.9, 1180.0], [42.0, 1180.0], [42.1, 1180.0], [42.2, 1180.0], [42.3, 1180.0], [42.4, 1180.0], [42.5, 1180.0], [42.6, 1180.0], [42.7, 1181.0], [42.8, 1181.0], [42.9, 1181.0], [43.0, 1181.0], [43.1, 1181.0], [43.2, 1181.0], [43.3, 1181.0], [43.4, 1181.0], [43.5, 1181.0], [43.6, 1182.0], [43.7, 1182.0], [43.8, 1182.0], [43.9, 1182.0], [44.0, 1182.0], [44.1, 1183.0], [44.2, 1183.0], [44.3, 1183.0], [44.4, 1183.0], [44.5, 1184.0], [44.6, 1184.0], [44.7, 1184.0], [44.8, 1184.0], [44.9, 1185.0], [45.0, 1185.0], [45.1, 1185.0], [45.2, 1185.0], [45.3, 1185.0], [45.4, 1185.0], [45.5, 1185.0], [45.6, 1186.0], [45.7, 1186.0], [45.8, 1186.0], [45.9, 1186.0], [46.0, 1187.0], [46.1, 1187.0], [46.2, 1187.0], [46.3, 1187.0], [46.4, 1188.0], [46.5, 1188.0], [46.6, 1188.0], [46.7, 1188.0], [46.8, 1188.0], [46.9, 1188.0], [47.0, 1189.0], [47.1, 1189.0], [47.2, 1189.0], [47.3, 1189.0], [47.4, 1189.0], [47.5, 1189.0], [47.6, 1190.0], [47.7, 1190.0], [47.8, 1190.0], [47.9, 1190.0], [48.0, 1190.0], [48.1, 1190.0], [48.2, 1190.0], [48.3, 1190.0], [48.4, 1190.0], [48.5, 1190.0], [48.6, 1190.0], [48.7, 1190.0], [48.8, 1190.0], [48.9, 1191.0], [49.0, 1191.0], [49.1, 1191.0], [49.2, 1191.0], [49.3, 1191.0], [49.4, 1192.0], [49.5, 1192.0], [49.6, 1192.0], [49.7, 1192.0], [49.8, 1193.0], [49.9, 1193.0], [50.0, 1193.0], [50.1, 1193.0], [50.2, 1193.0], [50.3, 1194.0], [50.4, 1194.0], [50.5, 1194.0], [50.6, 1194.0], [50.7, 1195.0], [50.8, 1195.0], [50.9, 1195.0], [51.0, 1195.0], [51.1, 1195.0], [51.2, 1196.0], [51.3, 1196.0], [51.4, 1196.0], [51.5, 1197.0], [51.6, 1197.0], [51.7, 1197.0], [51.8, 1197.0], [51.9, 1198.0], [52.0, 1198.0], [52.1, 1198.0], [52.2, 1198.0], [52.3, 1198.0], [52.4, 1198.0], [52.5, 1199.0], [52.6, 1199.0], [52.7, 1199.0], [52.8, 1199.0], [52.9, 1199.0], [53.0, 1199.0], [53.1, 1199.0], [53.2, 1200.0], [53.3, 1200.0], [53.4, 1200.0], [53.5, 1200.0], [53.6, 1200.0], [53.7, 1200.0], [53.8, 1200.0], [53.9, 1200.0], [54.0, 1201.0], [54.1, 1201.0], [54.2, 1201.0], [54.3, 1201.0], [54.4, 1201.0], [54.5, 1201.0], [54.6, 1201.0], [54.7, 1202.0], [54.8, 1202.0], [54.9, 1202.0], [55.0, 1203.0], [55.1, 1203.0], [55.2, 1203.0], [55.3, 1203.0], [55.4, 1203.0], [55.5, 1204.0], [55.6, 1204.0], [55.7, 1204.0], [55.8, 1204.0], [55.9, 1205.0], [56.0, 1205.0], [56.1, 1205.0], [56.2, 1205.0], [56.3, 1205.0], [56.4, 1205.0], [56.5, 1206.0], [56.6, 1206.0], [56.7, 1206.0], [56.8, 1206.0], [56.9, 1206.0], [57.0, 1207.0], [57.1, 1207.0], [57.2, 1207.0], [57.3, 1207.0], [57.4, 1208.0], [57.5, 1208.0], [57.6, 1208.0], [57.7, 1208.0], [57.8, 1208.0], [57.9, 1208.0], [58.0, 1209.0], [58.1, 1209.0], [58.2, 1209.0], [58.3, 1209.0], [58.4, 1209.0], [58.5, 1209.0], [58.6, 1210.0], [58.7, 1210.0], [58.8, 1210.0], [58.9, 1210.0], [59.0, 1210.0], [59.1, 1210.0], [59.2, 1210.0], [59.3, 1210.0], [59.4, 1210.0], [59.5, 1210.0], [59.6, 1211.0], [59.7, 1211.0], [59.8, 1211.0], [59.9, 1211.0], [60.0, 1211.0], [60.1, 1212.0], [60.2, 1212.0], [60.3, 1212.0], [60.4, 1212.0], [60.5, 1213.0], [60.6, 1213.0], [60.7, 1213.0], [60.8, 1213.0], [60.9, 1213.0], [61.0, 1214.0], [61.1, 1214.0], [61.2, 1214.0], [61.3, 1214.0], [61.4, 1215.0], [61.5, 1215.0], [61.6, 1215.0], [61.7, 1215.0], [61.8, 1215.0], [61.9, 1215.0], [62.0, 1215.0], [62.1, 1216.0], [62.2, 1216.0], [62.3, 1216.0], [62.4, 1216.0], [62.5, 1217.0], [62.6, 1217.0], [62.7, 1217.0], [62.8, 1217.0], [62.9, 1217.0], [63.0, 1217.0], [63.1, 1217.0], [63.2, 1217.0], [63.3, 1218.0], [63.4, 1218.0], [63.5, 1218.0], [63.6, 1218.0], [63.7, 1219.0], [63.8, 1219.0], [63.9, 1219.0], [64.0, 1219.0], [64.1, 1219.0], [64.2, 1219.0], [64.3, 1219.0], [64.4, 1220.0], [64.5, 1220.0], [64.6, 1220.0], [64.7, 1220.0], [64.8, 1220.0], [64.9, 1220.0], [65.0, 1220.0], [65.1, 1220.0], [65.2, 1221.0], [65.3, 1221.0], [65.4, 1221.0], [65.5, 1221.0], [65.6, 1221.0], [65.7, 1222.0], [65.8, 1222.0], [65.9, 1222.0], [66.0, 1222.0], [66.1, 1222.0], [66.2, 1223.0], [66.3, 1224.0], [66.4, 1224.0], [66.5, 1224.0], [66.6, 1224.0], [66.7, 1224.0], [66.8, 1225.0], [66.9, 1225.0], [67.0, 1225.0], [67.1, 1225.0], [67.2, 1226.0], [67.3, 1226.0], [67.4, 1227.0], [67.5, 1227.0], [67.6, 1227.0], [67.7, 1228.0], [67.8, 1228.0], [67.9, 1228.0], [68.0, 1228.0], [68.1, 1228.0], [68.2, 1229.0], [68.3, 1229.0], [68.4, 1229.0], [68.5, 1229.0], [68.6, 1229.0], [68.7, 1229.0], [68.8, 1229.0], [68.9, 1229.0], [69.0, 1229.0], [69.1, 1230.0], [69.2, 1230.0], [69.3, 1230.0], [69.4, 1230.0], [69.5, 1230.0], [69.6, 1230.0], [69.7, 1230.0], [69.8, 1230.0], [69.9, 1230.0], [70.0, 1230.0], [70.1, 1230.0], [70.2, 1231.0], [70.3, 1231.0], [70.4, 1231.0], [70.5, 1231.0], [70.6, 1231.0], [70.7, 1232.0], [70.8, 1232.0], [70.9, 1232.0], [71.0, 1232.0], [71.1, 1232.0], [71.2, 1232.0], [71.3, 1233.0], [71.4, 1233.0], [71.5, 1233.0], [71.6, 1233.0], [71.7, 1234.0], [71.8, 1234.0], [71.9, 1234.0], [72.0, 1235.0], [72.1, 1235.0], [72.2, 1235.0], [72.3, 1235.0], [72.4, 1236.0], [72.5, 1236.0], [72.6, 1236.0], [72.7, 1236.0], [72.8, 1236.0], [72.9, 1237.0], [73.0, 1237.0], [73.1, 1237.0], [73.2, 1237.0], [73.3, 1238.0], [73.4, 1238.0], [73.5, 1238.0], [73.6, 1239.0], [73.7, 1239.0], [73.8, 1239.0], [73.9, 1239.0], [74.0, 1239.0], [74.1, 1239.0], [74.2, 1240.0], [74.3, 1240.0], [74.4, 1240.0], [74.5, 1240.0], [74.6, 1240.0], [74.7, 1240.0], [74.8, 1240.0], [74.9, 1240.0], [75.0, 1241.0], [75.1, 1241.0], [75.2, 1241.0], [75.3, 1241.0], [75.4, 1241.0], [75.5, 1242.0], [75.6, 1242.0], [75.7, 1242.0], [75.8, 1242.0], [75.9, 1243.0], [76.0, 1243.0], [76.1, 1243.0], [76.2, 1244.0], [76.3, 1244.0], [76.4, 1244.0], [76.5, 1245.0], [76.6, 1245.0], [76.7, 1245.0], [76.8, 1245.0], [76.9, 1246.0], [77.0, 1246.0], [77.1, 1246.0], [77.2, 1246.0], [77.3, 1246.0], [77.4, 1247.0], [77.5, 1247.0], [77.6, 1247.0], [77.7, 1247.0], [77.8, 1248.0], [77.9, 1248.0], [78.0, 1248.0], [78.1, 1249.0], [78.2, 1249.0], [78.3, 1249.0], [78.4, 1249.0], [78.5, 1249.0], [78.6, 1249.0], [78.7, 1250.0], [78.8, 1250.0], [78.9, 1250.0], [79.0, 1250.0], [79.1, 1250.0], [79.2, 1250.0], [79.3, 1251.0], [79.4, 1251.0], [79.5, 1251.0], [79.6, 1252.0], [79.7, 1252.0], [79.8, 1252.0], [79.9, 1252.0], [80.0, 1252.0], [80.1, 1253.0], [80.2, 1253.0], [80.3, 1253.0], [80.4, 1254.0], [80.5, 1254.0], [80.6, 1254.0], [80.7, 1254.0], [80.8, 1254.0], [80.9, 1255.0], [81.0, 1255.0], [81.1, 1255.0], [81.2, 1255.0], [81.3, 1256.0], [81.4, 1256.0], [81.5, 1256.0], [81.6, 1257.0], [81.7, 1257.0], [81.8, 1258.0], [81.9, 1258.0], [82.0, 1258.0], [82.1, 1259.0], [82.2, 1259.0], [82.3, 1259.0], [82.4, 1259.0], [82.5, 1259.0], [82.6, 1260.0], [82.7, 1260.0], [82.8, 1260.0], [82.9, 1260.0], [83.0, 1261.0], [83.1, 1261.0], [83.2, 1261.0], [83.3, 1261.0], [83.4, 1261.0], [83.5, 1262.0], [83.6, 1262.0], [83.7, 1262.0], [83.8, 1263.0], [83.9, 1263.0], [84.0, 1263.0], [84.1, 1263.0], [84.2, 1264.0], [84.3, 1265.0], [84.4, 1265.0], [84.5, 1266.0], [84.6, 1266.0], [84.7, 1267.0], [84.8, 1267.0], [84.9, 1268.0], [85.0, 1269.0], [85.1, 1269.0], [85.2, 1270.0], [85.3, 1271.0], [85.4, 1271.0], [85.5, 1271.0], [85.6, 1271.0], [85.7, 1272.0], [85.8, 1272.0], [85.9, 1272.0], [86.0, 1273.0], [86.1, 1273.0], [86.2, 1274.0], [86.3, 1274.0], [86.4, 1275.0], [86.5, 1276.0], [86.6, 1276.0], [86.7, 1276.0], [86.8, 1277.0], [86.9, 1278.0], [87.0, 1278.0], [87.1, 1279.0], [87.2, 1279.0], [87.3, 1279.0], [87.4, 1280.0], [87.5, 1280.0], [87.6, 1280.0], [87.7, 1281.0], [87.8, 1281.0], [87.9, 1281.0], [88.0, 1281.0], [88.1, 1282.0], [88.2, 1282.0], [88.3, 1284.0], [88.4, 1284.0], [88.5, 1285.0], [88.6, 1286.0], [88.7, 1286.0], [88.8, 1287.0], [88.9, 1287.0], [89.0, 1288.0], [89.1, 1289.0], [89.2, 1289.0], [89.3, 1290.0], [89.4, 1290.0], [89.5, 1291.0], [89.6, 1291.0], [89.7, 1292.0], [89.8, 1292.0], [89.9, 1293.0], [90.0, 1293.0], [90.1, 1293.0], [90.2, 1294.0], [90.3, 1296.0], [90.4, 1296.0], [90.5, 1296.0], [90.6, 1297.0], [90.7, 1297.0], [90.8, 1298.0], [90.9, 1299.0], [91.0, 1299.0], [91.1, 1300.0], [91.2, 1300.0], [91.3, 1301.0], [91.4, 1301.0], [91.5, 1303.0], [91.6, 1304.0], [91.7, 1307.0], [91.8, 1307.0], [91.9, 1309.0], [92.0, 1310.0], [92.1, 1310.0], [92.2, 1311.0], [92.3, 1314.0], [92.4, 1316.0], [92.5, 1319.0], [92.6, 1319.0], [92.7, 1320.0], [92.8, 1322.0], [92.9, 1323.0], [93.0, 1326.0], [93.1, 1326.0], [93.2, 1326.0], [93.3, 1327.0], [93.4, 1328.0], [93.5, 1329.0], [93.6, 1331.0], [93.7, 1331.0], [93.8, 1333.0], [93.9, 1336.0], [94.0, 1338.0], [94.1, 1340.0], [94.2, 1341.0], [94.3, 1347.0], [94.4, 1348.0], [94.5, 1351.0], [94.6, 1353.0], [94.7, 1357.0], [94.8, 1360.0], [94.9, 1360.0], [95.0, 1365.0], [95.1, 1367.0], [95.2, 1370.0], [95.3, 1377.0], [95.4, 1381.0], [95.5, 1386.0], [95.6, 1387.0], [95.7, 1387.0], [95.8, 1388.0], [95.9, 1388.0], [96.0, 1392.0], [96.1, 1397.0], [96.2, 1400.0], [96.3, 1407.0], [96.4, 1408.0], [96.5, 1417.0], [96.6, 1421.0], [96.7, 1423.0], [96.8, 1428.0], [96.9, 1433.0], [97.0, 1438.0], [97.1, 1440.0], [97.2, 1445.0], [97.3, 1446.0], [97.4, 1457.0], [97.5, 1459.0], [97.6, 1461.0], [97.7, 1472.0], [97.8, 1478.0], [97.9, 1482.0], [98.0, 1489.0], [98.1, 1495.0], [98.2, 1499.0], [98.3, 1503.0], [98.4, 1508.0], [98.5, 1518.0], [98.6, 1519.0], [98.7, 1520.0], [98.8, 1520.0], [98.9, 1521.0], [99.0, 1529.0], [99.1, 1542.0], [99.2, 1577.0], [99.3, 1598.0], [99.4, 1612.0], [99.5, 1628.0], [99.6, 1643.0], [99.7, 1701.0], [99.8, 1728.0], [99.9, 1835.0]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1211.0, "series": [{"data": [[600.0, 77.0], [700.0, 93.0], [2900.0, 1.0], [200.0, 85.0], [800.0, 85.0], [900.0, 92.0], [1000.0, 115.0], [1100.0, 846.0], [300.0, 101.0], [1200.0, 1211.0], [1300.0, 163.0], [1400.0, 65.0], [1500.0, 35.0], [400.0, 85.0], [100.0, 35.0], [1600.0, 12.0], [1700.0, 6.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 82.0], [2000.0, 1.0]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3073.0, "series": [{"data": [[0.0, 29.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 70.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3073.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 11.397365532382004, "minX": 1.76898198E12, "maxY": 20.0, "series": [{"data": [[1.7689821E12, 20.0], [1.76898198E12, 11.397365532382004], [1.76898216E12, 19.434650455927052], [1.76898204E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76898216E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 231.68888888888893, "minX": 1.0, "maxY": 1232.168534482757, "series": [{"data": [[2.0, 314.3684210526316], [8.0, 483.09803921568636], [9.0, 533.0961538461538], [10.0, 624.1000000000001], [11.0, 683.531914893617], [3.0, 231.68888888888893], [12.0, 742.3000000000001], [13.0, 789.408163265306], [14.0, 843.2407407407408], [15.0, 902.3191489361701], [1.0, 576.1666666666667], [4.0, 251.85999999999996], [16.0, 958.9607843137258], [17.0, 1018.6458333333331], [18.0, 1088.7307692307688], [19.0, 1131.5384615384621], [5.0, 307.2941176470589], [20.0, 1232.168534482757], [6.0, 371.19999999999993], [7.0, 437.2708333333334]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001", "isController": false}, {"data": [[17.486528822055114, 1077.3768796992456]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1699.8333333333333, "minX": 1.76898198E12, "maxY": 38934.53333333333, "series": [{"data": [[1.7689821E12, 38934.53333333333], [1.76898198E12, 36110.316666666666], [1.76898216E12, 12981.233333333334], [1.76898204E12, 38454.36666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7689821E12, 5073.666666666667], [1.76898198E12, 4706.833333333333], [1.76898216E12, 1699.8333333333333], [1.76898204E12, 5011.666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76898216E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 691.4259055982437, "minX": 1.76898198E12, "maxY": 1240.4468085106396, "series": [{"data": [[1.7689821E12, 1223.9633401222009], [1.76898198E12, 691.4259055982437], [1.76898216E12, 1240.4468085106396], [1.76898204E12, 1236.1432989690722]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76898216E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 691.3424807903406, "minX": 1.76898198E12, "maxY": 1240.3890577507602, "series": [{"data": [[1.7689821E12, 1223.5855397148682], [1.76898198E12, 691.3424807903406], [1.76898216E12, 1240.3890577507602], [1.76898204E12, 1236.0680412371137]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76898216E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2.261398176291794, "minX": 1.76898198E12, "maxY": 4.38762886597938, "series": [{"data": [[1.7689821E12, 2.4633401221995963], [1.76898198E12, 3.6377607025246976], [1.76898216E12, 2.261398176291794], [1.76898204E12, 4.38762886597938]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76898216E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 249.0, "minX": 1.76898198E12, "maxY": 1643.0, "series": [{"data": [[1.7689821E12, 1548.0], [1.76898198E12, 1368.0], [1.76898216E12, 1643.0], [1.76898204E12, 1596.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7689821E12, 1522.0], [1.76898198E12, 389.3], [1.76898216E12, 1528.9], [1.76898204E12, 1540.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7689821E12, 1548.0], [1.76898198E12, 1368.0], [1.76898216E12, 1643.0], [1.76898204E12, 1596.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7689821E12, 1544.0], [1.76898198E12, 839.4499999999994], [1.76898216E12, 1618.25], [1.76898204E12, 1591.05]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7689821E12, 1365.0], [1.76898198E12, 249.0], [1.76898216E12, 1373.0], [1.76898204E12, 1347.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7689821E12, 1446.0], [1.76898198E12, 311.0], [1.76898216E12, 1454.5], [1.76898204E12, 1451.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76898216E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 182.0, "minX": 1.0, "maxY": 1497.0, "series": [{"data": [[1.0, 1368.0], [17.0, 1497.0], [9.0, 308.0], [19.0, 1472.0], [5.0, 316.0], [3.0, 311.0], [6.0, 342.0], [13.0, 1446.0], [7.0, 301.0], [14.0, 1426.0], [15.0, 1445.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1222.5], [9.0, 182.0], [10.0, 1282.5], [11.0, 1246.0], [12.0, 1218.0], [3.0, 799.0], [13.0, 1216.5], [14.0, 1188.0], [15.0, 1181.0], [16.0, 1088.0], [17.0, 1172.5], [18.0, 1196.5], [19.0, 1208.0], [5.0, 951.0], [20.0, 1217.5], [21.0, 1386.0], [23.0, 1161.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 182.0, "minX": 1.0, "maxY": 1497.0, "series": [{"data": [[1.0, 1364.0], [17.0, 1497.0], [9.0, 308.0], [19.0, 1472.0], [5.0, 316.0], [3.0, 311.0], [6.0, 342.0], [13.0, 1446.0], [7.0, 301.0], [14.0, 1426.0], [15.0, 1445.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1222.5], [9.0, 182.0], [10.0, 1282.5], [11.0, 1246.0], [12.0, 1218.0], [3.0, 799.0], [13.0, 1216.5], [14.0, 1188.0], [15.0, 1181.0], [16.0, 1088.0], [17.0, 1172.0], [18.0, 1196.5], [19.0, 1208.0], [5.0, 951.0], [20.0, 1217.5], [21.0, 1386.0], [23.0, 1161.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76898192E12, "maxY": 16.366666666666667, "series": [{"data": [[1.76898192E12, 0.016666666666666666], [1.7689821E12, 16.366666666666667], [1.76898198E12, 15.5], [1.76898216E12, 5.15], [1.76898204E12, 16.166666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76898216E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76898198E12, "maxY": 15.883333333333333, "series": [{"data": [[1.7689821E12, 0.48333333333333334], [1.76898198E12, 0.5], [1.76898216E12, 0.5], [1.76898204E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7689821E12, 15.883333333333333], [1.76898198E12, 14.683333333333334], [1.76898216E12, 4.983333333333333], [1.76898204E12, 15.666666666666666]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76898216E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76898198E12, "maxY": 15.883333333333333, "series": [{"data": [[1.7689821E12, 15.883333333333333], [1.76898198E12, 14.683333333333334], [1.76898216E12, 4.983333333333333], [1.76898204E12, 15.666666666666666]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001-failure", "isController": false}, {"data": [[1.7689821E12, 0.48333333333333334], [1.76898198E12, 0.5], [1.76898216E12, 0.5], [1.76898204E12, 0.5]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76898216E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76898198E12, "maxY": 15.883333333333333, "series": [{"data": [[1.7689821E12, 0.48333333333333334], [1.76898198E12, 0.5], [1.76898216E12, 0.5], [1.76898204E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7689821E12, 15.883333333333333], [1.76898198E12, 14.683333333333334], [1.76898216E12, 4.983333333333333], [1.76898204E12, 15.666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76898216E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

