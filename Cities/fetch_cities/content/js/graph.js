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
        data: {"result": {"minY": 412.0, "minX": 0.0, "maxY": 29371.0, "series": [{"data": [[0.0, 412.0], [0.1, 449.0], [0.2, 535.0], [0.3, 536.0], [0.4, 557.0], [0.5, 558.0], [0.6, 565.0], [0.7, 604.0], [0.8, 605.0], [0.9, 606.0], [1.0, 631.0], [1.1, 632.0], [1.2, 650.0], [1.3, 655.0], [1.4, 667.0], [1.5, 668.0], [1.6, 672.0], [1.7, 675.0], [1.8, 680.0], [1.9, 682.0], [2.0, 685.0], [2.1, 687.0], [2.2, 691.0], [2.3, 693.0], [2.4, 697.0], [2.5, 700.0], [2.6, 702.0], [2.7, 709.0], [2.8, 711.0], [2.9, 716.0], [3.0, 722.0], [3.1, 723.0], [3.2, 724.0], [3.3, 726.0], [3.4, 726.0], [3.5, 728.0], [3.6, 742.0], [3.7, 746.0], [3.8, 748.0], [3.9, 756.0], [4.0, 757.0], [4.1, 763.0], [4.2, 771.0], [4.3, 778.0], [4.4, 781.0], [4.5, 783.0], [4.6, 786.0], [4.7, 790.0], [4.8, 798.0], [4.9, 803.0], [5.0, 806.0], [5.1, 817.0], [5.2, 823.0], [5.3, 823.0], [5.4, 831.0], [5.5, 843.0], [5.6, 844.0], [5.7, 847.0], [5.8, 856.0], [5.9, 857.0], [6.0, 857.0], [6.1, 864.0], [6.2, 865.0], [6.3, 868.0], [6.4, 885.0], [6.5, 892.0], [6.6, 895.0], [6.7, 901.0], [6.8, 901.0], [6.9, 901.0], [7.0, 907.0], [7.1, 908.0], [7.2, 908.0], [7.3, 910.0], [7.4, 916.0], [7.5, 916.0], [7.6, 920.0], [7.7, 927.0], [7.8, 928.0], [7.9, 930.0], [8.0, 931.0], [8.1, 940.0], [8.2, 942.0], [8.3, 949.0], [8.4, 953.0], [8.5, 958.0], [8.6, 964.0], [8.7, 964.0], [8.8, 969.0], [8.9, 970.0], [9.0, 972.0], [9.1, 974.0], [9.2, 978.0], [9.3, 983.0], [9.4, 988.0], [9.5, 991.0], [9.6, 1000.0], [9.7, 1007.0], [9.8, 1008.0], [9.9, 1011.0], [10.0, 1014.0], [10.1, 1014.0], [10.2, 1023.0], [10.3, 1023.0], [10.4, 1032.0], [10.5, 1035.0], [10.6, 1036.0], [10.7, 1036.0], [10.8, 1039.0], [10.9, 1042.0], [11.0, 1043.0], [11.1, 1045.0], [11.2, 1057.0], [11.3, 1058.0], [11.4, 1059.0], [11.5, 1059.0], [11.6, 1059.0], [11.7, 1062.0], [11.8, 1067.0], [11.9, 1069.0], [12.0, 1069.0], [12.1, 1075.0], [12.2, 1076.0], [12.3, 1078.0], [12.4, 1080.0], [12.5, 1082.0], [12.6, 1085.0], [12.7, 1087.0], [12.8, 1089.0], [12.9, 1091.0], [13.0, 1092.0], [13.1, 1095.0], [13.2, 1095.0], [13.3, 1098.0], [13.4, 1103.0], [13.5, 1103.0], [13.6, 1107.0], [13.7, 1108.0], [13.8, 1113.0], [13.9, 1114.0], [14.0, 1117.0], [14.1, 1118.0], [14.2, 1119.0], [14.3, 1121.0], [14.4, 1121.0], [14.5, 1121.0], [14.6, 1122.0], [14.7, 1124.0], [14.8, 1129.0], [14.9, 1131.0], [15.0, 1133.0], [15.1, 1135.0], [15.2, 1136.0], [15.3, 1140.0], [15.4, 1141.0], [15.5, 1142.0], [15.6, 1144.0], [15.7, 1146.0], [15.8, 1146.0], [15.9, 1152.0], [16.0, 1153.0], [16.1, 1153.0], [16.2, 1159.0], [16.3, 1160.0], [16.4, 1160.0], [16.5, 1160.0], [16.6, 1163.0], [16.7, 1168.0], [16.8, 1169.0], [16.9, 1171.0], [17.0, 1172.0], [17.1, 1172.0], [17.2, 1177.0], [17.3, 1178.0], [17.4, 1180.0], [17.5, 1181.0], [17.6, 1184.0], [17.7, 1184.0], [17.8, 1184.0], [17.9, 1185.0], [18.0, 1185.0], [18.1, 1187.0], [18.2, 1188.0], [18.3, 1189.0], [18.4, 1190.0], [18.5, 1194.0], [18.6, 1195.0], [18.7, 1195.0], [18.8, 1198.0], [18.9, 1201.0], [19.0, 1202.0], [19.1, 1203.0], [19.2, 1206.0], [19.3, 1211.0], [19.4, 1213.0], [19.5, 1214.0], [19.6, 1216.0], [19.7, 1217.0], [19.8, 1218.0], [19.9, 1219.0], [20.0, 1223.0], [20.1, 1223.0], [20.2, 1223.0], [20.3, 1224.0], [20.4, 1228.0], [20.5, 1230.0], [20.6, 1232.0], [20.7, 1234.0], [20.8, 1234.0], [20.9, 1236.0], [21.0, 1244.0], [21.1, 1246.0], [21.2, 1246.0], [21.3, 1247.0], [21.4, 1249.0], [21.5, 1253.0], [21.6, 1255.0], [21.7, 1257.0], [21.8, 1258.0], [21.9, 1259.0], [22.0, 1265.0], [22.1, 1266.0], [22.2, 1267.0], [22.3, 1269.0], [22.4, 1270.0], [22.5, 1270.0], [22.6, 1272.0], [22.7, 1275.0], [22.8, 1275.0], [22.9, 1276.0], [23.0, 1278.0], [23.1, 1281.0], [23.2, 1284.0], [23.3, 1284.0], [23.4, 1284.0], [23.5, 1287.0], [23.6, 1287.0], [23.7, 1287.0], [23.8, 1291.0], [23.9, 1291.0], [24.0, 1292.0], [24.1, 1295.0], [24.2, 1295.0], [24.3, 1296.0], [24.4, 1297.0], [24.5, 1300.0], [24.6, 1305.0], [24.7, 1308.0], [24.8, 1311.0], [24.9, 1311.0], [25.0, 1312.0], [25.1, 1315.0], [25.2, 1315.0], [25.3, 1315.0], [25.4, 1317.0], [25.5, 1317.0], [25.6, 1324.0], [25.7, 1324.0], [25.8, 1325.0], [25.9, 1325.0], [26.0, 1326.0], [26.1, 1327.0], [26.2, 1328.0], [26.3, 1328.0], [26.4, 1331.0], [26.5, 1335.0], [26.6, 1335.0], [26.7, 1336.0], [26.8, 1338.0], [26.9, 1338.0], [27.0, 1340.0], [27.1, 1341.0], [27.2, 1342.0], [27.3, 1343.0], [27.4, 1347.0], [27.5, 1348.0], [27.6, 1349.0], [27.7, 1351.0], [27.8, 1353.0], [27.9, 1353.0], [28.0, 1354.0], [28.1, 1356.0], [28.2, 1358.0], [28.3, 1366.0], [28.4, 1367.0], [28.5, 1368.0], [28.6, 1373.0], [28.7, 1374.0], [28.8, 1376.0], [28.9, 1377.0], [29.0, 1378.0], [29.1, 1378.0], [29.2, 1383.0], [29.3, 1386.0], [29.4, 1387.0], [29.5, 1387.0], [29.6, 1391.0], [29.7, 1391.0], [29.8, 1392.0], [29.9, 1395.0], [30.0, 1396.0], [30.1, 1396.0], [30.2, 1397.0], [30.3, 1402.0], [30.4, 1402.0], [30.5, 1405.0], [30.6, 1407.0], [30.7, 1407.0], [30.8, 1410.0], [30.9, 1415.0], [31.0, 1417.0], [31.1, 1418.0], [31.2, 1420.0], [31.3, 1422.0], [31.4, 1423.0], [31.5, 1425.0], [31.6, 1426.0], [31.7, 1427.0], [31.8, 1428.0], [31.9, 1429.0], [32.0, 1429.0], [32.1, 1430.0], [32.2, 1432.0], [32.3, 1436.0], [32.4, 1437.0], [32.5, 1438.0], [32.6, 1440.0], [32.7, 1444.0], [32.8, 1446.0], [32.9, 1449.0], [33.0, 1451.0], [33.1, 1453.0], [33.2, 1456.0], [33.3, 1458.0], [33.4, 1460.0], [33.5, 1462.0], [33.6, 1463.0], [33.7, 1464.0], [33.8, 1464.0], [33.9, 1467.0], [34.0, 1468.0], [34.1, 1468.0], [34.2, 1470.0], [34.3, 1472.0], [34.4, 1472.0], [34.5, 1476.0], [34.6, 1480.0], [34.7, 1482.0], [34.8, 1482.0], [34.9, 1483.0], [35.0, 1485.0], [35.1, 1488.0], [35.2, 1489.0], [35.3, 1491.0], [35.4, 1492.0], [35.5, 1493.0], [35.6, 1494.0], [35.7, 1494.0], [35.8, 1494.0], [35.9, 1495.0], [36.0, 1496.0], [36.1, 1502.0], [36.2, 1505.0], [36.3, 1505.0], [36.4, 1505.0], [36.5, 1506.0], [36.6, 1508.0], [36.7, 1508.0], [36.8, 1513.0], [36.9, 1517.0], [37.0, 1521.0], [37.1, 1521.0], [37.2, 1530.0], [37.3, 1534.0], [37.4, 1534.0], [37.5, 1540.0], [37.6, 1543.0], [37.7, 1545.0], [37.8, 1549.0], [37.9, 1554.0], [38.0, 1555.0], [38.1, 1556.0], [38.2, 1556.0], [38.3, 1559.0], [38.4, 1560.0], [38.5, 1560.0], [38.6, 1561.0], [38.7, 1563.0], [38.8, 1566.0], [38.9, 1566.0], [39.0, 1567.0], [39.1, 1570.0], [39.2, 1571.0], [39.3, 1571.0], [39.4, 1580.0], [39.5, 1584.0], [39.6, 1585.0], [39.7, 1592.0], [39.8, 1595.0], [39.9, 1597.0], [40.0, 1602.0], [40.1, 1603.0], [40.2, 1603.0], [40.3, 1604.0], [40.4, 1608.0], [40.5, 1610.0], [40.6, 1612.0], [40.7, 1615.0], [40.8, 1618.0], [40.9, 1624.0], [41.0, 1626.0], [41.1, 1629.0], [41.2, 1630.0], [41.3, 1633.0], [41.4, 1636.0], [41.5, 1637.0], [41.6, 1640.0], [41.7, 1641.0], [41.8, 1642.0], [41.9, 1645.0], [42.0, 1647.0], [42.1, 1649.0], [42.2, 1650.0], [42.3, 1651.0], [42.4, 1652.0], [42.5, 1653.0], [42.6, 1655.0], [42.7, 1656.0], [42.8, 1657.0], [42.9, 1657.0], [43.0, 1668.0], [43.1, 1669.0], [43.2, 1671.0], [43.3, 1673.0], [43.4, 1674.0], [43.5, 1679.0], [43.6, 1682.0], [43.7, 1684.0], [43.8, 1690.0], [43.9, 1694.0], [44.0, 1695.0], [44.1, 1697.0], [44.2, 1701.0], [44.3, 1703.0], [44.4, 1708.0], [44.5, 1712.0], [44.6, 1716.0], [44.7, 1718.0], [44.8, 1722.0], [44.9, 1728.0], [45.0, 1731.0], [45.1, 1733.0], [45.2, 1733.0], [45.3, 1736.0], [45.4, 1739.0], [45.5, 1740.0], [45.6, 1743.0], [45.7, 1744.0], [45.8, 1744.0], [45.9, 1745.0], [46.0, 1746.0], [46.1, 1749.0], [46.2, 1749.0], [46.3, 1752.0], [46.4, 1759.0], [46.5, 1760.0], [46.6, 1761.0], [46.7, 1762.0], [46.8, 1762.0], [46.9, 1764.0], [47.0, 1768.0], [47.1, 1769.0], [47.2, 1774.0], [47.3, 1774.0], [47.4, 1779.0], [47.5, 1779.0], [47.6, 1782.0], [47.7, 1792.0], [47.8, 1792.0], [47.9, 1792.0], [48.0, 1799.0], [48.1, 1801.0], [48.2, 1806.0], [48.3, 1807.0], [48.4, 1807.0], [48.5, 1808.0], [48.6, 1808.0], [48.7, 1808.0], [48.8, 1809.0], [48.9, 1811.0], [49.0, 1811.0], [49.1, 1812.0], [49.2, 1817.0], [49.3, 1818.0], [49.4, 1821.0], [49.5, 1823.0], [49.6, 1824.0], [49.7, 1825.0], [49.8, 1826.0], [49.9, 1826.0], [50.0, 1826.0], [50.1, 1828.0], [50.2, 1829.0], [50.3, 1832.0], [50.4, 1833.0], [50.5, 1836.0], [50.6, 1836.0], [50.7, 1838.0], [50.8, 1840.0], [50.9, 1844.0], [51.0, 1846.0], [51.1, 1847.0], [51.2, 1848.0], [51.3, 1848.0], [51.4, 1850.0], [51.5, 1852.0], [51.6, 1854.0], [51.7, 1854.0], [51.8, 1856.0], [51.9, 1856.0], [52.0, 1857.0], [52.1, 1859.0], [52.2, 1860.0], [52.3, 1868.0], [52.4, 1872.0], [52.5, 1873.0], [52.6, 1877.0], [52.7, 1880.0], [52.8, 1882.0], [52.9, 1882.0], [53.0, 1884.0], [53.1, 1889.0], [53.2, 1889.0], [53.3, 1889.0], [53.4, 1893.0], [53.5, 1893.0], [53.6, 1895.0], [53.7, 1896.0], [53.8, 1897.0], [53.9, 1898.0], [54.0, 1900.0], [54.1, 1902.0], [54.2, 1903.0], [54.3, 1907.0], [54.4, 1908.0], [54.5, 1912.0], [54.6, 1912.0], [54.7, 1914.0], [54.8, 1915.0], [54.9, 1919.0], [55.0, 1919.0], [55.1, 1920.0], [55.2, 1922.0], [55.3, 1925.0], [55.4, 1929.0], [55.5, 1939.0], [55.6, 1941.0], [55.7, 1943.0], [55.8, 1945.0], [55.9, 1947.0], [56.0, 1948.0], [56.1, 1949.0], [56.2, 1952.0], [56.3, 1954.0], [56.4, 1954.0], [56.5, 1954.0], [56.6, 1957.0], [56.7, 1957.0], [56.8, 1957.0], [56.9, 1962.0], [57.0, 1963.0], [57.1, 1966.0], [57.2, 1969.0], [57.3, 1969.0], [57.4, 1970.0], [57.5, 1973.0], [57.6, 1974.0], [57.7, 1976.0], [57.8, 1976.0], [57.9, 1977.0], [58.0, 1978.0], [58.1, 1981.0], [58.2, 1982.0], [58.3, 1982.0], [58.4, 1985.0], [58.5, 1986.0], [58.6, 1986.0], [58.7, 1987.0], [58.8, 1989.0], [58.9, 1990.0], [59.0, 1990.0], [59.1, 1992.0], [59.2, 1993.0], [59.3, 1994.0], [59.4, 1996.0], [59.5, 1997.0], [59.6, 1997.0], [59.7, 2002.0], [59.8, 2003.0], [59.9, 2005.0], [60.0, 2005.0], [60.1, 2005.0], [60.2, 2008.0], [60.3, 2013.0], [60.4, 2017.0], [60.5, 2017.0], [60.6, 2018.0], [60.7, 2021.0], [60.8, 2022.0], [60.9, 2022.0], [61.0, 2023.0], [61.1, 2023.0], [61.2, 2023.0], [61.3, 2030.0], [61.4, 2030.0], [61.5, 2032.0], [61.6, 2035.0], [61.7, 2036.0], [61.8, 2036.0], [61.9, 2037.0], [62.0, 2041.0], [62.1, 2042.0], [62.2, 2042.0], [62.3, 2043.0], [62.4, 2043.0], [62.5, 2045.0], [62.6, 2048.0], [62.7, 2048.0], [62.8, 2048.0], [62.9, 2050.0], [63.0, 2050.0], [63.1, 2051.0], [63.2, 2052.0], [63.3, 2052.0], [63.4, 2052.0], [63.5, 2055.0], [63.6, 2055.0], [63.7, 2056.0], [63.8, 2060.0], [63.9, 2061.0], [64.0, 2061.0], [64.1, 2062.0], [64.2, 2062.0], [64.3, 2063.0], [64.4, 2063.0], [64.5, 2064.0], [64.6, 2072.0], [64.7, 2072.0], [64.8, 2076.0], [64.9, 2077.0], [65.0, 2077.0], [65.1, 2078.0], [65.2, 2079.0], [65.3, 2081.0], [65.4, 2082.0], [65.5, 2083.0], [65.6, 2085.0], [65.7, 2085.0], [65.8, 2089.0], [65.9, 2090.0], [66.0, 2091.0], [66.1, 2091.0], [66.2, 2093.0], [66.3, 2094.0], [66.4, 2094.0], [66.5, 2096.0], [66.6, 2096.0], [66.7, 2099.0], [66.8, 2101.0], [66.9, 2102.0], [67.0, 2103.0], [67.1, 2104.0], [67.2, 2105.0], [67.3, 2107.0], [67.4, 2107.0], [67.5, 2108.0], [67.6, 2109.0], [67.7, 2111.0], [67.8, 2112.0], [67.9, 2114.0], [68.0, 2118.0], [68.1, 2120.0], [68.2, 2122.0], [68.3, 2123.0], [68.4, 2126.0], [68.5, 2126.0], [68.6, 2127.0], [68.7, 2128.0], [68.8, 2129.0], [68.9, 2133.0], [69.0, 2134.0], [69.1, 2136.0], [69.2, 2139.0], [69.3, 2140.0], [69.4, 2140.0], [69.5, 2142.0], [69.6, 2148.0], [69.7, 2149.0], [69.8, 2150.0], [69.9, 2154.0], [70.0, 2155.0], [70.1, 2158.0], [70.2, 2159.0], [70.3, 2163.0], [70.4, 2165.0], [70.5, 2174.0], [70.6, 2175.0], [70.7, 2177.0], [70.8, 2178.0], [70.9, 2178.0], [71.0, 2183.0], [71.1, 2183.0], [71.2, 2186.0], [71.3, 2190.0], [71.4, 2197.0], [71.5, 2199.0], [71.6, 2199.0], [71.7, 2200.0], [71.8, 2205.0], [71.9, 2209.0], [72.0, 2210.0], [72.1, 2215.0], [72.2, 2215.0], [72.3, 2216.0], [72.4, 2225.0], [72.5, 2233.0], [72.6, 2239.0], [72.7, 2242.0], [72.8, 2245.0], [72.9, 2246.0], [73.0, 2246.0], [73.1, 2248.0], [73.2, 2249.0], [73.3, 2251.0], [73.4, 2255.0], [73.5, 2255.0], [73.6, 2255.0], [73.7, 2257.0], [73.8, 2257.0], [73.9, 2258.0], [74.0, 2261.0], [74.1, 2261.0], [74.2, 2262.0], [74.3, 2264.0], [74.4, 2266.0], [74.5, 2267.0], [74.6, 2267.0], [74.7, 2270.0], [74.8, 2273.0], [74.9, 2275.0], [75.0, 2281.0], [75.1, 2283.0], [75.2, 2284.0], [75.3, 2287.0], [75.4, 2290.0], [75.5, 2293.0], [75.6, 2294.0], [75.7, 2296.0], [75.8, 2297.0], [75.9, 2303.0], [76.0, 2306.0], [76.1, 2308.0], [76.2, 2312.0], [76.3, 2313.0], [76.4, 2322.0], [76.5, 2333.0], [76.6, 2341.0], [76.7, 2345.0], [76.8, 2348.0], [76.9, 2352.0], [77.0, 2352.0], [77.1, 2352.0], [77.2, 2357.0], [77.3, 2359.0], [77.4, 2360.0], [77.5, 2364.0], [77.6, 2368.0], [77.7, 2372.0], [77.8, 2375.0], [77.9, 2376.0], [78.0, 2377.0], [78.1, 2382.0], [78.2, 2383.0], [78.3, 2383.0], [78.4, 2386.0], [78.5, 2388.0], [78.6, 2397.0], [78.7, 2398.0], [78.8, 2410.0], [78.9, 2411.0], [79.0, 2413.0], [79.1, 2423.0], [79.2, 2426.0], [79.3, 2426.0], [79.4, 2428.0], [79.5, 2440.0], [79.6, 2447.0], [79.7, 2453.0], [79.8, 2457.0], [79.9, 2458.0], [80.0, 2460.0], [80.1, 2464.0], [80.2, 2465.0], [80.3, 2465.0], [80.4, 2467.0], [80.5, 2473.0], [80.6, 2473.0], [80.7, 2497.0], [80.8, 2499.0], [80.9, 2504.0], [81.0, 2507.0], [81.1, 2508.0], [81.2, 2510.0], [81.3, 2517.0], [81.4, 2520.0], [81.5, 2532.0], [81.6, 2537.0], [81.7, 2552.0], [81.8, 2553.0], [81.9, 2558.0], [82.0, 2562.0], [82.1, 2563.0], [82.2, 2565.0], [82.3, 2568.0], [82.4, 2573.0], [82.5, 2575.0], [82.6, 2580.0], [82.7, 2584.0], [82.8, 2587.0], [82.9, 2587.0], [83.0, 2606.0], [83.1, 2606.0], [83.2, 2612.0], [83.3, 2619.0], [83.4, 2622.0], [83.5, 2630.0], [83.6, 2630.0], [83.7, 2635.0], [83.8, 2635.0], [83.9, 2649.0], [84.0, 2654.0], [84.1, 2668.0], [84.2, 2720.0], [84.3, 2724.0], [84.4, 2744.0], [84.5, 2749.0], [84.6, 2751.0], [84.7, 2768.0], [84.8, 2790.0], [84.9, 2809.0], [85.0, 2809.0], [85.1, 2853.0], [85.2, 2865.0], [85.3, 2872.0], [85.4, 2889.0], [85.5, 2889.0], [85.6, 2892.0], [85.7, 2903.0], [85.8, 2922.0], [85.9, 2922.0], [86.0, 2942.0], [86.1, 2958.0], [86.2, 3001.0], [86.3, 3004.0], [86.4, 3046.0], [86.5, 3056.0], [86.6, 3139.0], [86.7, 3198.0], [86.8, 3225.0], [86.9, 3229.0], [87.0, 3242.0], [87.1, 3249.0], [87.2, 3263.0], [87.3, 3268.0], [87.4, 3287.0], [87.5, 3335.0], [87.6, 3342.0], [87.7, 3370.0], [87.8, 3376.0], [87.9, 3386.0], [88.0, 3410.0], [88.1, 3437.0], [88.2, 3470.0], [88.3, 3551.0], [88.4, 3580.0], [88.5, 3582.0], [88.6, 3666.0], [88.7, 3683.0], [88.8, 3685.0], [88.9, 3766.0], [89.0, 3772.0], [89.1, 3779.0], [89.2, 3857.0], [89.3, 3943.0], [89.4, 3945.0], [89.5, 3952.0], [89.6, 4034.0], [89.7, 4060.0], [89.8, 4129.0], [89.9, 4213.0], [90.0, 4237.0], [90.1, 4259.0], [90.2, 4387.0], [90.3, 4389.0], [90.4, 4604.0], [90.5, 4689.0], [90.6, 4753.0], [90.7, 4843.0], [90.8, 4972.0], [90.9, 5201.0], [91.0, 5217.0], [91.1, 5483.0], [91.2, 5704.0], [91.3, 5922.0], [91.4, 6457.0], [91.5, 6486.0], [91.6, 6526.0], [91.7, 6541.0], [91.8, 6573.0], [91.9, 6619.0], [92.0, 6634.0], [92.1, 6674.0], [92.2, 6677.0], [92.3, 6723.0], [92.4, 6745.0], [92.5, 6794.0], [92.6, 6796.0], [92.7, 6831.0], [92.8, 6846.0], [92.9, 6922.0], [93.0, 6944.0], [93.1, 7283.0], [93.2, 7319.0], [93.3, 7428.0], [93.4, 7518.0], [93.5, 7644.0], [93.6, 7717.0], [93.7, 7813.0], [93.8, 7873.0], [93.9, 7888.0], [94.0, 8084.0], [94.1, 8184.0], [94.2, 8213.0], [94.3, 8275.0], [94.4, 8404.0], [94.5, 8478.0], [94.6, 8545.0], [94.7, 8632.0], [94.8, 8695.0], [94.9, 8731.0], [95.0, 8779.0], [95.1, 8783.0], [95.2, 8792.0], [95.3, 8858.0], [95.4, 8862.0], [95.5, 8866.0], [95.6, 8882.0], [95.7, 8907.0], [95.8, 8971.0], [95.9, 9005.0], [96.0, 9012.0], [96.1, 9039.0], [96.2, 9093.0], [96.3, 9131.0], [96.4, 9158.0], [96.5, 9183.0], [96.6, 9222.0], [96.7, 9227.0], [96.8, 9497.0], [96.9, 9627.0], [97.0, 9846.0], [97.1, 11151.0], [97.2, 11821.0], [97.3, 11912.0], [97.4, 11943.0], [97.5, 12549.0], [97.6, 12621.0], [97.7, 13399.0], [97.8, 13719.0], [97.9, 13792.0], [98.0, 13820.0], [98.1, 15924.0], [98.2, 15984.0], [98.3, 16162.0], [98.4, 21840.0], [98.5, 22051.0], [98.6, 22219.0], [98.7, 22285.0], [98.8, 22325.0], [98.9, 22418.0], [99.0, 22560.0], [99.1, 22977.0], [99.2, 22996.0], [99.3, 23123.0], [99.4, 23225.0], [99.5, 23293.0], [99.6, 23464.0], [99.7, 27853.0], [99.8, 28094.0], [99.9, 28876.0], [100.0, 29371.0]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 94.0, "series": [{"data": [[400.0, 2.0], [500.0, 7.0], [600.0, 23.0], [700.0, 32.0], [800.0, 24.0], [900.0, 38.0], [1000.0, 50.0], [1100.0, 72.0], [1200.0, 74.0], [1300.0, 76.0], [1400.0, 76.0], [1500.0, 52.0], [1600.0, 55.0], [1700.0, 51.0], [1800.0, 78.0], [1900.0, 74.0], [2000.0, 94.0], [2100.0, 64.0], [2200.0, 55.0], [2300.0, 38.0], [2400.0, 28.0], [2500.0, 28.0], [2600.0, 15.0], [2800.0, 10.0], [2700.0, 10.0], [2900.0, 7.0], [3000.0, 5.0], [3100.0, 3.0], [3300.0, 6.0], [3200.0, 9.0], [3400.0, 4.0], [3500.0, 4.0], [3600.0, 5.0], [3700.0, 3.0], [3800.0, 1.0], [3900.0, 4.0], [4000.0, 3.0], [4200.0, 3.0], [4100.0, 2.0], [4300.0, 3.0], [4600.0, 3.0], [4800.0, 1.0], [4700.0, 1.0], [4900.0, 2.0], [5200.0, 2.0], [5400.0, 2.0], [5700.0, 1.0], [5900.0, 1.0], [6600.0, 5.0], [6400.0, 3.0], [6500.0, 4.0], [6700.0, 5.0], [6900.0, 2.0], [6800.0, 3.0], [7100.0, 1.0], [7200.0, 1.0], [7300.0, 1.0], [7400.0, 2.0], [7500.0, 1.0], [7600.0, 1.0], [7800.0, 4.0], [7700.0, 1.0], [7900.0, 1.0], [8000.0, 1.0], [8100.0, 1.0], [8700.0, 6.0], [8200.0, 3.0], [8600.0, 2.0], [8500.0, 2.0], [8400.0, 2.0], [8800.0, 5.0], [9000.0, 6.0], [8900.0, 2.0], [9100.0, 4.0], [9200.0, 2.0], [9600.0, 1.0], [9400.0, 1.0], [9500.0, 1.0], [9800.0, 1.0], [11100.0, 1.0], [11700.0, 1.0], [11900.0, 2.0], [11800.0, 1.0], [12500.0, 2.0], [12600.0, 1.0], [13300.0, 1.0], [13600.0, 1.0], [13700.0, 2.0], [13800.0, 1.0], [15800.0, 1.0], [16100.0, 1.0], [15900.0, 2.0], [22200.0, 2.0], [22300.0, 2.0], [22000.0, 2.0], [22400.0, 1.0], [22500.0, 1.0], [21800.0, 1.0], [22900.0, 2.0], [23200.0, 3.0], [22600.0, 1.0], [23400.0, 1.0], [23100.0, 1.0], [23700.0, 1.0], [27800.0, 1.0], [28000.0, 1.0], [29300.0, 1.0], [28800.0, 1.0]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 29300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1195.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 113.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1195.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.104918032786884, "minX": 1.76835372E12, "maxY": 20.0, "series": [{"data": [[1.76835384E12, 20.0], [1.76835372E12, 11.104918032786884], [1.7683539E12, 18.961538461538463], [1.76835378E12, 19.713592233009706]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7683539E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 975.0769230769231, "minX": 1.0, "maxY": 11880.0, "series": [{"data": [[2.0, 5701.4], [8.0, 1002.3703703703704], [9.0, 1118.3214285714287], [10.0, 1437.703703703704], [11.0, 1368.1071428571427], [3.0, 2171.5], [12.0, 1367.6521739130433], [13.0, 1690.6923076923078], [14.0, 1539.9333333333332], [15.0, 1660.7096774193549], [1.0, 11880.0], [4.0, 2203.5], [16.0, 1884.5], [17.0, 1986.3478260869567], [18.0, 1925.4117647058822], [19.0, 2015.7857142857144], [5.0, 2409.1249999999995], [20.0, 3075.186348862406], [6.0, 2498.25], [7.0, 975.0769230769231]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}, {"data": [[17.703422053231918, 2666.699619771865]], "isOverall": false, "label": "/api/tesda/cities-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 712.8333333333334, "minX": 1.76835372E12, "maxY": 4121966.4166666665, "series": [{"data": [[1.76835384E12, 4121966.4166666665], [1.76835372E12, 2987805.8833333333], [1.7683539E12, 1730918.45], [1.76835378E12, 4081085.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76835384E12, 1629.3333333333333], [1.76835372E12, 1194.5833333333333], [1.7683539E12, 712.8333333333334], [1.76835378E12, 1613.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7683539E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1378.0000000000002, "minX": 1.76835372E12, "maxY": 3983.714285714286, "series": [{"data": [[1.76835384E12, 3028.745192307691], [1.76835372E12, 1378.0000000000002], [1.7683539E12, 3983.714285714286], [1.76835378E12, 2673.364077669903]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7683539E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1020.7967213114753, "minX": 1.76835372E12, "maxY": 3488.9450549450557, "series": [{"data": [[1.76835384E12, 2676.0865384615363], [1.76835372E12, 1020.7967213114753], [1.7683539E12, 3488.9450549450557], [1.76835378E12, 2248.51941747573]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7683539E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.085245901639334, "minX": 1.76835372E12, "maxY": 613.1947115384609, "series": [{"data": [[1.76835384E12, 613.1947115384609], [1.76835372E12, 8.085245901639334], [1.7683539E12, 237.72527472527474], [1.76835378E12, 412.07281553398064]], "isOverall": false, "label": "/api/tesda/cities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7683539E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1190.0, "minX": 1.76835372E12, "maxY": 29371.0, "series": [{"data": [[1.76835384E12, 29371.0], [1.76835372E12, 2958.0], [1.7683539E12, 12621.0], [1.76835378E12, 15984.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76835384E12, 6473.0], [1.76835372E12, 1190.0], [1.7683539E12, 7873.0], [1.76835378E12, 6457.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76835384E12, 28069.9], [1.76835372E12, 2792.0000000000005], [1.7683539E12, 11708.600000000006], [1.76835378E12, 13784.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76835384E12, 29371.0], [1.76835372E12, 2958.0], [1.7683539E12, 12621.0], [1.76835378E12, 15984.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76835384E12, 7680.5], [1.76835372E12, 1986.5], [1.7683539E12, 8991.5], [1.76835378E12, 8794.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76835384E12, 29098.75], [1.76835372E12, 2906.85], [1.7683539E12, 12581.4], [1.76835378E12, 14793.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7683539E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1382.0, "minX": 1.0, "maxY": 13719.0, "series": [{"data": [[1.0, 2339.0], [2.0, 1834.5], [8.0, 2726.0], [4.0, 7663.5], [17.0, 11943.0], [9.0, 8213.0], [5.0, 8049.0], [3.0, 2809.0], [6.0, 13719.0], [12.0, 9041.0], [14.0, 6651.5], [7.0, 6543.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1466.0], [2.0, 2949.5], [9.0, 1382.0], [10.0, 1462.5], [11.0, 1881.5], [12.0, 1678.0], [3.0, 1650.0], [13.0, 1807.0], [14.0, 2050.5], [15.0, 2036.0], [4.0, 1919.0], [16.0, 1772.0], [1.0, 2806.0], [17.0, 3618.0], [18.0, 2460.5], [5.0, 1826.0], [20.0, 3271.5], [6.0, 1761.0], [7.0, 1854.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 987.0, "minX": 1.0, "maxY": 13465.0, "series": [{"data": [[1.0, 2152.0], [2.0, 1719.5], [8.0, 2510.5], [4.0, 7517.5], [17.0, 11834.0], [9.0, 7962.0], [5.0, 7888.0], [3.0, 2500.0], [6.0, 13465.0], [12.0, 8769.0], [14.0, 6127.5], [7.0, 6408.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1079.5], [2.0, 2630.0], [9.0, 989.5], [10.0, 1029.5], [11.0, 1567.0], [12.0, 987.0], [3.0, 1269.5], [13.0, 1158.0], [14.0, 1631.5], [15.0, 1678.0], [4.0, 1521.0], [16.0, 1341.0], [1.0, 2344.0], [17.0, 2952.0], [18.0, 1738.5], [5.0, 1510.0], [20.0, 2636.5], [6.0, 1322.0], [7.0, 1246.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.7, "minX": 1.76835372E12, "maxY": 6.933333333333334, "series": [{"data": [[1.76835384E12, 6.933333333333334], [1.76835372E12, 5.366666666666666], [1.7683539E12, 2.7], [1.76835378E12, 6.916666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7683539E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76835372E12, "maxY": 6.433333333333334, "series": [{"data": [[1.76835384E12, 0.5], [1.76835372E12, 0.5], [1.7683539E12, 0.5], [1.76835378E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76835384E12, 6.433333333333334], [1.76835372E12, 4.583333333333333], [1.7683539E12, 2.533333333333333], [1.76835378E12, 6.366666666666666]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7683539E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76835372E12, "maxY": 6.433333333333334, "series": [{"data": [[1.76835384E12, 0.5], [1.76835372E12, 0.5], [1.7683539E12, 0.5], [1.76835378E12, 0.5]], "isOverall": false, "label": "/api/tesda/cities-success", "isController": false}, {"data": [[1.76835384E12, 6.433333333333334], [1.76835372E12, 4.583333333333333], [1.7683539E12, 2.533333333333333], [1.76835378E12, 6.366666666666666]], "isOverall": false, "label": "/api/tesda/cities-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7683539E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76835372E12, "maxY": 6.433333333333334, "series": [{"data": [[1.76835384E12, 0.5], [1.76835372E12, 0.5], [1.7683539E12, 0.5], [1.76835378E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76835384E12, 6.433333333333334], [1.76835372E12, 4.583333333333333], [1.7683539E12, 2.533333333333333], [1.76835378E12, 6.366666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7683539E12, "title": "Total Transactions Per Second"}},
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

