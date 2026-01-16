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
        data: {"result": {"minY": 258.0, "minX": 0.0, "maxY": 24560.0, "series": [{"data": [[0.0, 258.0], [0.1, 263.0], [0.2, 263.0], [0.3, 267.0], [0.4, 271.0], [0.5, 272.0], [0.6, 275.0], [0.7, 277.0], [0.8, 277.0], [0.9, 277.0], [1.0, 278.0], [1.1, 285.0], [1.2, 292.0], [1.3, 302.0], [1.4, 305.0], [1.5, 325.0], [1.6, 326.0], [1.7, 396.0], [1.8, 413.0], [1.9, 429.0], [2.0, 436.0], [2.1, 437.0], [2.2, 442.0], [2.3, 443.0], [2.4, 447.0], [2.5, 464.0], [2.6, 468.0], [2.7, 488.0], [2.8, 495.0], [2.9, 503.0], [3.0, 511.0], [3.1, 522.0], [3.2, 524.0], [3.3, 528.0], [3.4, 531.0], [3.5, 534.0], [3.6, 535.0], [3.7, 537.0], [3.8, 550.0], [3.9, 550.0], [4.0, 563.0], [4.1, 568.0], [4.2, 575.0], [4.3, 576.0], [4.4, 583.0], [4.5, 593.0], [4.6, 594.0], [4.7, 605.0], [4.8, 612.0], [4.9, 613.0], [5.0, 623.0], [5.1, 627.0], [5.2, 639.0], [5.3, 659.0], [5.4, 666.0], [5.5, 666.0], [5.6, 669.0], [5.7, 672.0], [5.8, 674.0], [5.9, 680.0], [6.0, 683.0], [6.1, 685.0], [6.2, 695.0], [6.3, 702.0], [6.4, 706.0], [6.5, 707.0], [6.6, 714.0], [6.7, 715.0], [6.8, 724.0], [6.9, 729.0], [7.0, 738.0], [7.1, 740.0], [7.2, 744.0], [7.3, 750.0], [7.4, 752.0], [7.5, 760.0], [7.6, 764.0], [7.7, 777.0], [7.8, 777.0], [7.9, 786.0], [8.0, 790.0], [8.1, 796.0], [8.2, 796.0], [8.3, 796.0], [8.4, 798.0], [8.5, 800.0], [8.6, 800.0], [8.7, 805.0], [8.8, 812.0], [8.9, 816.0], [9.0, 818.0], [9.1, 823.0], [9.2, 831.0], [9.3, 840.0], [9.4, 840.0], [9.5, 846.0], [9.6, 846.0], [9.7, 848.0], [9.8, 849.0], [9.9, 851.0], [10.0, 853.0], [10.1, 865.0], [10.2, 866.0], [10.3, 868.0], [10.4, 872.0], [10.5, 873.0], [10.6, 873.0], [10.7, 878.0], [10.8, 878.0], [10.9, 882.0], [11.0, 886.0], [11.1, 886.0], [11.2, 889.0], [11.3, 892.0], [11.4, 893.0], [11.5, 898.0], [11.6, 900.0], [11.7, 901.0], [11.8, 906.0], [11.9, 911.0], [12.0, 912.0], [12.1, 916.0], [12.2, 922.0], [12.3, 924.0], [12.4, 931.0], [12.5, 931.0], [12.6, 935.0], [12.7, 940.0], [12.8, 941.0], [12.9, 943.0], [13.0, 947.0], [13.1, 950.0], [13.2, 952.0], [13.3, 962.0], [13.4, 965.0], [13.5, 965.0], [13.6, 971.0], [13.7, 974.0], [13.8, 977.0], [13.9, 982.0], [14.0, 988.0], [14.1, 989.0], [14.2, 992.0], [14.3, 993.0], [14.4, 996.0], [14.5, 996.0], [14.6, 997.0], [14.7, 999.0], [14.8, 1001.0], [14.9, 1003.0], [15.0, 1003.0], [15.1, 1012.0], [15.2, 1014.0], [15.3, 1014.0], [15.4, 1014.0], [15.5, 1016.0], [15.6, 1018.0], [15.7, 1020.0], [15.8, 1021.0], [15.9, 1022.0], [16.0, 1023.0], [16.1, 1027.0], [16.2, 1029.0], [16.3, 1029.0], [16.4, 1030.0], [16.5, 1032.0], [16.6, 1033.0], [16.7, 1036.0], [16.8, 1037.0], [16.9, 1042.0], [17.0, 1043.0], [17.1, 1044.0], [17.2, 1044.0], [17.3, 1052.0], [17.4, 1053.0], [17.5, 1055.0], [17.6, 1055.0], [17.7, 1056.0], [17.8, 1056.0], [17.9, 1057.0], [18.0, 1059.0], [18.1, 1069.0], [18.2, 1074.0], [18.3, 1076.0], [18.4, 1082.0], [18.5, 1082.0], [18.6, 1090.0], [18.7, 1091.0], [18.8, 1094.0], [18.9, 1095.0], [19.0, 1099.0], [19.1, 1102.0], [19.2, 1105.0], [19.3, 1106.0], [19.4, 1115.0], [19.5, 1117.0], [19.6, 1124.0], [19.7, 1128.0], [19.8, 1129.0], [19.9, 1130.0], [20.0, 1134.0], [20.1, 1135.0], [20.2, 1137.0], [20.3, 1138.0], [20.4, 1141.0], [20.5, 1141.0], [20.6, 1143.0], [20.7, 1144.0], [20.8, 1147.0], [20.9, 1151.0], [21.0, 1153.0], [21.1, 1153.0], [21.2, 1159.0], [21.3, 1159.0], [21.4, 1162.0], [21.5, 1163.0], [21.6, 1164.0], [21.7, 1167.0], [21.8, 1173.0], [21.9, 1176.0], [22.0, 1177.0], [22.1, 1177.0], [22.2, 1179.0], [22.3, 1180.0], [22.4, 1180.0], [22.5, 1183.0], [22.6, 1183.0], [22.7, 1184.0], [22.8, 1184.0], [22.9, 1188.0], [23.0, 1189.0], [23.1, 1191.0], [23.2, 1194.0], [23.3, 1196.0], [23.4, 1197.0], [23.5, 1200.0], [23.6, 1201.0], [23.7, 1203.0], [23.8, 1205.0], [23.9, 1211.0], [24.0, 1211.0], [24.1, 1212.0], [24.2, 1212.0], [24.3, 1214.0], [24.4, 1218.0], [24.5, 1220.0], [24.6, 1224.0], [24.7, 1226.0], [24.8, 1227.0], [24.9, 1228.0], [25.0, 1230.0], [25.1, 1231.0], [25.2, 1234.0], [25.3, 1236.0], [25.4, 1237.0], [25.5, 1240.0], [25.6, 1245.0], [25.7, 1246.0], [25.8, 1247.0], [25.9, 1247.0], [26.0, 1248.0], [26.1, 1250.0], [26.2, 1251.0], [26.3, 1253.0], [26.4, 1256.0], [26.5, 1257.0], [26.6, 1258.0], [26.7, 1260.0], [26.8, 1262.0], [26.9, 1263.0], [27.0, 1269.0], [27.1, 1270.0], [27.2, 1273.0], [27.3, 1274.0], [27.4, 1279.0], [27.5, 1280.0], [27.6, 1283.0], [27.7, 1284.0], [27.8, 1285.0], [27.9, 1286.0], [28.0, 1286.0], [28.1, 1287.0], [28.2, 1289.0], [28.3, 1291.0], [28.4, 1292.0], [28.5, 1292.0], [28.6, 1293.0], [28.7, 1294.0], [28.8, 1295.0], [28.9, 1297.0], [29.0, 1298.0], [29.1, 1300.0], [29.2, 1300.0], [29.3, 1304.0], [29.4, 1304.0], [29.5, 1305.0], [29.6, 1305.0], [29.7, 1307.0], [29.8, 1308.0], [29.9, 1309.0], [30.0, 1309.0], [30.1, 1310.0], [30.2, 1311.0], [30.3, 1314.0], [30.4, 1316.0], [30.5, 1318.0], [30.6, 1319.0], [30.7, 1320.0], [30.8, 1321.0], [30.9, 1323.0], [31.0, 1323.0], [31.1, 1326.0], [31.2, 1326.0], [31.3, 1326.0], [31.4, 1327.0], [31.5, 1329.0], [31.6, 1330.0], [31.7, 1334.0], [31.8, 1334.0], [31.9, 1336.0], [32.0, 1336.0], [32.1, 1337.0], [32.2, 1337.0], [32.3, 1337.0], [32.4, 1337.0], [32.5, 1341.0], [32.6, 1342.0], [32.7, 1343.0], [32.8, 1344.0], [32.9, 1346.0], [33.0, 1347.0], [33.1, 1348.0], [33.2, 1351.0], [33.3, 1352.0], [33.4, 1355.0], [33.5, 1359.0], [33.6, 1359.0], [33.7, 1363.0], [33.8, 1364.0], [33.9, 1365.0], [34.0, 1368.0], [34.1, 1369.0], [34.2, 1371.0], [34.3, 1371.0], [34.4, 1372.0], [34.5, 1372.0], [34.6, 1373.0], [34.7, 1373.0], [34.8, 1376.0], [34.9, 1376.0], [35.0, 1380.0], [35.1, 1381.0], [35.2, 1383.0], [35.3, 1383.0], [35.4, 1385.0], [35.5, 1385.0], [35.6, 1387.0], [35.7, 1387.0], [35.8, 1388.0], [35.9, 1389.0], [36.0, 1390.0], [36.1, 1390.0], [36.2, 1391.0], [36.3, 1396.0], [36.4, 1396.0], [36.5, 1397.0], [36.6, 1398.0], [36.7, 1400.0], [36.8, 1401.0], [36.9, 1402.0], [37.0, 1402.0], [37.1, 1402.0], [37.2, 1404.0], [37.3, 1406.0], [37.4, 1406.0], [37.5, 1408.0], [37.6, 1410.0], [37.7, 1412.0], [37.8, 1414.0], [37.9, 1416.0], [38.0, 1417.0], [38.1, 1419.0], [38.2, 1419.0], [38.3, 1421.0], [38.4, 1422.0], [38.5, 1422.0], [38.6, 1423.0], [38.7, 1424.0], [38.8, 1424.0], [38.9, 1426.0], [39.0, 1427.0], [39.1, 1428.0], [39.2, 1432.0], [39.3, 1433.0], [39.4, 1435.0], [39.5, 1435.0], [39.6, 1438.0], [39.7, 1440.0], [39.8, 1444.0], [39.9, 1444.0], [40.0, 1446.0], [40.1, 1447.0], [40.2, 1449.0], [40.3, 1451.0], [40.4, 1451.0], [40.5, 1452.0], [40.6, 1453.0], [40.7, 1454.0], [40.8, 1456.0], [40.9, 1457.0], [41.0, 1460.0], [41.1, 1460.0], [41.2, 1460.0], [41.3, 1461.0], [41.4, 1462.0], [41.5, 1462.0], [41.6, 1462.0], [41.7, 1464.0], [41.8, 1466.0], [41.9, 1466.0], [42.0, 1466.0], [42.1, 1467.0], [42.2, 1468.0], [42.3, 1469.0], [42.4, 1469.0], [42.5, 1471.0], [42.6, 1473.0], [42.7, 1474.0], [42.8, 1475.0], [42.9, 1476.0], [43.0, 1476.0], [43.1, 1478.0], [43.2, 1478.0], [43.3, 1481.0], [43.4, 1481.0], [43.5, 1485.0], [43.6, 1486.0], [43.7, 1488.0], [43.8, 1489.0], [43.9, 1489.0], [44.0, 1490.0], [44.1, 1490.0], [44.2, 1493.0], [44.3, 1493.0], [44.4, 1495.0], [44.5, 1499.0], [44.6, 1500.0], [44.7, 1502.0], [44.8, 1502.0], [44.9, 1505.0], [45.0, 1507.0], [45.1, 1509.0], [45.2, 1509.0], [45.3, 1510.0], [45.4, 1512.0], [45.5, 1512.0], [45.6, 1513.0], [45.7, 1516.0], [45.8, 1517.0], [45.9, 1521.0], [46.0, 1523.0], [46.1, 1523.0], [46.2, 1523.0], [46.3, 1526.0], [46.4, 1527.0], [46.5, 1532.0], [46.6, 1534.0], [46.7, 1536.0], [46.8, 1537.0], [46.9, 1538.0], [47.0, 1542.0], [47.1, 1544.0], [47.2, 1545.0], [47.3, 1547.0], [47.4, 1549.0], [47.5, 1549.0], [47.6, 1550.0], [47.7, 1551.0], [47.8, 1551.0], [47.9, 1552.0], [48.0, 1554.0], [48.1, 1554.0], [48.2, 1556.0], [48.3, 1557.0], [48.4, 1558.0], [48.5, 1560.0], [48.6, 1561.0], [48.7, 1563.0], [48.8, 1565.0], [48.9, 1567.0], [49.0, 1567.0], [49.1, 1567.0], [49.2, 1575.0], [49.3, 1576.0], [49.4, 1579.0], [49.5, 1580.0], [49.6, 1582.0], [49.7, 1583.0], [49.8, 1584.0], [49.9, 1584.0], [50.0, 1596.0], [50.1, 1598.0], [50.2, 1604.0], [50.3, 1610.0], [50.4, 1611.0], [50.5, 1613.0], [50.6, 1614.0], [50.7, 1617.0], [50.8, 1618.0], [50.9, 1622.0], [51.0, 1624.0], [51.1, 1628.0], [51.2, 1628.0], [51.3, 1629.0], [51.4, 1632.0], [51.5, 1633.0], [51.6, 1634.0], [51.7, 1636.0], [51.8, 1636.0], [51.9, 1644.0], [52.0, 1645.0], [52.1, 1646.0], [52.2, 1648.0], [52.3, 1652.0], [52.4, 1653.0], [52.5, 1654.0], [52.6, 1654.0], [52.7, 1658.0], [52.8, 1661.0], [52.9, 1664.0], [53.0, 1666.0], [53.1, 1672.0], [53.2, 1672.0], [53.3, 1673.0], [53.4, 1677.0], [53.5, 1678.0], [53.6, 1680.0], [53.7, 1681.0], [53.8, 1685.0], [53.9, 1687.0], [54.0, 1692.0], [54.1, 1696.0], [54.2, 1702.0], [54.3, 1705.0], [54.4, 1715.0], [54.5, 1717.0], [54.6, 1717.0], [54.7, 1719.0], [54.8, 1719.0], [54.9, 1720.0], [55.0, 1724.0], [55.1, 1725.0], [55.2, 1725.0], [55.3, 1729.0], [55.4, 1733.0], [55.5, 1736.0], [55.6, 1738.0], [55.7, 1738.0], [55.8, 1742.0], [55.9, 1743.0], [56.0, 1743.0], [56.1, 1746.0], [56.2, 1754.0], [56.3, 1759.0], [56.4, 1759.0], [56.5, 1762.0], [56.6, 1763.0], [56.7, 1765.0], [56.8, 1767.0], [56.9, 1768.0], [57.0, 1772.0], [57.1, 1772.0], [57.2, 1774.0], [57.3, 1777.0], [57.4, 1778.0], [57.5, 1782.0], [57.6, 1787.0], [57.7, 1790.0], [57.8, 1793.0], [57.9, 1797.0], [58.0, 1803.0], [58.1, 1810.0], [58.2, 1810.0], [58.3, 1811.0], [58.4, 1814.0], [58.5, 1815.0], [58.6, 1817.0], [58.7, 1820.0], [58.8, 1820.0], [58.9, 1822.0], [59.0, 1825.0], [59.1, 1826.0], [59.2, 1829.0], [59.3, 1833.0], [59.4, 1837.0], [59.5, 1841.0], [59.6, 1842.0], [59.7, 1845.0], [59.8, 1845.0], [59.9, 1851.0], [60.0, 1852.0], [60.1, 1854.0], [60.2, 1854.0], [60.3, 1857.0], [60.4, 1859.0], [60.5, 1861.0], [60.6, 1861.0], [60.7, 1867.0], [60.8, 1868.0], [60.9, 1869.0], [61.0, 1872.0], [61.1, 1873.0], [61.2, 1876.0], [61.3, 1878.0], [61.4, 1879.0], [61.5, 1882.0], [61.6, 1883.0], [61.7, 1884.0], [61.8, 1886.0], [61.9, 1886.0], [62.0, 1891.0], [62.1, 1892.0], [62.2, 1894.0], [62.3, 1895.0], [62.4, 1896.0], [62.5, 1897.0], [62.6, 1900.0], [62.7, 1901.0], [62.8, 1905.0], [62.9, 1905.0], [63.0, 1915.0], [63.1, 1916.0], [63.2, 1920.0], [63.3, 1921.0], [63.4, 1926.0], [63.5, 1928.0], [63.6, 1929.0], [63.7, 1930.0], [63.8, 1931.0], [63.9, 1934.0], [64.0, 1936.0], [64.1, 1939.0], [64.2, 1942.0], [64.3, 1942.0], [64.4, 1944.0], [64.5, 1948.0], [64.6, 1949.0], [64.7, 1954.0], [64.8, 1955.0], [64.9, 1959.0], [65.0, 1960.0], [65.1, 1962.0], [65.2, 1964.0], [65.3, 1967.0], [65.4, 1968.0], [65.5, 1973.0], [65.6, 1973.0], [65.7, 1978.0], [65.8, 1980.0], [65.9, 1986.0], [66.0, 1990.0], [66.1, 1995.0], [66.2, 1996.0], [66.3, 1997.0], [66.4, 2005.0], [66.5, 2007.0], [66.6, 2008.0], [66.7, 2010.0], [66.8, 2010.0], [66.9, 2012.0], [67.0, 2013.0], [67.1, 2016.0], [67.2, 2017.0], [67.3, 2022.0], [67.4, 2023.0], [67.5, 2029.0], [67.6, 2032.0], [67.7, 2040.0], [67.8, 2040.0], [67.9, 2041.0], [68.0, 2043.0], [68.1, 2043.0], [68.2, 2044.0], [68.3, 2046.0], [68.4, 2047.0], [68.5, 2048.0], [68.6, 2053.0], [68.7, 2053.0], [68.8, 2055.0], [68.9, 2057.0], [69.0, 2061.0], [69.1, 2061.0], [69.2, 2062.0], [69.3, 2063.0], [69.4, 2066.0], [69.5, 2066.0], [69.6, 2075.0], [69.7, 2077.0], [69.8, 2084.0], [69.9, 2085.0], [70.0, 2086.0], [70.1, 2089.0], [70.2, 2091.0], [70.3, 2093.0], [70.4, 2094.0], [70.5, 2094.0], [70.6, 2095.0], [70.7, 2096.0], [70.8, 2099.0], [70.9, 2099.0], [71.0, 2104.0], [71.1, 2104.0], [71.2, 2107.0], [71.3, 2107.0], [71.4, 2110.0], [71.5, 2112.0], [71.6, 2112.0], [71.7, 2114.0], [71.8, 2115.0], [71.9, 2116.0], [72.0, 2117.0], [72.1, 2119.0], [72.2, 2123.0], [72.3, 2127.0], [72.4, 2127.0], [72.5, 2129.0], [72.6, 2133.0], [72.7, 2134.0], [72.8, 2134.0], [72.9, 2137.0], [73.0, 2138.0], [73.1, 2141.0], [73.2, 2141.0], [73.3, 2144.0], [73.4, 2144.0], [73.5, 2147.0], [73.6, 2149.0], [73.7, 2151.0], [73.8, 2152.0], [73.9, 2156.0], [74.0, 2158.0], [74.1, 2163.0], [74.2, 2164.0], [74.3, 2164.0], [74.4, 2166.0], [74.5, 2167.0], [74.6, 2170.0], [74.7, 2174.0], [74.8, 2175.0], [74.9, 2182.0], [75.0, 2183.0], [75.1, 2183.0], [75.2, 2187.0], [75.3, 2188.0], [75.4, 2194.0], [75.5, 2195.0], [75.6, 2203.0], [75.7, 2204.0], [75.8, 2206.0], [75.9, 2208.0], [76.0, 2210.0], [76.1, 2212.0], [76.2, 2220.0], [76.3, 2223.0], [76.4, 2230.0], [76.5, 2232.0], [76.6, 2238.0], [76.7, 2241.0], [76.8, 2244.0], [76.9, 2246.0], [77.0, 2251.0], [77.1, 2251.0], [77.2, 2254.0], [77.3, 2254.0], [77.4, 2263.0], [77.5, 2264.0], [77.6, 2265.0], [77.7, 2268.0], [77.8, 2273.0], [77.9, 2274.0], [78.0, 2276.0], [78.1, 2278.0], [78.2, 2280.0], [78.3, 2282.0], [78.4, 2288.0], [78.5, 2289.0], [78.6, 2295.0], [78.7, 2300.0], [78.8, 2302.0], [78.9, 2307.0], [79.0, 2308.0], [79.1, 2310.0], [79.2, 2312.0], [79.3, 2313.0], [79.4, 2314.0], [79.5, 2319.0], [79.6, 2321.0], [79.7, 2325.0], [79.8, 2329.0], [79.9, 2332.0], [80.0, 2334.0], [80.1, 2336.0], [80.2, 2338.0], [80.3, 2341.0], [80.4, 2343.0], [80.5, 2347.0], [80.6, 2349.0], [80.7, 2356.0], [80.8, 2358.0], [80.9, 2362.0], [81.0, 2365.0], [81.1, 2370.0], [81.2, 2372.0], [81.3, 2375.0], [81.4, 2376.0], [81.5, 2378.0], [81.6, 2379.0], [81.7, 2387.0], [81.8, 2390.0], [81.9, 2394.0], [82.0, 2395.0], [82.1, 2405.0], [82.2, 2407.0], [82.3, 2412.0], [82.4, 2418.0], [82.5, 2422.0], [82.6, 2426.0], [82.7, 2428.0], [82.8, 2431.0], [82.9, 2431.0], [83.0, 2436.0], [83.1, 2441.0], [83.2, 2455.0], [83.3, 2458.0], [83.4, 2459.0], [83.5, 2463.0], [83.6, 2472.0], [83.7, 2472.0], [83.8, 2478.0], [83.9, 2485.0], [84.0, 2499.0], [84.1, 2500.0], [84.2, 2502.0], [84.3, 2503.0], [84.4, 2506.0], [84.5, 2508.0], [84.6, 2511.0], [84.7, 2512.0], [84.8, 2513.0], [84.9, 2514.0], [85.0, 2524.0], [85.1, 2527.0], [85.2, 2536.0], [85.3, 2538.0], [85.4, 2548.0], [85.5, 2557.0], [85.6, 2569.0], [85.7, 2576.0], [85.8, 2578.0], [85.9, 2580.0], [86.0, 2582.0], [86.1, 2586.0], [86.2, 2587.0], [86.3, 2604.0], [86.4, 2605.0], [86.5, 2606.0], [86.6, 2616.0], [86.7, 2644.0], [86.8, 2665.0], [86.9, 2667.0], [87.0, 2678.0], [87.1, 2689.0], [87.2, 2695.0], [87.3, 2711.0], [87.4, 2723.0], [87.5, 2727.0], [87.6, 2727.0], [87.7, 2739.0], [87.8, 2741.0], [87.9, 2747.0], [88.0, 2750.0], [88.1, 2754.0], [88.2, 2757.0], [88.3, 2773.0], [88.4, 2788.0], [88.5, 2794.0], [88.6, 2797.0], [88.7, 2804.0], [88.8, 2812.0], [88.9, 2826.0], [89.0, 2830.0], [89.1, 2839.0], [89.2, 2840.0], [89.3, 2845.0], [89.4, 2852.0], [89.5, 2866.0], [89.6, 2876.0], [89.7, 2881.0], [89.8, 2892.0], [89.9, 2894.0], [90.0, 2896.0], [90.1, 2902.0], [90.2, 2928.0], [90.3, 2942.0], [90.4, 2946.0], [90.5, 2953.0], [90.6, 2968.0], [90.7, 2970.0], [90.8, 2981.0], [90.9, 2985.0], [91.0, 3001.0], [91.1, 3012.0], [91.2, 3030.0], [91.3, 3038.0], [91.4, 3070.0], [91.5, 3078.0], [91.6, 3084.0], [91.7, 3085.0], [91.8, 3100.0], [91.9, 3119.0], [92.0, 3181.0], [92.1, 3210.0], [92.2, 3226.0], [92.3, 3232.0], [92.4, 3249.0], [92.5, 3270.0], [92.6, 3293.0], [92.7, 3310.0], [92.8, 3330.0], [92.9, 3345.0], [93.0, 3368.0], [93.1, 3381.0], [93.2, 3390.0], [93.3, 3403.0], [93.4, 3421.0], [93.5, 3511.0], [93.6, 3511.0], [93.7, 3542.0], [93.8, 3571.0], [93.9, 3671.0], [94.0, 3689.0], [94.1, 3730.0], [94.2, 3744.0], [94.3, 3773.0], [94.4, 3780.0], [94.5, 3795.0], [94.6, 3802.0], [94.7, 3834.0], [94.8, 3850.0], [94.9, 3933.0], [95.0, 3937.0], [95.1, 3979.0], [95.2, 4012.0], [95.3, 4019.0], [95.4, 4033.0], [95.5, 4090.0], [95.6, 4105.0], [95.7, 4248.0], [95.8, 4335.0], [95.9, 4475.0], [96.0, 4596.0], [96.1, 4672.0], [96.2, 4677.0], [96.3, 4721.0], [96.4, 4728.0], [96.5, 4847.0], [96.6, 4925.0], [96.7, 4960.0], [96.8, 6418.0], [96.9, 9253.0], [97.0, 21500.0], [97.1, 21644.0], [97.2, 21746.0], [97.3, 21748.0], [97.4, 21969.0], [97.5, 22124.0], [97.6, 22208.0], [97.7, 22219.0], [97.8, 22285.0], [97.9, 22331.0], [98.0, 22491.0], [98.1, 22496.0], [98.2, 22512.0], [98.3, 22547.0], [98.4, 22640.0], [98.5, 22645.0], [98.6, 22728.0], [98.7, 22750.0], [98.8, 22806.0], [98.9, 22812.0], [99.0, 22849.0], [99.1, 22872.0], [99.2, 22922.0], [99.3, 22936.0], [99.4, 23086.0], [99.5, 23184.0], [99.6, 23541.0], [99.7, 23893.0], [99.8, 24324.0], [99.9, 24353.0], [100.0, 24560.0]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 117.0, "series": [{"data": [[600.0, 24.0], [700.0, 33.0], [800.0, 46.0], [900.0, 47.0], [1000.0, 64.0], [1100.0, 66.0], [1200.0, 83.0], [1300.0, 113.0], [1400.0, 117.0], [1500.0, 83.0], [1600.0, 60.0], [1700.0, 56.0], [1800.0, 69.0], [1900.0, 56.0], [2000.0, 68.0], [2100.0, 69.0], [2200.0, 46.0], [2300.0, 50.0], [2400.0, 30.0], [2500.0, 32.0], [2600.0, 16.0], [2800.0, 21.0], [2700.0, 20.0], [2900.0, 14.0], [3000.0, 12.0], [3100.0, 4.0], [3200.0, 9.0], [3300.0, 9.0], [3400.0, 3.0], [3500.0, 5.0], [3700.0, 8.0], [3600.0, 3.0], [3800.0, 5.0], [3900.0, 4.0], [4000.0, 6.0], [4300.0, 2.0], [4100.0, 2.0], [4200.0, 1.0], [4500.0, 1.0], [4600.0, 3.0], [4400.0, 1.0], [4800.0, 2.0], [4700.0, 3.0], [4900.0, 2.0], [5500.0, 1.0], [6400.0, 1.0], [9200.0, 1.0], [21500.0, 1.0], [21300.0, 1.0], [22100.0, 2.0], [21700.0, 3.0], [21600.0, 2.0], [22200.0, 4.0], [21900.0, 1.0], [22400.0, 4.0], [22500.0, 3.0], [22300.0, 1.0], [22700.0, 3.0], [22800.0, 5.0], [22900.0, 4.0], [23100.0, 1.0], [22600.0, 3.0], [23000.0, 1.0], [23500.0, 1.0], [23200.0, 1.0], [24300.0, 2.0], [23900.0, 1.0], [24500.0, 1.0], [23800.0, 1.0], [200.0, 19.0], [300.0, 7.0], [400.0, 17.0], [500.0, 26.0]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 24.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1390.0, "series": [{"data": [[0.0, 24.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 39.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 33.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1390.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 15.489795918367344, "minX": 1.76834934E12, "maxY": 20.0, "series": [{"data": [[1.76834934E12, 15.489795918367344], [1.76834946E12, 20.0], [1.7683494E12, 20.0], [1.76834952E12, 18.88165680473373]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76834952E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1586.03125, "minX": 1.0, "maxY": 22491.0, "series": [{"data": [[8.0, 3594.1428571428573], [2.0, 21674.0], [9.0, 1589.7777777777778], [10.0, 2198.214285714286], [11.0, 2163.6875], [12.0, 2206.066666666666], [3.0, 21500.0], [13.0, 1758.4799999999998], [14.0, 2753.3478260869565], [15.0, 1616.4137931034484], [16.0, 1586.03125], [4.0, 22491.0], [1.0, 21396.0], [17.0, 2548.0588235294113], [18.0, 2033.8275862068958], [19.0, 2348.727272727273], [20.0, 2339.0560064935044], [5.0, 21748.0], [6.0, 22219.0], [7.0, 1859.0]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}, {"data": [[18.98048452220725, 2372.6460296096884]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 735.15, "minX": 1.76834934E12, "maxY": 5091353.933333334, "series": [{"data": [[1.76834934E12, 2707075.25], [1.76834946E12, 4774141.85], [1.7683494E12, 5091353.933333334], [1.76834952E12, 1669125.8833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76834934E12, 1278.9], [1.76834946E12, 2157.6], [1.7683494E12, 2292.45], [1.76834952E12, 735.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76834952E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2046.2517006802718, "minX": 1.76834934E12, "maxY": 3230.5147928994065, "series": [{"data": [[1.76834934E12, 2046.2517006802718], [1.76834946E12, 2222.1713709677447], [1.7683494E12, 2421.2523719165074], [1.76834952E12, 3230.5147928994065]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76834952E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1626.1935483870961, "minX": 1.76834934E12, "maxY": 2891.863905325442, "series": [{"data": [[1.76834934E12, 1698.2551020408157], [1.76834946E12, 1626.1935483870961], [1.7683494E12, 1924.170777988616], [1.76834952E12, 2891.863905325442]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76834952E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 284.284629981025, "minX": 1.76834934E12, "maxY": 1626.9289940828398, "series": [{"data": [[1.76834934E12, 1011.3741496598641], [1.76834946E12, 511.7620967741936], [1.7683494E12, 284.284629981025], [1.76834952E12, 1626.9289940828398]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76834952E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 258.0, "minX": 1.76834934E12, "maxY": 22750.0, "series": [{"data": [[1.76834934E12, 22750.0], [1.76834946E12, 3210.0], [1.7683494E12, 22512.0], [1.76834952E12, 22491.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76834934E12, 258.0], [1.76834946E12, 619.0], [1.7683494E12, 575.0], [1.76834952E12, 21396.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76834934E12, 19667.900000000045], [1.76834946E12, 1738.9], [1.7683494E12, 3795.8000000000034], [1.76834952E12, 22491.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76834934E12, 22750.0], [1.76834946E12, 3210.0], [1.7683494E12, 22512.0], [1.76834952E12, 22491.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76834934E12, 280.0], [1.76834946E12, 1327.0], [1.7683494E12, 1777.0], [1.76834952E12, 21711.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76834934E12, 22411.2], [1.76834946E12, 2424.599999999999], [1.7683494E12, 12702.749999999987], [1.76834952E12, 22491.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76834952E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 276.0, "minX": 1.0, "maxY": 22640.0, "series": [{"data": [[2.0, 3958.0], [8.0, 276.0], [9.0, 1352.0], [10.0, 1043.0], [11.0, 1362.5], [3.0, 277.0], [13.0, 2122.5], [4.0, 3210.0], [1.0, 21807.5], [17.0, 4677.0], [19.0, 1502.5], [5.0, 2208.0], [6.0, 302.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1558.5], [2.0, 1742.0], [9.0, 1664.0], [10.0, 1284.0], [11.0, 1685.0], [3.0, 1673.0], [12.0, 1507.5], [13.0, 2070.5], [14.0, 1675.0], [15.0, 2341.0], [4.0, 1619.0], [16.0, 2103.0], [1.0, 22640.0], [17.0, 2226.0], [18.0, 2579.5], [19.0, 2587.0], [5.0, 1710.0], [6.0, 1440.0], [7.0, 1627.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 275.0, "minX": 1.0, "maxY": 21807.5, "series": [{"data": [[2.0, 3958.0], [8.0, 275.0], [9.0, 1352.0], [10.0, 1043.0], [11.0, 1362.0], [3.0, 277.0], [13.0, 2122.5], [4.0, 3210.0], [1.0, 21807.5], [17.0, 4677.0], [19.0, 1502.5], [5.0, 2208.0], [6.0, 301.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1111.0], [2.0, 1285.0], [9.0, 1155.0], [10.0, 908.0], [11.0, 1282.0], [3.0, 1555.0], [12.0, 1030.0], [13.0, 1598.0], [14.0, 1179.0], [15.0, 1639.0], [4.0, 1030.0], [16.0, 1029.0], [1.0, 21698.0], [17.0, 1542.0], [18.0, 1822.5], [19.0, 2067.0], [5.0, 1279.0], [6.0, 959.0], [7.0, 1103.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.76834928E12, "maxY": 8.783333333333333, "series": [{"data": [[1.76834934E12, 5.2], [1.76834928E12, 0.03333333333333333], [1.76834946E12, 8.266666666666667], [1.7683494E12, 8.783333333333333], [1.76834952E12, 2.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76834952E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76834934E12, "maxY": 8.283333333333333, "series": [{"data": [[1.76834934E12, 0.5], [1.76834946E12, 0.5], [1.7683494E12, 0.5], [1.76834952E12, 0.1]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76834934E12, 4.4], [1.76834946E12, 7.766666666666667], [1.7683494E12, 8.283333333333333], [1.76834952E12, 2.716666666666667]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76834952E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76834934E12, "maxY": 8.283333333333333, "series": [{"data": [[1.76834934E12, 0.5], [1.76834946E12, 0.5], [1.7683494E12, 0.5], [1.76834952E12, 0.1]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025-success", "isController": false}, {"data": [[1.76834934E12, 4.4], [1.76834946E12, 7.766666666666667], [1.7683494E12, 8.283333333333333], [1.76834952E12, 2.716666666666667]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76834952E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76834934E12, "maxY": 8.283333333333333, "series": [{"data": [[1.76834934E12, 0.5], [1.76834946E12, 0.5], [1.7683494E12, 0.5], [1.76834952E12, 0.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76834934E12, 4.4], [1.76834946E12, 7.766666666666667], [1.7683494E12, 8.283333333333333], [1.76834952E12, 2.716666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76834952E12, "title": "Total Transactions Per Second"}},
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

