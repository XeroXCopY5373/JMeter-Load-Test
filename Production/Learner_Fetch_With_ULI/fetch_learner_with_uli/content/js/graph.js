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
        data: {"result": {"minY": 158.0, "minX": 0.0, "maxY": 1623.0, "series": [{"data": [[0.0, 158.0], [0.1, 162.0], [0.2, 163.0], [0.3, 166.0], [0.4, 167.0], [0.5, 171.0], [0.6, 174.0], [0.7, 178.0], [0.8, 181.0], [0.9, 185.0], [1.0, 191.0], [1.1, 194.0], [1.2, 196.0], [1.3, 199.0], [1.4, 201.0], [1.5, 203.0], [1.6, 206.0], [1.7, 210.0], [1.8, 213.0], [1.9, 217.0], [2.0, 219.0], [2.1, 220.0], [2.2, 220.0], [2.3, 221.0], [2.4, 223.0], [2.5, 225.0], [2.6, 226.0], [2.7, 227.0], [2.8, 228.0], [2.9, 231.0], [3.0, 235.0], [3.1, 237.0], [3.2, 238.0], [3.3, 240.0], [3.4, 243.0], [3.5, 246.0], [3.6, 249.0], [3.7, 251.0], [3.8, 257.0], [3.9, 260.0], [4.0, 262.0], [4.1, 263.0], [4.2, 268.0], [4.3, 269.0], [4.4, 277.0], [4.5, 282.0], [4.6, 283.0], [4.7, 286.0], [4.8, 287.0], [4.9, 289.0], [5.0, 290.0], [5.1, 295.0], [5.2, 303.0], [5.3, 308.0], [5.4, 313.0], [5.5, 322.0], [5.6, 331.0], [5.7, 332.0], [5.8, 335.0], [5.9, 340.0], [6.0, 347.0], [6.1, 354.0], [6.2, 363.0], [6.3, 366.0], [6.4, 370.0], [6.5, 377.0], [6.6, 386.0], [6.7, 390.0], [6.8, 392.0], [6.9, 395.0], [7.0, 398.0], [7.1, 401.0], [7.2, 403.0], [7.3, 409.0], [7.4, 411.0], [7.5, 414.0], [7.6, 422.0], [7.7, 423.0], [7.8, 425.0], [7.9, 427.0], [8.0, 434.0], [8.1, 445.0], [8.2, 450.0], [8.3, 454.0], [8.4, 461.0], [8.5, 468.0], [8.6, 473.0], [8.7, 478.0], [8.8, 483.0], [8.9, 490.0], [9.0, 500.0], [9.1, 504.0], [9.2, 506.0], [9.3, 508.0], [9.4, 512.0], [9.5, 521.0], [9.6, 523.0], [9.7, 526.0], [9.8, 528.0], [9.9, 529.0], [10.0, 529.0], [10.1, 531.0], [10.2, 532.0], [10.3, 533.0], [10.4, 533.0], [10.5, 537.0], [10.6, 540.0], [10.7, 543.0], [10.8, 549.0], [10.9, 555.0], [11.0, 558.0], [11.1, 561.0], [11.2, 566.0], [11.3, 569.0], [11.4, 577.0], [11.5, 581.0], [11.6, 585.0], [11.7, 594.0], [11.8, 598.0], [11.9, 600.0], [12.0, 610.0], [12.1, 613.0], [12.2, 617.0], [12.3, 622.0], [12.4, 624.0], [12.5, 628.0], [12.6, 635.0], [12.7, 636.0], [12.8, 638.0], [12.9, 643.0], [13.0, 644.0], [13.1, 649.0], [13.2, 652.0], [13.3, 656.0], [13.4, 662.0], [13.5, 667.0], [13.6, 669.0], [13.7, 670.0], [13.8, 676.0], [13.9, 678.0], [14.0, 682.0], [14.1, 687.0], [14.2, 690.0], [14.3, 694.0], [14.4, 696.0], [14.5, 702.0], [14.6, 704.0], [14.7, 711.0], [14.8, 715.0], [14.9, 724.0], [15.0, 728.0], [15.1, 731.0], [15.2, 734.0], [15.3, 737.0], [15.4, 743.0], [15.5, 747.0], [15.6, 752.0], [15.7, 754.0], [15.8, 758.0], [15.9, 765.0], [16.0, 768.0], [16.1, 770.0], [16.2, 773.0], [16.3, 779.0], [16.4, 781.0], [16.5, 786.0], [16.6, 788.0], [16.7, 790.0], [16.8, 793.0], [16.9, 796.0], [17.0, 797.0], [17.1, 805.0], [17.2, 806.0], [17.3, 809.0], [17.4, 811.0], [17.5, 814.0], [17.6, 818.0], [17.7, 820.0], [17.8, 824.0], [17.9, 831.0], [18.0, 835.0], [18.1, 835.0], [18.2, 837.0], [18.3, 839.0], [18.4, 841.0], [18.5, 847.0], [18.6, 851.0], [18.7, 856.0], [18.8, 859.0], [18.9, 867.0], [19.0, 870.0], [19.1, 871.0], [19.2, 874.0], [19.3, 877.0], [19.4, 881.0], [19.5, 884.0], [19.6, 893.0], [19.7, 895.0], [19.8, 898.0], [19.9, 900.0], [20.0, 904.0], [20.1, 910.0], [20.2, 912.0], [20.3, 915.0], [20.4, 918.0], [20.5, 921.0], [20.6, 925.0], [20.7, 926.0], [20.8, 928.0], [20.9, 935.0], [21.0, 939.0], [21.1, 942.0], [21.2, 943.0], [21.3, 945.0], [21.4, 953.0], [21.5, 957.0], [21.6, 959.0], [21.7, 961.0], [21.8, 968.0], [21.9, 972.0], [22.0, 974.0], [22.1, 980.0], [22.2, 985.0], [22.3, 987.0], [22.4, 992.0], [22.5, 996.0], [22.6, 999.0], [22.7, 1001.0], [22.8, 1008.0], [22.9, 1008.0], [23.0, 1010.0], [23.1, 1011.0], [23.2, 1015.0], [23.3, 1020.0], [23.4, 1022.0], [23.5, 1025.0], [23.6, 1029.0], [23.7, 1032.0], [23.8, 1036.0], [23.9, 1037.0], [24.0, 1043.0], [24.1, 1044.0], [24.2, 1046.0], [24.3, 1048.0], [24.4, 1049.0], [24.5, 1051.0], [24.6, 1055.0], [24.7, 1061.0], [24.8, 1064.0], [24.9, 1067.0], [25.0, 1068.0], [25.1, 1069.0], [25.2, 1072.0], [25.3, 1074.0], [25.4, 1078.0], [25.5, 1078.0], [25.6, 1082.0], [25.7, 1083.0], [25.8, 1085.0], [25.9, 1086.0], [26.0, 1088.0], [26.1, 1092.0], [26.2, 1093.0], [26.3, 1095.0], [26.4, 1098.0], [26.5, 1100.0], [26.6, 1102.0], [26.7, 1107.0], [26.8, 1108.0], [26.9, 1109.0], [27.0, 1110.0], [27.1, 1110.0], [27.2, 1111.0], [27.3, 1112.0], [27.4, 1113.0], [27.5, 1114.0], [27.6, 1115.0], [27.7, 1116.0], [27.8, 1119.0], [27.9, 1119.0], [28.0, 1121.0], [28.1, 1122.0], [28.2, 1123.0], [28.3, 1124.0], [28.4, 1125.0], [28.5, 1126.0], [28.6, 1127.0], [28.7, 1127.0], [28.8, 1128.0], [28.9, 1129.0], [29.0, 1129.0], [29.1, 1129.0], [29.2, 1130.0], [29.3, 1130.0], [29.4, 1131.0], [29.5, 1132.0], [29.6, 1133.0], [29.7, 1134.0], [29.8, 1134.0], [29.9, 1135.0], [30.0, 1136.0], [30.1, 1136.0], [30.2, 1137.0], [30.3, 1137.0], [30.4, 1138.0], [30.5, 1138.0], [30.6, 1138.0], [30.7, 1139.0], [30.8, 1139.0], [30.9, 1140.0], [31.0, 1140.0], [31.1, 1141.0], [31.2, 1141.0], [31.3, 1141.0], [31.4, 1142.0], [31.5, 1142.0], [31.6, 1142.0], [31.7, 1143.0], [31.8, 1143.0], [31.9, 1144.0], [32.0, 1144.0], [32.1, 1144.0], [32.2, 1145.0], [32.3, 1145.0], [32.4, 1147.0], [32.5, 1147.0], [32.6, 1147.0], [32.7, 1148.0], [32.8, 1148.0], [32.9, 1149.0], [33.0, 1149.0], [33.1, 1150.0], [33.2, 1150.0], [33.3, 1150.0], [33.4, 1151.0], [33.5, 1151.0], [33.6, 1151.0], [33.7, 1152.0], [33.8, 1152.0], [33.9, 1152.0], [34.0, 1153.0], [34.1, 1153.0], [34.2, 1153.0], [34.3, 1153.0], [34.4, 1154.0], [34.5, 1155.0], [34.6, 1155.0], [34.7, 1155.0], [34.8, 1155.0], [34.9, 1156.0], [35.0, 1156.0], [35.1, 1156.0], [35.2, 1157.0], [35.3, 1157.0], [35.4, 1157.0], [35.5, 1158.0], [35.6, 1158.0], [35.7, 1158.0], [35.8, 1158.0], [35.9, 1158.0], [36.0, 1158.0], [36.1, 1159.0], [36.2, 1159.0], [36.3, 1159.0], [36.4, 1159.0], [36.5, 1159.0], [36.6, 1159.0], [36.7, 1159.0], [36.8, 1160.0], [36.9, 1160.0], [37.0, 1160.0], [37.1, 1160.0], [37.2, 1160.0], [37.3, 1160.0], [37.4, 1161.0], [37.5, 1161.0], [37.6, 1161.0], [37.7, 1162.0], [37.8, 1162.0], [37.9, 1162.0], [38.0, 1162.0], [38.1, 1162.0], [38.2, 1162.0], [38.3, 1163.0], [38.4, 1163.0], [38.5, 1164.0], [38.6, 1164.0], [38.7, 1164.0], [38.8, 1164.0], [38.9, 1165.0], [39.0, 1165.0], [39.1, 1165.0], [39.2, 1165.0], [39.3, 1165.0], [39.4, 1166.0], [39.5, 1167.0], [39.6, 1167.0], [39.7, 1167.0], [39.8, 1167.0], [39.9, 1167.0], [40.0, 1168.0], [40.1, 1168.0], [40.2, 1168.0], [40.3, 1168.0], [40.4, 1168.0], [40.5, 1169.0], [40.6, 1169.0], [40.7, 1169.0], [40.8, 1169.0], [40.9, 1169.0], [41.0, 1170.0], [41.1, 1170.0], [41.2, 1170.0], [41.3, 1170.0], [41.4, 1170.0], [41.5, 1170.0], [41.6, 1170.0], [41.7, 1170.0], [41.8, 1170.0], [41.9, 1171.0], [42.0, 1171.0], [42.1, 1171.0], [42.2, 1171.0], [42.3, 1171.0], [42.4, 1171.0], [42.5, 1172.0], [42.6, 1172.0], [42.7, 1172.0], [42.8, 1173.0], [42.9, 1173.0], [43.0, 1173.0], [43.1, 1173.0], [43.2, 1174.0], [43.3, 1174.0], [43.4, 1174.0], [43.5, 1175.0], [43.6, 1175.0], [43.7, 1175.0], [43.8, 1176.0], [43.9, 1176.0], [44.0, 1176.0], [44.1, 1176.0], [44.2, 1177.0], [44.3, 1177.0], [44.4, 1177.0], [44.5, 1178.0], [44.6, 1178.0], [44.7, 1178.0], [44.8, 1178.0], [44.9, 1179.0], [45.0, 1179.0], [45.1, 1179.0], [45.2, 1179.0], [45.3, 1179.0], [45.4, 1179.0], [45.5, 1179.0], [45.6, 1180.0], [45.7, 1180.0], [45.8, 1180.0], [45.9, 1180.0], [46.0, 1180.0], [46.1, 1180.0], [46.2, 1181.0], [46.3, 1181.0], [46.4, 1181.0], [46.5, 1181.0], [46.6, 1181.0], [46.7, 1182.0], [46.8, 1182.0], [46.9, 1182.0], [47.0, 1182.0], [47.1, 1182.0], [47.2, 1182.0], [47.3, 1183.0], [47.4, 1183.0], [47.5, 1183.0], [47.6, 1183.0], [47.7, 1184.0], [47.8, 1184.0], [47.9, 1184.0], [48.0, 1184.0], [48.1, 1185.0], [48.2, 1185.0], [48.3, 1185.0], [48.4, 1185.0], [48.5, 1185.0], [48.6, 1185.0], [48.7, 1186.0], [48.8, 1186.0], [48.9, 1186.0], [49.0, 1186.0], [49.1, 1186.0], [49.2, 1187.0], [49.3, 1187.0], [49.4, 1187.0], [49.5, 1187.0], [49.6, 1188.0], [49.7, 1188.0], [49.8, 1188.0], [49.9, 1188.0], [50.0, 1188.0], [50.1, 1188.0], [50.2, 1188.0], [50.3, 1189.0], [50.4, 1189.0], [50.5, 1189.0], [50.6, 1189.0], [50.7, 1189.0], [50.8, 1189.0], [50.9, 1189.0], [51.0, 1189.0], [51.1, 1190.0], [51.2, 1190.0], [51.3, 1190.0], [51.4, 1190.0], [51.5, 1190.0], [51.6, 1190.0], [51.7, 1190.0], [51.8, 1190.0], [51.9, 1191.0], [52.0, 1191.0], [52.1, 1191.0], [52.2, 1191.0], [52.3, 1192.0], [52.4, 1192.0], [52.5, 1192.0], [52.6, 1192.0], [52.7, 1192.0], [52.8, 1193.0], [52.9, 1193.0], [53.0, 1193.0], [53.1, 1193.0], [53.2, 1193.0], [53.3, 1194.0], [53.4, 1194.0], [53.5, 1194.0], [53.6, 1194.0], [53.7, 1194.0], [53.8, 1195.0], [53.9, 1195.0], [54.0, 1195.0], [54.1, 1195.0], [54.2, 1195.0], [54.3, 1196.0], [54.4, 1196.0], [54.5, 1196.0], [54.6, 1196.0], [54.7, 1196.0], [54.8, 1196.0], [54.9, 1197.0], [55.0, 1197.0], [55.1, 1197.0], [55.2, 1197.0], [55.3, 1197.0], [55.4, 1197.0], [55.5, 1197.0], [55.6, 1198.0], [55.7, 1198.0], [55.8, 1198.0], [55.9, 1198.0], [56.0, 1198.0], [56.1, 1198.0], [56.2, 1198.0], [56.3, 1199.0], [56.4, 1199.0], [56.5, 1199.0], [56.6, 1199.0], [56.7, 1199.0], [56.8, 1199.0], [56.9, 1200.0], [57.0, 1200.0], [57.1, 1200.0], [57.2, 1200.0], [57.3, 1200.0], [57.4, 1200.0], [57.5, 1200.0], [57.6, 1200.0], [57.7, 1200.0], [57.8, 1200.0], [57.9, 1200.0], [58.0, 1201.0], [58.1, 1201.0], [58.2, 1201.0], [58.3, 1201.0], [58.4, 1201.0], [58.5, 1201.0], [58.6, 1201.0], [58.7, 1202.0], [58.8, 1202.0], [58.9, 1202.0], [59.0, 1202.0], [59.1, 1203.0], [59.2, 1203.0], [59.3, 1203.0], [59.4, 1203.0], [59.5, 1203.0], [59.6, 1204.0], [59.7, 1204.0], [59.8, 1204.0], [59.9, 1204.0], [60.0, 1204.0], [60.1, 1205.0], [60.2, 1205.0], [60.3, 1205.0], [60.4, 1205.0], [60.5, 1206.0], [60.6, 1206.0], [60.7, 1206.0], [60.8, 1206.0], [60.9, 1206.0], [61.0, 1207.0], [61.1, 1207.0], [61.2, 1207.0], [61.3, 1207.0], [61.4, 1207.0], [61.5, 1208.0], [61.6, 1208.0], [61.7, 1208.0], [61.8, 1208.0], [61.9, 1208.0], [62.0, 1208.0], [62.1, 1208.0], [62.2, 1209.0], [62.3, 1209.0], [62.4, 1209.0], [62.5, 1209.0], [62.6, 1209.0], [62.7, 1209.0], [62.8, 1210.0], [62.9, 1210.0], [63.0, 1210.0], [63.1, 1210.0], [63.2, 1210.0], [63.3, 1210.0], [63.4, 1210.0], [63.5, 1211.0], [63.6, 1211.0], [63.7, 1211.0], [63.8, 1211.0], [63.9, 1211.0], [64.0, 1211.0], [64.1, 1211.0], [64.2, 1212.0], [64.3, 1212.0], [64.4, 1212.0], [64.5, 1213.0], [64.6, 1213.0], [64.7, 1213.0], [64.8, 1214.0], [64.9, 1214.0], [65.0, 1214.0], [65.1, 1214.0], [65.2, 1215.0], [65.3, 1215.0], [65.4, 1215.0], [65.5, 1215.0], [65.6, 1216.0], [65.7, 1216.0], [65.8, 1216.0], [65.9, 1217.0], [66.0, 1217.0], [66.1, 1218.0], [66.2, 1218.0], [66.3, 1218.0], [66.4, 1218.0], [66.5, 1218.0], [66.6, 1218.0], [66.7, 1218.0], [66.8, 1219.0], [66.9, 1219.0], [67.0, 1219.0], [67.1, 1219.0], [67.2, 1219.0], [67.3, 1220.0], [67.4, 1220.0], [67.5, 1220.0], [67.6, 1220.0], [67.7, 1220.0], [67.8, 1220.0], [67.9, 1220.0], [68.0, 1220.0], [68.1, 1221.0], [68.2, 1221.0], [68.3, 1221.0], [68.4, 1221.0], [68.5, 1221.0], [68.6, 1221.0], [68.7, 1222.0], [68.8, 1222.0], [68.9, 1222.0], [69.0, 1223.0], [69.1, 1223.0], [69.2, 1224.0], [69.3, 1224.0], [69.4, 1224.0], [69.5, 1225.0], [69.6, 1225.0], [69.7, 1226.0], [69.8, 1226.0], [69.9, 1226.0], [70.0, 1226.0], [70.1, 1227.0], [70.2, 1227.0], [70.3, 1227.0], [70.4, 1227.0], [70.5, 1227.0], [70.6, 1228.0], [70.7, 1228.0], [70.8, 1228.0], [70.9, 1228.0], [71.0, 1229.0], [71.1, 1229.0], [71.2, 1229.0], [71.3, 1229.0], [71.4, 1229.0], [71.5, 1229.0], [71.6, 1229.0], [71.7, 1230.0], [71.8, 1230.0], [71.9, 1230.0], [72.0, 1230.0], [72.1, 1230.0], [72.2, 1230.0], [72.3, 1230.0], [72.4, 1230.0], [72.5, 1230.0], [72.6, 1230.0], [72.7, 1231.0], [72.8, 1231.0], [72.9, 1231.0], [73.0, 1231.0], [73.1, 1231.0], [73.2, 1231.0], [73.3, 1232.0], [73.4, 1232.0], [73.5, 1232.0], [73.6, 1233.0], [73.7, 1233.0], [73.8, 1233.0], [73.9, 1233.0], [74.0, 1234.0], [74.1, 1234.0], [74.2, 1234.0], [74.3, 1235.0], [74.4, 1236.0], [74.5, 1236.0], [74.6, 1236.0], [74.7, 1237.0], [74.8, 1237.0], [74.9, 1237.0], [75.0, 1237.0], [75.1, 1238.0], [75.2, 1238.0], [75.3, 1238.0], [75.4, 1238.0], [75.5, 1238.0], [75.6, 1238.0], [75.7, 1238.0], [75.8, 1239.0], [75.9, 1239.0], [76.0, 1239.0], [76.1, 1239.0], [76.2, 1239.0], [76.3, 1239.0], [76.4, 1240.0], [76.5, 1240.0], [76.6, 1240.0], [76.7, 1240.0], [76.8, 1240.0], [76.9, 1240.0], [77.0, 1240.0], [77.1, 1240.0], [77.2, 1241.0], [77.3, 1241.0], [77.4, 1241.0], [77.5, 1242.0], [77.6, 1242.0], [77.7, 1242.0], [77.8, 1242.0], [77.9, 1242.0], [78.0, 1243.0], [78.1, 1243.0], [78.2, 1243.0], [78.3, 1243.0], [78.4, 1243.0], [78.5, 1244.0], [78.6, 1244.0], [78.7, 1245.0], [78.8, 1245.0], [78.9, 1246.0], [79.0, 1246.0], [79.1, 1246.0], [79.2, 1246.0], [79.3, 1246.0], [79.4, 1247.0], [79.5, 1248.0], [79.6, 1248.0], [79.7, 1248.0], [79.8, 1248.0], [79.9, 1248.0], [80.0, 1249.0], [80.1, 1249.0], [80.2, 1249.0], [80.3, 1250.0], [80.4, 1250.0], [80.5, 1250.0], [80.6, 1250.0], [80.7, 1250.0], [80.8, 1251.0], [80.9, 1251.0], [81.0, 1251.0], [81.1, 1251.0], [81.2, 1252.0], [81.3, 1252.0], [81.4, 1252.0], [81.5, 1253.0], [81.6, 1253.0], [81.7, 1253.0], [81.8, 1253.0], [81.9, 1254.0], [82.0, 1254.0], [82.1, 1254.0], [82.2, 1255.0], [82.3, 1255.0], [82.4, 1256.0], [82.5, 1257.0], [82.6, 1257.0], [82.7, 1257.0], [82.8, 1258.0], [82.9, 1259.0], [83.0, 1259.0], [83.1, 1259.0], [83.2, 1259.0], [83.3, 1259.0], [83.4, 1260.0], [83.5, 1260.0], [83.6, 1260.0], [83.7, 1260.0], [83.8, 1260.0], [83.9, 1261.0], [84.0, 1261.0], [84.1, 1261.0], [84.2, 1262.0], [84.3, 1262.0], [84.4, 1263.0], [84.5, 1263.0], [84.6, 1264.0], [84.7, 1265.0], [84.8, 1266.0], [84.9, 1267.0], [85.0, 1267.0], [85.1, 1267.0], [85.2, 1267.0], [85.3, 1268.0], [85.4, 1268.0], [85.5, 1268.0], [85.6, 1268.0], [85.7, 1269.0], [85.8, 1270.0], [85.9, 1270.0], [86.0, 1270.0], [86.1, 1270.0], [86.2, 1270.0], [86.3, 1271.0], [86.4, 1271.0], [86.5, 1272.0], [86.6, 1272.0], [86.7, 1272.0], [86.8, 1272.0], [86.9, 1273.0], [87.0, 1273.0], [87.1, 1273.0], [87.2, 1275.0], [87.3, 1276.0], [87.4, 1276.0], [87.5, 1276.0], [87.6, 1277.0], [87.7, 1277.0], [87.8, 1277.0], [87.9, 1278.0], [88.0, 1278.0], [88.1, 1279.0], [88.2, 1279.0], [88.3, 1279.0], [88.4, 1280.0], [88.5, 1280.0], [88.6, 1280.0], [88.7, 1280.0], [88.8, 1280.0], [88.9, 1281.0], [89.0, 1281.0], [89.1, 1282.0], [89.2, 1282.0], [89.3, 1282.0], [89.4, 1283.0], [89.5, 1284.0], [89.6, 1286.0], [89.7, 1286.0], [89.8, 1288.0], [89.9, 1289.0], [90.0, 1290.0], [90.1, 1290.0], [90.2, 1290.0], [90.3, 1291.0], [90.4, 1291.0], [90.5, 1291.0], [90.6, 1291.0], [90.7, 1291.0], [90.8, 1292.0], [90.9, 1293.0], [91.0, 1293.0], [91.1, 1294.0], [91.2, 1297.0], [91.3, 1298.0], [91.4, 1299.0], [91.5, 1300.0], [91.6, 1300.0], [91.7, 1301.0], [91.8, 1301.0], [91.9, 1302.0], [92.0, 1303.0], [92.1, 1305.0], [92.2, 1306.0], [92.3, 1306.0], [92.4, 1308.0], [92.5, 1309.0], [92.6, 1310.0], [92.7, 1310.0], [92.8, 1311.0], [92.9, 1312.0], [93.0, 1313.0], [93.1, 1315.0], [93.2, 1315.0], [93.3, 1316.0], [93.4, 1317.0], [93.5, 1319.0], [93.6, 1320.0], [93.7, 1322.0], [93.8, 1323.0], [93.9, 1324.0], [94.0, 1325.0], [94.1, 1326.0], [94.2, 1326.0], [94.3, 1327.0], [94.4, 1328.0], [94.5, 1331.0], [94.6, 1333.0], [94.7, 1335.0], [94.8, 1336.0], [94.9, 1339.0], [95.0, 1340.0], [95.1, 1344.0], [95.2, 1345.0], [95.3, 1347.0], [95.4, 1349.0], [95.5, 1350.0], [95.6, 1351.0], [95.7, 1352.0], [95.8, 1354.0], [95.9, 1356.0], [96.0, 1358.0], [96.1, 1361.0], [96.2, 1364.0], [96.3, 1364.0], [96.4, 1368.0], [96.5, 1370.0], [96.6, 1372.0], [96.7, 1375.0], [96.8, 1383.0], [96.9, 1384.0], [97.0, 1393.0], [97.1, 1399.0], [97.2, 1406.0], [97.3, 1407.0], [97.4, 1409.0], [97.5, 1414.0], [97.6, 1416.0], [97.7, 1421.0], [97.8, 1423.0], [97.9, 1429.0], [98.0, 1434.0], [98.1, 1436.0], [98.2, 1442.0], [98.3, 1447.0], [98.4, 1454.0], [98.5, 1458.0], [98.6, 1462.0], [98.7, 1466.0], [98.8, 1469.0], [98.9, 1472.0], [99.0, 1478.0], [99.1, 1487.0], [99.2, 1493.0], [99.3, 1498.0], [99.4, 1501.0], [99.5, 1503.0], [99.6, 1519.0], [99.7, 1528.0], [99.8, 1535.0], [99.9, 1598.0], [100.0, 1623.0]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001/", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 100.0, "maxY": 1112.0, "series": [{"data": [[600.0, 82.0], [700.0, 84.0], [200.0, 123.0], [800.0, 91.0], [900.0, 88.0], [1000.0, 124.0], [1100.0, 977.0], [300.0, 61.0], [1200.0, 1112.0], [1300.0, 182.0], [1400.0, 71.0], [1500.0, 19.0], [100.0, 43.0], [400.0, 62.0], [1600.0, 3.0], [500.0, 93.0]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3095.0, "series": [{"data": [[0.0, 29.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 75.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 16.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3095.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.452115812917596, "minX": 1.76889738E12, "maxY": 20.0, "series": [{"data": [[1.76889744E12, 18.039014373716626], [1.76889738E12, 6.452115812917596], [1.7688975E12, 20.0], [1.76889756E12, 19.76847290640394]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76889756E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 211.17391304347828, "minX": 1.0, "maxY": 1224.9241970021449, "series": [{"data": [[2.0, 258.20000000000005], [8.0, 490.5400000000001], [9.0, 551.1399999999999], [10.0, 637.4999999999999], [11.0, 677.1764705882354], [3.0, 211.17391304347828], [12.0, 734.1600000000001], [13.0, 793.6800000000001], [14.0, 848.42], [15.0, 908.8723404255322], [1.0, 331.875], [4.0, 248.44], [16.0, 953.5999999999999], [17.0, 1016.2199999999999], [18.0, 1069.980769230769], [19.0, 1131.3518518518517], [5.0, 308.1000000000001], [20.0, 1224.9241970021449], [6.0, 363.10638297872333], [7.0, 474.48979591836735]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001/", "isController": false}, {"data": [[17.455365474339015, 1070.3433903576997]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001/-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2304.866666666667, "minX": 1.76889738E12, "maxY": 38851.73333333333, "series": [{"data": [[1.76889744E12, 38614.55], [1.76889738E12, 17753.733333333334], [1.7688975E12, 38851.73333333333], [1.76889756E12, 32171.416666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76889744E12, 4999.866666666667], [1.76889738E12, 2304.866666666667], [1.7688975E12, 5030.666666666667], [1.76889756E12, 4168.266666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76889756E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 407.65478841870805, "minX": 1.76889738E12, "maxY": 1222.430612244898, "series": [{"data": [[1.76889744E12, 1103.3151950718707], [1.76889738E12, 407.65478841870805], [1.7688975E12, 1222.430612244898], [1.76889756E12, 1213.6773399014783]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76889756E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 407.14253897550077, "minX": 1.76889738E12, "maxY": 1222.3397959183667, "series": [{"data": [[1.76889744E12, 1102.937371663245], [1.76889738E12, 407.14253897550077], [1.7688975E12, 1222.3397959183667], [1.76889756E12, 1213.604679802955]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76889756E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.6262833675564656, "minX": 1.76889738E12, "maxY": 5.04008908685969, "series": [{"data": [[1.76889744E12, 2.6262833675564656], [1.76889738E12, 5.04008908685969], [1.7688975E12, 3.0826530612244936], [1.76889756E12, 2.703201970443353]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76889756E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 210.0, "minX": 1.76889738E12, "maxY": 1613.0, "series": [{"data": [[1.76889744E12, 1613.0], [1.76889738E12, 1031.0], [1.7688975E12, 1553.0], [1.76889756E12, 1535.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76889744E12, 1344.0], [1.76889738E12, 210.0], [1.7688975E12, 1335.0], [1.76889756E12, 1349.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76889744E12, 1532.9], [1.76889738E12, 276.20000000000005], [1.7688975E12, 1525.5], [1.76889756E12, 1500.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76889744E12, 1613.0], [1.76889738E12, 1031.0], [1.7688975E12, 1553.0], [1.76889756E12, 1535.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76889744E12, 1464.0], [1.76889738E12, 224.5], [1.7688975E12, 1443.5], [1.76889756E12, 1431.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76889744E12, 1575.6], [1.76889738E12, 663.5999999999995], [1.7688975E12, 1539.25], [1.76889756E12, 1519.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76889756E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 161.5, "minX": 4.0, "maxY": 1503.0, "series": [{"data": [[4.0, 227.5], [16.0, 1434.0], [17.0, 1464.0], [18.0, 1434.5], [19.0, 1429.0], [5.0, 228.0], [10.0, 223.5], [12.0, 1497.0], [13.0, 1459.0], [7.0, 228.0], [14.0, 1503.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1229.0], [9.0, 1199.5], [10.0, 161.5], [11.0, 1183.0], [12.0, 1219.0], [13.0, 1200.5], [14.0, 1206.0], [15.0, 1169.5], [16.0, 1146.0], [17.0, 1142.0], [18.0, 1197.0], [19.0, 1195.0], [20.0, 1203.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 161.5, "minX": 4.0, "maxY": 1503.0, "series": [{"data": [[4.0, 227.5], [16.0, 1434.0], [17.0, 1464.0], [18.0, 1434.5], [19.0, 1428.0], [5.0, 228.0], [10.0, 222.0], [12.0, 1497.0], [13.0, 1459.0], [7.0, 227.0], [14.0, 1503.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1229.0], [9.0, 1199.0], [10.0, 161.5], [11.0, 1183.0], [12.0, 1219.0], [13.0, 1200.5], [14.0, 1206.0], [15.0, 1169.5], [16.0, 1145.5], [17.0, 1142.0], [18.0, 1197.0], [19.0, 1195.0], [20.0, 1203.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.666666666666667, "minX": 1.76889738E12, "maxY": 16.383333333333333, "series": [{"data": [[1.76889744E12, 16.383333333333333], [1.76889738E12, 7.666666666666667], [1.7688975E12, 16.333333333333332], [1.76889756E12, 13.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76889756E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76889738E12, "maxY": 15.833333333333334, "series": [{"data": [[1.76889744E12, 0.5], [1.76889738E12, 0.5], [1.7688975E12, 0.5], [1.76889756E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76889744E12, 15.733333333333333], [1.76889738E12, 6.983333333333333], [1.7688975E12, 15.833333333333334], [1.76889756E12, 13.033333333333333]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76889756E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76889738E12, "maxY": 15.833333333333334, "series": [{"data": [[1.76889744E12, 15.733333333333333], [1.76889738E12, 6.983333333333333], [1.7688975E12, 15.833333333333334], [1.76889756E12, 13.033333333333333]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001/-failure", "isController": false}, {"data": [[1.76889744E12, 0.5], [1.76889738E12, 0.5], [1.7688975E12, 0.5], [1.76889756E12, 0.5]], "isOverall": false, "label": "/api/learner/fetch/LMB-07-090-16067-001/-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76889756E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76889738E12, "maxY": 15.833333333333334, "series": [{"data": [[1.76889744E12, 0.5], [1.76889738E12, 0.5], [1.7688975E12, 0.5], [1.76889756E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76889744E12, 15.733333333333333], [1.76889738E12, 6.983333333333333], [1.7688975E12, 15.833333333333334], [1.76889756E12, 13.033333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76889756E12, "title": "Total Transactions Per Second"}},
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

