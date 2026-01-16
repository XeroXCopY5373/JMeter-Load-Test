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
        data: {"result": {"minY": 223.0, "minX": 0.0, "maxY": 25356.0, "series": [{"data": [[0.0, 223.0], [0.1, 224.0], [0.2, 225.0], [0.3, 228.0], [0.4, 230.0], [0.5, 231.0], [0.6, 231.0], [0.7, 234.0], [0.8, 234.0], [0.9, 236.0], [1.0, 238.0], [1.1, 244.0], [1.2, 253.0], [1.3, 259.0], [1.4, 261.0], [1.5, 263.0], [1.6, 281.0], [1.7, 293.0], [1.8, 397.0], [1.9, 404.0], [2.0, 419.0], [2.1, 420.0], [2.2, 467.0], [2.3, 487.0], [2.4, 493.0], [2.5, 496.0], [2.6, 501.0], [2.7, 502.0], [2.8, 516.0], [2.9, 529.0], [3.0, 532.0], [3.1, 536.0], [3.2, 536.0], [3.3, 539.0], [3.4, 542.0], [3.5, 547.0], [3.6, 547.0], [3.7, 550.0], [3.8, 551.0], [3.9, 568.0], [4.0, 570.0], [4.1, 572.0], [4.2, 577.0], [4.3, 578.0], [4.4, 581.0], [4.5, 585.0], [4.6, 590.0], [4.7, 594.0], [4.8, 602.0], [4.9, 604.0], [5.0, 621.0], [5.1, 623.0], [5.2, 632.0], [5.3, 636.0], [5.4, 649.0], [5.5, 654.0], [5.6, 656.0], [5.7, 667.0], [5.8, 670.0], [5.9, 672.0], [6.0, 675.0], [6.1, 679.0], [6.2, 688.0], [6.3, 695.0], [6.4, 702.0], [6.5, 708.0], [6.6, 712.0], [6.7, 719.0], [6.8, 723.0], [6.9, 724.0], [7.0, 727.0], [7.1, 730.0], [7.2, 735.0], [7.3, 744.0], [7.4, 757.0], [7.5, 759.0], [7.6, 763.0], [7.7, 767.0], [7.8, 770.0], [7.9, 770.0], [8.0, 778.0], [8.1, 783.0], [8.2, 788.0], [8.3, 790.0], [8.4, 794.0], [8.5, 797.0], [8.6, 800.0], [8.7, 805.0], [8.8, 809.0], [8.9, 815.0], [9.0, 818.0], [9.1, 826.0], [9.2, 827.0], [9.3, 836.0], [9.4, 836.0], [9.5, 841.0], [9.6, 844.0], [9.7, 847.0], [9.8, 856.0], [9.9, 857.0], [10.0, 861.0], [10.1, 861.0], [10.2, 864.0], [10.3, 865.0], [10.4, 871.0], [10.5, 872.0], [10.6, 877.0], [10.7, 878.0], [10.8, 887.0], [10.9, 888.0], [11.0, 888.0], [11.1, 896.0], [11.2, 897.0], [11.3, 899.0], [11.4, 899.0], [11.5, 901.0], [11.6, 904.0], [11.7, 907.0], [11.8, 909.0], [11.9, 911.0], [12.0, 912.0], [12.1, 919.0], [12.2, 919.0], [12.3, 921.0], [12.4, 926.0], [12.5, 928.0], [12.6, 929.0], [12.7, 930.0], [12.8, 936.0], [12.9, 942.0], [13.0, 945.0], [13.1, 947.0], [13.2, 955.0], [13.3, 958.0], [13.4, 964.0], [13.5, 964.0], [13.6, 966.0], [13.7, 972.0], [13.8, 974.0], [13.9, 974.0], [14.0, 974.0], [14.1, 980.0], [14.2, 981.0], [14.3, 982.0], [14.4, 987.0], [14.5, 988.0], [14.6, 989.0], [14.7, 994.0], [14.8, 994.0], [14.9, 996.0], [15.0, 1001.0], [15.1, 1002.0], [15.2, 1007.0], [15.3, 1007.0], [15.4, 1012.0], [15.5, 1013.0], [15.6, 1014.0], [15.7, 1018.0], [15.8, 1019.0], [15.9, 1020.0], [16.0, 1024.0], [16.1, 1024.0], [16.2, 1026.0], [16.3, 1026.0], [16.4, 1027.0], [16.5, 1028.0], [16.6, 1028.0], [16.7, 1029.0], [16.8, 1030.0], [16.9, 1033.0], [17.0, 1033.0], [17.1, 1039.0], [17.2, 1039.0], [17.3, 1042.0], [17.4, 1042.0], [17.5, 1046.0], [17.6, 1051.0], [17.7, 1059.0], [17.8, 1059.0], [17.9, 1062.0], [18.0, 1071.0], [18.1, 1071.0], [18.2, 1074.0], [18.3, 1076.0], [18.4, 1081.0], [18.5, 1082.0], [18.6, 1083.0], [18.7, 1084.0], [18.8, 1087.0], [18.9, 1090.0], [19.0, 1096.0], [19.1, 1098.0], [19.2, 1098.0], [19.3, 1099.0], [19.4, 1102.0], [19.5, 1104.0], [19.6, 1104.0], [19.7, 1107.0], [19.8, 1108.0], [19.9, 1109.0], [20.0, 1109.0], [20.1, 1111.0], [20.2, 1111.0], [20.3, 1115.0], [20.4, 1118.0], [20.5, 1119.0], [20.6, 1122.0], [20.7, 1123.0], [20.8, 1124.0], [20.9, 1125.0], [21.0, 1127.0], [21.1, 1127.0], [21.2, 1128.0], [21.3, 1129.0], [21.4, 1130.0], [21.5, 1131.0], [21.6, 1133.0], [21.7, 1134.0], [21.8, 1135.0], [21.9, 1136.0], [22.0, 1137.0], [22.1, 1138.0], [22.2, 1139.0], [22.3, 1139.0], [22.4, 1142.0], [22.5, 1143.0], [22.6, 1149.0], [22.7, 1152.0], [22.8, 1153.0], [22.9, 1154.0], [23.0, 1159.0], [23.1, 1160.0], [23.2, 1162.0], [23.3, 1163.0], [23.4, 1168.0], [23.5, 1170.0], [23.6, 1173.0], [23.7, 1175.0], [23.8, 1178.0], [23.9, 1180.0], [24.0, 1180.0], [24.1, 1180.0], [24.2, 1180.0], [24.3, 1181.0], [24.4, 1185.0], [24.5, 1187.0], [24.6, 1189.0], [24.7, 1190.0], [24.8, 1191.0], [24.9, 1192.0], [25.0, 1194.0], [25.1, 1194.0], [25.2, 1194.0], [25.3, 1197.0], [25.4, 1198.0], [25.5, 1200.0], [25.6, 1200.0], [25.7, 1201.0], [25.8, 1202.0], [25.9, 1204.0], [26.0, 1208.0], [26.1, 1208.0], [26.2, 1211.0], [26.3, 1212.0], [26.4, 1215.0], [26.5, 1216.0], [26.6, 1218.0], [26.7, 1219.0], [26.8, 1219.0], [26.9, 1220.0], [27.0, 1221.0], [27.1, 1222.0], [27.2, 1223.0], [27.3, 1225.0], [27.4, 1225.0], [27.5, 1227.0], [27.6, 1228.0], [27.7, 1232.0], [27.8, 1233.0], [27.9, 1234.0], [28.0, 1235.0], [28.1, 1236.0], [28.2, 1236.0], [28.3, 1238.0], [28.4, 1238.0], [28.5, 1241.0], [28.6, 1242.0], [28.7, 1243.0], [28.8, 1245.0], [28.9, 1246.0], [29.0, 1247.0], [29.1, 1247.0], [29.2, 1252.0], [29.3, 1253.0], [29.4, 1253.0], [29.5, 1255.0], [29.6, 1255.0], [29.7, 1256.0], [29.8, 1256.0], [29.9, 1257.0], [30.0, 1258.0], [30.1, 1261.0], [30.2, 1262.0], [30.3, 1262.0], [30.4, 1262.0], [30.5, 1264.0], [30.6, 1265.0], [30.7, 1268.0], [30.8, 1268.0], [30.9, 1270.0], [31.0, 1271.0], [31.1, 1272.0], [31.2, 1276.0], [31.3, 1276.0], [31.4, 1277.0], [31.5, 1277.0], [31.6, 1277.0], [31.7, 1278.0], [31.8, 1281.0], [31.9, 1281.0], [32.0, 1282.0], [32.1, 1282.0], [32.2, 1287.0], [32.3, 1289.0], [32.4, 1291.0], [32.5, 1293.0], [32.6, 1294.0], [32.7, 1294.0], [32.8, 1295.0], [32.9, 1296.0], [33.0, 1296.0], [33.1, 1297.0], [33.2, 1297.0], [33.3, 1298.0], [33.4, 1298.0], [33.5, 1303.0], [33.6, 1304.0], [33.7, 1304.0], [33.8, 1306.0], [33.9, 1306.0], [34.0, 1310.0], [34.1, 1310.0], [34.2, 1312.0], [34.3, 1312.0], [34.4, 1315.0], [34.5, 1316.0], [34.6, 1317.0], [34.7, 1317.0], [34.8, 1320.0], [34.9, 1321.0], [35.0, 1322.0], [35.1, 1324.0], [35.2, 1325.0], [35.3, 1326.0], [35.4, 1326.0], [35.5, 1328.0], [35.6, 1329.0], [35.7, 1331.0], [35.8, 1332.0], [35.9, 1332.0], [36.0, 1332.0], [36.1, 1336.0], [36.2, 1336.0], [36.3, 1338.0], [36.4, 1338.0], [36.5, 1339.0], [36.6, 1339.0], [36.7, 1339.0], [36.8, 1341.0], [36.9, 1342.0], [37.0, 1344.0], [37.1, 1344.0], [37.2, 1346.0], [37.3, 1346.0], [37.4, 1347.0], [37.5, 1348.0], [37.6, 1350.0], [37.7, 1351.0], [37.8, 1352.0], [37.9, 1352.0], [38.0, 1353.0], [38.1, 1354.0], [38.2, 1356.0], [38.3, 1356.0], [38.4, 1356.0], [38.5, 1357.0], [38.6, 1357.0], [38.7, 1359.0], [38.8, 1359.0], [38.9, 1361.0], [39.0, 1362.0], [39.1, 1362.0], [39.2, 1362.0], [39.3, 1365.0], [39.4, 1366.0], [39.5, 1367.0], [39.6, 1368.0], [39.7, 1369.0], [39.8, 1371.0], [39.9, 1371.0], [40.0, 1373.0], [40.1, 1373.0], [40.2, 1378.0], [40.3, 1379.0], [40.4, 1380.0], [40.5, 1380.0], [40.6, 1381.0], [40.7, 1383.0], [40.8, 1385.0], [40.9, 1388.0], [41.0, 1388.0], [41.1, 1389.0], [41.2, 1390.0], [41.3, 1393.0], [41.4, 1395.0], [41.5, 1395.0], [41.6, 1396.0], [41.7, 1400.0], [41.8, 1405.0], [41.9, 1406.0], [42.0, 1407.0], [42.1, 1407.0], [42.2, 1408.0], [42.3, 1409.0], [42.4, 1410.0], [42.5, 1410.0], [42.6, 1411.0], [42.7, 1411.0], [42.8, 1412.0], [42.9, 1414.0], [43.0, 1415.0], [43.1, 1416.0], [43.2, 1418.0], [43.3, 1421.0], [43.4, 1421.0], [43.5, 1423.0], [43.6, 1426.0], [43.7, 1428.0], [43.8, 1429.0], [43.9, 1431.0], [44.0, 1432.0], [44.1, 1437.0], [44.2, 1437.0], [44.3, 1440.0], [44.4, 1440.0], [44.5, 1441.0], [44.6, 1441.0], [44.7, 1441.0], [44.8, 1445.0], [44.9, 1445.0], [45.0, 1446.0], [45.1, 1448.0], [45.2, 1451.0], [45.3, 1451.0], [45.4, 1455.0], [45.5, 1458.0], [45.6, 1459.0], [45.7, 1465.0], [45.8, 1468.0], [45.9, 1470.0], [46.0, 1472.0], [46.1, 1473.0], [46.2, 1474.0], [46.3, 1479.0], [46.4, 1479.0], [46.5, 1480.0], [46.6, 1481.0], [46.7, 1481.0], [46.8, 1482.0], [46.9, 1484.0], [47.0, 1486.0], [47.1, 1487.0], [47.2, 1487.0], [47.3, 1488.0], [47.4, 1491.0], [47.5, 1491.0], [47.6, 1492.0], [47.7, 1494.0], [47.8, 1496.0], [47.9, 1497.0], [48.0, 1499.0], [48.1, 1500.0], [48.2, 1503.0], [48.3, 1503.0], [48.4, 1504.0], [48.5, 1505.0], [48.6, 1513.0], [48.7, 1514.0], [48.8, 1515.0], [48.9, 1519.0], [49.0, 1521.0], [49.1, 1521.0], [49.2, 1521.0], [49.3, 1527.0], [49.4, 1528.0], [49.5, 1532.0], [49.6, 1533.0], [49.7, 1535.0], [49.8, 1535.0], [49.9, 1536.0], [50.0, 1536.0], [50.1, 1536.0], [50.2, 1539.0], [50.3, 1541.0], [50.4, 1543.0], [50.5, 1545.0], [50.6, 1546.0], [50.7, 1546.0], [50.8, 1548.0], [50.9, 1549.0], [51.0, 1553.0], [51.1, 1553.0], [51.2, 1556.0], [51.3, 1556.0], [51.4, 1558.0], [51.5, 1559.0], [51.6, 1560.0], [51.7, 1560.0], [51.8, 1561.0], [51.9, 1561.0], [52.0, 1562.0], [52.1, 1564.0], [52.2, 1565.0], [52.3, 1569.0], [52.4, 1570.0], [52.5, 1572.0], [52.6, 1573.0], [52.7, 1574.0], [52.8, 1575.0], [52.9, 1575.0], [53.0, 1577.0], [53.1, 1577.0], [53.2, 1579.0], [53.3, 1579.0], [53.4, 1581.0], [53.5, 1582.0], [53.6, 1585.0], [53.7, 1586.0], [53.8, 1588.0], [53.9, 1593.0], [54.0, 1596.0], [54.1, 1596.0], [54.2, 1597.0], [54.3, 1598.0], [54.4, 1599.0], [54.5, 1600.0], [54.6, 1605.0], [54.7, 1606.0], [54.8, 1611.0], [54.9, 1614.0], [55.0, 1614.0], [55.1, 1617.0], [55.2, 1622.0], [55.3, 1624.0], [55.4, 1625.0], [55.5, 1625.0], [55.6, 1637.0], [55.7, 1642.0], [55.8, 1643.0], [55.9, 1647.0], [56.0, 1654.0], [56.1, 1654.0], [56.2, 1656.0], [56.3, 1656.0], [56.4, 1662.0], [56.5, 1663.0], [56.6, 1667.0], [56.7, 1674.0], [56.8, 1676.0], [56.9, 1682.0], [57.0, 1685.0], [57.1, 1685.0], [57.2, 1686.0], [57.3, 1689.0], [57.4, 1690.0], [57.5, 1693.0], [57.6, 1695.0], [57.7, 1697.0], [57.8, 1699.0], [57.9, 1699.0], [58.0, 1702.0], [58.1, 1709.0], [58.2, 1712.0], [58.3, 1714.0], [58.4, 1719.0], [58.5, 1720.0], [58.6, 1721.0], [58.7, 1721.0], [58.8, 1729.0], [58.9, 1731.0], [59.0, 1732.0], [59.1, 1732.0], [59.2, 1742.0], [59.3, 1745.0], [59.4, 1752.0], [59.5, 1760.0], [59.6, 1765.0], [59.7, 1768.0], [59.8, 1769.0], [59.9, 1773.0], [60.0, 1777.0], [60.1, 1781.0], [60.2, 1784.0], [60.3, 1787.0], [60.4, 1788.0], [60.5, 1790.0], [60.6, 1790.0], [60.7, 1793.0], [60.8, 1795.0], [60.9, 1796.0], [61.0, 1805.0], [61.1, 1805.0], [61.2, 1809.0], [61.3, 1810.0], [61.4, 1812.0], [61.5, 1819.0], [61.6, 1825.0], [61.7, 1826.0], [61.8, 1828.0], [61.9, 1828.0], [62.0, 1831.0], [62.1, 1834.0], [62.2, 1834.0], [62.3, 1841.0], [62.4, 1846.0], [62.5, 1854.0], [62.6, 1855.0], [62.7, 1856.0], [62.8, 1859.0], [62.9, 1862.0], [63.0, 1863.0], [63.1, 1865.0], [63.2, 1867.0], [63.3, 1871.0], [63.4, 1873.0], [63.5, 1878.0], [63.6, 1882.0], [63.7, 1883.0], [63.8, 1883.0], [63.9, 1885.0], [64.0, 1890.0], [64.1, 1891.0], [64.2, 1896.0], [64.3, 1897.0], [64.4, 1898.0], [64.5, 1898.0], [64.6, 1901.0], [64.7, 1906.0], [64.8, 1909.0], [64.9, 1913.0], [65.0, 1917.0], [65.1, 1918.0], [65.2, 1923.0], [65.3, 1930.0], [65.4, 1931.0], [65.5, 1932.0], [65.6, 1936.0], [65.7, 1939.0], [65.8, 1941.0], [65.9, 1942.0], [66.0, 1943.0], [66.1, 1945.0], [66.2, 1945.0], [66.3, 1946.0], [66.4, 1949.0], [66.5, 1951.0], [66.6, 1952.0], [66.7, 1956.0], [66.8, 1957.0], [66.9, 1963.0], [67.0, 1964.0], [67.1, 1965.0], [67.2, 1969.0], [67.3, 1969.0], [67.4, 1972.0], [67.5, 1974.0], [67.6, 1981.0], [67.7, 1983.0], [67.8, 1983.0], [67.9, 1987.0], [68.0, 1988.0], [68.1, 1991.0], [68.2, 1994.0], [68.3, 1997.0], [68.4, 1998.0], [68.5, 2002.0], [68.6, 2007.0], [68.7, 2018.0], [68.8, 2019.0], [68.9, 2020.0], [69.0, 2020.0], [69.1, 2020.0], [69.2, 2023.0], [69.3, 2023.0], [69.4, 2027.0], [69.5, 2027.0], [69.6, 2031.0], [69.7, 2034.0], [69.8, 2036.0], [69.9, 2038.0], [70.0, 2040.0], [70.1, 2041.0], [70.2, 2044.0], [70.3, 2045.0], [70.4, 2046.0], [70.5, 2051.0], [70.6, 2051.0], [70.7, 2054.0], [70.8, 2054.0], [70.9, 2056.0], [71.0, 2060.0], [71.1, 2065.0], [71.2, 2065.0], [71.3, 2067.0], [71.4, 2067.0], [71.5, 2071.0], [71.6, 2073.0], [71.7, 2075.0], [71.8, 2079.0], [71.9, 2082.0], [72.0, 2085.0], [72.1, 2088.0], [72.2, 2089.0], [72.3, 2090.0], [72.4, 2093.0], [72.5, 2095.0], [72.6, 2096.0], [72.7, 2097.0], [72.8, 2099.0], [72.9, 2101.0], [73.0, 2102.0], [73.1, 2103.0], [73.2, 2104.0], [73.3, 2111.0], [73.4, 2111.0], [73.5, 2113.0], [73.6, 2113.0], [73.7, 2114.0], [73.8, 2115.0], [73.9, 2116.0], [74.0, 2119.0], [74.1, 2120.0], [74.2, 2121.0], [74.3, 2122.0], [74.4, 2122.0], [74.5, 2123.0], [74.6, 2125.0], [74.7, 2125.0], [74.8, 2126.0], [74.9, 2127.0], [75.0, 2131.0], [75.1, 2131.0], [75.2, 2137.0], [75.3, 2138.0], [75.4, 2140.0], [75.5, 2142.0], [75.6, 2148.0], [75.7, 2149.0], [75.8, 2157.0], [75.9, 2161.0], [76.0, 2163.0], [76.1, 2165.0], [76.2, 2167.0], [76.3, 2174.0], [76.4, 2174.0], [76.5, 2183.0], [76.6, 2184.0], [76.7, 2190.0], [76.8, 2194.0], [76.9, 2201.0], [77.0, 2201.0], [77.1, 2203.0], [77.2, 2207.0], [77.3, 2207.0], [77.4, 2211.0], [77.5, 2216.0], [77.6, 2219.0], [77.7, 2220.0], [77.8, 2225.0], [77.9, 2226.0], [78.0, 2229.0], [78.1, 2230.0], [78.2, 2231.0], [78.3, 2231.0], [78.4, 2235.0], [78.5, 2239.0], [78.6, 2239.0], [78.7, 2241.0], [78.8, 2243.0], [78.9, 2257.0], [79.0, 2260.0], [79.1, 2261.0], [79.2, 2264.0], [79.3, 2269.0], [79.4, 2269.0], [79.5, 2271.0], [79.6, 2271.0], [79.7, 2281.0], [79.8, 2288.0], [79.9, 2288.0], [80.0, 2294.0], [80.1, 2295.0], [80.2, 2304.0], [80.3, 2307.0], [80.4, 2311.0], [80.5, 2316.0], [80.6, 2318.0], [80.7, 2318.0], [80.8, 2322.0], [80.9, 2325.0], [81.0, 2330.0], [81.1, 2331.0], [81.2, 2334.0], [81.3, 2339.0], [81.4, 2341.0], [81.5, 2348.0], [81.6, 2354.0], [81.7, 2361.0], [81.8, 2362.0], [81.9, 2363.0], [82.0, 2364.0], [82.1, 2365.0], [82.2, 2365.0], [82.3, 2369.0], [82.4, 2378.0], [82.5, 2378.0], [82.6, 2382.0], [82.7, 2385.0], [82.8, 2389.0], [82.9, 2391.0], [83.0, 2403.0], [83.1, 2405.0], [83.2, 2406.0], [83.3, 2407.0], [83.4, 2415.0], [83.5, 2415.0], [83.6, 2417.0], [83.7, 2418.0], [83.8, 2423.0], [83.9, 2428.0], [84.0, 2430.0], [84.1, 2436.0], [84.2, 2437.0], [84.3, 2453.0], [84.4, 2457.0], [84.5, 2460.0], [84.6, 2461.0], [84.7, 2468.0], [84.8, 2475.0], [84.9, 2480.0], [85.0, 2482.0], [85.1, 2484.0], [85.2, 2491.0], [85.3, 2492.0], [85.4, 2498.0], [85.5, 2499.0], [85.6, 2510.0], [85.7, 2514.0], [85.8, 2521.0], [85.9, 2523.0], [86.0, 2528.0], [86.1, 2532.0], [86.2, 2546.0], [86.3, 2547.0], [86.4, 2552.0], [86.5, 2554.0], [86.6, 2562.0], [86.7, 2590.0], [86.8, 2594.0], [86.9, 2609.0], [87.0, 2612.0], [87.1, 2639.0], [87.2, 2641.0], [87.3, 2642.0], [87.4, 2652.0], [87.5, 2676.0], [87.6, 2681.0], [87.7, 2693.0], [87.8, 2704.0], [87.9, 2723.0], [88.0, 2761.0], [88.1, 2769.0], [88.2, 2784.0], [88.3, 2784.0], [88.4, 2811.0], [88.5, 2819.0], [88.6, 2859.0], [88.7, 2863.0], [88.8, 2890.0], [88.9, 2907.0], [89.0, 2925.0], [89.1, 2927.0], [89.2, 2928.0], [89.3, 2945.0], [89.4, 2946.0], [89.5, 2958.0], [89.6, 2966.0], [89.7, 3010.0], [89.8, 3019.0], [89.9, 3057.0], [90.0, 3101.0], [90.1, 3150.0], [90.2, 3155.0], [90.3, 3166.0], [90.4, 3185.0], [90.5, 3202.0], [90.6, 3204.0], [90.7, 3208.0], [90.8, 3244.0], [90.9, 3253.0], [91.0, 3260.0], [91.1, 3264.0], [91.2, 3366.0], [91.3, 3414.0], [91.4, 3453.0], [91.5, 3460.0], [91.6, 3480.0], [91.7, 3489.0], [91.8, 3533.0], [91.9, 3576.0], [92.0, 3580.0], [92.1, 3608.0], [92.2, 3619.0], [92.3, 3664.0], [92.4, 3769.0], [92.5, 3810.0], [92.6, 3811.0], [92.7, 3852.0], [92.8, 3869.0], [92.9, 3885.0], [93.0, 3899.0], [93.1, 3902.0], [93.2, 3978.0], [93.3, 3979.0], [93.4, 4022.0], [93.5, 4031.0], [93.6, 4077.0], [93.7, 4100.0], [93.8, 4149.0], [93.9, 4159.0], [94.0, 4241.0], [94.1, 4261.0], [94.2, 4318.0], [94.3, 4383.0], [94.4, 4409.0], [94.5, 4483.0], [94.6, 4502.0], [94.7, 4563.0], [94.8, 4644.0], [94.9, 4671.0], [95.0, 4682.0], [95.1, 4784.0], [95.2, 4869.0], [95.3, 4965.0], [95.4, 4997.0], [95.5, 5080.0], [95.6, 5087.0], [95.7, 5168.0], [95.8, 5216.0], [95.9, 5311.0], [96.0, 5339.0], [96.1, 5378.0], [96.2, 5532.0], [96.3, 5777.0], [96.4, 6055.0], [96.5, 6204.0], [96.6, 6404.0], [96.7, 6471.0], [96.8, 7200.0], [96.9, 7585.0], [97.0, 8137.0], [97.1, 11449.0], [97.2, 21436.0], [97.3, 22243.0], [97.4, 22284.0], [97.5, 22365.0], [97.6, 22392.0], [97.7, 22415.0], [97.8, 22436.0], [97.9, 22591.0], [98.0, 22619.0], [98.1, 22640.0], [98.2, 22652.0], [98.3, 22712.0], [98.4, 22720.0], [98.5, 22831.0], [98.6, 22894.0], [98.7, 22903.0], [98.8, 22932.0], [98.9, 23061.0], [99.0, 23100.0], [99.1, 23109.0], [99.2, 23139.0], [99.3, 23237.0], [99.4, 23316.0], [99.5, 23383.0], [99.6, 23656.0], [99.7, 23733.0], [99.8, 23939.0], [99.9, 24037.0], [100.0, 25356.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 121.0, "series": [{"data": [[600.0, 23.0], [700.0, 32.0], [800.0, 42.0], [900.0, 51.0], [1000.0, 65.0], [1100.0, 90.0], [1200.0, 116.0], [1300.0, 121.0], [1400.0, 93.0], [1500.0, 94.0], [1600.0, 51.0], [1700.0, 44.0], [1800.0, 53.0], [1900.0, 57.0], [2000.0, 64.0], [2100.0, 59.0], [2300.0, 42.0], [2200.0, 47.0], [2400.0, 37.0], [2500.0, 19.0], [2600.0, 14.0], [2700.0, 8.0], [2800.0, 8.0], [2900.0, 12.0], [3000.0, 4.0], [3100.0, 8.0], [3300.0, 2.0], [3200.0, 9.0], [3400.0, 8.0], [3500.0, 4.0], [3600.0, 4.0], [3700.0, 1.0], [3800.0, 9.0], [3900.0, 4.0], [4000.0, 5.0], [4200.0, 4.0], [4300.0, 3.0], [4100.0, 4.0], [4500.0, 3.0], [4400.0, 2.0], [4600.0, 4.0], [4800.0, 2.0], [4700.0, 2.0], [5100.0, 2.0], [5000.0, 3.0], [4900.0, 2.0], [5200.0, 2.0], [5300.0, 3.0], [5500.0, 2.0], [5700.0, 1.0], [5900.0, 1.0], [6000.0, 1.0], [6200.0, 2.0], [6400.0, 2.0], [6900.0, 1.0], [7200.0, 1.0], [7500.0, 1.0], [7800.0, 1.0], [8100.0, 1.0], [11400.0, 1.0], [21300.0, 1.0], [21400.0, 1.0], [22400.0, 2.0], [22300.0, 4.0], [22500.0, 2.0], [22200.0, 2.0], [22600.0, 5.0], [23200.0, 2.0], [23100.0, 4.0], [22900.0, 3.0], [23300.0, 2.0], [22800.0, 2.0], [22700.0, 3.0], [23000.0, 2.0], [23700.0, 2.0], [23900.0, 1.0], [23600.0, 2.0], [24000.0, 1.0], [25300.0, 1.0], [200.0, 25.0], [300.0, 2.0], [400.0, 11.0], [500.0, 32.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 25300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 17.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1374.0, "series": [{"data": [[0.0, 26.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 46.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 17.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1374.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 12.642857142857148, "minX": 1.76852676E12, "maxY": 20.0, "series": [{"data": [[1.76852682E12, 19.652591170825325], [1.76852694E12, 19.326241134751772], [1.76852676E12, 12.642857142857148], [1.76852688E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852694E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 873.0, "minX": 1.0, "maxY": 4022.0, "series": [{"data": [[8.0, 3624.0], [2.0, 1873.0], [9.0, 1556.6111111111113], [10.0, 2124.9999999999995], [11.0, 2539.214285714286], [12.0, 1840.8999999999996], [3.0, 1233.0], [13.0, 2200.4736842105262], [14.0, 1589.4285714285716], [15.0, 1955.75], [16.0, 1926.7407407407404], [4.0, 1194.0], [1.0, 1715.0], [17.0, 1882.8928571428567], [18.0, 2128.92], [19.0, 2349.0476190476197], [20.0, 2421.1345995045417], [5.0, 2484.0], [6.0, 4022.0], [7.0, 873.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}, {"data": [[18.971975393028053, 2352.3164730006856]], "isOverall": false, "label": "/api/learner/educational-attainment-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 657.0666666666667, "minX": 1.76852676E12, "maxY": 5030084.066666666, "series": [{"data": [[1.76852682E12, 5030084.066666666], [1.76852694E12, 2882826.3], [1.76852676E12, 1268180.3666666667], [1.76852688E12, 4866575.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76852682E12, 2222.9333333333334], [1.76852694E12, 1203.2], [1.76852676E12, 657.0666666666667], [1.76852688E12, 2158.9333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852694E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2027.4285714285713, "minX": 1.76852676E12, "maxY": 2543.6284584980203, "series": [{"data": [[1.76852682E12, 2224.9558541266792], [1.76852694E12, 2421.7624113475176], [1.76852676E12, 2027.4285714285713], [1.76852688E12, 2543.6284584980203]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852694E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1751.6883116883125, "minX": 1.76852676E12, "maxY": 1983.3320158102752, "series": [{"data": [[1.76852682E12, 1808.5796545105575], [1.76852694E12, 1789.4609929078003], [1.76852676E12, 1751.6883116883125], [1.76852688E12, 1983.3320158102752]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852694E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 5.833333333333332, "minX": 1.76852676E12, "maxY": 1244.6753246753246, "series": [{"data": [[1.76852682E12, 774.0], [1.76852694E12, 5.833333333333332], [1.76852676E12, 1244.6753246753246], [1.76852688E12, 589.3399209486166]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852694E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 223.0, "minX": 1.76852676E12, "maxY": 22655.0, "series": [{"data": [[1.76852682E12, 22393.0], [1.76852676E12, 22655.0], [1.76852688E12, 22619.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76852682E12, 11449.0], [1.76852676E12, 19399.600000000042], [1.76852688E12, 1595.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76852682E12, 22393.0], [1.76852676E12, 22655.0], [1.76852688E12, 22619.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76852682E12, 22392.5], [1.76852676E12, 21984.55], [1.76852688E12, 12496.799999999987]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76852682E12, 497.0], [1.76852676E12, 223.0], [1.76852688E12, 844.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76852682E12, 1014.0], [1.76852676E12, 240.5], [1.76852688E12, 1475.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852688E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 231.0, "minX": 1.0, "maxY": 3207.0, "series": [{"data": [[4.0, 262.5], [8.0, 1503.0], [9.0, 1373.0], [10.0, 1393.0], [3.0, 253.0], [12.0, 1016.5], [7.0, 231.0], [15.0, 790.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1378.0], [2.0, 1842.5], [9.0, 1481.0], [10.0, 1491.5], [11.0, 1514.0], [3.0, 1194.0], [12.0, 2052.5], [13.0, 1729.0], [14.0, 1497.0], [15.0, 1773.0], [1.0, 1756.0], [4.0, 2215.5], [16.0, 3207.0], [17.0, 2148.0], [5.0, 1592.5], [6.0, 1743.0], [7.0, 1447.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 231.0, "minX": 1.0, "maxY": 2037.5, "series": [{"data": [[4.0, 262.0], [8.0, 1503.0], [9.0, 1372.5], [10.0, 1393.0], [3.0, 252.5], [12.0, 1016.5], [7.0, 231.0], [15.0, 790.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 990.0], [2.0, 1216.5], [9.0, 1046.0], [10.0, 1100.0], [11.0, 1038.0], [3.0, 605.0], [12.0, 1484.0], [13.0, 1108.0], [14.0, 865.0], [15.0, 1217.0], [1.0, 1214.0], [4.0, 1506.5], [16.0, 2037.5], [17.0, 1446.0], [5.0, 1029.5], [6.0, 1246.0], [7.0, 1047.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.76852676E12, "maxY": 8.75, "series": [{"data": [[1.76852682E12, 8.75], [1.76852694E12, 4.366666666666666], [1.76852676E12, 2.8333333333333335], [1.76852688E12, 8.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852694E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76852676E12, "maxY": 8.2, "series": [{"data": [[1.76852682E12, 0.48333333333333334], [1.76852676E12, 0.5], [1.76852688E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76852682E12, 8.2], [1.76852694E12, 4.7], [1.76852676E12, 2.066666666666667], [1.76852688E12, 7.933333333333334]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852694E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76852676E12, "maxY": 8.2, "series": [{"data": [[1.76852682E12, 0.48333333333333334], [1.76852676E12, 0.5], [1.76852688E12, 0.5]], "isOverall": false, "label": "/api/learner/educational-attainment-success", "isController": false}, {"data": [[1.76852682E12, 8.2], [1.76852694E12, 4.7], [1.76852676E12, 2.066666666666667], [1.76852688E12, 7.933333333333334]], "isOverall": false, "label": "/api/learner/educational-attainment-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852694E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.76852676E12, "maxY": 8.2, "series": [{"data": [[1.76852682E12, 0.48333333333333334], [1.76852676E12, 0.5], [1.76852688E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76852682E12, 8.2], [1.76852694E12, 4.7], [1.76852676E12, 2.066666666666667], [1.76852688E12, 7.933333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852694E12, "title": "Total Transactions Per Second"}},
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

