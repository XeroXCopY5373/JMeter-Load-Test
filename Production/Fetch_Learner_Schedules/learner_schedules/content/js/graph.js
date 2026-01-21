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
        data: {"result": {"minY": 160.0, "minX": 0.0, "maxY": 1786.0, "series": [{"data": [[0.0, 160.0], [0.1, 169.0], [0.2, 173.0], [0.3, 176.0], [0.4, 178.0], [0.5, 183.0], [0.6, 187.0], [0.7, 189.0], [0.8, 190.0], [0.9, 192.0], [1.0, 197.0], [1.1, 197.0], [1.2, 199.0], [1.3, 200.0], [1.4, 202.0], [1.5, 206.0], [1.6, 214.0], [1.7, 220.0], [1.8, 222.0], [1.9, 224.0], [2.0, 228.0], [2.1, 230.0], [2.2, 236.0], [2.3, 237.0], [2.4, 238.0], [2.5, 239.0], [2.6, 240.0], [2.7, 244.0], [2.8, 250.0], [2.9, 256.0], [3.0, 258.0], [3.1, 262.0], [3.2, 264.0], [3.3, 269.0], [3.4, 271.0], [3.5, 275.0], [3.6, 279.0], [3.7, 281.0], [3.8, 287.0], [3.9, 289.0], [4.0, 292.0], [4.1, 295.0], [4.2, 297.0], [4.3, 302.0], [4.4, 304.0], [4.5, 310.0], [4.6, 317.0], [4.7, 319.0], [4.8, 328.0], [4.9, 330.0], [5.0, 334.0], [5.1, 336.0], [5.2, 337.0], [5.3, 338.0], [5.4, 342.0], [5.5, 345.0], [5.6, 346.0], [5.7, 348.0], [5.8, 350.0], [5.9, 353.0], [6.0, 358.0], [6.1, 365.0], [6.2, 370.0], [6.3, 375.0], [6.4, 384.0], [6.5, 386.0], [6.6, 391.0], [6.7, 394.0], [6.8, 398.0], [6.9, 403.0], [7.0, 408.0], [7.1, 414.0], [7.2, 419.0], [7.3, 419.0], [7.4, 424.0], [7.5, 428.0], [7.6, 430.0], [7.7, 432.0], [7.8, 439.0], [7.9, 445.0], [8.0, 448.0], [8.1, 453.0], [8.2, 458.0], [8.3, 461.0], [8.4, 464.0], [8.5, 472.0], [8.6, 474.0], [8.7, 476.0], [8.8, 478.0], [8.9, 487.0], [9.0, 489.0], [9.1, 491.0], [9.2, 495.0], [9.3, 497.0], [9.4, 498.0], [9.5, 502.0], [9.6, 510.0], [9.7, 512.0], [9.8, 513.0], [9.9, 516.0], [10.0, 518.0], [10.1, 529.0], [10.2, 534.0], [10.3, 536.0], [10.4, 540.0], [10.5, 545.0], [10.6, 548.0], [10.7, 551.0], [10.8, 555.0], [10.9, 557.0], [11.0, 564.0], [11.1, 566.0], [11.2, 572.0], [11.3, 578.0], [11.4, 581.0], [11.5, 582.0], [11.6, 584.0], [11.7, 585.0], [11.8, 587.0], [11.9, 589.0], [12.0, 592.0], [12.1, 599.0], [12.2, 602.0], [12.3, 604.0], [12.4, 610.0], [12.5, 612.0], [12.6, 615.0], [12.7, 619.0], [12.8, 624.0], [12.9, 627.0], [13.0, 629.0], [13.1, 630.0], [13.2, 630.0], [13.3, 631.0], [13.4, 632.0], [13.5, 640.0], [13.6, 650.0], [13.7, 655.0], [13.8, 666.0], [13.9, 674.0], [14.0, 680.0], [14.1, 684.0], [14.2, 689.0], [14.3, 692.0], [14.4, 693.0], [14.5, 698.0], [14.6, 704.0], [14.7, 707.0], [14.8, 709.0], [14.9, 714.0], [15.0, 718.0], [15.1, 719.0], [15.2, 723.0], [15.3, 725.0], [15.4, 726.0], [15.5, 728.0], [15.6, 732.0], [15.7, 732.0], [15.8, 739.0], [15.9, 745.0], [16.0, 750.0], [16.1, 755.0], [16.2, 756.0], [16.3, 760.0], [16.4, 762.0], [16.5, 771.0], [16.6, 776.0], [16.7, 780.0], [16.8, 783.0], [16.9, 786.0], [17.0, 793.0], [17.1, 795.0], [17.2, 800.0], [17.3, 802.0], [17.4, 810.0], [17.5, 816.0], [17.6, 818.0], [17.7, 821.0], [17.8, 825.0], [17.9, 835.0], [18.0, 842.0], [18.1, 843.0], [18.2, 846.0], [18.3, 850.0], [18.4, 852.0], [18.5, 856.0], [18.6, 859.0], [18.7, 861.0], [18.8, 864.0], [18.9, 869.0], [19.0, 880.0], [19.1, 880.0], [19.2, 882.0], [19.3, 883.0], [19.4, 887.0], [19.5, 889.0], [19.6, 893.0], [19.7, 895.0], [19.8, 904.0], [19.9, 907.0], [20.0, 917.0], [20.1, 921.0], [20.2, 924.0], [20.3, 927.0], [20.4, 930.0], [20.5, 932.0], [20.6, 934.0], [20.7, 938.0], [20.8, 948.0], [20.9, 952.0], [21.0, 958.0], [21.1, 959.0], [21.2, 960.0], [21.3, 961.0], [21.4, 967.0], [21.5, 967.0], [21.6, 971.0], [21.7, 972.0], [21.8, 977.0], [21.9, 978.0], [22.0, 984.0], [22.1, 986.0], [22.2, 989.0], [22.3, 990.0], [22.4, 995.0], [22.5, 999.0], [22.6, 999.0], [22.7, 1001.0], [22.8, 1012.0], [22.9, 1020.0], [23.0, 1027.0], [23.1, 1039.0], [23.2, 1042.0], [23.3, 1044.0], [23.4, 1050.0], [23.5, 1053.0], [23.6, 1058.0], [23.7, 1062.0], [23.8, 1067.0], [23.9, 1069.0], [24.0, 1071.0], [24.1, 1072.0], [24.2, 1076.0], [24.3, 1079.0], [24.4, 1081.0], [24.5, 1081.0], [24.6, 1083.0], [24.7, 1087.0], [24.8, 1088.0], [24.9, 1090.0], [25.0, 1093.0], [25.1, 1094.0], [25.2, 1097.0], [25.3, 1098.0], [25.4, 1098.0], [25.5, 1100.0], [25.6, 1101.0], [25.7, 1106.0], [25.8, 1108.0], [25.9, 1110.0], [26.0, 1111.0], [26.1, 1111.0], [26.2, 1113.0], [26.3, 1115.0], [26.4, 1117.0], [26.5, 1118.0], [26.6, 1119.0], [26.7, 1119.0], [26.8, 1120.0], [26.9, 1122.0], [27.0, 1123.0], [27.1, 1125.0], [27.2, 1125.0], [27.3, 1126.0], [27.4, 1127.0], [27.5, 1128.0], [27.6, 1128.0], [27.7, 1128.0], [27.8, 1129.0], [27.9, 1129.0], [28.0, 1130.0], [28.1, 1130.0], [28.2, 1131.0], [28.3, 1131.0], [28.4, 1131.0], [28.5, 1132.0], [28.6, 1132.0], [28.7, 1133.0], [28.8, 1133.0], [28.9, 1135.0], [29.0, 1135.0], [29.1, 1135.0], [29.2, 1136.0], [29.3, 1136.0], [29.4, 1138.0], [29.5, 1138.0], [29.6, 1139.0], [29.7, 1139.0], [29.8, 1140.0], [29.9, 1140.0], [30.0, 1140.0], [30.1, 1140.0], [30.2, 1141.0], [30.3, 1141.0], [30.4, 1142.0], [30.5, 1142.0], [30.6, 1143.0], [30.7, 1144.0], [30.8, 1144.0], [30.9, 1146.0], [31.0, 1146.0], [31.1, 1147.0], [31.2, 1147.0], [31.3, 1148.0], [31.4, 1148.0], [31.5, 1148.0], [31.6, 1149.0], [31.7, 1149.0], [31.8, 1149.0], [31.9, 1150.0], [32.0, 1150.0], [32.1, 1150.0], [32.2, 1150.0], [32.3, 1151.0], [32.4, 1151.0], [32.5, 1151.0], [32.6, 1151.0], [32.7, 1152.0], [32.8, 1153.0], [32.9, 1153.0], [33.0, 1154.0], [33.1, 1154.0], [33.2, 1154.0], [33.3, 1154.0], [33.4, 1155.0], [33.5, 1155.0], [33.6, 1156.0], [33.7, 1156.0], [33.8, 1157.0], [33.9, 1157.0], [34.0, 1158.0], [34.1, 1158.0], [34.2, 1158.0], [34.3, 1158.0], [34.4, 1159.0], [34.5, 1159.0], [34.6, 1159.0], [34.7, 1159.0], [34.8, 1159.0], [34.9, 1159.0], [35.0, 1159.0], [35.1, 1159.0], [35.2, 1160.0], [35.3, 1160.0], [35.4, 1160.0], [35.5, 1160.0], [35.6, 1161.0], [35.7, 1161.0], [35.8, 1161.0], [35.9, 1161.0], [36.0, 1161.0], [36.1, 1162.0], [36.2, 1162.0], [36.3, 1162.0], [36.4, 1163.0], [36.5, 1163.0], [36.6, 1164.0], [36.7, 1165.0], [36.8, 1165.0], [36.9, 1166.0], [37.0, 1167.0], [37.1, 1167.0], [37.2, 1167.0], [37.3, 1168.0], [37.4, 1168.0], [37.5, 1168.0], [37.6, 1168.0], [37.7, 1169.0], [37.8, 1169.0], [37.9, 1169.0], [38.0, 1169.0], [38.1, 1169.0], [38.2, 1169.0], [38.3, 1170.0], [38.4, 1170.0], [38.5, 1170.0], [38.6, 1170.0], [38.7, 1170.0], [38.8, 1171.0], [38.9, 1171.0], [39.0, 1171.0], [39.1, 1171.0], [39.2, 1171.0], [39.3, 1172.0], [39.4, 1172.0], [39.5, 1172.0], [39.6, 1173.0], [39.7, 1173.0], [39.8, 1173.0], [39.9, 1174.0], [40.0, 1174.0], [40.1, 1174.0], [40.2, 1175.0], [40.3, 1175.0], [40.4, 1175.0], [40.5, 1176.0], [40.6, 1176.0], [40.7, 1176.0], [40.8, 1176.0], [40.9, 1177.0], [41.0, 1177.0], [41.1, 1177.0], [41.2, 1177.0], [41.3, 1178.0], [41.4, 1178.0], [41.5, 1178.0], [41.6, 1178.0], [41.7, 1178.0], [41.8, 1179.0], [41.9, 1179.0], [42.0, 1179.0], [42.1, 1179.0], [42.2, 1179.0], [42.3, 1179.0], [42.4, 1179.0], [42.5, 1179.0], [42.6, 1180.0], [42.7, 1180.0], [42.8, 1180.0], [42.9, 1180.0], [43.0, 1180.0], [43.1, 1180.0], [43.2, 1180.0], [43.3, 1181.0], [43.4, 1181.0], [43.5, 1181.0], [43.6, 1181.0], [43.7, 1181.0], [43.8, 1181.0], [43.9, 1182.0], [44.0, 1182.0], [44.1, 1182.0], [44.2, 1182.0], [44.3, 1183.0], [44.4, 1183.0], [44.5, 1183.0], [44.6, 1184.0], [44.7, 1184.0], [44.8, 1184.0], [44.9, 1184.0], [45.0, 1184.0], [45.1, 1184.0], [45.2, 1185.0], [45.3, 1185.0], [45.4, 1185.0], [45.5, 1186.0], [45.6, 1186.0], [45.7, 1186.0], [45.8, 1186.0], [45.9, 1187.0], [46.0, 1187.0], [46.1, 1187.0], [46.2, 1187.0], [46.3, 1188.0], [46.4, 1188.0], [46.5, 1188.0], [46.6, 1188.0], [46.7, 1188.0], [46.8, 1188.0], [46.9, 1188.0], [47.0, 1188.0], [47.1, 1189.0], [47.2, 1189.0], [47.3, 1189.0], [47.4, 1189.0], [47.5, 1189.0], [47.6, 1189.0], [47.7, 1189.0], [47.8, 1190.0], [47.9, 1190.0], [48.0, 1190.0], [48.1, 1190.0], [48.2, 1190.0], [48.3, 1190.0], [48.4, 1190.0], [48.5, 1190.0], [48.6, 1191.0], [48.7, 1191.0], [48.8, 1191.0], [48.9, 1191.0], [49.0, 1191.0], [49.1, 1191.0], [49.2, 1191.0], [49.3, 1192.0], [49.4, 1192.0], [49.5, 1192.0], [49.6, 1192.0], [49.7, 1193.0], [49.8, 1193.0], [49.9, 1193.0], [50.0, 1193.0], [50.1, 1194.0], [50.2, 1194.0], [50.3, 1194.0], [50.4, 1195.0], [50.5, 1195.0], [50.6, 1195.0], [50.7, 1195.0], [50.8, 1195.0], [50.9, 1196.0], [51.0, 1196.0], [51.1, 1196.0], [51.2, 1197.0], [51.3, 1197.0], [51.4, 1197.0], [51.5, 1197.0], [51.6, 1198.0], [51.7, 1198.0], [51.8, 1198.0], [51.9, 1198.0], [52.0, 1198.0], [52.1, 1198.0], [52.2, 1198.0], [52.3, 1198.0], [52.4, 1199.0], [52.5, 1199.0], [52.6, 1199.0], [52.7, 1199.0], [52.8, 1199.0], [52.9, 1199.0], [53.0, 1199.0], [53.1, 1199.0], [53.2, 1200.0], [53.3, 1200.0], [53.4, 1200.0], [53.5, 1200.0], [53.6, 1200.0], [53.7, 1200.0], [53.8, 1200.0], [53.9, 1200.0], [54.0, 1201.0], [54.1, 1201.0], [54.2, 1201.0], [54.3, 1201.0], [54.4, 1201.0], [54.5, 1201.0], [54.6, 1201.0], [54.7, 1201.0], [54.8, 1202.0], [54.9, 1202.0], [55.0, 1202.0], [55.1, 1202.0], [55.2, 1202.0], [55.3, 1202.0], [55.4, 1203.0], [55.5, 1203.0], [55.6, 1203.0], [55.7, 1204.0], [55.8, 1204.0], [55.9, 1204.0], [56.0, 1204.0], [56.1, 1205.0], [56.2, 1205.0], [56.3, 1205.0], [56.4, 1206.0], [56.5, 1206.0], [56.6, 1206.0], [56.7, 1206.0], [56.8, 1207.0], [56.9, 1207.0], [57.0, 1207.0], [57.1, 1207.0], [57.2, 1207.0], [57.3, 1207.0], [57.4, 1208.0], [57.5, 1208.0], [57.6, 1208.0], [57.7, 1208.0], [57.8, 1208.0], [57.9, 1208.0], [58.0, 1209.0], [58.1, 1209.0], [58.2, 1209.0], [58.3, 1209.0], [58.4, 1209.0], [58.5, 1209.0], [58.6, 1209.0], [58.7, 1209.0], [58.8, 1209.0], [58.9, 1210.0], [59.0, 1210.0], [59.1, 1210.0], [59.2, 1210.0], [59.3, 1210.0], [59.4, 1210.0], [59.5, 1210.0], [59.6, 1210.0], [59.7, 1211.0], [59.8, 1211.0], [59.9, 1211.0], [60.0, 1211.0], [60.1, 1211.0], [60.2, 1211.0], [60.3, 1211.0], [60.4, 1211.0], [60.5, 1212.0], [60.6, 1212.0], [60.7, 1212.0], [60.8, 1212.0], [60.9, 1212.0], [61.0, 1213.0], [61.1, 1213.0], [61.2, 1214.0], [61.3, 1214.0], [61.4, 1214.0], [61.5, 1214.0], [61.6, 1214.0], [61.7, 1214.0], [61.8, 1215.0], [61.9, 1215.0], [62.0, 1215.0], [62.1, 1215.0], [62.2, 1216.0], [62.3, 1217.0], [62.4, 1217.0], [62.5, 1217.0], [62.6, 1217.0], [62.7, 1217.0], [62.8, 1217.0], [62.9, 1218.0], [63.0, 1218.0], [63.1, 1218.0], [63.2, 1218.0], [63.3, 1218.0], [63.4, 1218.0], [63.5, 1218.0], [63.6, 1219.0], [63.7, 1219.0], [63.8, 1219.0], [63.9, 1219.0], [64.0, 1219.0], [64.1, 1219.0], [64.2, 1219.0], [64.3, 1219.0], [64.4, 1219.0], [64.5, 1219.0], [64.6, 1219.0], [64.7, 1220.0], [64.8, 1220.0], [64.9, 1220.0], [65.0, 1220.0], [65.1, 1220.0], [65.2, 1220.0], [65.3, 1220.0], [65.4, 1220.0], [65.5, 1221.0], [65.6, 1221.0], [65.7, 1221.0], [65.8, 1221.0], [65.9, 1221.0], [66.0, 1221.0], [66.1, 1221.0], [66.2, 1222.0], [66.3, 1222.0], [66.4, 1222.0], [66.5, 1222.0], [66.6, 1222.0], [66.7, 1222.0], [66.8, 1222.0], [66.9, 1223.0], [67.0, 1223.0], [67.1, 1223.0], [67.2, 1223.0], [67.3, 1223.0], [67.4, 1223.0], [67.5, 1224.0], [67.6, 1224.0], [67.7, 1224.0], [67.8, 1224.0], [67.9, 1225.0], [68.0, 1225.0], [68.1, 1225.0], [68.2, 1225.0], [68.3, 1226.0], [68.4, 1226.0], [68.5, 1226.0], [68.6, 1227.0], [68.7, 1227.0], [68.8, 1227.0], [68.9, 1228.0], [69.0, 1228.0], [69.1, 1228.0], [69.2, 1228.0], [69.3, 1228.0], [69.4, 1228.0], [69.5, 1229.0], [69.6, 1229.0], [69.7, 1229.0], [69.8, 1229.0], [69.9, 1229.0], [70.0, 1229.0], [70.1, 1229.0], [70.2, 1229.0], [70.3, 1230.0], [70.4, 1230.0], [70.5, 1230.0], [70.6, 1230.0], [70.7, 1230.0], [70.8, 1230.0], [70.9, 1230.0], [71.0, 1230.0], [71.1, 1230.0], [71.2, 1231.0], [71.3, 1231.0], [71.4, 1231.0], [71.5, 1231.0], [71.6, 1231.0], [71.7, 1231.0], [71.8, 1231.0], [71.9, 1231.0], [72.0, 1232.0], [72.1, 1232.0], [72.2, 1232.0], [72.3, 1232.0], [72.4, 1232.0], [72.5, 1232.0], [72.6, 1233.0], [72.7, 1233.0], [72.8, 1233.0], [72.9, 1233.0], [73.0, 1234.0], [73.1, 1234.0], [73.2, 1234.0], [73.3, 1234.0], [73.4, 1235.0], [73.5, 1235.0], [73.6, 1235.0], [73.7, 1236.0], [73.8, 1236.0], [73.9, 1236.0], [74.0, 1236.0], [74.1, 1237.0], [74.2, 1237.0], [74.3, 1237.0], [74.4, 1237.0], [74.5, 1237.0], [74.6, 1237.0], [74.7, 1238.0], [74.8, 1238.0], [74.9, 1238.0], [75.0, 1238.0], [75.1, 1238.0], [75.2, 1238.0], [75.3, 1239.0], [75.4, 1239.0], [75.5, 1239.0], [75.6, 1239.0], [75.7, 1239.0], [75.8, 1240.0], [75.9, 1240.0], [76.0, 1240.0], [76.1, 1240.0], [76.2, 1240.0], [76.3, 1240.0], [76.4, 1240.0], [76.5, 1240.0], [76.6, 1241.0], [76.7, 1241.0], [76.8, 1241.0], [76.9, 1241.0], [77.0, 1241.0], [77.1, 1241.0], [77.2, 1242.0], [77.3, 1242.0], [77.4, 1242.0], [77.5, 1242.0], [77.6, 1242.0], [77.7, 1243.0], [77.8, 1243.0], [77.9, 1243.0], [78.0, 1243.0], [78.1, 1243.0], [78.2, 1244.0], [78.3, 1244.0], [78.4, 1244.0], [78.5, 1245.0], [78.6, 1245.0], [78.7, 1246.0], [78.8, 1246.0], [78.9, 1246.0], [79.0, 1246.0], [79.1, 1247.0], [79.2, 1247.0], [79.3, 1247.0], [79.4, 1248.0], [79.5, 1248.0], [79.6, 1248.0], [79.7, 1248.0], [79.8, 1248.0], [79.9, 1249.0], [80.0, 1249.0], [80.1, 1249.0], [80.2, 1249.0], [80.3, 1249.0], [80.4, 1250.0], [80.5, 1250.0], [80.6, 1250.0], [80.7, 1250.0], [80.8, 1250.0], [80.9, 1250.0], [81.0, 1251.0], [81.1, 1251.0], [81.2, 1251.0], [81.3, 1251.0], [81.4, 1252.0], [81.5, 1252.0], [81.6, 1253.0], [81.7, 1253.0], [81.8, 1253.0], [81.9, 1254.0], [82.0, 1255.0], [82.1, 1255.0], [82.2, 1256.0], [82.3, 1257.0], [82.4, 1257.0], [82.5, 1257.0], [82.6, 1258.0], [82.7, 1258.0], [82.8, 1258.0], [82.9, 1258.0], [83.0, 1258.0], [83.1, 1258.0], [83.2, 1259.0], [83.3, 1259.0], [83.4, 1259.0], [83.5, 1259.0], [83.6, 1259.0], [83.7, 1260.0], [83.8, 1260.0], [83.9, 1260.0], [84.0, 1260.0], [84.1, 1261.0], [84.2, 1261.0], [84.3, 1261.0], [84.4, 1261.0], [84.5, 1261.0], [84.6, 1261.0], [84.7, 1262.0], [84.8, 1262.0], [84.9, 1263.0], [85.0, 1263.0], [85.1, 1265.0], [85.2, 1265.0], [85.3, 1266.0], [85.4, 1266.0], [85.5, 1267.0], [85.6, 1267.0], [85.7, 1268.0], [85.8, 1268.0], [85.9, 1268.0], [86.0, 1268.0], [86.1, 1268.0], [86.2, 1269.0], [86.3, 1269.0], [86.4, 1269.0], [86.5, 1270.0], [86.6, 1270.0], [86.7, 1270.0], [86.8, 1270.0], [86.9, 1270.0], [87.0, 1271.0], [87.1, 1271.0], [87.2, 1271.0], [87.3, 1271.0], [87.4, 1272.0], [87.5, 1272.0], [87.6, 1273.0], [87.7, 1273.0], [87.8, 1273.0], [87.9, 1273.0], [88.0, 1273.0], [88.1, 1274.0], [88.2, 1275.0], [88.3, 1275.0], [88.4, 1276.0], [88.5, 1276.0], [88.6, 1276.0], [88.7, 1277.0], [88.8, 1277.0], [88.9, 1278.0], [89.0, 1278.0], [89.1, 1279.0], [89.2, 1279.0], [89.3, 1280.0], [89.4, 1280.0], [89.5, 1280.0], [89.6, 1280.0], [89.7, 1280.0], [89.8, 1281.0], [89.9, 1281.0], [90.0, 1282.0], [90.1, 1282.0], [90.2, 1282.0], [90.3, 1282.0], [90.4, 1282.0], [90.5, 1283.0], [90.6, 1284.0], [90.7, 1285.0], [90.8, 1285.0], [90.9, 1287.0], [91.0, 1288.0], [91.1, 1289.0], [91.2, 1289.0], [91.3, 1289.0], [91.4, 1290.0], [91.5, 1290.0], [91.6, 1290.0], [91.7, 1291.0], [91.8, 1291.0], [91.9, 1292.0], [92.0, 1293.0], [92.1, 1294.0], [92.2, 1294.0], [92.3, 1295.0], [92.4, 1296.0], [92.5, 1298.0], [92.6, 1298.0], [92.7, 1299.0], [92.8, 1299.0], [92.9, 1300.0], [93.0, 1300.0], [93.1, 1301.0], [93.2, 1302.0], [93.3, 1302.0], [93.4, 1303.0], [93.5, 1305.0], [93.6, 1306.0], [93.7, 1307.0], [93.8, 1308.0], [93.9, 1310.0], [94.0, 1310.0], [94.1, 1311.0], [94.2, 1313.0], [94.3, 1315.0], [94.4, 1317.0], [94.5, 1317.0], [94.6, 1319.0], [94.7, 1320.0], [94.8, 1321.0], [94.9, 1322.0], [95.0, 1324.0], [95.1, 1326.0], [95.2, 1327.0], [95.3, 1327.0], [95.4, 1330.0], [95.5, 1330.0], [95.6, 1331.0], [95.7, 1336.0], [95.8, 1339.0], [95.9, 1340.0], [96.0, 1342.0], [96.1, 1348.0], [96.2, 1350.0], [96.3, 1354.0], [96.4, 1362.0], [96.5, 1365.0], [96.6, 1367.0], [96.7, 1369.0], [96.8, 1370.0], [96.9, 1371.0], [97.0, 1374.0], [97.1, 1383.0], [97.2, 1388.0], [97.3, 1390.0], [97.4, 1398.0], [97.5, 1407.0], [97.6, 1415.0], [97.7, 1419.0], [97.8, 1421.0], [97.9, 1427.0], [98.0, 1438.0], [98.1, 1445.0], [98.2, 1448.0], [98.3, 1451.0], [98.4, 1458.0], [98.5, 1459.0], [98.6, 1466.0], [98.7, 1468.0], [98.8, 1470.0], [98.9, 1473.0], [99.0, 1482.0], [99.1, 1486.0], [99.2, 1489.0], [99.3, 1496.0], [99.4, 1501.0], [99.5, 1509.0], [99.6, 1534.0], [99.7, 1545.0], [99.8, 1594.0], [99.9, 1669.0], [100.0, 1786.0]], "isOverall": false, "label": "api/learner/fetch_schedule?user_uli=MMA-89-928-17051-001", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 1272.0, "series": [{"data": [[600.0, 78.0], [700.0, 83.0], [200.0, 95.0], [800.0, 83.0], [900.0, 94.0], [1000.0, 90.0], [1100.0, 885.0], [300.0, 84.0], [1200.0, 1272.0], [1300.0, 146.0], [1400.0, 62.0], [1500.0, 14.0], [400.0, 82.0], [100.0, 41.0], [1600.0, 4.0], [1700.0, 2.0], [500.0, 86.0]], "isOverall": false, "label": "api/learner/fetch_schedule?user_uli=MMA-89-928-17051-001", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 17.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3080.0, "series": [{"data": [[0.0, 29.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 75.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 17.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3080.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.156928213689485, "minX": 1.76895468E12, "maxY": 20.0, "series": [{"data": [[1.76895474E12, 19.200819672131146], [1.76895486E12, 19.709677419354836], [1.76895468E12, 8.156928213689485], [1.7689548E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895486E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 217.9782608695653, "minX": 1.0, "maxY": 1227.6169026168998, "series": [{"data": [[2.0, 357.65], [8.0, 500.06249999999994], [9.0, 554.2199999999999], [10.0, 610.7916666666667], [11.0, 665.1886792452827], [3.0, 217.9782608695653], [12.0, 726.8541666666667], [13.0, 786.3800000000001], [14.0, 861.1250000000001], [15.0, 907.576923076923], [1.0, 391.8571428571429], [4.0, 246.27450980392163], [16.0, 965.4600000000002], [17.0, 1034.9166666666667], [18.0, 1102.5306122448978], [19.0, 1132.862745098039], [5.0, 304.2999999999999], [20.0, 1227.6169026168998], [6.0, 367.98039215686276], [7.0, 438.6400000000001]], "isOverall": false, "label": "api/learner/fetch_schedule?user_uli=MMA-89-928-17051-001", "isController": false}, {"data": [[17.481099656357443, 1074.271790065608]], "isOverall": false, "label": "api/learner/fetch_schedule?user_uli=MMA-89-928-17051-001-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3244.5833333333335, "minX": 1.76895468E12, "maxY": 38671.416666666664, "series": [{"data": [[1.76895474E12, 38671.416666666664], [1.76895486E12, 25747.916666666668], [1.76895468E12, 23694.416666666668], [1.7689548E12, 38631.63333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76895474E12, 5286.666666666667], [1.76895486E12, 3526.25], [1.76895468E12, 3244.5833333333335], [1.7689548E12, 5281.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895486E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 503.066777963272, "minX": 1.76895468E12, "maxY": 1226.6564102564112, "series": [{"data": [[1.76895474E12, 1173.391393442623], [1.76895486E12, 1223.021505376346], [1.76895468E12, 503.066777963272], [1.7689548E12, 1226.6564102564112]], "isOverall": false, "label": "api/learner/fetch_schedule?user_uli=MMA-89-928-17051-001", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895486E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 502.8914858096829, "minX": 1.76895468E12, "maxY": 1226.5907692307692, "series": [{"data": [[1.76895474E12, 1173.3053278688533], [1.76895486E12, 1222.9477726574496], [1.76895468E12, 502.8914858096829], [1.7689548E12, 1226.5907692307692]], "isOverall": false, "label": "api/learner/fetch_schedule?user_uli=MMA-89-928-17051-001", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895486E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.6789554531490014, "minX": 1.76895468E12, "maxY": 3.6327212020033404, "series": [{"data": [[1.76895474E12, 2.3370901639344295], [1.76895486E12, 1.6789554531490014], [1.76895468E12, 3.6327212020033404], [1.7689548E12, 2.5702564102564085]], "isOverall": false, "label": "api/learner/fetch_schedule?user_uli=MMA-89-928-17051-001", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895486E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 221.0, "minX": 1.76895468E12, "maxY": 1786.0, "series": [{"data": [[1.76895474E12, 1545.0], [1.76895486E12, 1750.0], [1.76895468E12, 995.0], [1.7689548E12, 1786.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76895474E12, 1342.0], [1.76895486E12, 1343.0], [1.76895468E12, 221.0], [1.7689548E12, 1290.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76895474E12, 1531.5], [1.76895486E12, 1559.0], [1.76895468E12, 432.2000000000001], [1.7689548E12, 1667.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76895474E12, 1545.0], [1.76895486E12, 1750.0], [1.76895468E12, 995.0], [1.7689548E12, 1786.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76895474E12, 1450.5], [1.76895486E12, 1466.0], [1.76895468E12, 306.0], [1.7689548E12, 1450.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76895474E12, 1540.05], [1.76895486E12, 1662.3999999999999], [1.76895468E12, 699.0999999999997], [1.7689548E12, 1734.85]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895486E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 180.0, "minX": 2.0, "maxY": 1484.0, "series": [{"data": [[2.0, 609.5], [4.0, 364.0], [17.0, 1415.0], [9.0, 1369.0], [18.0, 1398.0], [19.0, 1484.0], [3.0, 353.0], [6.0, 319.5], [12.0, 1468.5], [13.0, 1449.5], [7.0, 290.0], [15.0, 1458.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 1157.5], [17.0, 1184.0], [9.0, 180.0], [18.0, 1212.0], [19.0, 1195.0], [20.0, 1186.5], [10.0, 1218.0], [11.0, 1210.0], [12.0, 1241.0], [13.0, 1211.0], [14.0, 1209.0], [15.0, 1163.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 179.0, "minX": 2.0, "maxY": 1484.0, "series": [{"data": [[2.0, 605.5], [4.0, 364.0], [17.0, 1415.0], [9.0, 1369.0], [18.0, 1398.0], [19.0, 1484.0], [3.0, 353.0], [6.0, 319.5], [12.0, 1468.5], [13.0, 1449.0], [7.0, 289.0], [15.0, 1458.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 1157.5], [17.0, 1183.0], [9.0, 179.0], [18.0, 1212.0], [19.0, 1195.0], [20.0, 1186.5], [10.0, 1218.0], [11.0, 1210.0], [12.0, 1241.0], [13.0, 1211.0], [14.0, 1209.0], [15.0, 1163.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.216666666666667, "minX": 1.76895468E12, "maxY": 16.366666666666667, "series": [{"data": [[1.76895474E12, 16.366666666666667], [1.76895486E12, 10.516666666666667], [1.76895468E12, 10.216666666666667], [1.7689548E12, 16.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895486E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76895468E12, "maxY": 15.766666666666667, "series": [{"data": [[1.76895474E12, 0.5], [1.76895486E12, 0.5166666666666667], [1.76895468E12, 0.5], [1.7689548E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76895474E12, 15.766666666666667], [1.76895486E12, 10.333333333333334], [1.76895468E12, 9.483333333333333], [1.7689548E12, 15.75]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895486E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76895468E12, "maxY": 15.766666666666667, "series": [{"data": [[1.76895474E12, 0.5], [1.76895486E12, 0.5166666666666667], [1.76895468E12, 0.5], [1.7689548E12, 0.5]], "isOverall": false, "label": "api/learner/fetch_schedule?user_uli=MMA-89-928-17051-001-success", "isController": false}, {"data": [[1.76895474E12, 15.766666666666667], [1.76895486E12, 10.333333333333334], [1.76895468E12, 9.483333333333333], [1.7689548E12, 15.75]], "isOverall": false, "label": "api/learner/fetch_schedule?user_uli=MMA-89-928-17051-001-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895486E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76895468E12, "maxY": 15.766666666666667, "series": [{"data": [[1.76895474E12, 0.5], [1.76895486E12, 0.5166666666666667], [1.76895468E12, 0.5], [1.7689548E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76895474E12, 15.766666666666667], [1.76895486E12, 10.333333333333334], [1.76895468E12, 9.483333333333333], [1.7689548E12, 15.75]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895486E12, "title": "Total Transactions Per Second"}},
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

