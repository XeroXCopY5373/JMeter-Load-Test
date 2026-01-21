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
        data: {"result": {"minY": 163.0, "minX": 0.0, "maxY": 2309.0, "series": [{"data": [[0.0, 163.0], [0.1, 169.0], [0.2, 172.0], [0.3, 173.0], [0.4, 179.0], [0.5, 184.0], [0.6, 185.0], [0.7, 188.0], [0.8, 189.0], [0.9, 192.0], [1.0, 196.0], [1.1, 197.0], [1.2, 199.0], [1.3, 203.0], [1.4, 205.0], [1.5, 208.0], [1.6, 209.0], [1.7, 211.0], [1.8, 213.0], [1.9, 215.0], [2.0, 216.0], [2.1, 217.0], [2.2, 219.0], [2.3, 221.0], [2.4, 223.0], [2.5, 225.0], [2.6, 227.0], [2.7, 228.0], [2.8, 229.0], [2.9, 230.0], [3.0, 232.0], [3.1, 235.0], [3.2, 236.0], [3.3, 239.0], [3.4, 243.0], [3.5, 250.0], [3.6, 254.0], [3.7, 258.0], [3.8, 259.0], [3.9, 260.0], [4.0, 266.0], [4.1, 269.0], [4.2, 271.0], [4.3, 273.0], [4.4, 277.0], [4.5, 280.0], [4.6, 281.0], [4.7, 285.0], [4.8, 288.0], [4.9, 293.0], [5.0, 297.0], [5.1, 306.0], [5.2, 310.0], [5.3, 323.0], [5.4, 324.0], [5.5, 327.0], [5.6, 328.0], [5.7, 333.0], [5.8, 337.0], [5.9, 342.0], [6.0, 348.0], [6.1, 351.0], [6.2, 359.0], [6.3, 362.0], [6.4, 365.0], [6.5, 368.0], [6.6, 370.0], [6.7, 373.0], [6.8, 381.0], [6.9, 383.0], [7.0, 390.0], [7.1, 392.0], [7.2, 395.0], [7.3, 398.0], [7.4, 399.0], [7.5, 404.0], [7.6, 410.0], [7.7, 417.0], [7.8, 420.0], [7.9, 424.0], [8.0, 427.0], [8.1, 433.0], [8.2, 444.0], [8.3, 445.0], [8.4, 452.0], [8.5, 458.0], [8.6, 459.0], [8.7, 462.0], [8.8, 467.0], [8.9, 468.0], [9.0, 477.0], [9.1, 478.0], [9.2, 479.0], [9.3, 482.0], [9.4, 489.0], [9.5, 491.0], [9.6, 502.0], [9.7, 504.0], [9.8, 508.0], [9.9, 510.0], [10.0, 512.0], [10.1, 522.0], [10.2, 525.0], [10.3, 528.0], [10.4, 530.0], [10.5, 535.0], [10.6, 539.0], [10.7, 541.0], [10.8, 544.0], [10.9, 550.0], [11.0, 553.0], [11.1, 557.0], [11.2, 558.0], [11.3, 560.0], [11.4, 566.0], [11.5, 572.0], [11.6, 574.0], [11.7, 579.0], [11.8, 584.0], [11.9, 587.0], [12.0, 594.0], [12.1, 595.0], [12.2, 603.0], [12.3, 607.0], [12.4, 611.0], [12.5, 616.0], [12.6, 619.0], [12.7, 624.0], [12.8, 628.0], [12.9, 630.0], [13.0, 632.0], [13.1, 636.0], [13.2, 641.0], [13.3, 647.0], [13.4, 650.0], [13.5, 653.0], [13.6, 656.0], [13.7, 665.0], [13.8, 668.0], [13.9, 670.0], [14.0, 675.0], [14.1, 678.0], [14.2, 680.0], [14.3, 683.0], [14.4, 688.0], [14.5, 692.0], [14.6, 695.0], [14.7, 699.0], [14.8, 705.0], [14.9, 711.0], [15.0, 716.0], [15.1, 719.0], [15.2, 721.0], [15.3, 723.0], [15.4, 726.0], [15.5, 730.0], [15.6, 736.0], [15.7, 738.0], [15.8, 744.0], [15.9, 749.0], [16.0, 751.0], [16.1, 752.0], [16.2, 754.0], [16.3, 760.0], [16.4, 770.0], [16.5, 775.0], [16.6, 781.0], [16.7, 782.0], [16.8, 786.0], [16.9, 788.0], [17.0, 798.0], [17.1, 800.0], [17.2, 804.0], [17.3, 811.0], [17.4, 817.0], [17.5, 823.0], [17.6, 825.0], [17.7, 826.0], [17.8, 827.0], [17.9, 830.0], [18.0, 837.0], [18.1, 839.0], [18.2, 844.0], [18.3, 847.0], [18.4, 851.0], [18.5, 854.0], [18.6, 857.0], [18.7, 865.0], [18.8, 870.0], [18.9, 877.0], [19.0, 880.0], [19.1, 882.0], [19.2, 883.0], [19.3, 886.0], [19.4, 887.0], [19.5, 891.0], [19.6, 895.0], [19.7, 901.0], [19.8, 902.0], [19.9, 906.0], [20.0, 908.0], [20.1, 911.0], [20.2, 915.0], [20.3, 917.0], [20.4, 918.0], [20.5, 921.0], [20.6, 927.0], [20.7, 928.0], [20.8, 930.0], [20.9, 931.0], [21.0, 936.0], [21.1, 940.0], [21.2, 945.0], [21.3, 947.0], [21.4, 948.0], [21.5, 949.0], [21.6, 951.0], [21.7, 957.0], [21.8, 963.0], [21.9, 969.0], [22.0, 971.0], [22.1, 979.0], [22.2, 981.0], [22.3, 983.0], [22.4, 986.0], [22.5, 990.0], [22.6, 999.0], [22.7, 1000.0], [22.8, 1003.0], [22.9, 1010.0], [23.0, 1017.0], [23.1, 1020.0], [23.2, 1026.0], [23.3, 1028.0], [23.4, 1029.0], [23.5, 1034.0], [23.6, 1040.0], [23.7, 1048.0], [23.8, 1049.0], [23.9, 1054.0], [24.0, 1056.0], [24.1, 1057.0], [24.2, 1059.0], [24.3, 1061.0], [24.4, 1061.0], [24.5, 1063.0], [24.6, 1063.0], [24.7, 1063.0], [24.8, 1064.0], [24.9, 1065.0], [25.0, 1067.0], [25.1, 1067.0], [25.2, 1068.0], [25.3, 1071.0], [25.4, 1072.0], [25.5, 1077.0], [25.6, 1080.0], [25.7, 1082.0], [25.8, 1086.0], [25.9, 1090.0], [26.0, 1092.0], [26.1, 1093.0], [26.2, 1098.0], [26.3, 1100.0], [26.4, 1102.0], [26.5, 1104.0], [26.6, 1105.0], [26.7, 1106.0], [26.8, 1107.0], [26.9, 1108.0], [27.0, 1110.0], [27.1, 1111.0], [27.2, 1111.0], [27.3, 1111.0], [27.4, 1112.0], [27.5, 1114.0], [27.6, 1115.0], [27.7, 1116.0], [27.8, 1118.0], [27.9, 1119.0], [28.0, 1120.0], [28.1, 1120.0], [28.2, 1121.0], [28.3, 1121.0], [28.4, 1122.0], [28.5, 1123.0], [28.6, 1125.0], [28.7, 1125.0], [28.8, 1126.0], [28.9, 1127.0], [29.0, 1128.0], [29.1, 1128.0], [29.2, 1129.0], [29.3, 1129.0], [29.4, 1130.0], [29.5, 1130.0], [29.6, 1131.0], [29.7, 1132.0], [29.8, 1132.0], [29.9, 1133.0], [30.0, 1136.0], [30.1, 1136.0], [30.2, 1137.0], [30.3, 1137.0], [30.4, 1138.0], [30.5, 1139.0], [30.6, 1139.0], [30.7, 1139.0], [30.8, 1139.0], [30.9, 1140.0], [31.0, 1140.0], [31.1, 1141.0], [31.2, 1141.0], [31.3, 1143.0], [31.4, 1143.0], [31.5, 1144.0], [31.6, 1144.0], [31.7, 1145.0], [31.8, 1145.0], [31.9, 1146.0], [32.0, 1147.0], [32.1, 1148.0], [32.2, 1148.0], [32.3, 1148.0], [32.4, 1148.0], [32.5, 1149.0], [32.6, 1149.0], [32.7, 1149.0], [32.8, 1149.0], [32.9, 1150.0], [33.0, 1150.0], [33.1, 1151.0], [33.2, 1151.0], [33.3, 1152.0], [33.4, 1152.0], [33.5, 1152.0], [33.6, 1153.0], [33.7, 1154.0], [33.8, 1155.0], [33.9, 1155.0], [34.0, 1155.0], [34.1, 1156.0], [34.2, 1157.0], [34.3, 1158.0], [34.4, 1158.0], [34.5, 1159.0], [34.6, 1159.0], [34.7, 1159.0], [34.8, 1159.0], [34.9, 1159.0], [35.0, 1160.0], [35.1, 1160.0], [35.2, 1160.0], [35.3, 1160.0], [35.4, 1161.0], [35.5, 1161.0], [35.6, 1161.0], [35.7, 1162.0], [35.8, 1162.0], [35.9, 1162.0], [36.0, 1162.0], [36.1, 1162.0], [36.2, 1163.0], [36.3, 1163.0], [36.4, 1163.0], [36.5, 1164.0], [36.6, 1164.0], [36.7, 1165.0], [36.8, 1166.0], [36.9, 1166.0], [37.0, 1167.0], [37.1, 1167.0], [37.2, 1167.0], [37.3, 1168.0], [37.4, 1168.0], [37.5, 1168.0], [37.6, 1168.0], [37.7, 1169.0], [37.8, 1169.0], [37.9, 1169.0], [38.0, 1169.0], [38.1, 1170.0], [38.2, 1170.0], [38.3, 1170.0], [38.4, 1170.0], [38.5, 1170.0], [38.6, 1171.0], [38.7, 1171.0], [38.8, 1171.0], [38.9, 1171.0], [39.0, 1171.0], [39.1, 1171.0], [39.2, 1172.0], [39.3, 1172.0], [39.4, 1172.0], [39.5, 1172.0], [39.6, 1173.0], [39.7, 1173.0], [39.8, 1173.0], [39.9, 1174.0], [40.0, 1174.0], [40.1, 1174.0], [40.2, 1174.0], [40.3, 1175.0], [40.4, 1175.0], [40.5, 1175.0], [40.6, 1176.0], [40.7, 1176.0], [40.8, 1176.0], [40.9, 1176.0], [41.0, 1177.0], [41.1, 1177.0], [41.2, 1177.0], [41.3, 1178.0], [41.4, 1178.0], [41.5, 1178.0], [41.6, 1178.0], [41.7, 1178.0], [41.8, 1179.0], [41.9, 1179.0], [42.0, 1179.0], [42.1, 1179.0], [42.2, 1179.0], [42.3, 1179.0], [42.4, 1179.0], [42.5, 1180.0], [42.6, 1180.0], [42.7, 1180.0], [42.8, 1180.0], [42.9, 1180.0], [43.0, 1180.0], [43.1, 1180.0], [43.2, 1180.0], [43.3, 1181.0], [43.4, 1181.0], [43.5, 1181.0], [43.6, 1181.0], [43.7, 1181.0], [43.8, 1181.0], [43.9, 1182.0], [44.0, 1182.0], [44.1, 1182.0], [44.2, 1182.0], [44.3, 1183.0], [44.4, 1183.0], [44.5, 1183.0], [44.6, 1183.0], [44.7, 1184.0], [44.8, 1184.0], [44.9, 1185.0], [45.0, 1185.0], [45.1, 1186.0], [45.2, 1186.0], [45.3, 1186.0], [45.4, 1186.0], [45.5, 1186.0], [45.6, 1186.0], [45.7, 1186.0], [45.8, 1186.0], [45.9, 1187.0], [46.0, 1187.0], [46.1, 1187.0], [46.2, 1187.0], [46.3, 1188.0], [46.4, 1188.0], [46.5, 1188.0], [46.6, 1188.0], [46.7, 1188.0], [46.8, 1189.0], [46.9, 1189.0], [47.0, 1189.0], [47.1, 1189.0], [47.2, 1189.0], [47.3, 1189.0], [47.4, 1190.0], [47.5, 1190.0], [47.6, 1190.0], [47.7, 1190.0], [47.8, 1190.0], [47.9, 1190.0], [48.0, 1191.0], [48.1, 1191.0], [48.2, 1191.0], [48.3, 1191.0], [48.4, 1191.0], [48.5, 1192.0], [48.6, 1192.0], [48.7, 1192.0], [48.8, 1192.0], [48.9, 1193.0], [49.0, 1193.0], [49.1, 1193.0], [49.2, 1194.0], [49.3, 1194.0], [49.4, 1194.0], [49.5, 1195.0], [49.6, 1195.0], [49.7, 1195.0], [49.8, 1196.0], [49.9, 1196.0], [50.0, 1196.0], [50.1, 1196.0], [50.2, 1197.0], [50.3, 1197.0], [50.4, 1197.0], [50.5, 1198.0], [50.6, 1198.0], [50.7, 1198.0], [50.8, 1198.0], [50.9, 1198.0], [51.0, 1198.0], [51.1, 1199.0], [51.2, 1199.0], [51.3, 1199.0], [51.4, 1199.0], [51.5, 1199.0], [51.6, 1199.0], [51.7, 1199.0], [51.8, 1199.0], [51.9, 1199.0], [52.0, 1200.0], [52.1, 1200.0], [52.2, 1200.0], [52.3, 1200.0], [52.4, 1200.0], [52.5, 1200.0], [52.6, 1200.0], [52.7, 1201.0], [52.8, 1201.0], [52.9, 1201.0], [53.0, 1201.0], [53.1, 1202.0], [53.2, 1202.0], [53.3, 1202.0], [53.4, 1202.0], [53.5, 1202.0], [53.6, 1202.0], [53.7, 1203.0], [53.8, 1203.0], [53.9, 1203.0], [54.0, 1203.0], [54.1, 1204.0], [54.2, 1204.0], [54.3, 1204.0], [54.4, 1204.0], [54.5, 1205.0], [54.6, 1205.0], [54.7, 1205.0], [54.8, 1205.0], [54.9, 1205.0], [55.0, 1206.0], [55.1, 1206.0], [55.2, 1206.0], [55.3, 1207.0], [55.4, 1207.0], [55.5, 1207.0], [55.6, 1207.0], [55.7, 1207.0], [55.8, 1207.0], [55.9, 1208.0], [56.0, 1208.0], [56.1, 1208.0], [56.2, 1208.0], [56.3, 1208.0], [56.4, 1208.0], [56.5, 1209.0], [56.6, 1209.0], [56.7, 1209.0], [56.8, 1209.0], [56.9, 1209.0], [57.0, 1209.0], [57.1, 1209.0], [57.2, 1209.0], [57.3, 1210.0], [57.4, 1210.0], [57.5, 1210.0], [57.6, 1210.0], [57.7, 1210.0], [57.8, 1210.0], [57.9, 1210.0], [58.0, 1211.0], [58.1, 1211.0], [58.2, 1211.0], [58.3, 1211.0], [58.4, 1211.0], [58.5, 1212.0], [58.6, 1212.0], [58.7, 1212.0], [58.8, 1212.0], [58.9, 1212.0], [59.0, 1212.0], [59.1, 1212.0], [59.2, 1213.0], [59.3, 1213.0], [59.4, 1213.0], [59.5, 1213.0], [59.6, 1214.0], [59.7, 1214.0], [59.8, 1214.0], [59.9, 1214.0], [60.0, 1215.0], [60.1, 1215.0], [60.2, 1215.0], [60.3, 1215.0], [60.4, 1215.0], [60.5, 1216.0], [60.6, 1216.0], [60.7, 1216.0], [60.8, 1216.0], [60.9, 1216.0], [61.0, 1217.0], [61.1, 1217.0], [61.2, 1217.0], [61.3, 1217.0], [61.4, 1217.0], [61.5, 1217.0], [61.6, 1217.0], [61.7, 1218.0], [61.8, 1218.0], [61.9, 1218.0], [62.0, 1218.0], [62.1, 1218.0], [62.2, 1218.0], [62.3, 1218.0], [62.4, 1218.0], [62.5, 1218.0], [62.6, 1218.0], [62.7, 1219.0], [62.8, 1219.0], [62.9, 1219.0], [63.0, 1219.0], [63.1, 1219.0], [63.2, 1219.0], [63.3, 1220.0], [63.4, 1220.0], [63.5, 1220.0], [63.6, 1220.0], [63.7, 1220.0], [63.8, 1220.0], [63.9, 1220.0], [64.0, 1220.0], [64.1, 1220.0], [64.2, 1221.0], [64.3, 1221.0], [64.4, 1221.0], [64.5, 1221.0], [64.6, 1221.0], [64.7, 1221.0], [64.8, 1221.0], [64.9, 1222.0], [65.0, 1222.0], [65.1, 1222.0], [65.2, 1222.0], [65.3, 1222.0], [65.4, 1222.0], [65.5, 1223.0], [65.6, 1223.0], [65.7, 1223.0], [65.8, 1223.0], [65.9, 1223.0], [66.0, 1224.0], [66.1, 1224.0], [66.2, 1224.0], [66.3, 1224.0], [66.4, 1224.0], [66.5, 1225.0], [66.6, 1225.0], [66.7, 1225.0], [66.8, 1225.0], [66.9, 1226.0], [67.0, 1226.0], [67.1, 1227.0], [67.2, 1227.0], [67.3, 1227.0], [67.4, 1228.0], [67.5, 1228.0], [67.6, 1228.0], [67.7, 1228.0], [67.8, 1228.0], [67.9, 1228.0], [68.0, 1228.0], [68.1, 1229.0], [68.2, 1229.0], [68.3, 1229.0], [68.4, 1229.0], [68.5, 1229.0], [68.6, 1229.0], [68.7, 1229.0], [68.8, 1229.0], [68.9, 1230.0], [69.0, 1230.0], [69.1, 1230.0], [69.2, 1230.0], [69.3, 1230.0], [69.4, 1231.0], [69.5, 1231.0], [69.6, 1231.0], [69.7, 1231.0], [69.8, 1231.0], [69.9, 1231.0], [70.0, 1232.0], [70.1, 1232.0], [70.2, 1232.0], [70.3, 1232.0], [70.4, 1232.0], [70.5, 1232.0], [70.6, 1233.0], [70.7, 1233.0], [70.8, 1233.0], [70.9, 1233.0], [71.0, 1234.0], [71.1, 1234.0], [71.2, 1234.0], [71.3, 1235.0], [71.4, 1235.0], [71.5, 1235.0], [71.6, 1235.0], [71.7, 1236.0], [71.8, 1236.0], [71.9, 1236.0], [72.0, 1236.0], [72.1, 1236.0], [72.2, 1236.0], [72.3, 1236.0], [72.4, 1237.0], [72.5, 1237.0], [72.6, 1237.0], [72.7, 1237.0], [72.8, 1237.0], [72.9, 1237.0], [73.0, 1238.0], [73.1, 1238.0], [73.2, 1238.0], [73.3, 1239.0], [73.4, 1239.0], [73.5, 1239.0], [73.6, 1239.0], [73.7, 1239.0], [73.8, 1239.0], [73.9, 1239.0], [74.0, 1240.0], [74.1, 1240.0], [74.2, 1240.0], [74.3, 1240.0], [74.4, 1240.0], [74.5, 1240.0], [74.6, 1240.0], [74.7, 1240.0], [74.8, 1241.0], [74.9, 1241.0], [75.0, 1241.0], [75.1, 1241.0], [75.2, 1241.0], [75.3, 1242.0], [75.4, 1242.0], [75.5, 1242.0], [75.6, 1242.0], [75.7, 1243.0], [75.8, 1243.0], [75.9, 1243.0], [76.0, 1243.0], [76.1, 1243.0], [76.2, 1244.0], [76.3, 1244.0], [76.4, 1244.0], [76.5, 1245.0], [76.6, 1246.0], [76.7, 1246.0], [76.8, 1246.0], [76.9, 1246.0], [77.0, 1247.0], [77.1, 1247.0], [77.2, 1247.0], [77.3, 1247.0], [77.4, 1247.0], [77.5, 1248.0], [77.6, 1248.0], [77.7, 1248.0], [77.8, 1248.0], [77.9, 1248.0], [78.0, 1249.0], [78.1, 1249.0], [78.2, 1249.0], [78.3, 1249.0], [78.4, 1249.0], [78.5, 1249.0], [78.6, 1250.0], [78.7, 1250.0], [78.8, 1250.0], [78.9, 1250.0], [79.0, 1250.0], [79.1, 1250.0], [79.2, 1251.0], [79.3, 1251.0], [79.4, 1251.0], [79.5, 1251.0], [79.6, 1251.0], [79.7, 1252.0], [79.8, 1252.0], [79.9, 1252.0], [80.0, 1253.0], [80.1, 1253.0], [80.2, 1253.0], [80.3, 1253.0], [80.4, 1253.0], [80.5, 1254.0], [80.6, 1254.0], [80.7, 1254.0], [80.8, 1254.0], [80.9, 1255.0], [81.0, 1256.0], [81.1, 1256.0], [81.2, 1257.0], [81.3, 1257.0], [81.4, 1257.0], [81.5, 1257.0], [81.6, 1258.0], [81.7, 1258.0], [81.8, 1258.0], [81.9, 1258.0], [82.0, 1259.0], [82.1, 1259.0], [82.2, 1259.0], [82.3, 1259.0], [82.4, 1259.0], [82.5, 1260.0], [82.6, 1260.0], [82.7, 1260.0], [82.8, 1260.0], [82.9, 1260.0], [83.0, 1260.0], [83.1, 1261.0], [83.2, 1261.0], [83.3, 1262.0], [83.4, 1262.0], [83.5, 1263.0], [83.6, 1263.0], [83.7, 1263.0], [83.8, 1263.0], [83.9, 1264.0], [84.0, 1264.0], [84.1, 1264.0], [84.2, 1265.0], [84.3, 1266.0], [84.4, 1266.0], [84.5, 1267.0], [84.6, 1267.0], [84.7, 1268.0], [84.8, 1268.0], [84.9, 1268.0], [85.0, 1268.0], [85.1, 1269.0], [85.2, 1269.0], [85.3, 1269.0], [85.4, 1269.0], [85.5, 1269.0], [85.6, 1270.0], [85.7, 1270.0], [85.8, 1270.0], [85.9, 1270.0], [86.0, 1270.0], [86.1, 1271.0], [86.2, 1271.0], [86.3, 1272.0], [86.4, 1272.0], [86.5, 1273.0], [86.6, 1273.0], [86.7, 1274.0], [86.8, 1274.0], [86.9, 1275.0], [87.0, 1276.0], [87.1, 1277.0], [87.2, 1277.0], [87.3, 1278.0], [87.4, 1278.0], [87.5, 1279.0], [87.6, 1279.0], [87.7, 1279.0], [87.8, 1280.0], [87.9, 1280.0], [88.0, 1280.0], [88.1, 1281.0], [88.2, 1281.0], [88.3, 1282.0], [88.4, 1282.0], [88.5, 1282.0], [88.6, 1283.0], [88.7, 1283.0], [88.8, 1283.0], [88.9, 1284.0], [89.0, 1285.0], [89.1, 1286.0], [89.2, 1286.0], [89.3, 1287.0], [89.4, 1287.0], [89.5, 1288.0], [89.6, 1289.0], [89.7, 1289.0], [89.8, 1289.0], [89.9, 1290.0], [90.0, 1290.0], [90.1, 1291.0], [90.2, 1291.0], [90.3, 1292.0], [90.4, 1292.0], [90.5, 1293.0], [90.6, 1294.0], [90.7, 1295.0], [90.8, 1297.0], [90.9, 1297.0], [91.0, 1298.0], [91.1, 1299.0], [91.2, 1299.0], [91.3, 1300.0], [91.4, 1300.0], [91.5, 1301.0], [91.6, 1302.0], [91.7, 1303.0], [91.8, 1304.0], [91.9, 1306.0], [92.0, 1307.0], [92.1, 1308.0], [92.2, 1309.0], [92.3, 1309.0], [92.4, 1309.0], [92.5, 1311.0], [92.6, 1311.0], [92.7, 1313.0], [92.8, 1313.0], [92.9, 1315.0], [93.0, 1315.0], [93.1, 1316.0], [93.2, 1318.0], [93.3, 1320.0], [93.4, 1320.0], [93.5, 1321.0], [93.6, 1322.0], [93.7, 1322.0], [93.8, 1324.0], [93.9, 1324.0], [94.0, 1325.0], [94.1, 1326.0], [94.2, 1326.0], [94.3, 1326.0], [94.4, 1327.0], [94.5, 1328.0], [94.6, 1329.0], [94.7, 1329.0], [94.8, 1330.0], [94.9, 1334.0], [95.0, 1335.0], [95.1, 1337.0], [95.2, 1338.0], [95.3, 1340.0], [95.4, 1343.0], [95.5, 1344.0], [95.6, 1346.0], [95.7, 1347.0], [95.8, 1351.0], [95.9, 1357.0], [96.0, 1362.0], [96.1, 1364.0], [96.2, 1368.0], [96.3, 1371.0], [96.4, 1376.0], [96.5, 1381.0], [96.6, 1384.0], [96.7, 1385.0], [96.8, 1389.0], [96.9, 1390.0], [97.0, 1392.0], [97.1, 1394.0], [97.2, 1398.0], [97.3, 1399.0], [97.4, 1401.0], [97.5, 1406.0], [97.6, 1410.0], [97.7, 1423.0], [97.8, 1427.0], [97.9, 1429.0], [98.0, 1436.0], [98.1, 1439.0], [98.2, 1441.0], [98.3, 1447.0], [98.4, 1448.0], [98.5, 1453.0], [98.6, 1455.0], [98.7, 1462.0], [98.8, 1468.0], [98.9, 1475.0], [99.0, 1484.0], [99.1, 1491.0], [99.2, 1495.0], [99.3, 1503.0], [99.4, 1510.0], [99.5, 1517.0], [99.6, 1520.0], [99.7, 1533.0], [99.8, 1545.0], [99.9, 1589.0]], "isOverall": false, "label": "/api/learner/check_class?rqm_code=RQM1-2025-STEP-0458-0086&date=December 13, 2025", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1257.0, "series": [{"data": [[2300.0, 1.0], [600.0, 82.0], [700.0, 76.0], [200.0, 122.0], [800.0, 82.0], [900.0, 95.0], [1000.0, 116.0], [1100.0, 824.0], [300.0, 77.0], [1200.0, 1257.0], [1300.0, 193.0], [1400.0, 63.0], [1500.0, 20.0], [100.0, 39.0], [400.0, 69.0], [1600.0, 2.0], [500.0, 82.0]], "isOverall": false, "label": "/api/learner/check_class?rqm_code=RQM1-2025-STEP-0458-0086&date=December 13, 2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3081.0, "series": [{"data": [[0.0, 29.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 76.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 14.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3081.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.549371633752237, "minX": 1.76898318E12, "maxY": 20.0, "series": [{"data": [[1.76898336E12, 19.728715728715734], [1.76898324E12, 18.89014373716627], [1.7689833E12, 20.0], [1.76898318E12, 7.549371633752237]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76898336E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 207.26086956521738, "minX": 1.0, "maxY": 1230.0960378983636, "series": [{"data": [[2.0, 234.51851851851853], [8.0, 505.24489795918373], [9.0, 552.5660377358492], [10.0, 628.9555555555556], [11.0, 670.4615384615383], [3.0, 207.26086956521738], [12.0, 725.3333333333334], [13.0, 806.235294117647], [14.0, 877.0217391304349], [15.0, 910.6274509803922], [1.0, 419.0], [4.0, 253.42857142857142], [16.0, 962.5471698113207], [17.0, 1030.3695652173913], [18.0, 1071.2857142857138], [19.0, 1141.8301886792453], [5.0, 310.5200000000001], [20.0, 1230.0960378983636], [6.0, 367.22], [7.0, 419.00000000000006]], "isOverall": false, "label": "/api/learner/check_class?rqm_code=RQM1-2025-STEP-0458-0086&date=December 13, 2025", "isController": false}, {"data": [[17.436250000000015, 1073.4203125000013]], "isOverall": false, "label": "/api/learner/check_class?rqm_code=RQM1-2025-STEP-0458-0086&date=December 13, 2025-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3277.016666666667, "minX": 1.76898318E12, "maxY": 38425.26666666667, "series": [{"data": [[1.76898336E12, 27174.2], [1.76898324E12, 38358.316666666666], [1.7689833E12, 38425.26666666667], [1.76898318E12, 21779.583333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76898336E12, 4077.15], [1.76898324E12, 5730.366666666667], [1.7689833E12, 5742.133333333333], [1.76898318E12, 3277.016666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76898336E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 467.87791741472125, "minX": 1.76898318E12, "maxY": 1230.1362704918029, "series": [{"data": [[1.76898336E12, 1219.0447330447323], [1.76898324E12, 1159.0616016427123], [1.7689833E12, 1230.1362704918029], [1.76898318E12, 467.87791741472125]], "isOverall": false, "label": "/api/learner/check_class?rqm_code=RQM1-2025-STEP-0458-0086&date=December 13, 2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76898336E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 467.6822262118493, "minX": 1.76898318E12, "maxY": 1230.0491803278685, "series": [{"data": [[1.76898336E12, 1218.9538239538251], [1.76898324E12, 1158.6837782340856], [1.7689833E12, 1230.0491803278685], [1.76898318E12, 467.6822262118493]], "isOverall": false, "label": "/api/learner/check_class?rqm_code=RQM1-2025-STEP-0458-0086&date=December 13, 2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76898336E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.4496919917864495, "minX": 1.76898318E12, "maxY": 4.425685425685425, "series": [{"data": [[1.76898336E12, 4.425685425685425], [1.76898324E12, 2.4496919917864495], [1.7689833E12, 3.830942622950822], [1.76898318E12, 3.748653500897662]], "isOverall": false, "label": "/api/learner/check_class?rqm_code=RQM1-2025-STEP-0458-0086&date=December 13, 2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76898336E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 211.0, "minX": 1.76898318E12, "maxY": 1629.0, "series": [{"data": [[1.76898336E12, 1629.0], [1.76898324E12, 1520.0], [1.7689833E12, 1558.0], [1.76898318E12, 912.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76898336E12, 1326.0], [1.76898324E12, 1321.0], [1.7689833E12, 1318.0], [1.76898318E12, 211.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76898336E12, 1542.4], [1.76898324E12, 1519.0], [1.7689833E12, 1497.4], [1.76898318E12, 270.40000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76898336E12, 1629.0], [1.76898324E12, 1520.0], [1.7689833E12, 1558.0], [1.76898318E12, 912.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76898336E12, 1442.5], [1.76898324E12, 1439.0], [1.7689833E12, 1449.0], [1.76898318E12, 229.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76898336E12, 1607.0], [1.76898324E12, 1520.0], [1.7689833E12, 1527.75], [1.76898318E12, 604.5499999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76898336E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 175.0, "minX": 3.0, "maxY": 1552.0, "series": [{"data": [[4.0, 229.5], [8.0, 224.5], [16.0, 1552.0], [17.0, 1439.0], [9.0, 228.0], [18.0, 1430.0], [11.0, 1395.0], [3.0, 254.0], [12.0, 1467.0], [7.0, 230.0], [14.0, 1459.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 175.0], [10.0, 1162.0], [11.0, 1236.0], [12.0, 1151.0], [13.0, 1198.5], [14.0, 1196.0], [15.0, 1179.0], [16.0, 1189.0], [17.0, 1201.0], [18.0, 1200.0], [19.0, 1197.5], [20.0, 1193.0], [24.0, 1041.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 175.0, "minX": 3.0, "maxY": 1552.0, "series": [{"data": [[4.0, 229.5], [8.0, 224.0], [16.0, 1552.0], [17.0, 1439.0], [9.0, 227.5], [18.0, 1430.0], [11.0, 1395.0], [3.0, 253.0], [12.0, 1467.0], [7.0, 229.0], [14.0, 1459.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 175.0], [10.0, 1162.0], [11.0, 1236.0], [12.0, 1151.0], [13.0, 1198.5], [14.0, 1195.0], [15.0, 1179.0], [16.0, 1189.0], [17.0, 1201.0], [18.0, 1200.0], [19.0, 1197.5], [20.0, 1193.0], [24.0, 1041.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.5, "minX": 1.76898318E12, "maxY": 16.35, "series": [{"data": [[1.76898336E12, 11.216666666666667], [1.76898324E12, 16.35], [1.7689833E12, 16.266666666666666], [1.76898318E12, 9.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76898336E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76898318E12, "maxY": 15.766666666666667, "series": [{"data": [[1.76898336E12, 0.5], [1.76898324E12, 0.48333333333333334], [1.7689833E12, 0.5], [1.76898318E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76898336E12, 11.05], [1.76898324E12, 15.75], [1.7689833E12, 15.766666666666667], [1.76898318E12, 8.783333333333333]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76898336E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76898318E12, "maxY": 15.766666666666667, "series": [{"data": [[1.76898336E12, 0.5], [1.76898324E12, 0.48333333333333334], [1.7689833E12, 0.5], [1.76898318E12, 0.5]], "isOverall": false, "label": "/api/learner/check_class?rqm_code=RQM1-2025-STEP-0458-0086&date=December 13, 2025-success", "isController": false}, {"data": [[1.76898336E12, 11.05], [1.76898324E12, 15.75], [1.7689833E12, 15.766666666666667], [1.76898318E12, 8.783333333333333]], "isOverall": false, "label": "/api/learner/check_class?rqm_code=RQM1-2025-STEP-0458-0086&date=December 13, 2025-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76898336E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76898318E12, "maxY": 15.766666666666667, "series": [{"data": [[1.76898336E12, 0.5], [1.76898324E12, 0.48333333333333334], [1.7689833E12, 0.5], [1.76898318E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76898336E12, 11.05], [1.76898324E12, 15.75], [1.7689833E12, 15.766666666666667], [1.76898318E12, 8.783333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76898336E12, "title": "Total Transactions Per Second"}},
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

