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
        data: {"result": {"minY": 260.0, "minX": 0.0, "maxY": 24746.0, "series": [{"data": [[0.0, 260.0], [0.1, 261.0], [0.2, 273.0], [0.3, 276.0], [0.4, 281.0], [0.5, 283.0], [0.6, 284.0], [0.7, 285.0], [0.8, 287.0], [0.9, 291.0], [1.0, 293.0], [1.1, 306.0], [1.2, 338.0], [1.3, 353.0], [1.4, 368.0], [1.5, 410.0], [1.6, 420.0], [1.7, 426.0], [1.8, 426.0], [1.9, 447.0], [2.0, 453.0], [2.1, 454.0], [2.2, 457.0], [2.3, 465.0], [2.4, 465.0], [2.5, 468.0], [2.6, 487.0], [2.7, 493.0], [2.8, 497.0], [2.9, 505.0], [3.0, 518.0], [3.1, 519.0], [3.2, 524.0], [3.3, 532.0], [3.4, 538.0], [3.5, 538.0], [3.6, 542.0], [3.7, 546.0], [3.8, 547.0], [3.9, 551.0], [4.0, 554.0], [4.1, 560.0], [4.2, 564.0], [4.3, 573.0], [4.4, 583.0], [4.5, 587.0], [4.6, 595.0], [4.7, 599.0], [4.8, 601.0], [4.9, 611.0], [5.0, 614.0], [5.1, 619.0], [5.2, 624.0], [5.3, 629.0], [5.4, 635.0], [5.5, 638.0], [5.6, 640.0], [5.7, 644.0], [5.8, 649.0], [5.9, 656.0], [6.0, 660.0], [6.1, 661.0], [6.2, 662.0], [6.3, 664.0], [6.4, 664.0], [6.5, 666.0], [6.6, 671.0], [6.7, 672.0], [6.8, 677.0], [6.9, 678.0], [7.0, 684.0], [7.1, 686.0], [7.2, 689.0], [7.3, 693.0], [7.4, 696.0], [7.5, 698.0], [7.6, 701.0], [7.7, 707.0], [7.8, 719.0], [7.9, 722.0], [8.0, 724.0], [8.1, 735.0], [8.2, 738.0], [8.3, 741.0], [8.4, 750.0], [8.5, 750.0], [8.6, 754.0], [8.7, 768.0], [8.8, 772.0], [8.9, 773.0], [9.0, 778.0], [9.1, 779.0], [9.2, 779.0], [9.3, 785.0], [9.4, 792.0], [9.5, 795.0], [9.6, 796.0], [9.7, 804.0], [9.8, 805.0], [9.9, 809.0], [10.0, 812.0], [10.1, 815.0], [10.2, 822.0], [10.3, 822.0], [10.4, 834.0], [10.5, 848.0], [10.6, 850.0], [10.7, 851.0], [10.8, 856.0], [10.9, 856.0], [11.0, 873.0], [11.1, 881.0], [11.2, 885.0], [11.3, 885.0], [11.4, 888.0], [11.5, 892.0], [11.6, 897.0], [11.7, 899.0], [11.8, 900.0], [11.9, 907.0], [12.0, 909.0], [12.1, 914.0], [12.2, 916.0], [12.3, 920.0], [12.4, 924.0], [12.5, 926.0], [12.6, 927.0], [12.7, 932.0], [12.8, 933.0], [12.9, 938.0], [13.0, 939.0], [13.1, 940.0], [13.2, 944.0], [13.3, 944.0], [13.4, 953.0], [13.5, 955.0], [13.6, 957.0], [13.7, 957.0], [13.8, 959.0], [13.9, 964.0], [14.0, 968.0], [14.1, 969.0], [14.2, 971.0], [14.3, 972.0], [14.4, 975.0], [14.5, 977.0], [14.6, 977.0], [14.7, 979.0], [14.8, 979.0], [14.9, 983.0], [15.0, 983.0], [15.1, 986.0], [15.2, 987.0], [15.3, 989.0], [15.4, 992.0], [15.5, 995.0], [15.6, 997.0], [15.7, 998.0], [15.8, 1000.0], [15.9, 1002.0], [16.0, 1004.0], [16.1, 1009.0], [16.2, 1013.0], [16.3, 1015.0], [16.4, 1018.0], [16.5, 1024.0], [16.6, 1029.0], [16.7, 1031.0], [16.8, 1032.0], [16.9, 1033.0], [17.0, 1033.0], [17.1, 1034.0], [17.2, 1036.0], [17.3, 1040.0], [17.4, 1041.0], [17.5, 1044.0], [17.6, 1046.0], [17.7, 1047.0], [17.8, 1050.0], [17.9, 1053.0], [18.0, 1054.0], [18.1, 1055.0], [18.2, 1056.0], [18.3, 1056.0], [18.4, 1058.0], [18.5, 1062.0], [18.6, 1066.0], [18.7, 1068.0], [18.8, 1069.0], [18.9, 1070.0], [19.0, 1074.0], [19.1, 1077.0], [19.2, 1079.0], [19.3, 1081.0], [19.4, 1081.0], [19.5, 1082.0], [19.6, 1083.0], [19.7, 1083.0], [19.8, 1083.0], [19.9, 1092.0], [20.0, 1094.0], [20.1, 1095.0], [20.2, 1098.0], [20.3, 1100.0], [20.4, 1101.0], [20.5, 1102.0], [20.6, 1106.0], [20.7, 1108.0], [20.8, 1108.0], [20.9, 1109.0], [21.0, 1110.0], [21.1, 1110.0], [21.2, 1112.0], [21.3, 1113.0], [21.4, 1114.0], [21.5, 1117.0], [21.6, 1119.0], [21.7, 1120.0], [21.8, 1121.0], [21.9, 1122.0], [22.0, 1124.0], [22.1, 1125.0], [22.2, 1125.0], [22.3, 1126.0], [22.4, 1129.0], [22.5, 1130.0], [22.6, 1131.0], [22.7, 1132.0], [22.8, 1132.0], [22.9, 1134.0], [23.0, 1135.0], [23.1, 1136.0], [23.2, 1137.0], [23.3, 1140.0], [23.4, 1141.0], [23.5, 1143.0], [23.6, 1147.0], [23.7, 1149.0], [23.8, 1155.0], [23.9, 1155.0], [24.0, 1156.0], [24.1, 1158.0], [24.2, 1159.0], [24.3, 1160.0], [24.4, 1160.0], [24.5, 1161.0], [24.6, 1162.0], [24.7, 1163.0], [24.8, 1164.0], [24.9, 1165.0], [25.0, 1167.0], [25.1, 1168.0], [25.2, 1169.0], [25.3, 1170.0], [25.4, 1170.0], [25.5, 1172.0], [25.6, 1173.0], [25.7, 1174.0], [25.8, 1177.0], [25.9, 1178.0], [26.0, 1183.0], [26.1, 1183.0], [26.2, 1183.0], [26.3, 1186.0], [26.4, 1188.0], [26.5, 1191.0], [26.6, 1191.0], [26.7, 1193.0], [26.8, 1194.0], [26.9, 1195.0], [27.0, 1197.0], [27.1, 1197.0], [27.2, 1198.0], [27.3, 1200.0], [27.4, 1200.0], [27.5, 1203.0], [27.6, 1204.0], [27.7, 1208.0], [27.8, 1209.0], [27.9, 1209.0], [28.0, 1211.0], [28.1, 1212.0], [28.2, 1212.0], [28.3, 1213.0], [28.4, 1215.0], [28.5, 1216.0], [28.6, 1216.0], [28.7, 1216.0], [28.8, 1217.0], [28.9, 1220.0], [29.0, 1221.0], [29.1, 1222.0], [29.2, 1223.0], [29.3, 1223.0], [29.4, 1225.0], [29.5, 1225.0], [29.6, 1226.0], [29.7, 1230.0], [29.8, 1230.0], [29.9, 1232.0], [30.0, 1232.0], [30.1, 1233.0], [30.2, 1235.0], [30.3, 1236.0], [30.4, 1237.0], [30.5, 1238.0], [30.6, 1241.0], [30.7, 1242.0], [30.8, 1243.0], [30.9, 1245.0], [31.0, 1246.0], [31.1, 1246.0], [31.2, 1247.0], [31.3, 1247.0], [31.4, 1248.0], [31.5, 1249.0], [31.6, 1251.0], [31.7, 1251.0], [31.8, 1252.0], [31.9, 1252.0], [32.0, 1253.0], [32.1, 1255.0], [32.2, 1257.0], [32.3, 1258.0], [32.4, 1259.0], [32.5, 1260.0], [32.6, 1260.0], [32.7, 1260.0], [32.8, 1260.0], [32.9, 1262.0], [33.0, 1262.0], [33.1, 1263.0], [33.2, 1265.0], [33.3, 1266.0], [33.4, 1266.0], [33.5, 1268.0], [33.6, 1270.0], [33.7, 1271.0], [33.8, 1271.0], [33.9, 1272.0], [34.0, 1274.0], [34.1, 1274.0], [34.2, 1275.0], [34.3, 1278.0], [34.4, 1279.0], [34.5, 1281.0], [34.6, 1285.0], [34.7, 1286.0], [34.8, 1289.0], [34.9, 1290.0], [35.0, 1290.0], [35.1, 1292.0], [35.2, 1292.0], [35.3, 1294.0], [35.4, 1295.0], [35.5, 1297.0], [35.6, 1298.0], [35.7, 1299.0], [35.8, 1301.0], [35.9, 1302.0], [36.0, 1303.0], [36.1, 1303.0], [36.2, 1305.0], [36.3, 1307.0], [36.4, 1309.0], [36.5, 1311.0], [36.6, 1311.0], [36.7, 1312.0], [36.8, 1312.0], [36.9, 1314.0], [37.0, 1314.0], [37.1, 1314.0], [37.2, 1315.0], [37.3, 1317.0], [37.4, 1319.0], [37.5, 1319.0], [37.6, 1319.0], [37.7, 1321.0], [37.8, 1321.0], [37.9, 1322.0], [38.0, 1323.0], [38.1, 1325.0], [38.2, 1328.0], [38.3, 1329.0], [38.4, 1330.0], [38.5, 1330.0], [38.6, 1330.0], [38.7, 1330.0], [38.8, 1330.0], [38.9, 1331.0], [39.0, 1332.0], [39.1, 1332.0], [39.2, 1333.0], [39.3, 1334.0], [39.4, 1336.0], [39.5, 1336.0], [39.6, 1338.0], [39.7, 1339.0], [39.8, 1340.0], [39.9, 1341.0], [40.0, 1341.0], [40.1, 1342.0], [40.2, 1343.0], [40.3, 1343.0], [40.4, 1344.0], [40.5, 1344.0], [40.6, 1346.0], [40.7, 1349.0], [40.8, 1350.0], [40.9, 1350.0], [41.0, 1353.0], [41.1, 1354.0], [41.2, 1356.0], [41.3, 1357.0], [41.4, 1357.0], [41.5, 1360.0], [41.6, 1363.0], [41.7, 1365.0], [41.8, 1366.0], [41.9, 1366.0], [42.0, 1367.0], [42.1, 1368.0], [42.2, 1368.0], [42.3, 1370.0], [42.4, 1371.0], [42.5, 1371.0], [42.6, 1372.0], [42.7, 1372.0], [42.8, 1373.0], [42.9, 1375.0], [43.0, 1376.0], [43.1, 1377.0], [43.2, 1378.0], [43.3, 1378.0], [43.4, 1379.0], [43.5, 1380.0], [43.6, 1381.0], [43.7, 1383.0], [43.8, 1387.0], [43.9, 1388.0], [44.0, 1390.0], [44.1, 1392.0], [44.2, 1393.0], [44.3, 1393.0], [44.4, 1394.0], [44.5, 1395.0], [44.6, 1396.0], [44.7, 1396.0], [44.8, 1397.0], [44.9, 1398.0], [45.0, 1398.0], [45.1, 1399.0], [45.2, 1400.0], [45.3, 1401.0], [45.4, 1403.0], [45.5, 1403.0], [45.6, 1403.0], [45.7, 1404.0], [45.8, 1404.0], [45.9, 1405.0], [46.0, 1406.0], [46.1, 1407.0], [46.2, 1407.0], [46.3, 1407.0], [46.4, 1408.0], [46.5, 1409.0], [46.6, 1409.0], [46.7, 1409.0], [46.8, 1411.0], [46.9, 1413.0], [47.0, 1413.0], [47.1, 1416.0], [47.2, 1416.0], [47.3, 1416.0], [47.4, 1417.0], [47.5, 1418.0], [47.6, 1419.0], [47.7, 1419.0], [47.8, 1420.0], [47.9, 1420.0], [48.0, 1422.0], [48.1, 1423.0], [48.2, 1423.0], [48.3, 1424.0], [48.4, 1425.0], [48.5, 1425.0], [48.6, 1426.0], [48.7, 1426.0], [48.8, 1427.0], [48.9, 1428.0], [49.0, 1430.0], [49.1, 1432.0], [49.2, 1433.0], [49.3, 1434.0], [49.4, 1434.0], [49.5, 1434.0], [49.6, 1435.0], [49.7, 1436.0], [49.8, 1437.0], [49.9, 1437.0], [50.0, 1437.0], [50.1, 1439.0], [50.2, 1441.0], [50.3, 1441.0], [50.4, 1444.0], [50.5, 1445.0], [50.6, 1447.0], [50.7, 1447.0], [50.8, 1448.0], [50.9, 1449.0], [51.0, 1449.0], [51.1, 1451.0], [51.2, 1454.0], [51.3, 1457.0], [51.4, 1457.0], [51.5, 1458.0], [51.6, 1459.0], [51.7, 1460.0], [51.8, 1462.0], [51.9, 1462.0], [52.0, 1463.0], [52.1, 1463.0], [52.2, 1466.0], [52.3, 1467.0], [52.4, 1469.0], [52.5, 1470.0], [52.6, 1473.0], [52.7, 1474.0], [52.8, 1475.0], [52.9, 1475.0], [53.0, 1476.0], [53.1, 1477.0], [53.2, 1478.0], [53.3, 1479.0], [53.4, 1481.0], [53.5, 1482.0], [53.6, 1483.0], [53.7, 1484.0], [53.8, 1484.0], [53.9, 1485.0], [54.0, 1488.0], [54.1, 1488.0], [54.2, 1488.0], [54.3, 1489.0], [54.4, 1490.0], [54.5, 1490.0], [54.6, 1491.0], [54.7, 1493.0], [54.8, 1493.0], [54.9, 1493.0], [55.0, 1494.0], [55.1, 1495.0], [55.2, 1495.0], [55.3, 1496.0], [55.4, 1497.0], [55.5, 1498.0], [55.6, 1499.0], [55.7, 1500.0], [55.8, 1500.0], [55.9, 1502.0], [56.0, 1502.0], [56.1, 1503.0], [56.2, 1504.0], [56.3, 1505.0], [56.4, 1510.0], [56.5, 1510.0], [56.6, 1511.0], [56.7, 1512.0], [56.8, 1513.0], [56.9, 1514.0], [57.0, 1515.0], [57.1, 1517.0], [57.2, 1518.0], [57.3, 1519.0], [57.4, 1519.0], [57.5, 1520.0], [57.6, 1521.0], [57.7, 1522.0], [57.8, 1523.0], [57.9, 1524.0], [58.0, 1525.0], [58.1, 1526.0], [58.2, 1527.0], [58.3, 1527.0], [58.4, 1529.0], [58.5, 1531.0], [58.6, 1531.0], [58.7, 1533.0], [58.8, 1534.0], [58.9, 1535.0], [59.0, 1538.0], [59.1, 1539.0], [59.2, 1539.0], [59.3, 1542.0], [59.4, 1546.0], [59.5, 1547.0], [59.6, 1547.0], [59.7, 1548.0], [59.8, 1549.0], [59.9, 1549.0], [60.0, 1550.0], [60.1, 1551.0], [60.2, 1553.0], [60.3, 1553.0], [60.4, 1554.0], [60.5, 1555.0], [60.6, 1555.0], [60.7, 1557.0], [60.8, 1559.0], [60.9, 1560.0], [61.0, 1561.0], [61.1, 1562.0], [61.2, 1563.0], [61.3, 1565.0], [61.4, 1567.0], [61.5, 1568.0], [61.6, 1569.0], [61.7, 1571.0], [61.8, 1571.0], [61.9, 1572.0], [62.0, 1572.0], [62.1, 1574.0], [62.2, 1579.0], [62.3, 1580.0], [62.4, 1581.0], [62.5, 1585.0], [62.6, 1587.0], [62.7, 1587.0], [62.8, 1588.0], [62.9, 1589.0], [63.0, 1590.0], [63.1, 1591.0], [63.2, 1592.0], [63.3, 1592.0], [63.4, 1593.0], [63.5, 1594.0], [63.6, 1594.0], [63.7, 1594.0], [63.8, 1597.0], [63.9, 1597.0], [64.0, 1598.0], [64.1, 1601.0], [64.2, 1603.0], [64.3, 1603.0], [64.4, 1603.0], [64.5, 1605.0], [64.6, 1606.0], [64.7, 1606.0], [64.8, 1608.0], [64.9, 1612.0], [65.0, 1612.0], [65.1, 1613.0], [65.2, 1613.0], [65.3, 1614.0], [65.4, 1615.0], [65.5, 1617.0], [65.6, 1618.0], [65.7, 1619.0], [65.8, 1621.0], [65.9, 1623.0], [66.0, 1623.0], [66.1, 1628.0], [66.2, 1629.0], [66.3, 1632.0], [66.4, 1633.0], [66.5, 1635.0], [66.6, 1638.0], [66.7, 1638.0], [66.8, 1641.0], [66.9, 1643.0], [67.0, 1644.0], [67.1, 1644.0], [67.2, 1647.0], [67.3, 1649.0], [67.4, 1651.0], [67.5, 1653.0], [67.6, 1656.0], [67.7, 1657.0], [67.8, 1661.0], [67.9, 1662.0], [68.0, 1663.0], [68.1, 1663.0], [68.2, 1665.0], [68.3, 1668.0], [68.4, 1668.0], [68.5, 1670.0], [68.6, 1673.0], [68.7, 1675.0], [68.8, 1675.0], [68.9, 1676.0], [69.0, 1678.0], [69.1, 1680.0], [69.2, 1685.0], [69.3, 1686.0], [69.4, 1686.0], [69.5, 1690.0], [69.6, 1692.0], [69.7, 1692.0], [69.8, 1693.0], [69.9, 1694.0], [70.0, 1698.0], [70.1, 1698.0], [70.2, 1700.0], [70.3, 1701.0], [70.4, 1702.0], [70.5, 1702.0], [70.6, 1704.0], [70.7, 1706.0], [70.8, 1707.0], [70.9, 1711.0], [71.0, 1713.0], [71.1, 1714.0], [71.2, 1716.0], [71.3, 1719.0], [71.4, 1720.0], [71.5, 1720.0], [71.6, 1721.0], [71.7, 1725.0], [71.8, 1725.0], [71.9, 1726.0], [72.0, 1727.0], [72.1, 1729.0], [72.2, 1729.0], [72.3, 1730.0], [72.4, 1731.0], [72.5, 1732.0], [72.6, 1732.0], [72.7, 1734.0], [72.8, 1734.0], [72.9, 1736.0], [73.0, 1737.0], [73.1, 1739.0], [73.2, 1740.0], [73.3, 1742.0], [73.4, 1743.0], [73.5, 1744.0], [73.6, 1744.0], [73.7, 1745.0], [73.8, 1746.0], [73.9, 1746.0], [74.0, 1748.0], [74.1, 1751.0], [74.2, 1753.0], [74.3, 1756.0], [74.4, 1760.0], [74.5, 1760.0], [74.6, 1763.0], [74.7, 1768.0], [74.8, 1769.0], [74.9, 1769.0], [75.0, 1771.0], [75.1, 1771.0], [75.2, 1771.0], [75.3, 1777.0], [75.4, 1777.0], [75.5, 1783.0], [75.6, 1783.0], [75.7, 1785.0], [75.8, 1786.0], [75.9, 1787.0], [76.0, 1791.0], [76.1, 1795.0], [76.2, 1796.0], [76.3, 1804.0], [76.4, 1806.0], [76.5, 1806.0], [76.6, 1807.0], [76.7, 1810.0], [76.8, 1813.0], [76.9, 1815.0], [77.0, 1818.0], [77.1, 1819.0], [77.2, 1820.0], [77.3, 1820.0], [77.4, 1821.0], [77.5, 1822.0], [77.6, 1825.0], [77.7, 1826.0], [77.8, 1834.0], [77.9, 1835.0], [78.0, 1837.0], [78.1, 1840.0], [78.2, 1841.0], [78.3, 1841.0], [78.4, 1842.0], [78.5, 1844.0], [78.6, 1844.0], [78.7, 1846.0], [78.8, 1847.0], [78.9, 1852.0], [79.0, 1853.0], [79.1, 1856.0], [79.2, 1857.0], [79.3, 1860.0], [79.4, 1863.0], [79.5, 1865.0], [79.6, 1867.0], [79.7, 1875.0], [79.8, 1880.0], [79.9, 1882.0], [80.0, 1891.0], [80.1, 1891.0], [80.2, 1892.0], [80.3, 1892.0], [80.4, 1896.0], [80.5, 1897.0], [80.6, 1899.0], [80.7, 1899.0], [80.8, 1899.0], [80.9, 1901.0], [81.0, 1902.0], [81.1, 1913.0], [81.2, 1915.0], [81.3, 1916.0], [81.4, 1919.0], [81.5, 1922.0], [81.6, 1928.0], [81.7, 1930.0], [81.8, 1935.0], [81.9, 1937.0], [82.0, 1942.0], [82.1, 1945.0], [82.2, 1948.0], [82.3, 1951.0], [82.4, 1952.0], [82.5, 1954.0], [82.6, 1958.0], [82.7, 1962.0], [82.8, 1970.0], [82.9, 1971.0], [83.0, 1972.0], [83.1, 1975.0], [83.2, 1976.0], [83.3, 1978.0], [83.4, 1988.0], [83.5, 1989.0], [83.6, 1991.0], [83.7, 1992.0], [83.8, 1994.0], [83.9, 1995.0], [84.0, 2001.0], [84.1, 2008.0], [84.2, 2011.0], [84.3, 2012.0], [84.4, 2013.0], [84.5, 2014.0], [84.6, 2020.0], [84.7, 2022.0], [84.8, 2024.0], [84.9, 2029.0], [85.0, 2030.0], [85.1, 2032.0], [85.2, 2037.0], [85.3, 2040.0], [85.4, 2040.0], [85.5, 2047.0], [85.6, 2049.0], [85.7, 2052.0], [85.8, 2053.0], [85.9, 2064.0], [86.0, 2069.0], [86.1, 2071.0], [86.2, 2072.0], [86.3, 2072.0], [86.4, 2077.0], [86.5, 2080.0], [86.6, 2092.0], [86.7, 2103.0], [86.8, 2104.0], [86.9, 2107.0], [87.0, 2108.0], [87.1, 2109.0], [87.2, 2110.0], [87.3, 2115.0], [87.4, 2117.0], [87.5, 2118.0], [87.6, 2126.0], [87.7, 2127.0], [87.8, 2129.0], [87.9, 2133.0], [88.0, 2151.0], [88.1, 2152.0], [88.2, 2165.0], [88.3, 2168.0], [88.4, 2169.0], [88.5, 2170.0], [88.6, 2173.0], [88.7, 2176.0], [88.8, 2178.0], [88.9, 2189.0], [89.0, 2200.0], [89.1, 2202.0], [89.2, 2206.0], [89.3, 2218.0], [89.4, 2228.0], [89.5, 2233.0], [89.6, 2246.0], [89.7, 2256.0], [89.8, 2258.0], [89.9, 2261.0], [90.0, 2267.0], [90.1, 2277.0], [90.2, 2286.0], [90.3, 2294.0], [90.4, 2299.0], [90.5, 2310.0], [90.6, 2312.0], [90.7, 2324.0], [90.8, 2342.0], [90.9, 2356.0], [91.0, 2358.0], [91.1, 2364.0], [91.2, 2368.0], [91.3, 2375.0], [91.4, 2394.0], [91.5, 2410.0], [91.6, 2448.0], [91.7, 2459.0], [91.8, 2473.0], [91.9, 2476.0], [92.0, 2484.0], [92.1, 2488.0], [92.2, 2497.0], [92.3, 2535.0], [92.4, 2550.0], [92.5, 2559.0], [92.6, 2572.0], [92.7, 2599.0], [92.8, 2601.0], [92.9, 2605.0], [93.0, 2631.0], [93.1, 2650.0], [93.2, 2667.0], [93.3, 2680.0], [93.4, 2716.0], [93.5, 2733.0], [93.6, 2738.0], [93.7, 2773.0], [93.8, 2799.0], [93.9, 2818.0], [94.0, 2834.0], [94.1, 2903.0], [94.2, 2922.0], [94.3, 2966.0], [94.4, 2973.0], [94.5, 3033.0], [94.6, 3062.0], [94.7, 3101.0], [94.8, 3156.0], [94.9, 3163.0], [95.0, 3186.0], [95.1, 3202.0], [95.2, 3249.0], [95.3, 3251.0], [95.4, 3274.0], [95.5, 3314.0], [95.6, 3326.0], [95.7, 3401.0], [95.8, 3500.0], [95.9, 3555.0], [96.0, 3559.0], [96.1, 3604.0], [96.2, 3893.0], [96.3, 4043.0], [96.4, 4096.0], [96.5, 4143.0], [96.6, 4154.0], [96.7, 4196.0], [96.8, 4219.0], [96.9, 4668.0], [97.0, 4679.0], [97.1, 4735.0], [97.2, 5632.0], [97.3, 6140.0], [97.4, 6272.0], [97.5, 21719.0], [97.6, 21758.0], [97.7, 21950.0], [97.8, 22178.0], [97.9, 22196.0], [98.0, 22317.0], [98.1, 22411.0], [98.2, 22437.0], [98.3, 22438.0], [98.4, 22446.0], [98.5, 22521.0], [98.6, 22577.0], [98.7, 22589.0], [98.8, 22689.0], [98.9, 22798.0], [99.0, 22811.0], [99.1, 22873.0], [99.2, 22982.0], [99.3, 23069.0], [99.4, 23133.0], [99.5, 23311.0], [99.6, 23700.0], [99.7, 23754.0], [99.8, 24141.0], [99.9, 24730.0]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 178.0, "series": [{"data": [[600.0, 47.0], [700.0, 37.0], [800.0, 36.0], [900.0, 68.0], [1000.0, 77.0], [1100.0, 119.0], [1200.0, 145.0], [1300.0, 161.0], [1400.0, 178.0], [1500.0, 144.0], [1600.0, 104.0], [1700.0, 104.0], [1800.0, 78.0], [1900.0, 54.0], [2000.0, 46.0], [2100.0, 39.0], [2200.0, 25.0], [2300.0, 17.0], [2400.0, 13.0], [2500.0, 9.0], [2600.0, 11.0], [2700.0, 8.0], [2800.0, 4.0], [2900.0, 7.0], [3000.0, 3.0], [3100.0, 7.0], [3200.0, 7.0], [3300.0, 3.0], [3400.0, 2.0], [3500.0, 4.0], [3700.0, 1.0], [3600.0, 2.0], [3800.0, 1.0], [4000.0, 3.0], [4100.0, 6.0], [4200.0, 2.0], [4600.0, 3.0], [4700.0, 1.0], [4800.0, 1.0], [5600.0, 1.0], [6100.0, 2.0], [6200.0, 1.0], [7600.0, 1.0], [22400.0, 6.0], [22300.0, 2.0], [21900.0, 2.0], [22100.0, 3.0], [22500.0, 5.0], [21700.0, 3.0], [22900.0, 1.0], [22600.0, 2.0], [22800.0, 4.0], [23000.0, 2.0], [23100.0, 1.0], [22700.0, 2.0], [23300.0, 2.0], [23500.0, 1.0], [23700.0, 3.0], [24100.0, 1.0], [24500.0, 1.0], [24700.0, 2.0], [200.0, 18.0], [300.0, 7.0], [400.0, 23.0], [500.0, 33.0]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 26.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1587.0, "series": [{"data": [[0.0, 26.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 43.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1587.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.141129032258065, "minX": 1.76835222E12, "maxY": 20.0, "series": [{"data": [[1.7683524E12, 19.539951573849887], [1.76835228E12, 18.528409090909093], [1.76835234E12, 20.0], [1.76835222E12, 7.141129032258065]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7683524E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 637.2916666666667, "minX": 1.0, "maxY": 4913.4, "series": [{"data": [[2.0, 1666.4117647058824], [8.0, 944.8333333333333], [9.0, 1258.85], [10.0, 1189.2857142857142], [11.0, 1125.2857142857144], [3.0, 1438.6666666666665], [12.0, 1336.1428571428573], [13.0, 1470.2592592592596], [14.0, 1554.521739130435], [15.0, 1869.962962962963], [1.0, 4913.4], [4.0, 1758.3684210526317], [16.0, 1679.9230769230774], [17.0, 1786.4999999999998], [18.0, 1970.0], [19.0, 1912.5862068965514], [5.0, 637.2916666666667], [20.0, 2247.567762630319], [6.0, 1539.2962962962963], [7.0, 807.9629629629629]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}, {"data": [[17.5638921453693, 2042.293669402108]], "isOverall": false, "label": "/api/tesda/provinces-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 983.7333333333333, "minX": 1.76835222E12, "maxY": 5122395.016666667, "series": [{"data": [[1.7683524E12, 3947391.3666666667], [1.76835228E12, 5122395.016666667], [1.76835234E12, 5010058.75], [1.76835222E12, 2270439.5166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7683524E12, 1638.2333333333333], [1.76835228E12, 2094.4], [1.76835234E12, 2050.766666666667], [1.76835222E12, 983.7333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7683524E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 870.7177419354837, "minX": 1.76835222E12, "maxY": 2546.61501210654, "series": [{"data": [[1.7683524E12, 2546.61501210654], [1.76835228E12, 1924.3768939393944], [1.76835234E12, 2321.841392649904], [1.76835222E12, 870.7177419354837]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7683524E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 652.8830645161286, "minX": 1.76835222E12, "maxY": 2253.053268765133, "series": [{"data": [[1.7683524E12, 2253.053268765133], [1.76835228E12, 1508.2518939393935], [1.76835234E12, 1915.2611218568666], [1.76835222E12, 652.8830645161286]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7683524E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.963709677419354, "minX": 1.76835222E12, "maxY": 1023.9661016949158, "series": [{"data": [[1.7683524E12, 1023.9661016949158], [1.76835228E12, 122.6420454545455], [1.76835234E12, 817.9090909090917], [1.76835222E12, 8.963709677419354]], "isOverall": false, "label": "/api/tesda/provinces", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7683524E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 260.0, "minX": 1.76835222E12, "maxY": 24730.0, "series": [{"data": [[1.7683524E12, 24730.0], [1.76835228E12, 4684.0], [1.76835234E12, 22178.0], [1.76835222E12, 1991.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7683524E12, 779.0], [1.76835228E12, 1518.0], [1.76835234E12, 393.0], [1.76835222E12, 260.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7683524E12, 1502.4], [1.76835228E12, 1905.8000000000002], [1.76835234E12, 1747.0], [1.76835222E12, 546.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7683524E12, 24730.0], [1.76835228E12, 4684.0], [1.76835234E12, 22178.0], [1.76835222E12, 1991.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7683524E12, 1101.5], [1.76835228E12, 1686.0], [1.76835234E12, 1167.0], [1.76835222E12, 288.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7683524E12, 11983.749999999984], [1.76835228E12, 4681.25], [1.76835234E12, 11666.949999999986], [1.76835222E12, 1610.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7683524E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 289.5, "minX": 1.0, "maxY": 21758.0, "series": [{"data": [[4.0, 1077.0], [8.0, 289.5], [9.0, 1612.0], [5.0, 1230.0], [10.0, 4679.0], [11.0, 977.0], [3.0, 291.0], [6.0, 12507.5], [12.0, 1454.5], [13.0, 1427.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1380.0], [9.0, 1401.5], [10.0, 1457.0], [11.0, 1425.0], [12.0, 1472.0], [3.0, 1450.0], [13.0, 1694.0], [14.0, 1705.5], [4.0, 1576.0], [1.0, 21758.0], [5.0, 1212.0], [6.0, 1362.5], [7.0, 1475.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 288.0, "minX": 1.0, "maxY": 21449.0, "series": [{"data": [[4.0, 1073.5], [8.0, 288.0], [9.0, 1611.0], [5.0, 1218.0], [10.0, 4600.0], [11.0, 943.0], [3.0, 288.0], [6.0, 12486.0], [12.0, 1451.5], [13.0, 1392.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1078.5], [9.0, 1088.5], [10.0, 1078.0], [11.0, 1056.0], [12.0, 1130.0], [3.0, 1126.0], [13.0, 1264.0], [14.0, 1332.0], [4.0, 1089.0], [1.0, 21449.0], [5.0, 945.0], [6.0, 795.5], [7.0, 1113.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.333333333333333, "minX": 1.76835222E12, "maxY": 8.933333333333334, "series": [{"data": [[1.7683524E12, 6.55], [1.76835228E12, 8.933333333333334], [1.76835234E12, 8.616666666666667], [1.76835222E12, 4.333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7683524E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76835222E12, "maxY": 8.3, "series": [{"data": [[1.7683524E12, 0.5], [1.76835228E12, 0.5], [1.76835234E12, 0.5], [1.76835222E12, 0.48333333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7683524E12, 6.383333333333334], [1.76835228E12, 8.3], [1.76835234E12, 8.116666666666667], [1.76835222E12, 3.65]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7683524E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76835222E12, "maxY": 8.3, "series": [{"data": [[1.7683524E12, 0.5], [1.76835228E12, 0.5], [1.76835234E12, 0.5], [1.76835222E12, 0.48333333333333334]], "isOverall": false, "label": "/api/tesda/provinces-success", "isController": false}, {"data": [[1.7683524E12, 6.383333333333334], [1.76835228E12, 8.3], [1.76835234E12, 8.116666666666667], [1.76835222E12, 3.65]], "isOverall": false, "label": "/api/tesda/provinces-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7683524E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76835222E12, "maxY": 8.3, "series": [{"data": [[1.7683524E12, 0.5], [1.76835228E12, 0.5], [1.76835234E12, 0.5], [1.76835222E12, 0.48333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7683524E12, 6.383333333333334], [1.76835228E12, 8.3], [1.76835234E12, 8.116666666666667], [1.76835222E12, 3.65]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7683524E12, "title": "Total Transactions Per Second"}},
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

