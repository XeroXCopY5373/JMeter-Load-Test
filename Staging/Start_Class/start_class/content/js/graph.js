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
        data: {"result": {"minY": 386.0, "minX": 0.0, "maxY": 30974.0, "series": [{"data": [[0.0, 386.0], [0.1, 393.0], [0.2, 422.0], [0.3, 438.0], [0.4, 465.0], [0.5, 478.0], [0.6, 480.0], [0.7, 485.0], [0.8, 487.0], [0.9, 489.0], [1.0, 490.0], [1.1, 497.0], [1.2, 499.0], [1.3, 507.0], [1.4, 514.0], [1.5, 516.0], [1.6, 522.0], [1.7, 536.0], [1.8, 538.0], [1.9, 544.0], [2.0, 545.0], [2.1, 545.0], [2.2, 554.0], [2.3, 560.0], [2.4, 565.0], [2.5, 575.0], [2.6, 580.0], [2.7, 581.0], [2.8, 598.0], [2.9, 610.0], [3.0, 622.0], [3.1, 640.0], [3.2, 642.0], [3.3, 656.0], [3.4, 666.0], [3.5, 680.0], [3.6, 682.0], [3.7, 685.0], [3.8, 696.0], [3.9, 700.0], [4.0, 713.0], [4.1, 722.0], [4.2, 726.0], [4.3, 726.0], [4.4, 737.0], [4.5, 744.0], [4.6, 747.0], [4.7, 758.0], [4.8, 763.0], [4.9, 767.0], [5.0, 779.0], [5.1, 797.0], [5.2, 803.0], [5.3, 808.0], [5.4, 820.0], [5.5, 822.0], [5.6, 835.0], [5.7, 837.0], [5.8, 837.0], [5.9, 842.0], [6.0, 843.0], [6.1, 846.0], [6.2, 848.0], [6.3, 848.0], [6.4, 849.0], [6.5, 850.0], [6.6, 855.0], [6.7, 857.0], [6.8, 859.0], [6.9, 869.0], [7.0, 870.0], [7.1, 873.0], [7.2, 887.0], [7.3, 889.0], [7.4, 890.0], [7.5, 907.0], [7.6, 908.0], [7.7, 918.0], [7.8, 926.0], [7.9, 932.0], [8.0, 934.0], [8.1, 941.0], [8.2, 943.0], [8.3, 943.0], [8.4, 947.0], [8.5, 947.0], [8.6, 951.0], [8.7, 956.0], [8.8, 961.0], [8.9, 965.0], [9.0, 967.0], [9.1, 968.0], [9.2, 971.0], [9.3, 979.0], [9.4, 984.0], [9.5, 988.0], [9.6, 991.0], [9.7, 993.0], [9.8, 994.0], [9.9, 996.0], [10.0, 1002.0], [10.1, 1004.0], [10.2, 1005.0], [10.3, 1011.0], [10.4, 1011.0], [10.5, 1014.0], [10.6, 1024.0], [10.7, 1026.0], [10.8, 1029.0], [10.9, 1031.0], [11.0, 1034.0], [11.1, 1040.0], [11.2, 1044.0], [11.3, 1044.0], [11.4, 1044.0], [11.5, 1050.0], [11.6, 1053.0], [11.7, 1054.0], [11.8, 1057.0], [11.9, 1059.0], [12.0, 1061.0], [12.1, 1065.0], [12.2, 1068.0], [12.3, 1069.0], [12.4, 1070.0], [12.5, 1071.0], [12.6, 1073.0], [12.7, 1075.0], [12.8, 1076.0], [12.9, 1077.0], [13.0, 1078.0], [13.1, 1082.0], [13.2, 1083.0], [13.3, 1084.0], [13.4, 1087.0], [13.5, 1089.0], [13.6, 1090.0], [13.7, 1094.0], [13.8, 1094.0], [13.9, 1097.0], [14.0, 1098.0], [14.1, 1099.0], [14.2, 1099.0], [14.3, 1100.0], [14.4, 1101.0], [14.5, 1102.0], [14.6, 1104.0], [14.7, 1109.0], [14.8, 1111.0], [14.9, 1112.0], [15.0, 1114.0], [15.1, 1117.0], [15.2, 1120.0], [15.3, 1120.0], [15.4, 1122.0], [15.5, 1124.0], [15.6, 1125.0], [15.7, 1126.0], [15.8, 1128.0], [15.9, 1128.0], [16.0, 1131.0], [16.1, 1138.0], [16.2, 1138.0], [16.3, 1139.0], [16.4, 1142.0], [16.5, 1146.0], [16.6, 1147.0], [16.7, 1148.0], [16.8, 1149.0], [16.9, 1150.0], [17.0, 1153.0], [17.1, 1154.0], [17.2, 1158.0], [17.3, 1159.0], [17.4, 1163.0], [17.5, 1164.0], [17.6, 1164.0], [17.7, 1166.0], [17.8, 1167.0], [17.9, 1168.0], [18.0, 1168.0], [18.1, 1168.0], [18.2, 1169.0], [18.3, 1170.0], [18.4, 1175.0], [18.5, 1176.0], [18.6, 1180.0], [18.7, 1180.0], [18.8, 1181.0], [18.9, 1181.0], [19.0, 1185.0], [19.1, 1185.0], [19.2, 1188.0], [19.3, 1190.0], [19.4, 1192.0], [19.5, 1194.0], [19.6, 1197.0], [19.7, 1197.0], [19.8, 1201.0], [19.9, 1206.0], [20.0, 1207.0], [20.1, 1210.0], [20.2, 1213.0], [20.3, 1213.0], [20.4, 1215.0], [20.5, 1221.0], [20.6, 1221.0], [20.7, 1222.0], [20.8, 1226.0], [20.9, 1228.0], [21.0, 1229.0], [21.1, 1231.0], [21.2, 1233.0], [21.3, 1233.0], [21.4, 1235.0], [21.5, 1235.0], [21.6, 1238.0], [21.7, 1242.0], [21.8, 1245.0], [21.9, 1245.0], [22.0, 1247.0], [22.1, 1249.0], [22.2, 1250.0], [22.3, 1251.0], [22.4, 1251.0], [22.5, 1251.0], [22.6, 1254.0], [22.7, 1256.0], [22.8, 1257.0], [22.9, 1259.0], [23.0, 1260.0], [23.1, 1260.0], [23.2, 1260.0], [23.3, 1261.0], [23.4, 1262.0], [23.5, 1264.0], [23.6, 1267.0], [23.7, 1267.0], [23.8, 1267.0], [23.9, 1270.0], [24.0, 1272.0], [24.1, 1272.0], [24.2, 1277.0], [24.3, 1277.0], [24.4, 1280.0], [24.5, 1281.0], [24.6, 1281.0], [24.7, 1283.0], [24.8, 1283.0], [24.9, 1284.0], [25.0, 1284.0], [25.1, 1288.0], [25.2, 1288.0], [25.3, 1288.0], [25.4, 1292.0], [25.5, 1292.0], [25.6, 1293.0], [25.7, 1294.0], [25.8, 1297.0], [25.9, 1297.0], [26.0, 1298.0], [26.1, 1298.0], [26.2, 1298.0], [26.3, 1300.0], [26.4, 1301.0], [26.5, 1303.0], [26.6, 1303.0], [26.7, 1304.0], [26.8, 1305.0], [26.9, 1306.0], [27.0, 1307.0], [27.1, 1309.0], [27.2, 1309.0], [27.3, 1310.0], [27.4, 1314.0], [27.5, 1315.0], [27.6, 1315.0], [27.7, 1315.0], [27.8, 1317.0], [27.9, 1318.0], [28.0, 1321.0], [28.1, 1322.0], [28.2, 1323.0], [28.3, 1324.0], [28.4, 1324.0], [28.5, 1327.0], [28.6, 1328.0], [28.7, 1331.0], [28.8, 1333.0], [28.9, 1335.0], [29.0, 1335.0], [29.1, 1336.0], [29.2, 1337.0], [29.3, 1338.0], [29.4, 1338.0], [29.5, 1340.0], [29.6, 1341.0], [29.7, 1341.0], [29.8, 1343.0], [29.9, 1344.0], [30.0, 1345.0], [30.1, 1345.0], [30.2, 1349.0], [30.3, 1350.0], [30.4, 1350.0], [30.5, 1352.0], [30.6, 1353.0], [30.7, 1355.0], [30.8, 1356.0], [30.9, 1358.0], [31.0, 1360.0], [31.1, 1361.0], [31.2, 1362.0], [31.3, 1363.0], [31.4, 1363.0], [31.5, 1365.0], [31.6, 1366.0], [31.7, 1366.0], [31.8, 1366.0], [31.9, 1368.0], [32.0, 1369.0], [32.1, 1369.0], [32.2, 1370.0], [32.3, 1370.0], [32.4, 1370.0], [32.5, 1371.0], [32.6, 1375.0], [32.7, 1376.0], [32.8, 1377.0], [32.9, 1379.0], [33.0, 1379.0], [33.1, 1380.0], [33.2, 1380.0], [33.3, 1381.0], [33.4, 1382.0], [33.5, 1383.0], [33.6, 1383.0], [33.7, 1384.0], [33.8, 1385.0], [33.9, 1385.0], [34.0, 1386.0], [34.1, 1387.0], [34.2, 1387.0], [34.3, 1388.0], [34.4, 1389.0], [34.5, 1389.0], [34.6, 1390.0], [34.7, 1391.0], [34.8, 1392.0], [34.9, 1393.0], [35.0, 1398.0], [35.1, 1399.0], [35.2, 1399.0], [35.3, 1399.0], [35.4, 1400.0], [35.5, 1400.0], [35.6, 1401.0], [35.7, 1402.0], [35.8, 1402.0], [35.9, 1405.0], [36.0, 1406.0], [36.1, 1407.0], [36.2, 1408.0], [36.3, 1409.0], [36.4, 1411.0], [36.5, 1411.0], [36.6, 1413.0], [36.7, 1414.0], [36.8, 1414.0], [36.9, 1415.0], [37.0, 1416.0], [37.1, 1422.0], [37.2, 1425.0], [37.3, 1426.0], [37.4, 1427.0], [37.5, 1429.0], [37.6, 1429.0], [37.7, 1432.0], [37.8, 1432.0], [37.9, 1432.0], [38.0, 1434.0], [38.1, 1437.0], [38.2, 1437.0], [38.3, 1437.0], [38.4, 1441.0], [38.5, 1441.0], [38.6, 1441.0], [38.7, 1444.0], [38.8, 1445.0], [38.9, 1446.0], [39.0, 1447.0], [39.1, 1449.0], [39.2, 1449.0], [39.3, 1450.0], [39.4, 1452.0], [39.5, 1454.0], [39.6, 1454.0], [39.7, 1459.0], [39.8, 1460.0], [39.9, 1460.0], [40.0, 1465.0], [40.1, 1467.0], [40.2, 1467.0], [40.3, 1470.0], [40.4, 1470.0], [40.5, 1474.0], [40.6, 1475.0], [40.7, 1476.0], [40.8, 1476.0], [40.9, 1480.0], [41.0, 1480.0], [41.1, 1482.0], [41.2, 1483.0], [41.3, 1485.0], [41.4, 1486.0], [41.5, 1487.0], [41.6, 1487.0], [41.7, 1488.0], [41.8, 1490.0], [41.9, 1490.0], [42.0, 1492.0], [42.1, 1494.0], [42.2, 1496.0], [42.3, 1501.0], [42.4, 1502.0], [42.5, 1503.0], [42.6, 1505.0], [42.7, 1505.0], [42.8, 1507.0], [42.9, 1511.0], [43.0, 1511.0], [43.1, 1514.0], [43.2, 1515.0], [43.3, 1515.0], [43.4, 1518.0], [43.5, 1518.0], [43.6, 1520.0], [43.7, 1521.0], [43.8, 1523.0], [43.9, 1523.0], [44.0, 1527.0], [44.1, 1528.0], [44.2, 1529.0], [44.3, 1530.0], [44.4, 1530.0], [44.5, 1531.0], [44.6, 1532.0], [44.7, 1533.0], [44.8, 1533.0], [44.9, 1538.0], [45.0, 1538.0], [45.1, 1542.0], [45.2, 1542.0], [45.3, 1544.0], [45.4, 1547.0], [45.5, 1549.0], [45.6, 1557.0], [45.7, 1563.0], [45.8, 1563.0], [45.9, 1566.0], [46.0, 1569.0], [46.1, 1569.0], [46.2, 1571.0], [46.3, 1573.0], [46.4, 1576.0], [46.5, 1578.0], [46.6, 1579.0], [46.7, 1579.0], [46.8, 1582.0], [46.9, 1582.0], [47.0, 1584.0], [47.1, 1584.0], [47.2, 1585.0], [47.3, 1586.0], [47.4, 1587.0], [47.5, 1588.0], [47.6, 1588.0], [47.7, 1589.0], [47.8, 1589.0], [47.9, 1591.0], [48.0, 1595.0], [48.1, 1597.0], [48.2, 1597.0], [48.3, 1601.0], [48.4, 1601.0], [48.5, 1601.0], [48.6, 1603.0], [48.7, 1605.0], [48.8, 1605.0], [48.9, 1607.0], [49.0, 1613.0], [49.1, 1614.0], [49.2, 1614.0], [49.3, 1617.0], [49.4, 1618.0], [49.5, 1619.0], [49.6, 1626.0], [49.7, 1631.0], [49.8, 1631.0], [49.9, 1633.0], [50.0, 1636.0], [50.1, 1636.0], [50.2, 1638.0], [50.3, 1638.0], [50.4, 1640.0], [50.5, 1641.0], [50.6, 1643.0], [50.7, 1644.0], [50.8, 1649.0], [50.9, 1649.0], [51.0, 1650.0], [51.1, 1651.0], [51.2, 1652.0], [51.3, 1655.0], [51.4, 1657.0], [51.5, 1666.0], [51.6, 1666.0], [51.7, 1667.0], [51.8, 1670.0], [51.9, 1672.0], [52.0, 1682.0], [52.1, 1688.0], [52.2, 1688.0], [52.3, 1690.0], [52.4, 1690.0], [52.5, 1693.0], [52.6, 1693.0], [52.7, 1696.0], [52.8, 1699.0], [52.9, 1700.0], [53.0, 1704.0], [53.1, 1708.0], [53.2, 1708.0], [53.3, 1708.0], [53.4, 1714.0], [53.5, 1715.0], [53.6, 1716.0], [53.7, 1719.0], [53.8, 1721.0], [53.9, 1729.0], [54.0, 1732.0], [54.1, 1732.0], [54.2, 1733.0], [54.3, 1736.0], [54.4, 1736.0], [54.5, 1741.0], [54.6, 1745.0], [54.7, 1750.0], [54.8, 1753.0], [54.9, 1755.0], [55.0, 1756.0], [55.1, 1757.0], [55.2, 1759.0], [55.3, 1760.0], [55.4, 1761.0], [55.5, 1764.0], [55.6, 1764.0], [55.7, 1765.0], [55.8, 1767.0], [55.9, 1770.0], [56.0, 1773.0], [56.1, 1775.0], [56.2, 1779.0], [56.3, 1782.0], [56.4, 1785.0], [56.5, 1788.0], [56.6, 1791.0], [56.7, 1797.0], [56.8, 1800.0], [56.9, 1800.0], [57.0, 1803.0], [57.1, 1803.0], [57.2, 1805.0], [57.3, 1806.0], [57.4, 1810.0], [57.5, 1811.0], [57.6, 1813.0], [57.7, 1817.0], [57.8, 1818.0], [57.9, 1820.0], [58.0, 1821.0], [58.1, 1823.0], [58.2, 1827.0], [58.3, 1830.0], [58.4, 1830.0], [58.5, 1831.0], [58.6, 1834.0], [58.7, 1840.0], [58.8, 1844.0], [58.9, 1847.0], [59.0, 1852.0], [59.1, 1853.0], [59.2, 1853.0], [59.3, 1854.0], [59.4, 1855.0], [59.5, 1857.0], [59.6, 1858.0], [59.7, 1859.0], [59.8, 1862.0], [59.9, 1863.0], [60.0, 1865.0], [60.1, 1868.0], [60.2, 1868.0], [60.3, 1869.0], [60.4, 1870.0], [60.5, 1873.0], [60.6, 1875.0], [60.7, 1878.0], [60.8, 1881.0], [60.9, 1886.0], [61.0, 1887.0], [61.1, 1888.0], [61.2, 1888.0], [61.3, 1890.0], [61.4, 1893.0], [61.5, 1893.0], [61.6, 1893.0], [61.7, 1895.0], [61.8, 1897.0], [61.9, 1898.0], [62.0, 1903.0], [62.1, 1903.0], [62.2, 1904.0], [62.3, 1905.0], [62.4, 1907.0], [62.5, 1909.0], [62.6, 1909.0], [62.7, 1910.0], [62.8, 1912.0], [62.9, 1916.0], [63.0, 1916.0], [63.1, 1918.0], [63.2, 1921.0], [63.3, 1922.0], [63.4, 1922.0], [63.5, 1923.0], [63.6, 1924.0], [63.7, 1928.0], [63.8, 1929.0], [63.9, 1930.0], [64.0, 1932.0], [64.1, 1937.0], [64.2, 1937.0], [64.3, 1938.0], [64.4, 1945.0], [64.5, 1946.0], [64.6, 1947.0], [64.7, 1947.0], [64.8, 1951.0], [64.9, 1951.0], [65.0, 1952.0], [65.1, 1953.0], [65.2, 1954.0], [65.3, 1954.0], [65.4, 1958.0], [65.5, 1958.0], [65.6, 1959.0], [65.7, 1961.0], [65.8, 1961.0], [65.9, 1964.0], [66.0, 1966.0], [66.1, 1967.0], [66.2, 1967.0], [66.3, 1969.0], [66.4, 1970.0], [66.5, 1970.0], [66.6, 1971.0], [66.7, 1972.0], [66.8, 1972.0], [66.9, 1975.0], [67.0, 1978.0], [67.1, 1979.0], [67.2, 1979.0], [67.3, 1979.0], [67.4, 1980.0], [67.5, 1982.0], [67.6, 1986.0], [67.7, 1987.0], [67.8, 1991.0], [67.9, 1994.0], [68.0, 1994.0], [68.1, 1995.0], [68.2, 1996.0], [68.3, 1997.0], [68.4, 1997.0], [68.5, 1998.0], [68.6, 2000.0], [68.7, 2004.0], [68.8, 2006.0], [68.9, 2006.0], [69.0, 2006.0], [69.1, 2010.0], [69.2, 2010.0], [69.3, 2010.0], [69.4, 2013.0], [69.5, 2013.0], [69.6, 2015.0], [69.7, 2017.0], [69.8, 2018.0], [69.9, 2018.0], [70.0, 2021.0], [70.1, 2021.0], [70.2, 2023.0], [70.3, 2024.0], [70.4, 2024.0], [70.5, 2025.0], [70.6, 2029.0], [70.7, 2029.0], [70.8, 2030.0], [70.9, 2031.0], [71.0, 2031.0], [71.1, 2032.0], [71.2, 2033.0], [71.3, 2036.0], [71.4, 2038.0], [71.5, 2038.0], [71.6, 2041.0], [71.7, 2041.0], [71.8, 2041.0], [71.9, 2045.0], [72.0, 2047.0], [72.1, 2048.0], [72.2, 2051.0], [72.3, 2052.0], [72.4, 2053.0], [72.5, 2056.0], [72.6, 2057.0], [72.7, 2057.0], [72.8, 2060.0], [72.9, 2063.0], [73.0, 2063.0], [73.1, 2070.0], [73.2, 2073.0], [73.3, 2074.0], [73.4, 2076.0], [73.5, 2077.0], [73.6, 2078.0], [73.7, 2080.0], [73.8, 2082.0], [73.9, 2082.0], [74.0, 2086.0], [74.1, 2086.0], [74.2, 2087.0], [74.3, 2087.0], [74.4, 2089.0], [74.5, 2090.0], [74.6, 2093.0], [74.7, 2093.0], [74.8, 2096.0], [74.9, 2096.0], [75.0, 2098.0], [75.1, 2100.0], [75.2, 2101.0], [75.3, 2102.0], [75.4, 2102.0], [75.5, 2102.0], [75.6, 2103.0], [75.7, 2104.0], [75.8, 2104.0], [75.9, 2109.0], [76.0, 2111.0], [76.1, 2112.0], [76.2, 2113.0], [76.3, 2114.0], [76.4, 2115.0], [76.5, 2117.0], [76.6, 2117.0], [76.7, 2117.0], [76.8, 2119.0], [76.9, 2121.0], [77.0, 2125.0], [77.1, 2128.0], [77.2, 2132.0], [77.3, 2133.0], [77.4, 2135.0], [77.5, 2137.0], [77.6, 2138.0], [77.7, 2145.0], [77.8, 2147.0], [77.9, 2148.0], [78.0, 2149.0], [78.1, 2153.0], [78.2, 2157.0], [78.3, 2159.0], [78.4, 2166.0], [78.5, 2167.0], [78.6, 2168.0], [78.7, 2172.0], [78.8, 2173.0], [78.9, 2176.0], [79.0, 2180.0], [79.1, 2185.0], [79.2, 2187.0], [79.3, 2192.0], [79.4, 2193.0], [79.5, 2194.0], [79.6, 2196.0], [79.7, 2198.0], [79.8, 2200.0], [79.9, 2204.0], [80.0, 2205.0], [80.1, 2205.0], [80.2, 2208.0], [80.3, 2209.0], [80.4, 2210.0], [80.5, 2212.0], [80.6, 2217.0], [80.7, 2222.0], [80.8, 2223.0], [80.9, 2233.0], [81.0, 2240.0], [81.1, 2242.0], [81.2, 2248.0], [81.3, 2248.0], [81.4, 2251.0], [81.5, 2253.0], [81.6, 2255.0], [81.7, 2261.0], [81.8, 2267.0], [81.9, 2267.0], [82.0, 2268.0], [82.1, 2275.0], [82.2, 2278.0], [82.3, 2280.0], [82.4, 2289.0], [82.5, 2291.0], [82.6, 2292.0], [82.7, 2304.0], [82.8, 2306.0], [82.9, 2309.0], [83.0, 2311.0], [83.1, 2314.0], [83.2, 2316.0], [83.3, 2320.0], [83.4, 2323.0], [83.5, 2326.0], [83.6, 2339.0], [83.7, 2341.0], [83.8, 2345.0], [83.9, 2348.0], [84.0, 2355.0], [84.1, 2355.0], [84.2, 2356.0], [84.3, 2363.0], [84.4, 2368.0], [84.5, 2368.0], [84.6, 2390.0], [84.7, 2392.0], [84.8, 2395.0], [84.9, 2408.0], [85.0, 2411.0], [85.1, 2415.0], [85.2, 2420.0], [85.3, 2423.0], [85.4, 2426.0], [85.5, 2447.0], [85.6, 2449.0], [85.7, 2450.0], [85.8, 2451.0], [85.9, 2454.0], [86.0, 2458.0], [86.1, 2470.0], [86.2, 2470.0], [86.3, 2470.0], [86.4, 2476.0], [86.5, 2506.0], [86.6, 2508.0], [86.7, 2527.0], [86.8, 2556.0], [86.9, 2557.0], [87.0, 2587.0], [87.1, 2589.0], [87.2, 2602.0], [87.3, 2603.0], [87.4, 2624.0], [87.5, 2653.0], [87.6, 2654.0], [87.7, 2666.0], [87.8, 2677.0], [87.9, 2685.0], [88.0, 2704.0], [88.1, 2721.0], [88.2, 2729.0], [88.3, 2731.0], [88.4, 2732.0], [88.5, 2750.0], [88.6, 2770.0], [88.7, 2774.0], [88.8, 2780.0], [88.9, 2869.0], [89.0, 2888.0], [89.1, 2888.0], [89.2, 2911.0], [89.3, 2923.0], [89.4, 2936.0], [89.5, 2966.0], [89.6, 2973.0], [89.7, 2983.0], [89.8, 3010.0], [89.9, 3043.0], [90.0, 3105.0], [90.1, 3149.0], [90.2, 3158.0], [90.3, 3162.0], [90.4, 3233.0], [90.5, 3352.0], [90.6, 3370.0], [90.7, 3372.0], [90.8, 3406.0], [90.9, 3630.0], [91.0, 3634.0], [91.1, 3726.0], [91.2, 3910.0], [91.3, 3964.0], [91.4, 4128.0], [91.5, 4134.0], [91.6, 4149.0], [91.7, 4173.0], [91.8, 4179.0], [91.9, 4188.0], [92.0, 4275.0], [92.1, 4299.0], [92.2, 4307.0], [92.3, 4365.0], [92.4, 4376.0], [92.5, 4404.0], [92.6, 4608.0], [92.7, 4691.0], [92.8, 4718.0], [92.9, 5039.0], [93.0, 5154.0], [93.1, 5209.0], [93.2, 5266.0], [93.3, 5706.0], [93.4, 5974.0], [93.5, 6359.0], [93.6, 6405.0], [93.7, 6506.0], [93.8, 6587.0], [93.9, 7004.0], [94.0, 7048.0], [94.1, 7152.0], [94.2, 7628.0], [94.3, 7880.0], [94.4, 7905.0], [94.5, 8073.0], [94.6, 8331.0], [94.7, 8411.0], [94.8, 8677.0], [94.9, 8812.0], [95.0, 8877.0], [95.1, 9117.0], [95.2, 9305.0], [95.3, 9369.0], [95.4, 9434.0], [95.5, 9496.0], [95.6, 9650.0], [95.7, 9872.0], [95.8, 10271.0], [95.9, 10512.0], [96.0, 10844.0], [96.1, 10912.0], [96.2, 11364.0], [96.3, 12155.0], [96.4, 12515.0], [96.5, 13399.0], [96.6, 21510.0], [96.7, 21942.0], [96.8, 22029.0], [96.9, 22068.0], [97.0, 22119.0], [97.1, 22157.0], [97.2, 22234.0], [97.3, 22310.0], [97.4, 22312.0], [97.5, 22391.0], [97.6, 22410.0], [97.7, 22431.0], [97.8, 22454.0], [97.9, 22494.0], [98.0, 22544.0], [98.1, 22626.0], [98.2, 22677.0], [98.3, 22680.0], [98.4, 22695.0], [98.5, 22956.0], [98.6, 23024.0], [98.7, 23038.0], [98.8, 23143.0], [98.9, 23153.0], [99.0, 23159.0], [99.1, 23231.0], [99.2, 23414.0], [99.3, 23582.0], [99.4, 24045.0], [99.5, 24670.0], [99.6, 25171.0], [99.7, 27086.0], [99.8, 27781.0], [99.9, 29066.0], [100.0, 30974.0]], "isOverall": false, "label": "api/trainer/start_schedule", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 121.0, "series": [{"data": [[300.0, 2.0], [400.0, 14.0], [500.0, 22.0], [600.0, 13.0], [700.0, 17.0], [800.0, 31.0], [900.0, 32.0], [1000.0, 58.0], [1100.0, 72.0], [1200.0, 86.0], [1300.0, 121.0], [1400.0, 91.0], [1500.0, 80.0], [1600.0, 60.0], [1700.0, 52.0], [1800.0, 68.0], [1900.0, 88.0], [2000.0, 86.0], [2100.0, 62.0], [2200.0, 39.0], [2300.0, 28.0], [2400.0, 22.0], [2500.0, 9.0], [2600.0, 11.0], [2800.0, 4.0], [2700.0, 11.0], [2900.0, 9.0], [3000.0, 2.0], [3100.0, 5.0], [3300.0, 5.0], [3200.0, 1.0], [3400.0, 1.0], [3600.0, 2.0], [3700.0, 2.0], [3900.0, 2.0], [4000.0, 1.0], [4100.0, 7.0], [4300.0, 4.0], [4200.0, 3.0], [4500.0, 1.0], [4600.0, 2.0], [4400.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [5000.0, 1.0], [5100.0, 1.0], [5200.0, 3.0], [5700.0, 1.0], [5900.0, 1.0], [6100.0, 1.0], [6300.0, 1.0], [6500.0, 2.0], [6600.0, 1.0], [6400.0, 1.0], [7100.0, 1.0], [7000.0, 2.0], [7600.0, 2.0], [7800.0, 1.0], [7900.0, 1.0], [8000.0, 2.0], [8400.0, 1.0], [8300.0, 1.0], [8600.0, 2.0], [9000.0, 1.0], [9100.0, 1.0], [8800.0, 2.0], [9300.0, 3.0], [9400.0, 2.0], [9600.0, 1.0], [9800.0, 2.0], [10200.0, 1.0], [10500.0, 1.0], [10800.0, 2.0], [10900.0, 1.0], [11300.0, 2.0], [12100.0, 1.0], [12500.0, 1.0], [13300.0, 1.0], [13500.0, 1.0], [21500.0, 1.0], [21900.0, 1.0], [22000.0, 3.0], [22400.0, 5.0], [22100.0, 2.0], [22300.0, 4.0], [22200.0, 2.0], [22500.0, 1.0], [23100.0, 5.0], [23200.0, 1.0], [22600.0, 6.0], [23400.0, 1.0], [22900.0, 1.0], [23000.0, 2.0], [23500.0, 1.0], [24000.0, 1.0], [23700.0, 1.0], [25100.0, 1.0], [24600.0, 1.0], [26100.0, 1.0], [27000.0, 1.0], [27700.0, 1.0], [29000.0, 1.0], [30900.0, 1.0]], "isOverall": false, "label": "api/trainer/start_schedule", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 30900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 78.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1245.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 78.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1245.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 17.675373134328357, "minX": 1.76878956E12, "maxY": 20.0, "series": [{"data": [[1.76878968E12, 20.0], [1.76878956E12, 17.675373134328357], [1.76878974E12, 18.29090909090909], [1.76878962E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76878974E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1408.4545454545455, "minX": 1.0, "maxY": 23582.0, "series": [{"data": [[8.0, 12379.0], [2.0, 23153.0], [9.0, 16860.333333333332], [10.0, 7337.750000000001], [11.0, 6287.4], [12.0, 7497.25], [3.0, 23024.0], [13.0, 5063.888888888889], [14.0, 1408.4545454545455], [15.0, 2801.8888888888887], [16.0, 3250.4642857142862], [4.0, 23582.0], [1.0, 23143.0], [17.0, 2589.259259259259], [18.0, 1812.8333333333333], [19.0, 2684.242424242424], [20.0, 2445.1763157894725], [5.0, 23038.0], [6.0, 22956.0]], "isOverall": false, "label": "api/trainer/start_schedule", "isController": false}, {"data": [[19.38699924414212, 2662.3151927437602]], "isOverall": false, "label": "api/trainer/start_schedule-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4326.166666666667, "minX": 1.76878956E12, "maxY": 560006.6666666666, "series": [{"data": [[1.76878968E12, 17235.183333333334], [1.76878956E12, 10145.4], [1.76878974E12, 4326.166666666667], [1.76878962E12, 19721.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76878968E12, 492093.3333333333], [1.76878956E12, 298373.3333333333], [1.76878974E12, 122466.66666666667], [1.76878962E12, 560006.6666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76878974E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2269.1610337972147, "minX": 1.76878956E12, "maxY": 3619.363636363636, "series": [{"data": [[1.76878968E12, 2721.1131221719456], [1.76878956E12, 2910.4216417910443], [1.76878974E12, 3619.363636363636], [1.76878962E12, 2269.1610337972147]], "isOverall": false, "label": "api/trainer/start_schedule", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76878974E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2269.0516898608366, "minX": 1.76878956E12, "maxY": 3619.245454545454, "series": [{"data": [[1.76878968E12, 2721.033936651583], [1.76878956E12, 2910.235074626868], [1.76878974E12, 3619.245454545454], [1.76878962E12, 2269.0516898608366]], "isOverall": false, "label": "api/trainer/start_schedule", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76878974E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 171.99801192842938, "minX": 1.76878956E12, "maxY": 1929.5090909090914, "series": [{"data": [[1.76878968E12, 961.2239819004518], [1.76878956E12, 883.078358208956], [1.76878974E12, 1929.5090909090914], [1.76878962E12, 171.99801192842938]], "isOverall": false, "label": "api/trainer/start_schedule", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76878974E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1893.0, "minX": 1.76878956E12, "maxY": 30974.0, "series": [{"data": [[1.76878968E12, 30974.0], [1.76878956E12, 27086.0], [1.76878974E12, 23582.0], [1.76878962E12, 13399.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76878968E12, 3372.0], [1.76878956E12, 1893.0], [1.76878974E12, 22956.0], [1.76878962E12, 4170.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76878968E12, 28166.5], [1.76878956E12, 23619.0], [1.76878974E12, 23582.0], [1.76878962E12, 12155.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76878968E12, 30974.0], [1.76878956E12, 27086.0], [1.76878974E12, 23582.0], [1.76878962E12, 13399.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76878968E12, 8744.5], [1.76878956E12, 6359.0], [1.76878974E12, 23090.5], [1.76878962E12, 9049.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76878968E12, 30306.199999999997], [1.76878956E12, 26319.999999999996], [1.76878974E12, 23582.0], [1.76878962E12, 13399.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76878974E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 888.5, "minX": 1.0, "maxY": 23038.0, "series": [{"data": [[1.0, 23038.0], [2.0, 2904.0], [4.0, 8341.0], [8.0, 9460.5], [9.0, 6405.0], [5.0, 5248.0], [10.0, 7152.0], [11.0, 8019.5], [12.0, 9305.0], [3.0, 9960.5], [13.0, 8861.5], [7.0, 9196.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1528.5], [2.0, 1501.0], [9.0, 1511.0], [10.0, 1579.0], [11.0, 1580.5], [3.0, 1633.0], [12.0, 1441.0], [13.0, 1567.5], [14.0, 1979.5], [15.0, 2426.0], [4.0, 888.5], [1.0, 2006.5], [16.0, 1709.5], [17.0, 2180.0], [5.0, 1761.0], [6.0, 1290.5], [7.0, 1551.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 888.5, "minX": 1.0, "maxY": 23037.0, "series": [{"data": [[1.0, 23037.0], [2.0, 2904.0], [4.0, 8341.0], [8.0, 9460.5], [9.0, 6405.0], [5.0, 5248.0], [10.0, 7152.0], [11.0, 8019.0], [12.0, 9305.0], [3.0, 9960.5], [13.0, 8861.5], [7.0, 9195.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1528.5], [2.0, 1501.0], [9.0, 1511.0], [10.0, 1579.0], [11.0, 1580.0], [3.0, 1632.0], [12.0, 1440.0], [13.0, 1567.5], [14.0, 1979.0], [15.0, 2426.0], [4.0, 888.5], [1.0, 2006.5], [16.0, 1709.5], [17.0, 2179.0], [5.0, 1761.0], [6.0, 1290.5], [7.0, 1551.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.7687895E12, "maxY": 8.383333333333333, "series": [{"data": [[1.76878968E12, 7.366666666666666], [1.76878956E12, 4.75], [1.76878974E12, 1.5], [1.76878962E12, 8.383333333333333], [1.7687895E12, 0.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76878974E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76878956E12, "maxY": 7.883333333333334, "series": [{"data": [[1.76878968E12, 0.43333333333333335], [1.76878956E12, 0.45], [1.76878974E12, 0.1], [1.76878962E12, 0.31666666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76878968E12, 0.06666666666666667], [1.76878956E12, 0.05], [1.76878962E12, 0.18333333333333332]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.76878968E12, 6.866666666666666], [1.76878956E12, 3.966666666666667], [1.76878974E12, 1.7333333333333334], [1.76878962E12, 7.883333333333334]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76878974E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76878956E12, "maxY": 8.066666666666666, "series": [{"data": [[1.76878968E12, 0.43333333333333335], [1.76878956E12, 0.45], [1.76878974E12, 0.1], [1.76878962E12, 0.31666666666666665]], "isOverall": false, "label": "api/trainer/start_schedule-success", "isController": false}, {"data": [[1.76878968E12, 6.933333333333334], [1.76878956E12, 4.016666666666667], [1.76878974E12, 1.7333333333333334], [1.76878962E12, 8.066666666666666]], "isOverall": false, "label": "api/trainer/start_schedule-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76878974E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76878956E12, "maxY": 8.066666666666666, "series": [{"data": [[1.76878968E12, 0.43333333333333335], [1.76878956E12, 0.45], [1.76878974E12, 0.1], [1.76878962E12, 0.31666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76878968E12, 6.933333333333334], [1.76878956E12, 4.016666666666667], [1.76878974E12, 1.7333333333333334], [1.76878962E12, 8.066666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76878974E12, "title": "Total Transactions Per Second"}},
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

