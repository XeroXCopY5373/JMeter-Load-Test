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
        data: {"result": {"minY": 161.0, "minX": 0.0, "maxY": 1715.0, "series": [{"data": [[0.0, 161.0], [0.1, 174.0], [0.2, 179.0], [0.3, 198.0], [0.4, 206.0], [0.5, 210.0], [0.6, 216.0], [0.7, 219.0], [0.8, 221.0], [0.9, 228.0], [1.0, 233.0], [1.1, 235.0], [1.2, 238.0], [1.3, 240.0], [1.4, 244.0], [1.5, 249.0], [1.6, 250.0], [1.7, 255.0], [1.8, 260.0], [1.9, 262.0], [2.0, 262.0], [2.1, 263.0], [2.2, 263.0], [2.3, 264.0], [2.4, 266.0], [2.5, 267.0], [2.6, 269.0], [2.7, 274.0], [2.8, 276.0], [2.9, 279.0], [3.0, 285.0], [3.1, 289.0], [3.2, 290.0], [3.3, 291.0], [3.4, 297.0], [3.5, 299.0], [3.6, 307.0], [3.7, 310.0], [3.8, 312.0], [3.9, 315.0], [4.0, 317.0], [4.1, 318.0], [4.2, 319.0], [4.3, 323.0], [4.4, 327.0], [4.5, 331.0], [4.6, 334.0], [4.7, 335.0], [4.8, 340.0], [4.9, 344.0], [5.0, 346.0], [5.1, 349.0], [5.2, 350.0], [5.3, 352.0], [5.4, 355.0], [5.5, 358.0], [5.6, 361.0], [5.7, 361.0], [5.8, 371.0], [5.9, 378.0], [6.0, 382.0], [6.1, 386.0], [6.2, 390.0], [6.3, 393.0], [6.4, 400.0], [6.5, 402.0], [6.6, 402.0], [6.7, 404.0], [6.8, 408.0], [6.9, 410.0], [7.0, 420.0], [7.1, 429.0], [7.2, 437.0], [7.3, 441.0], [7.4, 449.0], [7.5, 451.0], [7.6, 457.0], [7.7, 459.0], [7.8, 463.0], [7.9, 466.0], [8.0, 472.0], [8.1, 475.0], [8.2, 479.0], [8.3, 482.0], [8.4, 484.0], [8.5, 487.0], [8.6, 489.0], [8.7, 493.0], [8.8, 497.0], [8.9, 499.0], [9.0, 500.0], [9.1, 501.0], [9.2, 507.0], [9.3, 509.0], [9.4, 511.0], [9.5, 514.0], [9.6, 516.0], [9.7, 521.0], [9.8, 524.0], [9.9, 529.0], [10.0, 535.0], [10.1, 540.0], [10.2, 542.0], [10.3, 549.0], [10.4, 555.0], [10.5, 563.0], [10.6, 566.0], [10.7, 569.0], [10.8, 572.0], [10.9, 578.0], [11.0, 581.0], [11.1, 583.0], [11.2, 584.0], [11.3, 589.0], [11.4, 592.0], [11.5, 593.0], [11.6, 597.0], [11.7, 599.0], [11.8, 607.0], [11.9, 609.0], [12.0, 613.0], [12.1, 615.0], [12.2, 616.0], [12.3, 621.0], [12.4, 622.0], [12.5, 624.0], [12.6, 627.0], [12.7, 630.0], [12.8, 635.0], [12.9, 640.0], [13.0, 642.0], [13.1, 645.0], [13.2, 649.0], [13.3, 651.0], [13.4, 657.0], [13.5, 659.0], [13.6, 662.0], [13.7, 672.0], [13.8, 678.0], [13.9, 681.0], [14.0, 686.0], [14.1, 692.0], [14.2, 697.0], [14.3, 703.0], [14.4, 707.0], [14.5, 712.0], [14.6, 713.0], [14.7, 718.0], [14.8, 721.0], [14.9, 727.0], [15.0, 730.0], [15.1, 732.0], [15.2, 738.0], [15.3, 740.0], [15.4, 740.0], [15.5, 745.0], [15.6, 752.0], [15.7, 755.0], [15.8, 759.0], [15.9, 761.0], [16.0, 769.0], [16.1, 776.0], [16.2, 776.0], [16.3, 780.0], [16.4, 785.0], [16.5, 786.0], [16.6, 789.0], [16.7, 795.0], [16.8, 799.0], [16.9, 801.0], [17.0, 803.0], [17.1, 806.0], [17.2, 809.0], [17.3, 810.0], [17.4, 812.0], [17.5, 816.0], [17.6, 821.0], [17.7, 823.0], [17.8, 824.0], [17.9, 826.0], [18.0, 829.0], [18.1, 833.0], [18.2, 838.0], [18.3, 840.0], [18.4, 841.0], [18.5, 842.0], [18.6, 845.0], [18.7, 849.0], [18.8, 850.0], [18.9, 860.0], [19.0, 861.0], [19.1, 865.0], [19.2, 869.0], [19.3, 871.0], [19.4, 873.0], [19.5, 875.0], [19.6, 878.0], [19.7, 883.0], [19.8, 892.0], [19.9, 900.0], [20.0, 909.0], [20.1, 919.0], [20.2, 922.0], [20.3, 928.0], [20.4, 930.0], [20.5, 933.0], [20.6, 937.0], [20.7, 940.0], [20.8, 943.0], [20.9, 945.0], [21.0, 951.0], [21.1, 959.0], [21.2, 963.0], [21.3, 968.0], [21.4, 969.0], [21.5, 974.0], [21.6, 981.0], [21.7, 983.0], [21.8, 988.0], [21.9, 990.0], [22.0, 994.0], [22.1, 995.0], [22.2, 997.0], [22.3, 999.0], [22.4, 1001.0], [22.5, 1004.0], [22.6, 1009.0], [22.7, 1012.0], [22.8, 1013.0], [22.9, 1016.0], [23.0, 1018.0], [23.1, 1021.0], [23.2, 1025.0], [23.3, 1030.0], [23.4, 1032.0], [23.5, 1039.0], [23.6, 1041.0], [23.7, 1044.0], [23.8, 1055.0], [23.9, 1056.0], [24.0, 1060.0], [24.1, 1061.0], [24.2, 1065.0], [24.3, 1065.0], [24.4, 1070.0], [24.5, 1071.0], [24.6, 1073.0], [24.7, 1076.0], [24.8, 1077.0], [24.9, 1078.0], [25.0, 1081.0], [25.1, 1082.0], [25.2, 1083.0], [25.3, 1085.0], [25.4, 1087.0], [25.5, 1087.0], [25.6, 1089.0], [25.7, 1089.0], [25.8, 1090.0], [25.9, 1092.0], [26.0, 1094.0], [26.1, 1096.0], [26.2, 1097.0], [26.3, 1098.0], [26.4, 1099.0], [26.5, 1100.0], [26.6, 1102.0], [26.7, 1103.0], [26.8, 1104.0], [26.9, 1106.0], [27.0, 1106.0], [27.1, 1107.0], [27.2, 1107.0], [27.3, 1107.0], [27.4, 1109.0], [27.5, 1110.0], [27.6, 1110.0], [27.7, 1111.0], [27.8, 1111.0], [27.9, 1113.0], [28.0, 1113.0], [28.1, 1115.0], [28.2, 1115.0], [28.3, 1116.0], [28.4, 1118.0], [28.5, 1119.0], [28.6, 1119.0], [28.7, 1120.0], [28.8, 1121.0], [28.9, 1121.0], [29.0, 1121.0], [29.1, 1122.0], [29.2, 1122.0], [29.3, 1123.0], [29.4, 1123.0], [29.5, 1124.0], [29.6, 1125.0], [29.7, 1125.0], [29.8, 1126.0], [29.9, 1127.0], [30.0, 1127.0], [30.1, 1128.0], [30.2, 1129.0], [30.3, 1129.0], [30.4, 1129.0], [30.5, 1130.0], [30.6, 1130.0], [30.7, 1131.0], [30.8, 1131.0], [30.9, 1131.0], [31.0, 1131.0], [31.1, 1132.0], [31.2, 1133.0], [31.3, 1134.0], [31.4, 1134.0], [31.5, 1134.0], [31.6, 1135.0], [31.7, 1135.0], [31.8, 1136.0], [31.9, 1136.0], [32.0, 1137.0], [32.1, 1137.0], [32.2, 1138.0], [32.3, 1138.0], [32.4, 1139.0], [32.5, 1139.0], [32.6, 1140.0], [32.7, 1140.0], [32.8, 1140.0], [32.9, 1140.0], [33.0, 1141.0], [33.1, 1141.0], [33.2, 1142.0], [33.3, 1142.0], [33.4, 1142.0], [33.5, 1142.0], [33.6, 1143.0], [33.7, 1143.0], [33.8, 1144.0], [33.9, 1144.0], [34.0, 1144.0], [34.1, 1145.0], [34.2, 1146.0], [34.3, 1146.0], [34.4, 1147.0], [34.5, 1147.0], [34.6, 1148.0], [34.7, 1148.0], [34.8, 1148.0], [34.9, 1149.0], [35.0, 1149.0], [35.1, 1149.0], [35.2, 1149.0], [35.3, 1150.0], [35.4, 1150.0], [35.5, 1150.0], [35.6, 1150.0], [35.7, 1150.0], [35.8, 1151.0], [35.9, 1151.0], [36.0, 1151.0], [36.1, 1151.0], [36.2, 1152.0], [36.3, 1152.0], [36.4, 1152.0], [36.5, 1153.0], [36.6, 1153.0], [36.7, 1154.0], [36.8, 1154.0], [36.9, 1155.0], [37.0, 1155.0], [37.1, 1155.0], [37.2, 1156.0], [37.3, 1156.0], [37.4, 1156.0], [37.5, 1156.0], [37.6, 1157.0], [37.7, 1157.0], [37.8, 1158.0], [37.9, 1158.0], [38.0, 1158.0], [38.1, 1159.0], [38.2, 1159.0], [38.3, 1159.0], [38.4, 1159.0], [38.5, 1160.0], [38.6, 1160.0], [38.7, 1160.0], [38.8, 1160.0], [38.9, 1160.0], [39.0, 1161.0], [39.1, 1161.0], [39.2, 1161.0], [39.3, 1162.0], [39.4, 1162.0], [39.5, 1162.0], [39.6, 1162.0], [39.7, 1163.0], [39.8, 1163.0], [39.9, 1163.0], [40.0, 1163.0], [40.1, 1164.0], [40.2, 1164.0], [40.3, 1164.0], [40.4, 1165.0], [40.5, 1165.0], [40.6, 1165.0], [40.7, 1165.0], [40.8, 1166.0], [40.9, 1166.0], [41.0, 1166.0], [41.1, 1167.0], [41.2, 1167.0], [41.3, 1167.0], [41.4, 1167.0], [41.5, 1168.0], [41.6, 1168.0], [41.7, 1168.0], [41.8, 1169.0], [41.9, 1169.0], [42.0, 1169.0], [42.1, 1169.0], [42.2, 1169.0], [42.3, 1169.0], [42.4, 1169.0], [42.5, 1170.0], [42.6, 1170.0], [42.7, 1170.0], [42.8, 1170.0], [42.9, 1170.0], [43.0, 1171.0], [43.1, 1171.0], [43.2, 1171.0], [43.3, 1171.0], [43.4, 1171.0], [43.5, 1171.0], [43.6, 1172.0], [43.7, 1172.0], [43.8, 1172.0], [43.9, 1172.0], [44.0, 1173.0], [44.1, 1173.0], [44.2, 1173.0], [44.3, 1173.0], [44.4, 1174.0], [44.5, 1174.0], [44.6, 1174.0], [44.7, 1175.0], [44.8, 1175.0], [44.9, 1176.0], [45.0, 1176.0], [45.1, 1176.0], [45.2, 1176.0], [45.3, 1177.0], [45.4, 1177.0], [45.5, 1177.0], [45.6, 1178.0], [45.7, 1178.0], [45.8, 1178.0], [45.9, 1178.0], [46.0, 1178.0], [46.1, 1178.0], [46.2, 1178.0], [46.3, 1178.0], [46.4, 1179.0], [46.5, 1179.0], [46.6, 1179.0], [46.7, 1179.0], [46.8, 1179.0], [46.9, 1180.0], [47.0, 1180.0], [47.1, 1180.0], [47.2, 1180.0], [47.3, 1180.0], [47.4, 1181.0], [47.5, 1181.0], [47.6, 1181.0], [47.7, 1181.0], [47.8, 1181.0], [47.9, 1182.0], [48.0, 1182.0], [48.1, 1182.0], [48.2, 1182.0], [48.3, 1182.0], [48.4, 1183.0], [48.5, 1183.0], [48.6, 1183.0], [48.7, 1184.0], [48.8, 1184.0], [48.9, 1184.0], [49.0, 1184.0], [49.1, 1185.0], [49.2, 1185.0], [49.3, 1185.0], [49.4, 1185.0], [49.5, 1186.0], [49.6, 1186.0], [49.7, 1186.0], [49.8, 1187.0], [49.9, 1187.0], [50.0, 1187.0], [50.1, 1187.0], [50.2, 1188.0], [50.3, 1188.0], [50.4, 1188.0], [50.5, 1188.0], [50.6, 1188.0], [50.7, 1188.0], [50.8, 1189.0], [50.9, 1189.0], [51.0, 1189.0], [51.1, 1189.0], [51.2, 1189.0], [51.3, 1189.0], [51.4, 1189.0], [51.5, 1190.0], [51.6, 1190.0], [51.7, 1190.0], [51.8, 1190.0], [51.9, 1190.0], [52.0, 1190.0], [52.1, 1190.0], [52.2, 1190.0], [52.3, 1190.0], [52.4, 1190.0], [52.5, 1191.0], [52.6, 1191.0], [52.7, 1191.0], [52.8, 1191.0], [52.9, 1191.0], [53.0, 1192.0], [53.1, 1192.0], [53.2, 1192.0], [53.3, 1192.0], [53.4, 1192.0], [53.5, 1192.0], [53.6, 1193.0], [53.7, 1193.0], [53.8, 1193.0], [53.9, 1194.0], [54.0, 1194.0], [54.1, 1194.0], [54.2, 1194.0], [54.3, 1194.0], [54.4, 1195.0], [54.5, 1195.0], [54.6, 1195.0], [54.7, 1195.0], [54.8, 1196.0], [54.9, 1196.0], [55.0, 1196.0], [55.1, 1196.0], [55.2, 1196.0], [55.3, 1196.0], [55.4, 1197.0], [55.5, 1197.0], [55.6, 1197.0], [55.7, 1197.0], [55.8, 1197.0], [55.9, 1197.0], [56.0, 1198.0], [56.1, 1198.0], [56.2, 1198.0], [56.3, 1198.0], [56.4, 1198.0], [56.5, 1199.0], [56.6, 1199.0], [56.7, 1199.0], [56.8, 1199.0], [56.9, 1199.0], [57.0, 1199.0], [57.1, 1199.0], [57.2, 1199.0], [57.3, 1199.0], [57.4, 1199.0], [57.5, 1200.0], [57.6, 1200.0], [57.7, 1200.0], [57.8, 1200.0], [57.9, 1200.0], [58.0, 1200.0], [58.1, 1200.0], [58.2, 1200.0], [58.3, 1200.0], [58.4, 1200.0], [58.5, 1200.0], [58.6, 1201.0], [58.7, 1201.0], [58.8, 1201.0], [58.9, 1201.0], [59.0, 1201.0], [59.1, 1201.0], [59.2, 1201.0], [59.3, 1201.0], [59.4, 1202.0], [59.5, 1202.0], [59.6, 1202.0], [59.7, 1202.0], [59.8, 1202.0], [59.9, 1202.0], [60.0, 1202.0], [60.1, 1203.0], [60.2, 1203.0], [60.3, 1204.0], [60.4, 1204.0], [60.5, 1204.0], [60.6, 1204.0], [60.7, 1204.0], [60.8, 1204.0], [60.9, 1205.0], [61.0, 1205.0], [61.1, 1205.0], [61.2, 1205.0], [61.3, 1206.0], [61.4, 1206.0], [61.5, 1206.0], [61.6, 1206.0], [61.7, 1206.0], [61.8, 1207.0], [61.9, 1207.0], [62.0, 1207.0], [62.1, 1207.0], [62.2, 1208.0], [62.3, 1208.0], [62.4, 1208.0], [62.5, 1208.0], [62.6, 1208.0], [62.7, 1209.0], [62.8, 1209.0], [62.9, 1209.0], [63.0, 1209.0], [63.1, 1209.0], [63.2, 1209.0], [63.3, 1209.0], [63.4, 1210.0], [63.5, 1210.0], [63.6, 1210.0], [63.7, 1210.0], [63.8, 1210.0], [63.9, 1210.0], [64.0, 1210.0], [64.1, 1210.0], [64.2, 1211.0], [64.3, 1211.0], [64.4, 1211.0], [64.5, 1211.0], [64.6, 1211.0], [64.7, 1211.0], [64.8, 1212.0], [64.9, 1212.0], [65.0, 1212.0], [65.1, 1212.0], [65.2, 1212.0], [65.3, 1213.0], [65.4, 1213.0], [65.5, 1213.0], [65.6, 1213.0], [65.7, 1213.0], [65.8, 1213.0], [65.9, 1214.0], [66.0, 1214.0], [66.1, 1214.0], [66.2, 1214.0], [66.3, 1214.0], [66.4, 1214.0], [66.5, 1215.0], [66.6, 1215.0], [66.7, 1215.0], [66.8, 1216.0], [66.9, 1216.0], [67.0, 1217.0], [67.1, 1217.0], [67.2, 1217.0], [67.3, 1217.0], [67.4, 1217.0], [67.5, 1217.0], [67.6, 1218.0], [67.7, 1218.0], [67.8, 1218.0], [67.9, 1218.0], [68.0, 1218.0], [68.1, 1219.0], [68.2, 1219.0], [68.3, 1219.0], [68.4, 1219.0], [68.5, 1219.0], [68.6, 1219.0], [68.7, 1220.0], [68.8, 1220.0], [68.9, 1220.0], [69.0, 1220.0], [69.1, 1220.0], [69.2, 1220.0], [69.3, 1220.0], [69.4, 1220.0], [69.5, 1221.0], [69.6, 1221.0], [69.7, 1221.0], [69.8, 1221.0], [69.9, 1221.0], [70.0, 1221.0], [70.1, 1221.0], [70.2, 1222.0], [70.3, 1223.0], [70.4, 1223.0], [70.5, 1223.0], [70.6, 1223.0], [70.7, 1224.0], [70.8, 1224.0], [70.9, 1224.0], [71.0, 1224.0], [71.1, 1224.0], [71.2, 1225.0], [71.3, 1225.0], [71.4, 1225.0], [71.5, 1225.0], [71.6, 1225.0], [71.7, 1226.0], [71.8, 1226.0], [71.9, 1226.0], [72.0, 1226.0], [72.1, 1226.0], [72.2, 1226.0], [72.3, 1227.0], [72.4, 1227.0], [72.5, 1227.0], [72.6, 1227.0], [72.7, 1227.0], [72.8, 1227.0], [72.9, 1228.0], [73.0, 1228.0], [73.1, 1228.0], [73.2, 1228.0], [73.3, 1228.0], [73.4, 1229.0], [73.5, 1229.0], [73.6, 1229.0], [73.7, 1229.0], [73.8, 1229.0], [73.9, 1229.0], [74.0, 1229.0], [74.1, 1229.0], [74.2, 1229.0], [74.3, 1229.0], [74.4, 1230.0], [74.5, 1230.0], [74.6, 1230.0], [74.7, 1230.0], [74.8, 1230.0], [74.9, 1231.0], [75.0, 1231.0], [75.1, 1231.0], [75.2, 1231.0], [75.3, 1231.0], [75.4, 1232.0], [75.5, 1232.0], [75.6, 1232.0], [75.7, 1232.0], [75.8, 1233.0], [75.9, 1233.0], [76.0, 1233.0], [76.1, 1234.0], [76.2, 1234.0], [76.3, 1234.0], [76.4, 1234.0], [76.5, 1235.0], [76.6, 1235.0], [76.7, 1235.0], [76.8, 1236.0], [76.9, 1236.0], [77.0, 1237.0], [77.1, 1237.0], [77.2, 1237.0], [77.3, 1237.0], [77.4, 1237.0], [77.5, 1238.0], [77.6, 1238.0], [77.7, 1238.0], [77.8, 1238.0], [77.9, 1239.0], [78.0, 1239.0], [78.1, 1239.0], [78.2, 1239.0], [78.3, 1239.0], [78.4, 1239.0], [78.5, 1239.0], [78.6, 1239.0], [78.7, 1240.0], [78.8, 1240.0], [78.9, 1240.0], [79.0, 1240.0], [79.1, 1240.0], [79.2, 1240.0], [79.3, 1240.0], [79.4, 1241.0], [79.5, 1241.0], [79.6, 1241.0], [79.7, 1241.0], [79.8, 1241.0], [79.9, 1241.0], [80.0, 1242.0], [80.1, 1242.0], [80.2, 1242.0], [80.3, 1243.0], [80.4, 1243.0], [80.5, 1243.0], [80.6, 1244.0], [80.7, 1244.0], [80.8, 1244.0], [80.9, 1245.0], [81.0, 1245.0], [81.1, 1246.0], [81.2, 1246.0], [81.3, 1247.0], [81.4, 1247.0], [81.5, 1247.0], [81.6, 1248.0], [81.7, 1248.0], [81.8, 1248.0], [81.9, 1249.0], [82.0, 1249.0], [82.1, 1249.0], [82.2, 1249.0], [82.3, 1249.0], [82.4, 1250.0], [82.5, 1250.0], [82.6, 1250.0], [82.7, 1250.0], [82.8, 1250.0], [82.9, 1250.0], [83.0, 1250.0], [83.1, 1250.0], [83.2, 1251.0], [83.3, 1251.0], [83.4, 1251.0], [83.5, 1252.0], [83.6, 1252.0], [83.7, 1252.0], [83.8, 1253.0], [83.9, 1253.0], [84.0, 1253.0], [84.1, 1253.0], [84.2, 1254.0], [84.3, 1254.0], [84.4, 1255.0], [84.5, 1255.0], [84.6, 1255.0], [84.7, 1256.0], [84.8, 1256.0], [84.9, 1256.0], [85.0, 1256.0], [85.1, 1257.0], [85.2, 1257.0], [85.3, 1257.0], [85.4, 1258.0], [85.5, 1258.0], [85.6, 1258.0], [85.7, 1258.0], [85.8, 1259.0], [85.9, 1259.0], [86.0, 1259.0], [86.1, 1259.0], [86.2, 1259.0], [86.3, 1260.0], [86.4, 1260.0], [86.5, 1261.0], [86.6, 1261.0], [86.7, 1261.0], [86.8, 1262.0], [86.9, 1262.0], [87.0, 1263.0], [87.1, 1263.0], [87.2, 1263.0], [87.3, 1263.0], [87.4, 1264.0], [87.5, 1264.0], [87.6, 1265.0], [87.7, 1265.0], [87.8, 1266.0], [87.9, 1266.0], [88.0, 1266.0], [88.1, 1267.0], [88.2, 1267.0], [88.3, 1268.0], [88.4, 1268.0], [88.5, 1268.0], [88.6, 1268.0], [88.7, 1268.0], [88.8, 1269.0], [88.9, 1269.0], [89.0, 1269.0], [89.1, 1270.0], [89.2, 1270.0], [89.3, 1271.0], [89.4, 1271.0], [89.5, 1271.0], [89.6, 1271.0], [89.7, 1272.0], [89.8, 1273.0], [89.9, 1274.0], [90.0, 1275.0], [90.1, 1276.0], [90.2, 1276.0], [90.3, 1277.0], [90.4, 1277.0], [90.5, 1278.0], [90.6, 1279.0], [90.7, 1280.0], [90.8, 1281.0], [90.9, 1282.0], [91.0, 1283.0], [91.1, 1283.0], [91.2, 1284.0], [91.3, 1285.0], [91.4, 1286.0], [91.5, 1286.0], [91.6, 1287.0], [91.7, 1287.0], [91.8, 1288.0], [91.9, 1289.0], [92.0, 1290.0], [92.1, 1291.0], [92.2, 1291.0], [92.3, 1292.0], [92.4, 1293.0], [92.5, 1293.0], [92.6, 1294.0], [92.7, 1295.0], [92.8, 1297.0], [92.9, 1297.0], [93.0, 1298.0], [93.1, 1300.0], [93.2, 1300.0], [93.3, 1301.0], [93.4, 1301.0], [93.5, 1303.0], [93.6, 1304.0], [93.7, 1306.0], [93.8, 1306.0], [93.9, 1308.0], [94.0, 1308.0], [94.1, 1309.0], [94.2, 1310.0], [94.3, 1311.0], [94.4, 1313.0], [94.5, 1314.0], [94.6, 1315.0], [94.7, 1315.0], [94.8, 1317.0], [94.9, 1318.0], [95.0, 1319.0], [95.1, 1320.0], [95.2, 1324.0], [95.3, 1328.0], [95.4, 1329.0], [95.5, 1330.0], [95.6, 1331.0], [95.7, 1335.0], [95.8, 1336.0], [95.9, 1339.0], [96.0, 1342.0], [96.1, 1352.0], [96.2, 1353.0], [96.3, 1355.0], [96.4, 1359.0], [96.5, 1359.0], [96.6, 1364.0], [96.7, 1370.0], [96.8, 1378.0], [96.9, 1379.0], [97.0, 1383.0], [97.1, 1389.0], [97.2, 1392.0], [97.3, 1394.0], [97.4, 1397.0], [97.5, 1400.0], [97.6, 1412.0], [97.7, 1428.0], [97.8, 1434.0], [97.9, 1449.0], [98.0, 1456.0], [98.1, 1474.0], [98.2, 1483.0], [98.3, 1487.0], [98.4, 1492.0], [98.5, 1498.0], [98.6, 1508.0], [98.7, 1515.0], [98.8, 1522.0], [98.9, 1525.0], [99.0, 1526.0], [99.1, 1530.0], [99.2, 1536.0], [99.3, 1539.0], [99.4, 1550.0], [99.5, 1558.0], [99.6, 1575.0], [99.7, 1598.0], [99.8, 1626.0], [99.9, 1651.0], [100.0, 1715.0]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1143.0, "series": [{"data": [[600.0, 82.0], [700.0, 82.0], [200.0, 102.0], [800.0, 98.0], [900.0, 78.0], [1000.0, 134.0], [1100.0, 991.0], [300.0, 92.0], [1200.0, 1143.0], [1300.0, 139.0], [1400.0, 35.0], [1500.0, 40.0], [400.0, 81.0], [100.0, 11.0], [1600.0, 7.0], [1700.0, 1.0], [500.0, 89.0]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 27.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3084.0, "series": [{"data": [[0.0, 27.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 44.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3084.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.427609427609429, "minX": 1.76896356E12, "maxY": 20.0, "series": [{"data": [[1.76896362E12, 20.0], [1.76896374E12, 19.443452380952387], [1.76896356E12, 11.427609427609429], [1.76896368E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76896374E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 235.31372549019608, "minX": 1.0, "maxY": 1219.9837745516659, "series": [{"data": [[2.0, 330.5263157894737], [8.0, 484.16326530612247], [9.0, 547.320754716981], [10.0, 607.3921568627452], [11.0, 664.0652173913045], [3.0, 319.93333333333334], [12.0, 727.8113207547169], [13.0, 791.5106382978722], [14.0, 833.4444444444445], [15.0, 887.2608695652175], [1.0, 499.85714285714283], [4.0, 235.31372549019608], [16.0, 989.04], [17.0, 993.3333333333334], [18.0, 1074.5849056603777], [19.0, 1120.7692307692307], [5.0, 319.48979591836746], [20.0, 1219.9837745516659], [6.0, 367.46], [7.0, 419.88461538461536]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}, {"data": [[17.558502340093657, 1071.9619344773814]], "isOverall": false, "label": "/api/tesda/provinces-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1612.8, "minX": 1.76896356E12, "maxY": 71862.9, "series": [{"data": [[1.76896362E12, 71545.21666666666], [1.76896374E12, 46834.48333333333], [1.76896356E12, 67810.53333333334], [1.76896368E12, 71862.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76896362E12, 4728.0], [1.76896374E12, 1612.8], [1.76896356E12, 4276.8], [1.76896368E12, 4766.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76896374E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 691.2491582491575, "minX": 1.76896356E12, "maxY": 1229.241071428571, "series": [{"data": [[1.76896362E12, 1219.5329949238555], [1.76896374E12, 1229.241071428571], [1.76896356E12, 691.2491582491575], [1.76896368E12, 1213.9677744209469]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76896374E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 688.7631874298553, "minX": 1.76896356E12, "maxY": 1218.8303571428578, "series": [{"data": [[1.76896362E12, 1216.3654822335022], [1.76896374E12, 1218.8303571428578], [1.76896356E12, 688.7631874298553], [1.76896368E12, 1209.9889224572]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76896374E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.9244712990936585, "minX": 1.76896356E12, "maxY": 3.320987654320989, "series": [{"data": [[1.76896362E12, 2.8903553299492404], [1.76896374E12, 3.1845238095238084], [1.76896356E12, 3.320987654320989], [1.76896368E12, 1.9244712990936585]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76896374E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 231.0, "minX": 1.76896356E12, "maxY": 1715.0, "series": [{"data": [[1.76896362E12, 1626.0], [1.76896374E12, 1663.0], [1.76896356E12, 1045.0], [1.76896368E12, 1715.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76896362E12, 1355.0], [1.76896374E12, 1303.0], [1.76896356E12, 231.0], [1.76896368E12, 1244.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76896362E12, 1544.3], [1.76896374E12, 1575.2], [1.76896356E12, 561.5000000000002], [1.76896368E12, 1631.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76896362E12, 1626.0], [1.76896374E12, 1663.0], [1.76896356E12, 1045.0], [1.76896368E12, 1715.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76896362E12, 1509.5], [1.76896374E12, 1505.0], [1.76896356E12, 289.5], [1.76896368E12, 1488.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76896362E12, 1589.1499999999999], [1.76896374E12, 1658.8], [1.76896356E12, 796.3999999999996], [1.76896368E12, 1679.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76896374E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 278.0, "minX": 3.0, "maxY": 1659.5, "series": [{"data": [[16.0, 1522.5], [17.0, 1659.5], [9.0, 289.0], [18.0, 1456.0], [19.0, 1525.0], [5.0, 331.0], [10.0, 1500.0], [11.0, 1387.5], [3.0, 386.0], [7.0, 278.0], [14.0, 1552.0], [15.0, 1396.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1199.0], [9.0, 649.0], [10.0, 1201.0], [11.0, 1127.0], [12.0, 1177.0], [13.0, 1198.5], [14.0, 1178.0], [15.0, 1189.0], [16.0, 1143.0], [17.0, 1161.0], [18.0, 1185.0], [19.0, 1196.5], [20.0, 1208.0], [23.0, 829.0], [6.0, 1211.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 226.0, "minX": 3.0, "maxY": 1563.5, "series": [{"data": [[16.0, 1415.0], [17.0, 1563.5], [9.0, 255.0], [18.0, 1335.0], [19.0, 1392.0], [5.0, 226.0], [10.0, 1386.0], [11.0, 1265.5], [3.0, 284.5], [7.0, 228.0], [14.0, 1423.0], [15.0, 1289.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1199.0], [9.0, 649.0], [10.0, 1200.0], [11.0, 1126.5], [12.0, 1177.0], [13.0, 1198.5], [14.0, 1177.0], [15.0, 1188.5], [16.0, 1143.0], [17.0, 1161.0], [18.0, 1185.0], [19.0, 1196.5], [20.0, 1208.0], [23.0, 829.0], [6.0, 1211.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.266666666666667, "minX": 1.76896356E12, "maxY": 16.55, "series": [{"data": [[1.76896362E12, 16.416666666666668], [1.76896374E12, 5.266666666666667], [1.76896356E12, 15.183333333333334], [1.76896368E12, 16.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76896374E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76896356E12, "maxY": 16.05, "series": [{"data": [[1.76896362E12, 0.5], [1.76896374E12, 0.5166666666666667], [1.76896356E12, 0.5], [1.76896368E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76896362E12, 15.916666666666666], [1.76896374E12, 5.083333333333333], [1.76896356E12, 14.35], [1.76896368E12, 16.05]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76896374E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76896356E12, "maxY": 16.05, "series": [{"data": [[1.76896362E12, 0.5], [1.76896374E12, 0.5166666666666667], [1.76896356E12, 0.5], [1.76896368E12, 0.5]], "isOverall": false, "label": "/api/tesda/provinces-success", "isController": false}, {"data": [[1.76896362E12, 15.916666666666666], [1.76896374E12, 5.083333333333333], [1.76896356E12, 14.35], [1.76896368E12, 16.05]], "isOverall": false, "label": "/api/tesda/provinces-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76896374E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76896356E12, "maxY": 16.05, "series": [{"data": [[1.76896362E12, 0.5], [1.76896374E12, 0.5166666666666667], [1.76896356E12, 0.5], [1.76896368E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76896362E12, 15.916666666666666], [1.76896374E12, 5.083333333333333], [1.76896356E12, 14.35], [1.76896368E12, 16.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76896374E12, "title": "Total Transactions Per Second"}},
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

