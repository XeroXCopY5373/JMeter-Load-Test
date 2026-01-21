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
        data: {"result": {"minY": 242.0, "minX": 0.0, "maxY": 10408.0, "series": [{"data": [[0.0, 242.0], [0.1, 260.0], [0.2, 287.0], [0.3, 300.0], [0.4, 307.0], [0.5, 361.0], [0.6, 366.0], [0.7, 374.0], [0.8, 377.0], [0.9, 382.0], [1.0, 385.0], [1.1, 393.0], [1.2, 398.0], [1.3, 405.0], [1.4, 410.0], [1.5, 413.0], [1.6, 415.0], [1.7, 418.0], [1.8, 422.0], [1.9, 423.0], [2.0, 427.0], [2.1, 432.0], [2.2, 434.0], [2.3, 435.0], [2.4, 441.0], [2.5, 442.0], [2.6, 446.0], [2.7, 449.0], [2.8, 452.0], [2.9, 455.0], [3.0, 457.0], [3.1, 459.0], [3.2, 459.0], [3.3, 463.0], [3.4, 463.0], [3.5, 466.0], [3.6, 472.0], [3.7, 478.0], [3.8, 479.0], [3.9, 488.0], [4.0, 493.0], [4.1, 499.0], [4.2, 502.0], [4.3, 504.0], [4.4, 507.0], [4.5, 509.0], [4.6, 513.0], [4.7, 515.0], [4.8, 518.0], [4.9, 524.0], [5.0, 527.0], [5.1, 529.0], [5.2, 538.0], [5.3, 542.0], [5.4, 545.0], [5.5, 548.0], [5.6, 552.0], [5.7, 554.0], [5.8, 556.0], [5.9, 559.0], [6.0, 560.0], [6.1, 563.0], [6.2, 564.0], [6.3, 566.0], [6.4, 569.0], [6.5, 572.0], [6.6, 577.0], [6.7, 583.0], [6.8, 583.0], [6.9, 587.0], [7.0, 588.0], [7.1, 593.0], [7.2, 595.0], [7.3, 603.0], [7.4, 605.0], [7.5, 608.0], [7.6, 610.0], [7.7, 614.0], [7.8, 618.0], [7.9, 619.0], [8.0, 620.0], [8.1, 622.0], [8.2, 622.0], [8.3, 625.0], [8.4, 626.0], [8.5, 627.0], [8.6, 630.0], [8.7, 634.0], [8.8, 640.0], [8.9, 644.0], [9.0, 647.0], [9.1, 650.0], [9.2, 651.0], [9.3, 653.0], [9.4, 655.0], [9.5, 657.0], [9.6, 664.0], [9.7, 666.0], [9.8, 669.0], [9.9, 672.0], [10.0, 678.0], [10.1, 679.0], [10.2, 681.0], [10.3, 684.0], [10.4, 686.0], [10.5, 687.0], [10.6, 690.0], [10.7, 691.0], [10.8, 705.0], [10.9, 710.0], [11.0, 714.0], [11.1, 718.0], [11.2, 720.0], [11.3, 721.0], [11.4, 726.0], [11.5, 731.0], [11.6, 733.0], [11.7, 736.0], [11.8, 740.0], [11.9, 741.0], [12.0, 744.0], [12.1, 745.0], [12.2, 747.0], [12.3, 748.0], [12.4, 752.0], [12.5, 754.0], [12.6, 757.0], [12.7, 758.0], [12.8, 763.0], [12.9, 764.0], [13.0, 767.0], [13.1, 774.0], [13.2, 775.0], [13.3, 777.0], [13.4, 783.0], [13.5, 789.0], [13.6, 792.0], [13.7, 793.0], [13.8, 794.0], [13.9, 797.0], [14.0, 802.0], [14.1, 803.0], [14.2, 805.0], [14.3, 807.0], [14.4, 816.0], [14.5, 821.0], [14.6, 823.0], [14.7, 824.0], [14.8, 827.0], [14.9, 829.0], [15.0, 834.0], [15.1, 834.0], [15.2, 837.0], [15.3, 839.0], [15.4, 841.0], [15.5, 848.0], [15.6, 853.0], [15.7, 856.0], [15.8, 859.0], [15.9, 859.0], [16.0, 862.0], [16.1, 864.0], [16.2, 866.0], [16.3, 866.0], [16.4, 869.0], [16.5, 870.0], [16.6, 874.0], [16.7, 880.0], [16.8, 885.0], [16.9, 891.0], [17.0, 894.0], [17.1, 898.0], [17.2, 901.0], [17.3, 901.0], [17.4, 910.0], [17.5, 914.0], [17.6, 917.0], [17.7, 919.0], [17.8, 924.0], [17.9, 926.0], [18.0, 930.0], [18.1, 933.0], [18.2, 934.0], [18.3, 935.0], [18.4, 937.0], [18.5, 938.0], [18.6, 939.0], [18.7, 941.0], [18.8, 945.0], [18.9, 948.0], [19.0, 951.0], [19.1, 954.0], [19.2, 957.0], [19.3, 962.0], [19.4, 964.0], [19.5, 966.0], [19.6, 967.0], [19.7, 970.0], [19.8, 970.0], [19.9, 973.0], [20.0, 974.0], [20.1, 976.0], [20.2, 978.0], [20.3, 983.0], [20.4, 984.0], [20.5, 987.0], [20.6, 989.0], [20.7, 990.0], [20.8, 991.0], [20.9, 996.0], [21.0, 997.0], [21.1, 999.0], [21.2, 1000.0], [21.3, 1002.0], [21.4, 1003.0], [21.5, 1005.0], [21.6, 1008.0], [21.7, 1009.0], [21.8, 1009.0], [21.9, 1012.0], [22.0, 1014.0], [22.1, 1018.0], [22.2, 1021.0], [22.3, 1023.0], [22.4, 1024.0], [22.5, 1027.0], [22.6, 1029.0], [22.7, 1034.0], [22.8, 1036.0], [22.9, 1037.0], [23.0, 1038.0], [23.1, 1040.0], [23.2, 1041.0], [23.3, 1045.0], [23.4, 1048.0], [23.5, 1053.0], [23.6, 1053.0], [23.7, 1058.0], [23.8, 1060.0], [23.9, 1061.0], [24.0, 1062.0], [24.1, 1065.0], [24.2, 1067.0], [24.3, 1071.0], [24.4, 1073.0], [24.5, 1076.0], [24.6, 1078.0], [24.7, 1079.0], [24.8, 1080.0], [24.9, 1081.0], [25.0, 1082.0], [25.1, 1082.0], [25.2, 1085.0], [25.3, 1088.0], [25.4, 1089.0], [25.5, 1089.0], [25.6, 1091.0], [25.7, 1092.0], [25.8, 1095.0], [25.9, 1096.0], [26.0, 1098.0], [26.1, 1098.0], [26.2, 1100.0], [26.3, 1100.0], [26.4, 1101.0], [26.5, 1103.0], [26.6, 1105.0], [26.7, 1106.0], [26.8, 1108.0], [26.9, 1109.0], [27.0, 1109.0], [27.1, 1109.0], [27.2, 1110.0], [27.3, 1110.0], [27.4, 1111.0], [27.5, 1112.0], [27.6, 1112.0], [27.7, 1112.0], [27.8, 1116.0], [27.9, 1117.0], [28.0, 1118.0], [28.1, 1118.0], [28.2, 1119.0], [28.3, 1120.0], [28.4, 1120.0], [28.5, 1121.0], [28.6, 1121.0], [28.7, 1122.0], [28.8, 1123.0], [28.9, 1124.0], [29.0, 1125.0], [29.1, 1125.0], [29.2, 1126.0], [29.3, 1126.0], [29.4, 1127.0], [29.5, 1127.0], [29.6, 1128.0], [29.7, 1128.0], [29.8, 1129.0], [29.9, 1129.0], [30.0, 1130.0], [30.1, 1130.0], [30.2, 1130.0], [30.3, 1130.0], [30.4, 1131.0], [30.5, 1131.0], [30.6, 1132.0], [30.7, 1133.0], [30.8, 1134.0], [30.9, 1134.0], [31.0, 1135.0], [31.1, 1135.0], [31.2, 1136.0], [31.3, 1137.0], [31.4, 1137.0], [31.5, 1138.0], [31.6, 1138.0], [31.7, 1138.0], [31.8, 1138.0], [31.9, 1139.0], [32.0, 1139.0], [32.1, 1139.0], [32.2, 1139.0], [32.3, 1140.0], [32.4, 1140.0], [32.5, 1141.0], [32.6, 1141.0], [32.7, 1141.0], [32.8, 1142.0], [32.9, 1143.0], [33.0, 1143.0], [33.1, 1143.0], [33.2, 1144.0], [33.3, 1145.0], [33.4, 1145.0], [33.5, 1145.0], [33.6, 1146.0], [33.7, 1147.0], [33.8, 1147.0], [33.9, 1147.0], [34.0, 1148.0], [34.1, 1148.0], [34.2, 1148.0], [34.3, 1148.0], [34.4, 1149.0], [34.5, 1149.0], [34.6, 1149.0], [34.7, 1149.0], [34.8, 1150.0], [34.9, 1150.0], [35.0, 1150.0], [35.1, 1151.0], [35.2, 1151.0], [35.3, 1151.0], [35.4, 1152.0], [35.5, 1152.0], [35.6, 1152.0], [35.7, 1152.0], [35.8, 1153.0], [35.9, 1153.0], [36.0, 1153.0], [36.1, 1153.0], [36.2, 1153.0], [36.3, 1154.0], [36.4, 1154.0], [36.5, 1155.0], [36.6, 1155.0], [36.7, 1156.0], [36.8, 1157.0], [36.9, 1157.0], [37.0, 1158.0], [37.1, 1158.0], [37.2, 1158.0], [37.3, 1158.0], [37.4, 1159.0], [37.5, 1159.0], [37.6, 1159.0], [37.7, 1159.0], [37.8, 1159.0], [37.9, 1159.0], [38.0, 1160.0], [38.1, 1160.0], [38.2, 1160.0], [38.3, 1160.0], [38.4, 1160.0], [38.5, 1160.0], [38.6, 1160.0], [38.7, 1161.0], [38.8, 1161.0], [38.9, 1161.0], [39.0, 1162.0], [39.1, 1162.0], [39.2, 1162.0], [39.3, 1162.0], [39.4, 1163.0], [39.5, 1163.0], [39.6, 1163.0], [39.7, 1164.0], [39.8, 1164.0], [39.9, 1164.0], [40.0, 1165.0], [40.1, 1166.0], [40.2, 1166.0], [40.3, 1167.0], [40.4, 1167.0], [40.5, 1167.0], [40.6, 1167.0], [40.7, 1168.0], [40.8, 1168.0], [40.9, 1168.0], [41.0, 1169.0], [41.1, 1169.0], [41.2, 1169.0], [41.3, 1169.0], [41.4, 1169.0], [41.5, 1169.0], [41.6, 1169.0], [41.7, 1170.0], [41.8, 1170.0], [41.9, 1170.0], [42.0, 1170.0], [42.1, 1170.0], [42.2, 1171.0], [42.3, 1171.0], [42.4, 1171.0], [42.5, 1171.0], [42.6, 1172.0], [42.7, 1172.0], [42.8, 1172.0], [42.9, 1172.0], [43.0, 1172.0], [43.1, 1173.0], [43.2, 1173.0], [43.3, 1173.0], [43.4, 1173.0], [43.5, 1174.0], [43.6, 1174.0], [43.7, 1174.0], [43.8, 1175.0], [43.9, 1175.0], [44.0, 1176.0], [44.1, 1177.0], [44.2, 1177.0], [44.3, 1177.0], [44.4, 1178.0], [44.5, 1178.0], [44.6, 1178.0], [44.7, 1178.0], [44.8, 1178.0], [44.9, 1178.0], [45.0, 1179.0], [45.1, 1179.0], [45.2, 1179.0], [45.3, 1179.0], [45.4, 1179.0], [45.5, 1179.0], [45.6, 1180.0], [45.7, 1180.0], [45.8, 1180.0], [45.9, 1180.0], [46.0, 1180.0], [46.1, 1180.0], [46.2, 1180.0], [46.3, 1180.0], [46.4, 1180.0], [46.5, 1180.0], [46.6, 1181.0], [46.7, 1181.0], [46.8, 1181.0], [46.9, 1181.0], [47.0, 1181.0], [47.1, 1181.0], [47.2, 1182.0], [47.3, 1182.0], [47.4, 1182.0], [47.5, 1182.0], [47.6, 1183.0], [47.7, 1183.0], [47.8, 1183.0], [47.9, 1183.0], [48.0, 1184.0], [48.1, 1184.0], [48.2, 1184.0], [48.3, 1185.0], [48.4, 1185.0], [48.5, 1185.0], [48.6, 1186.0], [48.7, 1186.0], [48.8, 1186.0], [48.9, 1186.0], [49.0, 1187.0], [49.1, 1187.0], [49.2, 1187.0], [49.3, 1187.0], [49.4, 1187.0], [49.5, 1188.0], [49.6, 1188.0], [49.7, 1188.0], [49.8, 1188.0], [49.9, 1188.0], [50.0, 1188.0], [50.1, 1189.0], [50.2, 1189.0], [50.3, 1189.0], [50.4, 1189.0], [50.5, 1189.0], [50.6, 1189.0], [50.7, 1189.0], [50.8, 1189.0], [50.9, 1190.0], [51.0, 1190.0], [51.1, 1190.0], [51.2, 1190.0], [51.3, 1190.0], [51.4, 1190.0], [51.5, 1190.0], [51.6, 1190.0], [51.7, 1190.0], [51.8, 1190.0], [51.9, 1190.0], [52.0, 1190.0], [52.1, 1191.0], [52.2, 1191.0], [52.3, 1191.0], [52.4, 1191.0], [52.5, 1191.0], [52.6, 1191.0], [52.7, 1191.0], [52.8, 1191.0], [52.9, 1191.0], [53.0, 1192.0], [53.1, 1192.0], [53.2, 1192.0], [53.3, 1192.0], [53.4, 1192.0], [53.5, 1192.0], [53.6, 1193.0], [53.7, 1193.0], [53.8, 1193.0], [53.9, 1193.0], [54.0, 1193.0], [54.1, 1193.0], [54.2, 1194.0], [54.3, 1194.0], [54.4, 1194.0], [54.5, 1195.0], [54.6, 1195.0], [54.7, 1195.0], [54.8, 1195.0], [54.9, 1195.0], [55.0, 1196.0], [55.1, 1196.0], [55.2, 1197.0], [55.3, 1197.0], [55.4, 1197.0], [55.5, 1197.0], [55.6, 1197.0], [55.7, 1198.0], [55.8, 1198.0], [55.9, 1198.0], [56.0, 1198.0], [56.1, 1198.0], [56.2, 1198.0], [56.3, 1199.0], [56.4, 1199.0], [56.5, 1199.0], [56.6, 1199.0], [56.7, 1199.0], [56.8, 1199.0], [56.9, 1199.0], [57.0, 1199.0], [57.1, 1200.0], [57.2, 1200.0], [57.3, 1200.0], [57.4, 1200.0], [57.5, 1200.0], [57.6, 1200.0], [57.7, 1200.0], [57.8, 1200.0], [57.9, 1200.0], [58.0, 1201.0], [58.1, 1201.0], [58.2, 1201.0], [58.3, 1201.0], [58.4, 1201.0], [58.5, 1201.0], [58.6, 1201.0], [58.7, 1202.0], [58.8, 1202.0], [58.9, 1202.0], [59.0, 1202.0], [59.1, 1203.0], [59.2, 1203.0], [59.3, 1203.0], [59.4, 1204.0], [59.5, 1204.0], [59.6, 1204.0], [59.7, 1205.0], [59.8, 1205.0], [59.9, 1205.0], [60.0, 1206.0], [60.1, 1206.0], [60.2, 1206.0], [60.3, 1206.0], [60.4, 1207.0], [60.5, 1207.0], [60.6, 1207.0], [60.7, 1207.0], [60.8, 1207.0], [60.9, 1207.0], [61.0, 1208.0], [61.1, 1208.0], [61.2, 1208.0], [61.3, 1208.0], [61.4, 1208.0], [61.5, 1208.0], [61.6, 1209.0], [61.7, 1209.0], [61.8, 1209.0], [61.9, 1209.0], [62.0, 1209.0], [62.1, 1209.0], [62.2, 1210.0], [62.3, 1210.0], [62.4, 1210.0], [62.5, 1210.0], [62.6, 1210.0], [62.7, 1210.0], [62.8, 1210.0], [62.9, 1210.0], [63.0, 1210.0], [63.1, 1210.0], [63.2, 1210.0], [63.3, 1210.0], [63.4, 1211.0], [63.5, 1211.0], [63.6, 1211.0], [63.7, 1211.0], [63.8, 1211.0], [63.9, 1211.0], [64.0, 1211.0], [64.1, 1211.0], [64.2, 1212.0], [64.3, 1212.0], [64.4, 1212.0], [64.5, 1212.0], [64.6, 1212.0], [64.7, 1212.0], [64.8, 1212.0], [64.9, 1212.0], [65.0, 1213.0], [65.1, 1213.0], [65.2, 1214.0], [65.3, 1214.0], [65.4, 1214.0], [65.5, 1214.0], [65.6, 1214.0], [65.7, 1214.0], [65.8, 1214.0], [65.9, 1214.0], [66.0, 1215.0], [66.1, 1215.0], [66.2, 1215.0], [66.3, 1216.0], [66.4, 1216.0], [66.5, 1216.0], [66.6, 1217.0], [66.7, 1217.0], [66.8, 1217.0], [66.9, 1217.0], [67.0, 1217.0], [67.1, 1218.0], [67.2, 1218.0], [67.3, 1218.0], [67.4, 1218.0], [67.5, 1218.0], [67.6, 1218.0], [67.7, 1218.0], [67.8, 1218.0], [67.9, 1218.0], [68.0, 1219.0], [68.1, 1219.0], [68.2, 1219.0], [68.3, 1219.0], [68.4, 1219.0], [68.5, 1219.0], [68.6, 1219.0], [68.7, 1219.0], [68.8, 1220.0], [68.9, 1220.0], [69.0, 1220.0], [69.1, 1220.0], [69.2, 1220.0], [69.3, 1220.0], [69.4, 1220.0], [69.5, 1221.0], [69.6, 1221.0], [69.7, 1221.0], [69.8, 1221.0], [69.9, 1221.0], [70.0, 1221.0], [70.1, 1221.0], [70.2, 1221.0], [70.3, 1222.0], [70.4, 1222.0], [70.5, 1222.0], [70.6, 1222.0], [70.7, 1222.0], [70.8, 1223.0], [70.9, 1223.0], [71.0, 1223.0], [71.1, 1223.0], [71.2, 1223.0], [71.3, 1224.0], [71.4, 1224.0], [71.5, 1225.0], [71.6, 1225.0], [71.7, 1225.0], [71.8, 1226.0], [71.9, 1226.0], [72.0, 1226.0], [72.1, 1226.0], [72.2, 1226.0], [72.3, 1227.0], [72.4, 1227.0], [72.5, 1227.0], [72.6, 1227.0], [72.7, 1228.0], [72.8, 1228.0], [72.9, 1228.0], [73.0, 1229.0], [73.1, 1229.0], [73.2, 1229.0], [73.3, 1229.0], [73.4, 1229.0], [73.5, 1230.0], [73.6, 1230.0], [73.7, 1230.0], [73.8, 1230.0], [73.9, 1230.0], [74.0, 1230.0], [74.1, 1230.0], [74.2, 1230.0], [74.3, 1230.0], [74.4, 1231.0], [74.5, 1231.0], [74.6, 1231.0], [74.7, 1231.0], [74.8, 1231.0], [74.9, 1231.0], [75.0, 1231.0], [75.1, 1231.0], [75.2, 1232.0], [75.3, 1232.0], [75.4, 1233.0], [75.5, 1233.0], [75.6, 1233.0], [75.7, 1233.0], [75.8, 1234.0], [75.9, 1234.0], [76.0, 1234.0], [76.1, 1234.0], [76.2, 1235.0], [76.3, 1235.0], [76.4, 1235.0], [76.5, 1235.0], [76.6, 1236.0], [76.7, 1236.0], [76.8, 1236.0], [76.9, 1237.0], [77.0, 1237.0], [77.1, 1237.0], [77.2, 1237.0], [77.3, 1238.0], [77.4, 1238.0], [77.5, 1238.0], [77.6, 1238.0], [77.7, 1238.0], [77.8, 1239.0], [77.9, 1239.0], [78.0, 1239.0], [78.1, 1239.0], [78.2, 1239.0], [78.3, 1240.0], [78.4, 1240.0], [78.5, 1240.0], [78.6, 1240.0], [78.7, 1240.0], [78.8, 1241.0], [78.9, 1241.0], [79.0, 1241.0], [79.1, 1241.0], [79.2, 1241.0], [79.3, 1241.0], [79.4, 1243.0], [79.5, 1244.0], [79.6, 1244.0], [79.7, 1244.0], [79.8, 1245.0], [79.9, 1245.0], [80.0, 1246.0], [80.1, 1246.0], [80.2, 1246.0], [80.3, 1247.0], [80.4, 1247.0], [80.5, 1248.0], [80.6, 1248.0], [80.7, 1248.0], [80.8, 1249.0], [80.9, 1249.0], [81.0, 1249.0], [81.1, 1249.0], [81.2, 1249.0], [81.3, 1250.0], [81.4, 1250.0], [81.5, 1250.0], [81.6, 1250.0], [81.7, 1250.0], [81.8, 1250.0], [81.9, 1251.0], [82.0, 1251.0], [82.1, 1251.0], [82.2, 1251.0], [82.3, 1251.0], [82.4, 1252.0], [82.5, 1252.0], [82.6, 1252.0], [82.7, 1252.0], [82.8, 1253.0], [82.9, 1253.0], [83.0, 1253.0], [83.1, 1253.0], [83.2, 1254.0], [83.3, 1254.0], [83.4, 1254.0], [83.5, 1255.0], [83.6, 1256.0], [83.7, 1257.0], [83.8, 1257.0], [83.9, 1258.0], [84.0, 1258.0], [84.1, 1258.0], [84.2, 1259.0], [84.3, 1259.0], [84.4, 1259.0], [84.5, 1260.0], [84.6, 1260.0], [84.7, 1260.0], [84.8, 1260.0], [84.9, 1260.0], [85.0, 1261.0], [85.1, 1261.0], [85.2, 1261.0], [85.3, 1262.0], [85.4, 1262.0], [85.5, 1262.0], [85.6, 1263.0], [85.7, 1264.0], [85.8, 1265.0], [85.9, 1266.0], [86.0, 1266.0], [86.1, 1266.0], [86.2, 1267.0], [86.3, 1268.0], [86.4, 1268.0], [86.5, 1269.0], [86.6, 1269.0], [86.7, 1270.0], [86.8, 1270.0], [86.9, 1270.0], [87.0, 1270.0], [87.1, 1271.0], [87.2, 1271.0], [87.3, 1272.0], [87.4, 1272.0], [87.5, 1272.0], [87.6, 1274.0], [87.7, 1276.0], [87.8, 1276.0], [87.9, 1277.0], [88.0, 1278.0], [88.1, 1278.0], [88.2, 1279.0], [88.3, 1280.0], [88.4, 1280.0], [88.5, 1281.0], [88.6, 1282.0], [88.7, 1283.0], [88.8, 1283.0], [88.9, 1284.0], [89.0, 1285.0], [89.1, 1285.0], [89.2, 1285.0], [89.3, 1286.0], [89.4, 1287.0], [89.5, 1288.0], [89.6, 1288.0], [89.7, 1289.0], [89.8, 1290.0], [89.9, 1290.0], [90.0, 1290.0], [90.1, 1291.0], [90.2, 1291.0], [90.3, 1292.0], [90.4, 1294.0], [90.5, 1295.0], [90.6, 1296.0], [90.7, 1297.0], [90.8, 1298.0], [90.9, 1299.0], [91.0, 1299.0], [91.1, 1300.0], [91.2, 1300.0], [91.3, 1301.0], [91.4, 1301.0], [91.5, 1302.0], [91.6, 1303.0], [91.7, 1304.0], [91.8, 1306.0], [91.9, 1307.0], [92.0, 1309.0], [92.1, 1309.0], [92.2, 1311.0], [92.3, 1311.0], [92.4, 1312.0], [92.5, 1315.0], [92.6, 1317.0], [92.7, 1317.0], [92.8, 1318.0], [92.9, 1319.0], [93.0, 1323.0], [93.1, 1325.0], [93.2, 1328.0], [93.3, 1330.0], [93.4, 1331.0], [93.5, 1333.0], [93.6, 1337.0], [93.7, 1340.0], [93.8, 1344.0], [93.9, 1345.0], [94.0, 1349.0], [94.1, 1351.0], [94.2, 1357.0], [94.3, 1361.0], [94.4, 1365.0], [94.5, 1368.0], [94.6, 1371.0], [94.7, 1372.0], [94.8, 1387.0], [94.9, 1390.0], [95.0, 1394.0], [95.1, 1417.0], [95.2, 1442.0], [95.3, 1462.0], [95.4, 1533.0], [95.5, 1597.0], [95.6, 1650.0], [95.7, 1814.0], [95.8, 1930.0], [95.9, 1978.0], [96.0, 2104.0], [96.1, 2186.0], [96.2, 2439.0], [96.3, 2546.0], [96.4, 4036.0], [96.5, 7028.0], [96.6, 7678.0], [96.7, 7821.0], [96.8, 7920.0], [96.9, 7928.0], [97.0, 8294.0], [97.1, 8494.0], [97.2, 8569.0], [97.3, 8621.0], [97.4, 8662.0], [97.5, 8712.0], [97.6, 8738.0], [97.7, 8792.0], [97.8, 8858.0], [97.9, 8896.0], [98.0, 8944.0], [98.1, 8957.0], [98.2, 8996.0], [98.3, 9025.0], [98.4, 9083.0], [98.5, 9102.0], [98.6, 9144.0], [98.7, 9198.0], [98.8, 9214.0], [98.9, 9262.0], [99.0, 9291.0], [99.1, 9330.0], [99.2, 9376.0], [99.3, 9456.0], [99.4, 9521.0], [99.5, 9545.0], [99.6, 9724.0], [99.7, 9783.0], [99.8, 9869.0], [99.9, 9991.0], [100.0, 10408.0]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 847.0, "series": [{"data": [[600.0, 86.0], [700.0, 80.0], [800.0, 81.0], [900.0, 99.0], [1000.0, 126.0], [1100.0, 770.0], [1200.0, 847.0], [1300.0, 100.0], [1400.0, 8.0], [1500.0, 4.0], [1600.0, 4.0], [1800.0, 1.0], [1900.0, 5.0], [2000.0, 2.0], [2100.0, 3.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 1.0], [3100.0, 1.0], [4000.0, 1.0], [5600.0, 1.0], [7000.0, 1.0], [7100.0, 1.0], [7600.0, 3.0], [7800.0, 3.0], [7900.0, 4.0], [8000.0, 1.0], [8600.0, 5.0], [8700.0, 6.0], [8500.0, 3.0], [8400.0, 3.0], [8200.0, 1.0], [8800.0, 5.0], [9100.0, 6.0], [9200.0, 9.0], [9000.0, 6.0], [8900.0, 8.0], [9300.0, 4.0], [9500.0, 4.0], [9600.0, 1.0], [9400.0, 3.0], [9700.0, 4.0], [9800.0, 3.0], [9900.0, 2.0], [10000.0, 1.0], [10400.0, 1.0], [200.0, 7.0], [300.0, 24.0], [400.0, 72.0], [500.0, 78.0]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2374.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 114.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2374.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.411149825783976, "minX": 1.7689641E12, "maxY": 20.0, "series": [{"data": [[1.76896428E12, 19.43037974683544], [1.7689641E12, 11.411149825783976], [1.76896422E12, 20.0], [1.76896416E12, 19.789276807980045]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76896428E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 473.98039215686276, "minX": 1.0, "maxY": 1878.5714285714284, "series": [{"data": [[2.0, 1302.25], [8.0, 473.98039215686276], [9.0, 550.9574468085104], [10.0, 595.3750000000001], [11.0, 662.8076923076923], [3.0, 1415.8333333333333], [12.0, 756.7692307692307], [13.0, 811.5098039215685], [14.0, 843.531914893617], [15.0, 900.3600000000001], [1.0, 1526.0], [4.0, 1578.8750000000002], [16.0, 964.9423076923075], [17.0, 1018.6274509803919], [18.0, 1081.6458333333333], [19.0, 1149.5961538461534], [5.0, 1878.5714285714284], [20.0, 1589.7532033426178], [6.0, 1013.85], [7.0, 491.64705882352956]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}, {"data": [[17.883319967923008, 1376.8384121892552]], "isOverall": false, "label": "/api/tesda/cities-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1501.0, "minX": 1.7689641E12, "maxY": 210273.35, "series": [{"data": [[1.76896428E12, 190950.15], [1.7689641E12, 201215.93333333332], [1.76896422E12, 210273.35], [1.76896416E12, 210272.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76896428E12, 1501.0], [1.7689641E12, 2726.5], [1.76896422E12, 3809.5], [1.76896416E12, 3809.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76896428E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 770.8501742160286, "minX": 1.7689641E12, "maxY": 1910.6518987341776, "series": [{"data": [[1.76896428E12, 1910.6518987341776], [1.7689641E12, 770.8501742160286], [1.76896422E12, 1494.942643391521], [1.76896416E12, 1482.1159600997498]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76896428E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 752.5540069686411, "minX": 1.7689641E12, "maxY": 1869.9208860759495, "series": [{"data": [[1.76896428E12, 1869.9208860759495], [1.7689641E12, 752.5540069686411], [1.76896422E12, 1468.2319201994985], [1.76896416E12, 1456.0660847880288]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76896428E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.8341645885286777, "minX": 1.7689641E12, "maxY": 5.099303135888505, "series": [{"data": [[1.76896428E12, 4.417721518987339], [1.7689641E12, 5.099303135888505], [1.76896422E12, 3.8416458852867814], [1.76896416E12, 3.8341645885286777]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76896428E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1259.0, "minX": 1.7689641E12, "maxY": 10408.0, "series": [{"data": [[1.76896428E12, 10043.0], [1.7689641E12, 3115.0], [1.76896422E12, 10408.0], [1.76896416E12, 9918.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76896428E12, 7182.0], [1.7689641E12, 1259.0], [1.76896422E12, 7028.0], [1.76896416E12, 4036.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76896428E12, 9423.7], [1.7689641E12, 2542.6], [1.76896422E12, 9832.9], [1.76896416E12, 9797.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76896428E12, 10043.0], [1.7689641E12, 3115.0], [1.76896422E12, 10408.0], [1.76896416E12, 9918.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76896428E12, 8738.5], [1.7689641E12, 1924.5], [1.76896422E12, 9168.0], [1.76896416E12, 9165.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76896428E12, 9900.0], [1.7689641E12, 2835.5999999999995], [1.76896422E12, 10178.65], [1.76896416E12, 9891.05]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76896428E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 773.5, "minX": 1.0, "maxY": 9334.0, "series": [{"data": [[2.0, 1481.0], [8.0, 4036.0], [9.0, 2475.5], [10.0, 7516.0], [11.0, 5698.0], [3.0, 1930.0], [12.0, 7948.0], [13.0, 9304.0], [14.0, 8895.0], [15.0, 7758.5], [1.0, 1623.5], [4.0, 1750.5], [17.0, 2830.5], [18.0, 8858.0], [20.0, 8621.0], [7.0, 9334.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1199.0], [9.0, 1191.0], [10.0, 1211.0], [11.0, 1232.0], [3.0, 773.5], [12.0, 1210.0], [13.0, 1161.0], [14.0, 1121.0], [15.0, 1176.5], [16.0, 1175.5], [4.0, 1244.0], [17.0, 1179.0], [18.0, 1199.0], [19.0, 1185.0], [20.0, 1148.0], [23.0, 1111.0], [6.0, 1214.0], [7.0, 1179.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 773.5, "minX": 1.0, "maxY": 8550.5, "series": [{"data": [[2.0, 1245.5], [8.0, 3911.0], [9.0, 2238.5], [10.0, 7375.0], [11.0, 5400.0], [3.0, 1702.0], [12.0, 7768.0], [13.0, 8545.0], [14.0, 8351.0], [15.0, 7455.5], [1.0, 1316.0], [4.0, 1437.5], [17.0, 2434.0], [18.0, 8443.0], [20.0, 8157.0], [7.0, 8550.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1199.0], [9.0, 1191.0], [10.0, 1210.5], [11.0, 1232.0], [3.0, 773.5], [12.0, 1210.0], [13.0, 1160.0], [14.0, 1121.0], [15.0, 1176.5], [16.0, 1175.5], [4.0, 1244.0], [17.0, 1179.0], [18.0, 1199.0], [19.0, 1185.0], [20.0, 1147.0], [23.0, 1111.0], [6.0, 1214.0], [7.0, 1179.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.7689641E12, "maxY": 13.416666666666666, "series": [{"data": [[1.76896428E12, 4.933333333333334], [1.7689641E12, 9.85], [1.76896422E12, 13.366666666666667], [1.76896416E12, 13.416666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76896428E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.7689641E12, "maxY": 12.866666666666667, "series": [{"data": [[1.76896428E12, 0.5], [1.7689641E12, 0.5], [1.76896422E12, 0.5], [1.76896416E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76896428E12, 4.766666666666667], [1.7689641E12, 9.066666666666666], [1.76896422E12, 12.866666666666667], [1.76896416E12, 12.866666666666667]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76896428E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.7689641E12, "maxY": 12.866666666666667, "series": [{"data": [[1.76896428E12, 0.5], [1.7689641E12, 0.5], [1.76896422E12, 0.5], [1.76896416E12, 0.5]], "isOverall": false, "label": "/api/tesda/cities-success", "isController": false}, {"data": [[1.76896428E12, 4.766666666666667], [1.7689641E12, 9.066666666666666], [1.76896422E12, 12.866666666666667], [1.76896416E12, 12.866666666666667]], "isOverall": false, "label": "/api/tesda/cities-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76896428E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.7689641E12, "maxY": 12.866666666666667, "series": [{"data": [[1.76896428E12, 0.5], [1.7689641E12, 0.5], [1.76896422E12, 0.5], [1.76896416E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76896428E12, 4.766666666666667], [1.7689641E12, 9.066666666666666], [1.76896422E12, 12.866666666666667], [1.76896416E12, 12.866666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76896428E12, "title": "Total Transactions Per Second"}},
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

