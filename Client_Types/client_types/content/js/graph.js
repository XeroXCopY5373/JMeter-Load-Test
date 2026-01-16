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
        data: {"result": {"minY": 220.0, "minX": 0.0, "maxY": 25984.0, "series": [{"data": [[0.0, 220.0], [0.1, 224.0], [0.2, 225.0], [0.3, 227.0], [0.4, 227.0], [0.5, 230.0], [0.6, 230.0], [0.7, 230.0], [0.8, 231.0], [0.9, 232.0], [1.0, 233.0], [1.1, 234.0], [1.2, 235.0], [1.3, 236.0], [1.4, 237.0], [1.5, 240.0], [1.6, 287.0], [1.7, 290.0], [1.8, 295.0], [1.9, 355.0], [2.0, 371.0], [2.1, 381.0], [2.2, 383.0], [2.3, 403.0], [2.4, 409.0], [2.5, 411.0], [2.6, 416.0], [2.7, 429.0], [2.8, 432.0], [2.9, 435.0], [3.0, 436.0], [3.1, 441.0], [3.2, 448.0], [3.3, 456.0], [3.4, 459.0], [3.5, 471.0], [3.6, 474.0], [3.7, 474.0], [3.8, 477.0], [3.9, 481.0], [4.0, 482.0], [4.1, 490.0], [4.2, 492.0], [4.3, 496.0], [4.4, 509.0], [4.5, 511.0], [4.6, 532.0], [4.7, 534.0], [4.8, 538.0], [4.9, 540.0], [5.0, 540.0], [5.1, 541.0], [5.2, 557.0], [5.3, 567.0], [5.4, 568.0], [5.5, 575.0], [5.6, 583.0], [5.7, 583.0], [5.8, 586.0], [5.9, 596.0], [6.0, 601.0], [6.1, 613.0], [6.2, 625.0], [6.3, 626.0], [6.4, 633.0], [6.5, 634.0], [6.6, 635.0], [6.7, 639.0], [6.8, 640.0], [6.9, 645.0], [7.0, 646.0], [7.1, 656.0], [7.2, 660.0], [7.3, 668.0], [7.4, 670.0], [7.5, 672.0], [7.6, 678.0], [7.7, 679.0], [7.8, 694.0], [7.9, 696.0], [8.0, 701.0], [8.1, 712.0], [8.2, 729.0], [8.3, 732.0], [8.4, 734.0], [8.5, 739.0], [8.6, 741.0], [8.7, 745.0], [8.8, 745.0], [8.9, 749.0], [9.0, 749.0], [9.1, 759.0], [9.2, 763.0], [9.3, 764.0], [9.4, 770.0], [9.5, 771.0], [9.6, 772.0], [9.7, 772.0], [9.8, 775.0], [9.9, 780.0], [10.0, 780.0], [10.1, 784.0], [10.2, 785.0], [10.3, 788.0], [10.4, 790.0], [10.5, 800.0], [10.6, 804.0], [10.7, 811.0], [10.8, 815.0], [10.9, 816.0], [11.0, 820.0], [11.1, 821.0], [11.2, 825.0], [11.3, 830.0], [11.4, 831.0], [11.5, 837.0], [11.6, 841.0], [11.7, 842.0], [11.8, 847.0], [11.9, 847.0], [12.0, 849.0], [12.1, 853.0], [12.2, 853.0], [12.3, 859.0], [12.4, 861.0], [12.5, 861.0], [12.6, 863.0], [12.7, 865.0], [12.8, 867.0], [12.9, 871.0], [13.0, 879.0], [13.1, 880.0], [13.2, 886.0], [13.3, 888.0], [13.4, 892.0], [13.5, 897.0], [13.6, 898.0], [13.7, 900.0], [13.8, 903.0], [13.9, 906.0], [14.0, 908.0], [14.1, 909.0], [14.2, 911.0], [14.3, 912.0], [14.4, 913.0], [14.5, 914.0], [14.6, 918.0], [14.7, 918.0], [14.8, 923.0], [14.9, 923.0], [15.0, 923.0], [15.1, 926.0], [15.2, 927.0], [15.3, 928.0], [15.4, 929.0], [15.5, 931.0], [15.6, 932.0], [15.7, 937.0], [15.8, 938.0], [15.9, 939.0], [16.0, 942.0], [16.1, 943.0], [16.2, 947.0], [16.3, 949.0], [16.4, 950.0], [16.5, 962.0], [16.6, 962.0], [16.7, 963.0], [16.8, 970.0], [16.9, 972.0], [17.0, 973.0], [17.1, 980.0], [17.2, 981.0], [17.3, 985.0], [17.4, 986.0], [17.5, 986.0], [17.6, 989.0], [17.7, 989.0], [17.8, 993.0], [17.9, 997.0], [18.0, 997.0], [18.1, 998.0], [18.2, 1000.0], [18.3, 1002.0], [18.4, 1002.0], [18.5, 1003.0], [18.6, 1003.0], [18.7, 1007.0], [18.8, 1007.0], [18.9, 1007.0], [19.0, 1008.0], [19.1, 1012.0], [19.2, 1013.0], [19.3, 1013.0], [19.4, 1015.0], [19.5, 1016.0], [19.6, 1020.0], [19.7, 1020.0], [19.8, 1021.0], [19.9, 1023.0], [20.0, 1023.0], [20.1, 1026.0], [20.2, 1027.0], [20.3, 1028.0], [20.4, 1028.0], [20.5, 1029.0], [20.6, 1030.0], [20.7, 1033.0], [20.8, 1036.0], [20.9, 1037.0], [21.0, 1040.0], [21.1, 1045.0], [21.2, 1048.0], [21.3, 1049.0], [21.4, 1054.0], [21.5, 1054.0], [21.6, 1055.0], [21.7, 1055.0], [21.8, 1056.0], [21.9, 1056.0], [22.0, 1056.0], [22.1, 1058.0], [22.2, 1060.0], [22.3, 1061.0], [22.4, 1062.0], [22.5, 1063.0], [22.6, 1065.0], [22.7, 1066.0], [22.8, 1072.0], [22.9, 1073.0], [23.0, 1073.0], [23.1, 1074.0], [23.2, 1078.0], [23.3, 1078.0], [23.4, 1078.0], [23.5, 1080.0], [23.6, 1083.0], [23.7, 1086.0], [23.8, 1089.0], [23.9, 1091.0], [24.0, 1093.0], [24.1, 1094.0], [24.2, 1096.0], [24.3, 1096.0], [24.4, 1099.0], [24.5, 1101.0], [24.6, 1103.0], [24.7, 1104.0], [24.8, 1105.0], [24.9, 1106.0], [25.0, 1108.0], [25.1, 1109.0], [25.2, 1109.0], [25.3, 1111.0], [25.4, 1111.0], [25.5, 1113.0], [25.6, 1114.0], [25.7, 1114.0], [25.8, 1114.0], [25.9, 1115.0], [26.0, 1120.0], [26.1, 1122.0], [26.2, 1126.0], [26.3, 1127.0], [26.4, 1129.0], [26.5, 1132.0], [26.6, 1135.0], [26.7, 1135.0], [26.8, 1135.0], [26.9, 1136.0], [27.0, 1136.0], [27.1, 1137.0], [27.2, 1138.0], [27.3, 1144.0], [27.4, 1145.0], [27.5, 1146.0], [27.6, 1146.0], [27.7, 1146.0], [27.8, 1148.0], [27.9, 1148.0], [28.0, 1150.0], [28.1, 1150.0], [28.2, 1153.0], [28.3, 1154.0], [28.4, 1155.0], [28.5, 1156.0], [28.6, 1156.0], [28.7, 1158.0], [28.8, 1160.0], [28.9, 1161.0], [29.0, 1163.0], [29.1, 1164.0], [29.2, 1165.0], [29.3, 1165.0], [29.4, 1166.0], [29.5, 1166.0], [29.6, 1167.0], [29.7, 1167.0], [29.8, 1168.0], [29.9, 1168.0], [30.0, 1173.0], [30.1, 1173.0], [30.2, 1173.0], [30.3, 1175.0], [30.4, 1176.0], [30.5, 1176.0], [30.6, 1177.0], [30.7, 1183.0], [30.8, 1183.0], [30.9, 1184.0], [31.0, 1185.0], [31.1, 1187.0], [31.2, 1189.0], [31.3, 1190.0], [31.4, 1192.0], [31.5, 1193.0], [31.6, 1194.0], [31.7, 1196.0], [31.8, 1197.0], [31.9, 1199.0], [32.0, 1199.0], [32.1, 1201.0], [32.2, 1201.0], [32.3, 1202.0], [32.4, 1202.0], [32.5, 1203.0], [32.6, 1203.0], [32.7, 1203.0], [32.8, 1206.0], [32.9, 1206.0], [33.0, 1208.0], [33.1, 1210.0], [33.2, 1216.0], [33.3, 1220.0], [33.4, 1221.0], [33.5, 1224.0], [33.6, 1225.0], [33.7, 1227.0], [33.8, 1227.0], [33.9, 1229.0], [34.0, 1230.0], [34.1, 1231.0], [34.2, 1233.0], [34.3, 1233.0], [34.4, 1236.0], [34.5, 1236.0], [34.6, 1238.0], [34.7, 1238.0], [34.8, 1239.0], [34.9, 1239.0], [35.0, 1240.0], [35.1, 1241.0], [35.2, 1241.0], [35.3, 1242.0], [35.4, 1243.0], [35.5, 1245.0], [35.6, 1245.0], [35.7, 1247.0], [35.8, 1248.0], [35.9, 1248.0], [36.0, 1249.0], [36.1, 1249.0], [36.2, 1253.0], [36.3, 1253.0], [36.4, 1255.0], [36.5, 1255.0], [36.6, 1256.0], [36.7, 1257.0], [36.8, 1259.0], [36.9, 1263.0], [37.0, 1264.0], [37.1, 1265.0], [37.2, 1265.0], [37.3, 1265.0], [37.4, 1267.0], [37.5, 1267.0], [37.6, 1269.0], [37.7, 1269.0], [37.8, 1273.0], [37.9, 1273.0], [38.0, 1274.0], [38.1, 1275.0], [38.2, 1277.0], [38.3, 1278.0], [38.4, 1278.0], [38.5, 1281.0], [38.6, 1281.0], [38.7, 1282.0], [38.8, 1282.0], [38.9, 1283.0], [39.0, 1284.0], [39.1, 1285.0], [39.2, 1285.0], [39.3, 1285.0], [39.4, 1288.0], [39.5, 1289.0], [39.6, 1290.0], [39.7, 1291.0], [39.8, 1292.0], [39.9, 1295.0], [40.0, 1295.0], [40.1, 1295.0], [40.2, 1296.0], [40.3, 1297.0], [40.4, 1299.0], [40.5, 1301.0], [40.6, 1301.0], [40.7, 1303.0], [40.8, 1303.0], [40.9, 1305.0], [41.0, 1305.0], [41.1, 1306.0], [41.2, 1306.0], [41.3, 1307.0], [41.4, 1310.0], [41.5, 1310.0], [41.6, 1313.0], [41.7, 1314.0], [41.8, 1314.0], [41.9, 1317.0], [42.0, 1318.0], [42.1, 1319.0], [42.2, 1319.0], [42.3, 1320.0], [42.4, 1321.0], [42.5, 1322.0], [42.6, 1322.0], [42.7, 1322.0], [42.8, 1323.0], [42.9, 1323.0], [43.0, 1326.0], [43.1, 1327.0], [43.2, 1327.0], [43.3, 1328.0], [43.4, 1328.0], [43.5, 1328.0], [43.6, 1329.0], [43.7, 1329.0], [43.8, 1329.0], [43.9, 1331.0], [44.0, 1331.0], [44.1, 1331.0], [44.2, 1331.0], [44.3, 1331.0], [44.4, 1333.0], [44.5, 1334.0], [44.6, 1335.0], [44.7, 1335.0], [44.8, 1335.0], [44.9, 1336.0], [45.0, 1339.0], [45.1, 1339.0], [45.2, 1341.0], [45.3, 1343.0], [45.4, 1344.0], [45.5, 1345.0], [45.6, 1346.0], [45.7, 1347.0], [45.8, 1347.0], [45.9, 1347.0], [46.0, 1348.0], [46.1, 1348.0], [46.2, 1348.0], [46.3, 1349.0], [46.4, 1350.0], [46.5, 1350.0], [46.6, 1352.0], [46.7, 1353.0], [46.8, 1353.0], [46.9, 1356.0], [47.0, 1359.0], [47.1, 1360.0], [47.2, 1360.0], [47.3, 1361.0], [47.4, 1361.0], [47.5, 1363.0], [47.6, 1363.0], [47.7, 1365.0], [47.8, 1366.0], [47.9, 1367.0], [48.0, 1367.0], [48.1, 1368.0], [48.2, 1370.0], [48.3, 1372.0], [48.4, 1374.0], [48.5, 1376.0], [48.6, 1376.0], [48.7, 1378.0], [48.8, 1378.0], [48.9, 1380.0], [49.0, 1382.0], [49.1, 1383.0], [49.2, 1383.0], [49.3, 1384.0], [49.4, 1385.0], [49.5, 1386.0], [49.6, 1389.0], [49.7, 1389.0], [49.8, 1391.0], [49.9, 1391.0], [50.0, 1394.0], [50.1, 1394.0], [50.2, 1395.0], [50.3, 1396.0], [50.4, 1398.0], [50.5, 1398.0], [50.6, 1398.0], [50.7, 1400.0], [50.8, 1402.0], [50.9, 1402.0], [51.0, 1404.0], [51.1, 1405.0], [51.2, 1405.0], [51.3, 1406.0], [51.4, 1407.0], [51.5, 1407.0], [51.6, 1410.0], [51.7, 1410.0], [51.8, 1412.0], [51.9, 1413.0], [52.0, 1414.0], [52.1, 1416.0], [52.2, 1416.0], [52.3, 1419.0], [52.4, 1420.0], [52.5, 1421.0], [52.6, 1421.0], [52.7, 1421.0], [52.8, 1421.0], [52.9, 1422.0], [53.0, 1423.0], [53.1, 1424.0], [53.2, 1424.0], [53.3, 1425.0], [53.4, 1425.0], [53.5, 1426.0], [53.6, 1426.0], [53.7, 1428.0], [53.8, 1428.0], [53.9, 1429.0], [54.0, 1429.0], [54.1, 1431.0], [54.2, 1432.0], [54.3, 1432.0], [54.4, 1437.0], [54.5, 1437.0], [54.6, 1439.0], [54.7, 1439.0], [54.8, 1440.0], [54.9, 1440.0], [55.0, 1441.0], [55.1, 1441.0], [55.2, 1441.0], [55.3, 1441.0], [55.4, 1442.0], [55.5, 1444.0], [55.6, 1445.0], [55.7, 1446.0], [55.8, 1447.0], [55.9, 1447.0], [56.0, 1450.0], [56.1, 1451.0], [56.2, 1454.0], [56.3, 1454.0], [56.4, 1455.0], [56.5, 1457.0], [56.6, 1458.0], [56.7, 1459.0], [56.8, 1460.0], [56.9, 1462.0], [57.0, 1462.0], [57.1, 1463.0], [57.2, 1464.0], [57.3, 1467.0], [57.4, 1468.0], [57.5, 1470.0], [57.6, 1471.0], [57.7, 1471.0], [57.8, 1474.0], [57.9, 1475.0], [58.0, 1477.0], [58.1, 1477.0], [58.2, 1478.0], [58.3, 1480.0], [58.4, 1480.0], [58.5, 1482.0], [58.6, 1482.0], [58.7, 1488.0], [58.8, 1488.0], [58.9, 1490.0], [59.0, 1490.0], [59.1, 1493.0], [59.2, 1493.0], [59.3, 1494.0], [59.4, 1498.0], [59.5, 1498.0], [59.6, 1501.0], [59.7, 1501.0], [59.8, 1503.0], [59.9, 1505.0], [60.0, 1508.0], [60.1, 1509.0], [60.2, 1510.0], [60.3, 1510.0], [60.4, 1510.0], [60.5, 1512.0], [60.6, 1512.0], [60.7, 1514.0], [60.8, 1515.0], [60.9, 1515.0], [61.0, 1516.0], [61.1, 1517.0], [61.2, 1519.0], [61.3, 1519.0], [61.4, 1520.0], [61.5, 1520.0], [61.6, 1522.0], [61.7, 1523.0], [61.8, 1524.0], [61.9, 1524.0], [62.0, 1525.0], [62.1, 1526.0], [62.2, 1526.0], [62.3, 1527.0], [62.4, 1528.0], [62.5, 1530.0], [62.6, 1530.0], [62.7, 1530.0], [62.8, 1531.0], [62.9, 1531.0], [63.0, 1535.0], [63.1, 1535.0], [63.2, 1536.0], [63.3, 1536.0], [63.4, 1537.0], [63.5, 1538.0], [63.6, 1538.0], [63.7, 1541.0], [63.8, 1542.0], [63.9, 1542.0], [64.0, 1543.0], [64.1, 1546.0], [64.2, 1549.0], [64.3, 1549.0], [64.4, 1553.0], [64.5, 1555.0], [64.6, 1556.0], [64.7, 1556.0], [64.8, 1557.0], [64.9, 1559.0], [65.0, 1559.0], [65.1, 1563.0], [65.2, 1563.0], [65.3, 1564.0], [65.4, 1565.0], [65.5, 1566.0], [65.6, 1566.0], [65.7, 1569.0], [65.8, 1570.0], [65.9, 1571.0], [66.0, 1572.0], [66.1, 1575.0], [66.2, 1577.0], [66.3, 1577.0], [66.4, 1580.0], [66.5, 1585.0], [66.6, 1588.0], [66.7, 1589.0], [66.8, 1590.0], [66.9, 1595.0], [67.0, 1596.0], [67.1, 1597.0], [67.2, 1601.0], [67.3, 1605.0], [67.4, 1605.0], [67.5, 1606.0], [67.6, 1610.0], [67.7, 1610.0], [67.8, 1613.0], [67.9, 1614.0], [68.0, 1618.0], [68.1, 1619.0], [68.2, 1620.0], [68.3, 1623.0], [68.4, 1624.0], [68.5, 1627.0], [68.6, 1628.0], [68.7, 1631.0], [68.8, 1632.0], [68.9, 1636.0], [69.0, 1637.0], [69.1, 1645.0], [69.2, 1646.0], [69.3, 1646.0], [69.4, 1647.0], [69.5, 1648.0], [69.6, 1650.0], [69.7, 1651.0], [69.8, 1651.0], [69.9, 1654.0], [70.0, 1656.0], [70.1, 1657.0], [70.2, 1658.0], [70.3, 1663.0], [70.4, 1663.0], [70.5, 1665.0], [70.6, 1666.0], [70.7, 1667.0], [70.8, 1670.0], [70.9, 1672.0], [71.0, 1676.0], [71.1, 1679.0], [71.2, 1682.0], [71.3, 1683.0], [71.4, 1687.0], [71.5, 1688.0], [71.6, 1690.0], [71.7, 1690.0], [71.8, 1691.0], [71.9, 1693.0], [72.0, 1696.0], [72.1, 1699.0], [72.2, 1700.0], [72.3, 1701.0], [72.4, 1702.0], [72.5, 1703.0], [72.6, 1704.0], [72.7, 1704.0], [72.8, 1712.0], [72.9, 1712.0], [73.0, 1713.0], [73.1, 1713.0], [73.2, 1717.0], [73.3, 1718.0], [73.4, 1721.0], [73.5, 1724.0], [73.6, 1724.0], [73.7, 1728.0], [73.8, 1729.0], [73.9, 1732.0], [74.0, 1732.0], [74.1, 1733.0], [74.2, 1733.0], [74.3, 1736.0], [74.4, 1736.0], [74.5, 1737.0], [74.6, 1750.0], [74.7, 1752.0], [74.8, 1754.0], [74.9, 1754.0], [75.0, 1759.0], [75.1, 1759.0], [75.2, 1761.0], [75.3, 1763.0], [75.4, 1764.0], [75.5, 1766.0], [75.6, 1766.0], [75.7, 1769.0], [75.8, 1776.0], [75.9, 1777.0], [76.0, 1779.0], [76.1, 1780.0], [76.2, 1782.0], [76.3, 1782.0], [76.4, 1784.0], [76.5, 1784.0], [76.6, 1785.0], [76.7, 1787.0], [76.8, 1788.0], [76.9, 1791.0], [77.0, 1791.0], [77.1, 1795.0], [77.2, 1795.0], [77.3, 1799.0], [77.4, 1799.0], [77.5, 1804.0], [77.6, 1805.0], [77.7, 1806.0], [77.8, 1807.0], [77.9, 1808.0], [78.0, 1813.0], [78.1, 1813.0], [78.2, 1818.0], [78.3, 1822.0], [78.4, 1825.0], [78.5, 1828.0], [78.6, 1829.0], [78.7, 1832.0], [78.8, 1834.0], [78.9, 1841.0], [79.0, 1841.0], [79.1, 1843.0], [79.2, 1845.0], [79.3, 1846.0], [79.4, 1848.0], [79.5, 1850.0], [79.6, 1856.0], [79.7, 1857.0], [79.8, 1859.0], [79.9, 1867.0], [80.0, 1869.0], [80.1, 1871.0], [80.2, 1872.0], [80.3, 1874.0], [80.4, 1876.0], [80.5, 1880.0], [80.6, 1882.0], [80.7, 1885.0], [80.8, 1887.0], [80.9, 1888.0], [81.0, 1890.0], [81.1, 1891.0], [81.2, 1900.0], [81.3, 1900.0], [81.4, 1906.0], [81.5, 1909.0], [81.6, 1919.0], [81.7, 1922.0], [81.8, 1928.0], [81.9, 1932.0], [82.0, 1937.0], [82.1, 1942.0], [82.2, 1949.0], [82.3, 1953.0], [82.4, 1954.0], [82.5, 1964.0], [82.6, 1965.0], [82.7, 1971.0], [82.8, 1985.0], [82.9, 1986.0], [83.0, 1992.0], [83.1, 1994.0], [83.2, 2000.0], [83.3, 2003.0], [83.4, 2008.0], [83.5, 2012.0], [83.6, 2012.0], [83.7, 2013.0], [83.8, 2013.0], [83.9, 2023.0], [84.0, 2023.0], [84.1, 2024.0], [84.2, 2027.0], [84.3, 2028.0], [84.4, 2046.0], [84.5, 2058.0], [84.6, 2068.0], [84.7, 2079.0], [84.8, 2083.0], [84.9, 2083.0], [85.0, 2086.0], [85.1, 2094.0], [85.2, 2097.0], [85.3, 2101.0], [85.4, 2102.0], [85.5, 2105.0], [85.6, 2106.0], [85.7, 2115.0], [85.8, 2130.0], [85.9, 2138.0], [86.0, 2139.0], [86.1, 2142.0], [86.2, 2145.0], [86.3, 2146.0], [86.4, 2156.0], [86.5, 2168.0], [86.6, 2186.0], [86.7, 2191.0], [86.8, 2197.0], [86.9, 2199.0], [87.0, 2205.0], [87.1, 2223.0], [87.2, 2230.0], [87.3, 2256.0], [87.4, 2271.0], [87.5, 2342.0], [87.6, 2354.0], [87.7, 2357.0], [87.8, 2376.0], [87.9, 2394.0], [88.0, 2398.0], [88.1, 2406.0], [88.2, 2418.0], [88.3, 2427.0], [88.4, 2455.0], [88.5, 2469.0], [88.6, 2472.0], [88.7, 2491.0], [88.8, 2492.0], [88.9, 2503.0], [89.0, 2505.0], [89.1, 2528.0], [89.2, 2532.0], [89.3, 2538.0], [89.4, 2564.0], [89.5, 2591.0], [89.6, 2611.0], [89.7, 2612.0], [89.8, 2655.0], [89.9, 2676.0], [90.0, 2710.0], [90.1, 2744.0], [90.2, 2752.0], [90.3, 2778.0], [90.4, 2794.0], [90.5, 2814.0], [90.6, 2820.0], [90.7, 2844.0], [90.8, 2853.0], [90.9, 2856.0], [91.0, 2864.0], [91.1, 2867.0], [91.2, 2910.0], [91.3, 2942.0], [91.4, 3016.0], [91.5, 3023.0], [91.6, 3065.0], [91.7, 3114.0], [91.8, 3123.0], [91.9, 3223.0], [92.0, 3224.0], [92.1, 3316.0], [92.2, 3317.0], [92.3, 3331.0], [92.4, 3333.0], [92.5, 3380.0], [92.6, 3386.0], [92.7, 3400.0], [92.8, 3436.0], [92.9, 3452.0], [93.0, 3474.0], [93.1, 3486.0], [93.2, 3542.0], [93.3, 3651.0], [93.4, 3695.0], [93.5, 3777.0], [93.6, 3820.0], [93.7, 3830.0], [93.8, 3868.0], [93.9, 3918.0], [94.0, 3959.0], [94.1, 4011.0], [94.2, 4203.0], [94.3, 4227.0], [94.4, 4367.0], [94.5, 4406.0], [94.6, 4466.0], [94.7, 4498.0], [94.8, 4670.0], [94.9, 4820.0], [95.0, 5043.0], [95.1, 5051.0], [95.2, 5303.0], [95.3, 5990.0], [95.4, 6103.0], [95.5, 21338.0], [95.6, 21345.0], [95.7, 21384.0], [95.8, 21391.0], [95.9, 21425.0], [96.0, 21677.0], [96.1, 21840.0], [96.2, 21864.0], [96.3, 21868.0], [96.4, 21930.0], [96.5, 21987.0], [96.6, 22176.0], [96.7, 22220.0], [96.8, 22296.0], [96.9, 22360.0], [97.0, 22365.0], [97.1, 22437.0], [97.2, 22479.0], [97.3, 22583.0], [97.4, 22585.0], [97.5, 22641.0], [97.6, 22650.0], [97.7, 22667.0], [97.8, 22689.0], [97.9, 22696.0], [98.0, 22783.0], [98.1, 22793.0], [98.2, 22832.0], [98.3, 22833.0], [98.4, 22837.0], [98.5, 22976.0], [98.6, 23013.0], [98.7, 23116.0], [98.8, 23119.0], [98.9, 23256.0], [99.0, 23286.0], [99.1, 23441.0], [99.2, 23453.0], [99.3, 23546.0], [99.4, 23599.0], [99.5, 23933.0], [99.6, 24130.0], [99.7, 24207.0], [99.8, 24865.0], [99.9, 25636.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 147.0, "series": [{"data": [[600.0, 29.0], [700.0, 36.0], [800.0, 46.0], [900.0, 65.0], [1000.0, 90.0], [1100.0, 109.0], [1200.0, 122.0], [1300.0, 147.0], [1400.0, 127.0], [1500.0, 110.0], [1600.0, 72.0], [1700.0, 76.0], [1800.0, 54.0], [1900.0, 29.0], [2000.0, 29.0], [2100.0, 25.0], [2200.0, 7.0], [2300.0, 9.0], [2400.0, 11.0], [2500.0, 10.0], [2600.0, 7.0], [2700.0, 6.0], [2800.0, 10.0], [2900.0, 3.0], [3000.0, 5.0], [3100.0, 3.0], [3300.0, 8.0], [3200.0, 3.0], [3400.0, 7.0], [3500.0, 2.0], [3600.0, 2.0], [3700.0, 2.0], [3800.0, 5.0], [3900.0, 3.0], [4000.0, 1.0], [4200.0, 2.0], [4300.0, 2.0], [4400.0, 4.0], [4500.0, 1.0], [4600.0, 1.0], [4800.0, 2.0], [5000.0, 2.0], [5300.0, 1.0], [5500.0, 1.0], [6100.0, 1.0], [5900.0, 1.0], [21400.0, 1.0], [21300.0, 6.0], [21500.0, 1.0], [21800.0, 4.0], [21900.0, 4.0], [21600.0, 1.0], [22500.0, 4.0], [22300.0, 4.0], [22100.0, 1.0], [22200.0, 2.0], [22400.0, 2.0], [23400.0, 2.0], [22600.0, 7.0], [23500.0, 3.0], [22800.0, 3.0], [23000.0, 2.0], [22700.0, 3.0], [23200.0, 3.0], [23100.0, 3.0], [22900.0, 2.0], [24100.0, 1.0], [24000.0, 1.0], [24200.0, 1.0], [23900.0, 1.0], [24800.0, 1.0], [24600.0, 1.0], [25900.0, 1.0], [25600.0, 1.0], [200.0, 26.0], [300.0, 6.0], [400.0, 30.0], [500.0, 24.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 25900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1344.0, "series": [{"data": [[0.0, 29.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 51.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 16.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1344.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 15.802431610942254, "minX": 1.76852598E12, "maxY": 20.0, "series": [{"data": [[1.76852604E12, 20.0], [1.76852616E12, 17.0], [1.76852598E12, 15.802431610942254], [1.7685261E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852616E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1397.2, "minX": 1.0, "maxY": 23933.0, "series": [{"data": [[8.0, 3622.142857142857], [2.0, 21384.0], [9.0, 1397.2], [10.0, 1826.3529411764707], [11.0, 1658.4090909090914], [12.0, 1605.409090909091], [3.0, 21579.0], [13.0, 1879.4285714285716], [14.0, 2025.7083333333335], [15.0, 1869.1600000000003], [16.0, 2379.75], [4.0, 21348.0], [1.0, 21316.0], [17.0, 2271.0476190476193], [18.0, 2951.5263157894733], [19.0, 2114.2307692307695], [20.0, 2409.4567387687216], [5.0, 21338.0], [6.0, 21345.0], [7.0, 23933.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}, {"data": [[18.909722222222204, 2443.2124999999996]], "isOverall": false, "label": "/api/learner/educational-attainment-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 268.8, "minX": 1.76852598E12, "maxY": 5101568.85, "series": [{"data": [[1.76852604E12, 5101568.85], [1.76852616E12, 582802.1833333333], [1.76852598E12, 3057215.85], [1.7685261E12, 4999415.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76852604E12, 2257.0666666666666], [1.76852616E12, 268.8], [1.76852598E12, 1403.7333333333333], [1.7685261E12, 2214.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852616E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2272.425330812854, "minX": 1.76852598E12, "maxY": 5140.396825396826, "series": [{"data": [[1.76852604E12, 2272.425330812854], [1.76852616E12, 5140.396825396826], [1.76852598E12, 2402.0151975683907], [1.7685261E12, 2316.0019267822736]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852616E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1724.936170212766, "minX": 1.76852598E12, "maxY": 3999.190476190476, "series": [{"data": [[1.76852604E12, 1836.5822306238201], [1.76852616E12, 3999.190476190476], [1.76852598E12, 1724.936170212766], [1.7685261E12, 1873.3795761079002]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852616E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 799.7013232514179, "minX": 1.76852598E12, "maxY": 3022.2063492063494, "series": [{"data": [[1.76852604E12, 799.7013232514179], [1.76852616E12, 3022.2063492063494], [1.76852598E12, 1098.8510638297876], [1.7685261E12, 814.2890173410406]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852616E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 220.0, "minX": 1.76852598E12, "maxY": 22689.0, "series": [{"data": [[1.76852604E12, 22689.0], [1.76852616E12, 21579.0], [1.76852598E12, 22669.0], [1.7685261E12, 21906.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76852604E12, 3138.300000000004], [1.76852616E12, 21579.0], [1.76852598E12, 19389.500000000044], [1.7685261E12, 1437.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76852604E12, 22689.0], [1.76852616E12, 21579.0], [1.76852598E12, 22669.0], [1.7685261E12, 21906.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76852604E12, 12099.849999999986], [1.76852616E12, 21579.0], [1.76852598E12, 21984.8], [1.7685261E12, 11935.049999999988]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76852604E12, 729.0], [1.76852616E12, 21316.0], [1.76852598E12, 220.0], [1.7685261E12, 295.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76852604E12, 988.5], [1.76852616E12, 21346.5], [1.76852598E12, 233.5], [1.7685261E12, 922.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852616E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 231.5, "minX": 1.0, "maxY": 21366.0, "series": [{"data": [[1.0, 21366.0], [4.0, 231.5], [8.0, 3436.0], [2.0, 21341.5], [9.0, 235.0], [11.0, 942.0], [6.0, 264.5], [12.0, 771.0], [13.0, 772.0], [7.0, 1020.0], [14.0, 1016.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1329.0], [2.0, 1672.5], [9.0, 1389.0], [10.0, 1447.5], [11.0, 1431.0], [3.0, 2134.5], [12.0, 1490.0], [13.0, 1416.0], [14.0, 1716.0], [4.0, 1388.5], [1.0, 12587.0], [5.0, 1445.5], [6.0, 1332.0], [7.0, 1327.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 231.5, "minX": 1.0, "maxY": 21366.0, "series": [{"data": [[1.0, 21366.0], [4.0, 231.5], [8.0, 3436.0], [2.0, 21341.5], [9.0, 235.0], [11.0, 942.0], [6.0, 263.5], [12.0, 771.0], [13.0, 772.0], [7.0, 1020.0], [14.0, 1016.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 947.0], [2.0, 852.0], [9.0, 965.0], [10.0, 985.5], [11.0, 964.5], [3.0, 602.0], [12.0, 1051.0], [13.0, 947.0], [14.0, 1139.5], [4.0, 954.0], [1.0, 10962.0], [5.0, 803.0], [6.0, 826.0], [7.0, 918.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.76852592E12, "maxY": 8.816666666666666, "series": [{"data": [[1.76852604E12, 8.816666666666666], [1.76852616E12, 0.7166666666666667], [1.76852598E12, 5.733333333333333], [1.76852592E12, 0.08333333333333333], [1.7685261E12, 8.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852616E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76852598E12, "maxY": 8.316666666666666, "series": [{"data": [[1.76852604E12, 0.5], [1.76852616E12, 0.1], [1.76852598E12, 0.5], [1.7685261E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76852604E12, 8.316666666666666], [1.76852616E12, 0.95], [1.76852598E12, 4.983333333333333], [1.7685261E12, 8.15]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852616E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76852598E12, "maxY": 8.316666666666666, "series": [{"data": [[1.76852604E12, 0.5], [1.76852616E12, 0.1], [1.76852598E12, 0.5], [1.7685261E12, 0.5]], "isOverall": false, "label": "/api/learner/educational-attainment-success", "isController": false}, {"data": [[1.76852604E12, 8.316666666666666], [1.76852616E12, 0.95], [1.76852598E12, 4.983333333333333], [1.7685261E12, 8.15]], "isOverall": false, "label": "/api/learner/educational-attainment-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852616E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76852598E12, "maxY": 8.316666666666666, "series": [{"data": [[1.76852604E12, 0.5], [1.76852616E12, 0.1], [1.76852598E12, 0.5], [1.7685261E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76852604E12, 8.316666666666666], [1.76852616E12, 0.95], [1.76852598E12, 4.983333333333333], [1.7685261E12, 8.15]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852616E12, "title": "Total Transactions Per Second"}},
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

