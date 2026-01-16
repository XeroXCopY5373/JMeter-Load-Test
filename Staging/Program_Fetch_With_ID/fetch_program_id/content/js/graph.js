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
        data: {"result": {"minY": 249.0, "minX": 0.0, "maxY": 26010.0, "series": [{"data": [[0.0, 249.0], [0.1, 249.0], [0.2, 253.0], [0.3, 253.0], [0.4, 258.0], [0.5, 261.0], [0.6, 263.0], [0.7, 273.0], [0.8, 274.0], [0.9, 282.0], [1.0, 287.0], [1.1, 290.0], [1.2, 298.0], [1.3, 313.0], [1.4, 327.0], [1.5, 386.0], [1.6, 404.0], [1.7, 425.0], [1.8, 439.0], [1.9, 446.0], [2.0, 456.0], [2.1, 462.0], [2.2, 468.0], [2.3, 470.0], [2.4, 491.0], [2.5, 495.0], [2.6, 509.0], [2.7, 523.0], [2.8, 524.0], [2.9, 527.0], [3.0, 528.0], [3.1, 530.0], [3.2, 532.0], [3.3, 534.0], [3.4, 537.0], [3.5, 545.0], [3.6, 545.0], [3.7, 548.0], [3.8, 549.0], [3.9, 555.0], [4.0, 558.0], [4.1, 560.0], [4.2, 560.0], [4.3, 569.0], [4.4, 571.0], [4.5, 576.0], [4.6, 578.0], [4.7, 582.0], [4.8, 597.0], [4.9, 604.0], [5.0, 605.0], [5.1, 606.0], [5.2, 606.0], [5.3, 607.0], [5.4, 609.0], [5.5, 614.0], [5.6, 624.0], [5.7, 625.0], [5.8, 631.0], [5.9, 631.0], [6.0, 635.0], [6.1, 637.0], [6.2, 639.0], [6.3, 642.0], [6.4, 647.0], [6.5, 652.0], [6.6, 652.0], [6.7, 656.0], [6.8, 660.0], [6.9, 672.0], [7.0, 679.0], [7.1, 685.0], [7.2, 702.0], [7.3, 707.0], [7.4, 708.0], [7.5, 712.0], [7.6, 714.0], [7.7, 715.0], [7.8, 715.0], [7.9, 724.0], [8.0, 729.0], [8.1, 735.0], [8.2, 737.0], [8.3, 738.0], [8.4, 745.0], [8.5, 747.0], [8.6, 749.0], [8.7, 754.0], [8.8, 755.0], [8.9, 757.0], [9.0, 757.0], [9.1, 764.0], [9.2, 767.0], [9.3, 768.0], [9.4, 770.0], [9.5, 772.0], [9.6, 774.0], [9.7, 776.0], [9.8, 784.0], [9.9, 786.0], [10.0, 792.0], [10.1, 795.0], [10.2, 796.0], [10.3, 800.0], [10.4, 800.0], [10.5, 804.0], [10.6, 810.0], [10.7, 810.0], [10.8, 813.0], [10.9, 814.0], [11.0, 815.0], [11.1, 817.0], [11.2, 819.0], [11.3, 821.0], [11.4, 822.0], [11.5, 823.0], [11.6, 825.0], [11.7, 829.0], [11.8, 831.0], [11.9, 843.0], [12.0, 845.0], [12.1, 847.0], [12.2, 855.0], [12.3, 855.0], [12.4, 865.0], [12.5, 866.0], [12.6, 874.0], [12.7, 883.0], [12.8, 892.0], [12.9, 892.0], [13.0, 896.0], [13.1, 898.0], [13.2, 901.0], [13.3, 904.0], [13.4, 906.0], [13.5, 916.0], [13.6, 918.0], [13.7, 918.0], [13.8, 925.0], [13.9, 926.0], [14.0, 931.0], [14.1, 931.0], [14.2, 932.0], [14.3, 936.0], [14.4, 941.0], [14.5, 942.0], [14.6, 944.0], [14.7, 946.0], [14.8, 947.0], [14.9, 950.0], [15.0, 955.0], [15.1, 956.0], [15.2, 957.0], [15.3, 958.0], [15.4, 961.0], [15.5, 961.0], [15.6, 962.0], [15.7, 965.0], [15.8, 967.0], [15.9, 971.0], [16.0, 972.0], [16.1, 973.0], [16.2, 976.0], [16.3, 983.0], [16.4, 986.0], [16.5, 988.0], [16.6, 991.0], [16.7, 991.0], [16.8, 994.0], [16.9, 1001.0], [17.0, 1008.0], [17.1, 1009.0], [17.2, 1010.0], [17.3, 1011.0], [17.4, 1016.0], [17.5, 1017.0], [17.6, 1019.0], [17.7, 1020.0], [17.8, 1020.0], [17.9, 1022.0], [18.0, 1024.0], [18.1, 1024.0], [18.2, 1026.0], [18.3, 1028.0], [18.4, 1032.0], [18.5, 1036.0], [18.6, 1037.0], [18.7, 1041.0], [18.8, 1042.0], [18.9, 1042.0], [19.0, 1044.0], [19.1, 1046.0], [19.2, 1049.0], [19.3, 1052.0], [19.4, 1054.0], [19.5, 1055.0], [19.6, 1058.0], [19.7, 1060.0], [19.8, 1062.0], [19.9, 1062.0], [20.0, 1064.0], [20.1, 1068.0], [20.2, 1069.0], [20.3, 1080.0], [20.4, 1081.0], [20.5, 1082.0], [20.6, 1085.0], [20.7, 1091.0], [20.8, 1091.0], [20.9, 1094.0], [21.0, 1097.0], [21.1, 1101.0], [21.2, 1104.0], [21.3, 1107.0], [21.4, 1111.0], [21.5, 1111.0], [21.6, 1111.0], [21.7, 1113.0], [21.8, 1113.0], [21.9, 1114.0], [22.0, 1115.0], [22.1, 1116.0], [22.2, 1118.0], [22.3, 1120.0], [22.4, 1122.0], [22.5, 1125.0], [22.6, 1127.0], [22.7, 1127.0], [22.8, 1129.0], [22.9, 1129.0], [23.0, 1130.0], [23.1, 1132.0], [23.2, 1133.0], [23.3, 1134.0], [23.4, 1136.0], [23.5, 1136.0], [23.6, 1138.0], [23.7, 1140.0], [23.8, 1141.0], [23.9, 1141.0], [24.0, 1142.0], [24.1, 1145.0], [24.2, 1147.0], [24.3, 1147.0], [24.4, 1149.0], [24.5, 1151.0], [24.6, 1152.0], [24.7, 1155.0], [24.8, 1157.0], [24.9, 1159.0], [25.0, 1161.0], [25.1, 1163.0], [25.2, 1165.0], [25.3, 1166.0], [25.4, 1170.0], [25.5, 1174.0], [25.6, 1177.0], [25.7, 1178.0], [25.8, 1180.0], [25.9, 1181.0], [26.0, 1184.0], [26.1, 1184.0], [26.2, 1186.0], [26.3, 1190.0], [26.4, 1191.0], [26.5, 1193.0], [26.6, 1197.0], [26.7, 1199.0], [26.8, 1200.0], [26.9, 1208.0], [27.0, 1211.0], [27.1, 1213.0], [27.2, 1215.0], [27.3, 1215.0], [27.4, 1219.0], [27.5, 1222.0], [27.6, 1224.0], [27.7, 1226.0], [27.8, 1226.0], [27.9, 1229.0], [28.0, 1231.0], [28.1, 1232.0], [28.2, 1234.0], [28.3, 1235.0], [28.4, 1235.0], [28.5, 1236.0], [28.6, 1241.0], [28.7, 1242.0], [28.8, 1244.0], [28.9, 1248.0], [29.0, 1249.0], [29.1, 1253.0], [29.2, 1254.0], [29.3, 1254.0], [29.4, 1255.0], [29.5, 1256.0], [29.6, 1258.0], [29.7, 1266.0], [29.8, 1266.0], [29.9, 1267.0], [30.0, 1270.0], [30.1, 1272.0], [30.2, 1273.0], [30.3, 1274.0], [30.4, 1277.0], [30.5, 1277.0], [30.6, 1277.0], [30.7, 1279.0], [30.8, 1280.0], [30.9, 1283.0], [31.0, 1284.0], [31.1, 1287.0], [31.2, 1287.0], [31.3, 1287.0], [31.4, 1287.0], [31.5, 1289.0], [31.6, 1291.0], [31.7, 1292.0], [31.8, 1293.0], [31.9, 1294.0], [32.0, 1297.0], [32.1, 1299.0], [32.2, 1299.0], [32.3, 1301.0], [32.4, 1302.0], [32.5, 1302.0], [32.6, 1305.0], [32.7, 1306.0], [32.8, 1307.0], [32.9, 1307.0], [33.0, 1310.0], [33.1, 1315.0], [33.2, 1317.0], [33.3, 1317.0], [33.4, 1319.0], [33.5, 1322.0], [33.6, 1324.0], [33.7, 1326.0], [33.8, 1326.0], [33.9, 1330.0], [34.0, 1333.0], [34.1, 1334.0], [34.2, 1335.0], [34.3, 1335.0], [34.4, 1336.0], [34.5, 1338.0], [34.6, 1339.0], [34.7, 1340.0], [34.8, 1346.0], [34.9, 1347.0], [35.0, 1348.0], [35.1, 1349.0], [35.2, 1350.0], [35.3, 1350.0], [35.4, 1353.0], [35.5, 1353.0], [35.6, 1356.0], [35.7, 1357.0], [35.8, 1360.0], [35.9, 1361.0], [36.0, 1361.0], [36.1, 1361.0], [36.2, 1363.0], [36.3, 1364.0], [36.4, 1366.0], [36.5, 1366.0], [36.6, 1366.0], [36.7, 1367.0], [36.8, 1368.0], [36.9, 1368.0], [37.0, 1369.0], [37.1, 1369.0], [37.2, 1371.0], [37.3, 1372.0], [37.4, 1372.0], [37.5, 1373.0], [37.6, 1374.0], [37.7, 1378.0], [37.8, 1381.0], [37.9, 1381.0], [38.0, 1383.0], [38.1, 1385.0], [38.2, 1386.0], [38.3, 1390.0], [38.4, 1394.0], [38.5, 1394.0], [38.6, 1397.0], [38.7, 1397.0], [38.8, 1399.0], [38.9, 1403.0], [39.0, 1403.0], [39.1, 1404.0], [39.2, 1405.0], [39.3, 1405.0], [39.4, 1406.0], [39.5, 1407.0], [39.6, 1408.0], [39.7, 1410.0], [39.8, 1410.0], [39.9, 1412.0], [40.0, 1412.0], [40.1, 1413.0], [40.2, 1414.0], [40.3, 1415.0], [40.4, 1416.0], [40.5, 1417.0], [40.6, 1418.0], [40.7, 1419.0], [40.8, 1419.0], [40.9, 1420.0], [41.0, 1422.0], [41.1, 1425.0], [41.2, 1426.0], [41.3, 1429.0], [41.4, 1429.0], [41.5, 1429.0], [41.6, 1432.0], [41.7, 1432.0], [41.8, 1433.0], [41.9, 1436.0], [42.0, 1437.0], [42.1, 1439.0], [42.2, 1440.0], [42.3, 1441.0], [42.4, 1447.0], [42.5, 1448.0], [42.6, 1448.0], [42.7, 1448.0], [42.8, 1450.0], [42.9, 1452.0], [43.0, 1453.0], [43.1, 1453.0], [43.2, 1455.0], [43.3, 1457.0], [43.4, 1457.0], [43.5, 1458.0], [43.6, 1458.0], [43.7, 1462.0], [43.8, 1463.0], [43.9, 1464.0], [44.0, 1466.0], [44.1, 1466.0], [44.2, 1468.0], [44.3, 1469.0], [44.4, 1473.0], [44.5, 1475.0], [44.6, 1476.0], [44.7, 1478.0], [44.8, 1480.0], [44.9, 1484.0], [45.0, 1484.0], [45.1, 1488.0], [45.2, 1488.0], [45.3, 1489.0], [45.4, 1490.0], [45.5, 1493.0], [45.6, 1493.0], [45.7, 1494.0], [45.8, 1495.0], [45.9, 1496.0], [46.0, 1500.0], [46.1, 1500.0], [46.2, 1502.0], [46.3, 1505.0], [46.4, 1507.0], [46.5, 1508.0], [46.6, 1511.0], [46.7, 1511.0], [46.8, 1513.0], [46.9, 1513.0], [47.0, 1514.0], [47.1, 1515.0], [47.2, 1515.0], [47.3, 1516.0], [47.4, 1517.0], [47.5, 1518.0], [47.6, 1521.0], [47.7, 1523.0], [47.8, 1526.0], [47.9, 1529.0], [48.0, 1529.0], [48.1, 1532.0], [48.2, 1533.0], [48.3, 1533.0], [48.4, 1533.0], [48.5, 1534.0], [48.6, 1534.0], [48.7, 1537.0], [48.8, 1537.0], [48.9, 1539.0], [49.0, 1543.0], [49.1, 1544.0], [49.2, 1546.0], [49.3, 1548.0], [49.4, 1549.0], [49.5, 1550.0], [49.6, 1553.0], [49.7, 1553.0], [49.8, 1555.0], [49.9, 1558.0], [50.0, 1559.0], [50.1, 1560.0], [50.2, 1560.0], [50.3, 1562.0], [50.4, 1562.0], [50.5, 1563.0], [50.6, 1566.0], [50.7, 1566.0], [50.8, 1568.0], [50.9, 1570.0], [51.0, 1571.0], [51.1, 1574.0], [51.2, 1577.0], [51.3, 1578.0], [51.4, 1579.0], [51.5, 1579.0], [51.6, 1582.0], [51.7, 1584.0], [51.8, 1587.0], [51.9, 1588.0], [52.0, 1590.0], [52.1, 1591.0], [52.2, 1592.0], [52.3, 1593.0], [52.4, 1594.0], [52.5, 1596.0], [52.6, 1598.0], [52.7, 1599.0], [52.8, 1601.0], [52.9, 1602.0], [53.0, 1603.0], [53.1, 1606.0], [53.2, 1607.0], [53.3, 1608.0], [53.4, 1611.0], [53.5, 1611.0], [53.6, 1612.0], [53.7, 1614.0], [53.8, 1617.0], [53.9, 1619.0], [54.0, 1622.0], [54.1, 1623.0], [54.2, 1624.0], [54.3, 1624.0], [54.4, 1626.0], [54.5, 1630.0], [54.6, 1633.0], [54.7, 1637.0], [54.8, 1638.0], [54.9, 1641.0], [55.0, 1643.0], [55.1, 1644.0], [55.2, 1646.0], [55.3, 1646.0], [55.4, 1647.0], [55.5, 1649.0], [55.6, 1650.0], [55.7, 1654.0], [55.8, 1655.0], [55.9, 1655.0], [56.0, 1657.0], [56.1, 1657.0], [56.2, 1659.0], [56.3, 1659.0], [56.4, 1662.0], [56.5, 1663.0], [56.6, 1664.0], [56.7, 1666.0], [56.8, 1673.0], [56.9, 1673.0], [57.0, 1674.0], [57.1, 1675.0], [57.2, 1677.0], [57.3, 1677.0], [57.4, 1682.0], [57.5, 1683.0], [57.6, 1685.0], [57.7, 1687.0], [57.8, 1688.0], [57.9, 1689.0], [58.0, 1693.0], [58.1, 1694.0], [58.2, 1695.0], [58.3, 1697.0], [58.4, 1698.0], [58.5, 1698.0], [58.6, 1698.0], [58.7, 1702.0], [58.8, 1704.0], [58.9, 1704.0], [59.0, 1709.0], [59.1, 1709.0], [59.2, 1710.0], [59.3, 1711.0], [59.4, 1713.0], [59.5, 1714.0], [59.6, 1718.0], [59.7, 1719.0], [59.8, 1721.0], [59.9, 1723.0], [60.0, 1724.0], [60.1, 1726.0], [60.2, 1728.0], [60.3, 1730.0], [60.4, 1732.0], [60.5, 1733.0], [60.6, 1735.0], [60.7, 1740.0], [60.8, 1741.0], [60.9, 1741.0], [61.0, 1743.0], [61.1, 1744.0], [61.2, 1745.0], [61.3, 1751.0], [61.4, 1751.0], [61.5, 1754.0], [61.6, 1754.0], [61.7, 1756.0], [61.8, 1757.0], [61.9, 1758.0], [62.0, 1760.0], [62.1, 1768.0], [62.2, 1768.0], [62.3, 1773.0], [62.4, 1776.0], [62.5, 1778.0], [62.6, 1783.0], [62.7, 1784.0], [62.8, 1791.0], [62.9, 1801.0], [63.0, 1801.0], [63.1, 1805.0], [63.2, 1806.0], [63.3, 1808.0], [63.4, 1809.0], [63.5, 1811.0], [63.6, 1816.0], [63.7, 1818.0], [63.8, 1819.0], [63.9, 1823.0], [64.0, 1829.0], [64.1, 1830.0], [64.2, 1833.0], [64.3, 1835.0], [64.4, 1835.0], [64.5, 1836.0], [64.6, 1837.0], [64.7, 1841.0], [64.8, 1848.0], [64.9, 1849.0], [65.0, 1851.0], [65.1, 1851.0], [65.2, 1852.0], [65.3, 1854.0], [65.4, 1854.0], [65.5, 1855.0], [65.6, 1863.0], [65.7, 1865.0], [65.8, 1875.0], [65.9, 1876.0], [66.0, 1880.0], [66.1, 1882.0], [66.2, 1883.0], [66.3, 1884.0], [66.4, 1886.0], [66.5, 1887.0], [66.6, 1891.0], [66.7, 1898.0], [66.8, 1898.0], [66.9, 1900.0], [67.0, 1905.0], [67.1, 1910.0], [67.2, 1914.0], [67.3, 1916.0], [67.4, 1919.0], [67.5, 1924.0], [67.6, 1924.0], [67.7, 1926.0], [67.8, 1930.0], [67.9, 1932.0], [68.0, 1938.0], [68.1, 1939.0], [68.2, 1940.0], [68.3, 1942.0], [68.4, 1942.0], [68.5, 1944.0], [68.6, 1946.0], [68.7, 1946.0], [68.8, 1947.0], [68.9, 1947.0], [69.0, 1951.0], [69.1, 1953.0], [69.2, 1955.0], [69.3, 1956.0], [69.4, 1957.0], [69.5, 1958.0], [69.6, 1961.0], [69.7, 1964.0], [69.8, 1965.0], [69.9, 1967.0], [70.0, 1970.0], [70.1, 1970.0], [70.2, 1972.0], [70.3, 1974.0], [70.4, 1978.0], [70.5, 1979.0], [70.6, 1981.0], [70.7, 1982.0], [70.8, 1984.0], [70.9, 1989.0], [71.0, 1993.0], [71.1, 1994.0], [71.2, 1997.0], [71.3, 2002.0], [71.4, 2002.0], [71.5, 2005.0], [71.6, 2008.0], [71.7, 2010.0], [71.8, 2018.0], [71.9, 2021.0], [72.0, 2024.0], [72.1, 2026.0], [72.2, 2027.0], [72.3, 2027.0], [72.4, 2028.0], [72.5, 2028.0], [72.6, 2029.0], [72.7, 2032.0], [72.8, 2034.0], [72.9, 2036.0], [73.0, 2038.0], [73.1, 2039.0], [73.2, 2045.0], [73.3, 2048.0], [73.4, 2049.0], [73.5, 2054.0], [73.6, 2054.0], [73.7, 2057.0], [73.8, 2060.0], [73.9, 2062.0], [74.0, 2067.0], [74.1, 2068.0], [74.2, 2068.0], [74.3, 2075.0], [74.4, 2078.0], [74.5, 2085.0], [74.6, 2085.0], [74.7, 2089.0], [74.8, 2092.0], [74.9, 2093.0], [75.0, 2096.0], [75.1, 2098.0], [75.2, 2098.0], [75.3, 2103.0], [75.4, 2105.0], [75.5, 2108.0], [75.6, 2122.0], [75.7, 2129.0], [75.8, 2130.0], [75.9, 2134.0], [76.0, 2134.0], [76.1, 2137.0], [76.2, 2140.0], [76.3, 2140.0], [76.4, 2144.0], [76.5, 2147.0], [76.6, 2147.0], [76.7, 2148.0], [76.8, 2150.0], [76.9, 2150.0], [77.0, 2155.0], [77.1, 2158.0], [77.2, 2160.0], [77.3, 2164.0], [77.4, 2164.0], [77.5, 2171.0], [77.6, 2175.0], [77.7, 2178.0], [77.8, 2180.0], [77.9, 2184.0], [78.0, 2187.0], [78.1, 2191.0], [78.2, 2199.0], [78.3, 2200.0], [78.4, 2204.0], [78.5, 2208.0], [78.6, 2209.0], [78.7, 2211.0], [78.8, 2212.0], [78.9, 2218.0], [79.0, 2219.0], [79.1, 2226.0], [79.2, 2228.0], [79.3, 2228.0], [79.4, 2231.0], [79.5, 2232.0], [79.6, 2233.0], [79.7, 2234.0], [79.8, 2238.0], [79.9, 2238.0], [80.0, 2239.0], [80.1, 2243.0], [80.2, 2243.0], [80.3, 2246.0], [80.4, 2248.0], [80.5, 2256.0], [80.6, 2260.0], [80.7, 2260.0], [80.8, 2262.0], [80.9, 2268.0], [81.0, 2271.0], [81.1, 2272.0], [81.2, 2273.0], [81.3, 2278.0], [81.4, 2280.0], [81.5, 2282.0], [81.6, 2285.0], [81.7, 2291.0], [81.8, 2294.0], [81.9, 2297.0], [82.0, 2297.0], [82.1, 2297.0], [82.2, 2299.0], [82.3, 2302.0], [82.4, 2307.0], [82.5, 2317.0], [82.6, 2322.0], [82.7, 2328.0], [82.8, 2338.0], [82.9, 2340.0], [83.0, 2353.0], [83.1, 2359.0], [83.2, 2361.0], [83.3, 2370.0], [83.4, 2372.0], [83.5, 2377.0], [83.6, 2389.0], [83.7, 2392.0], [83.8, 2397.0], [83.9, 2400.0], [84.0, 2401.0], [84.1, 2407.0], [84.2, 2413.0], [84.3, 2416.0], [84.4, 2431.0], [84.5, 2431.0], [84.6, 2436.0], [84.7, 2438.0], [84.8, 2443.0], [84.9, 2456.0], [85.0, 2469.0], [85.1, 2473.0], [85.2, 2480.0], [85.3, 2487.0], [85.4, 2497.0], [85.5, 2504.0], [85.6, 2507.0], [85.7, 2518.0], [85.8, 2520.0], [85.9, 2527.0], [86.0, 2531.0], [86.1, 2532.0], [86.2, 2538.0], [86.3, 2548.0], [86.4, 2553.0], [86.5, 2555.0], [86.6, 2556.0], [86.7, 2558.0], [86.8, 2567.0], [86.9, 2579.0], [87.0, 2580.0], [87.1, 2602.0], [87.2, 2603.0], [87.3, 2608.0], [87.4, 2615.0], [87.5, 2617.0], [87.6, 2620.0], [87.7, 2627.0], [87.8, 2631.0], [87.9, 2644.0], [88.0, 2649.0], [88.1, 2656.0], [88.2, 2665.0], [88.3, 2672.0], [88.4, 2690.0], [88.5, 2690.0], [88.6, 2698.0], [88.7, 2700.0], [88.8, 2731.0], [88.9, 2735.0], [89.0, 2739.0], [89.1, 2764.0], [89.2, 2768.0], [89.3, 2781.0], [89.4, 2790.0], [89.5, 2808.0], [89.6, 2810.0], [89.7, 2828.0], [89.8, 2845.0], [89.9, 2870.0], [90.0, 2874.0], [90.1, 2894.0], [90.2, 2927.0], [90.3, 2934.0], [90.4, 2948.0], [90.5, 2951.0], [90.6, 2964.0], [90.7, 2977.0], [90.8, 2983.0], [90.9, 3028.0], [91.0, 3032.0], [91.1, 3042.0], [91.2, 3055.0], [91.3, 3071.0], [91.4, 3080.0], [91.5, 3089.0], [91.6, 3098.0], [91.7, 3128.0], [91.8, 3129.0], [91.9, 3135.0], [92.0, 3138.0], [92.1, 3150.0], [92.2, 3162.0], [92.3, 3198.0], [92.4, 3213.0], [92.5, 3221.0], [92.6, 3228.0], [92.7, 3246.0], [92.8, 3262.0], [92.9, 3300.0], [93.0, 3313.0], [93.1, 3350.0], [93.2, 3357.0], [93.3, 3357.0], [93.4, 3400.0], [93.5, 3409.0], [93.6, 3445.0], [93.7, 3526.0], [93.8, 3561.0], [93.9, 3570.0], [94.0, 3602.0], [94.1, 3613.0], [94.2, 3643.0], [94.3, 3644.0], [94.4, 3687.0], [94.5, 3732.0], [94.6, 3737.0], [94.7, 3819.0], [94.8, 3873.0], [94.9, 3891.0], [95.0, 3967.0], [95.1, 3972.0], [95.2, 4003.0], [95.3, 4051.0], [95.4, 4053.0], [95.5, 4111.0], [95.6, 4204.0], [95.7, 4284.0], [95.8, 4406.0], [95.9, 4479.0], [96.0, 4516.0], [96.1, 4579.0], [96.2, 4715.0], [96.3, 4736.0], [96.4, 4801.0], [96.5, 4820.0], [96.6, 4831.0], [96.7, 4885.0], [96.8, 4894.0], [96.9, 4929.0], [97.0, 4986.0], [97.1, 5008.0], [97.2, 5129.0], [97.3, 5188.0], [97.4, 5774.0], [97.5, 8045.0], [97.6, 8251.0], [97.7, 8979.0], [97.8, 10391.0], [97.9, 10507.0], [98.0, 21966.0], [98.1, 22053.0], [98.2, 22062.0], [98.3, 22121.0], [98.4, 22242.0], [98.5, 22332.0], [98.6, 22438.0], [98.7, 22486.0], [98.8, 22644.0], [98.9, 22670.0], [99.0, 22704.0], [99.1, 22718.0], [99.2, 22727.0], [99.3, 22755.0], [99.4, 22952.0], [99.5, 22961.0], [99.6, 23012.0], [99.7, 23234.0], [99.8, 24060.0], [99.9, 24627.0], [100.0, 26010.0]], "isOverall": false, "label": "api/program/fetch/144", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 117.0, "series": [{"data": [[600.0, 37.0], [700.0, 51.0], [800.0, 47.0], [900.0, 60.0], [1000.0, 69.0], [1100.0, 93.0], [1200.0, 89.0], [1300.0, 108.0], [1400.0, 117.0], [1500.0, 110.0], [1600.0, 96.0], [1700.0, 70.0], [1800.0, 64.0], [1900.0, 72.0], [2000.0, 66.0], [2100.0, 49.0], [2300.0, 27.0], [2200.0, 65.0], [2400.0, 26.0], [2500.0, 25.0], [2600.0, 27.0], [2700.0, 12.0], [2800.0, 12.0], [2900.0, 11.0], [3000.0, 13.0], [3100.0, 12.0], [3200.0, 9.0], [3300.0, 8.0], [3400.0, 5.0], [3500.0, 5.0], [3700.0, 3.0], [3600.0, 8.0], [3800.0, 4.0], [3900.0, 4.0], [4000.0, 5.0], [4200.0, 2.0], [4300.0, 1.0], [4100.0, 2.0], [4500.0, 3.0], [4400.0, 3.0], [4700.0, 4.0], [4800.0, 7.0], [4900.0, 4.0], [5000.0, 2.0], [5100.0, 2.0], [5200.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [8000.0, 1.0], [8200.0, 1.0], [8600.0, 1.0], [8900.0, 1.0], [9100.0, 1.0], [10300.0, 1.0], [10500.0, 1.0], [22400.0, 2.0], [22200.0, 2.0], [22300.0, 2.0], [21900.0, 1.0], [22000.0, 4.0], [21800.0, 1.0], [22100.0, 1.0], [22700.0, 7.0], [22600.0, 4.0], [23100.0, 1.0], [22900.0, 3.0], [23200.0, 1.0], [23000.0, 1.0], [24200.0, 1.0], [24000.0, 1.0], [24600.0, 1.0], [26000.0, 1.0], [200.0, 20.0], [300.0, 6.0], [400.0, 15.0], [500.0, 39.0]], "isOverall": false, "label": "api/program/fetch/144", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 26000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 28.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1512.0, "series": [{"data": [[0.0, 29.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 64.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 28.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1512.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.41533546325879, "minX": 1.76828754E12, "maxY": 20.0, "series": [{"data": [[1.7682876E12, 19.56150793650795], [1.76828766E12, 20.0], [1.76828754E12, 8.41533546325879], [1.76828772E12, 19.413580246913572]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828772E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1008.8461538461539, "minX": 1.0, "maxY": 4502.000000000001, "series": [{"data": [[2.0, 1936.142857142857], [8.0, 1158.625], [9.0, 1008.8461538461539], [10.0, 1173.888888888889], [11.0, 1151.310344827586], [3.0, 1752.833333333333], [12.0, 1357.1481481481483], [13.0, 1354.7037037037042], [14.0, 1530.2592592592591], [15.0, 1334.75], [1.0, 2760.222222222222], [4.0, 1527.2727272727275], [16.0, 4502.000000000001], [17.0, 2348.875], [18.0, 1932.96875], [19.0, 1859.1304347826085], [5.0, 1621.217391304348], [20.0, 2317.923013245033], [6.0, 1557.3600000000001], [7.0, 1569.730769230769]], "isOverall": false, "label": "api/program/fetch/144", "isController": false}, {"data": [[17.52786282914879, 2152.605633802819]], "isOverall": false, "label": "api/program/fetch/144-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1252.0, "minX": 1.76828754E12, "maxY": 4845561.75, "series": [{"data": [[1.7682876E12, 4845561.75], [1.76828766E12, 4722886.166666667], [1.76828754E12, 2893180.283333333], [1.76828772E12, 2995449.0833333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7682876E12, 2016.0], [1.76828766E12, 1968.0], [1.76828754E12, 1252.0], [1.76828772E12, 1296.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828772E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 969.6709265175718, "minX": 1.76828754E12, "maxY": 2732.635802469136, "series": [{"data": [[1.7682876E12, 2355.4305555555566], [1.76828766E12, 2315.420731707315], [1.76828754E12, 969.6709265175718], [1.76828772E12, 2732.635802469136]], "isOverall": false, "label": "api/program/fetch/144", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828772E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 647.1948881789137, "minX": 1.76828754E12, "maxY": 2358.052469135803, "series": [{"data": [[1.7682876E12, 1768.3432539682547], [1.76828766E12, 1884.6747967479685], [1.76828754E12, 647.1948881789137], [1.76828772E12, 2358.052469135803]], "isOverall": false, "label": "api/program/fetch/144", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828772E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 6.1428571428571495, "minX": 1.76828754E12, "maxY": 1243.7160493827162, "series": [{"data": [[1.7682876E12, 6.1428571428571495], [1.76828766E12, 644.5508130081299], [1.76828754E12, 10.795527156549513], [1.76828772E12, 1243.7160493827162]], "isOverall": false, "label": "api/program/fetch/144", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828772E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 249.0, "minX": 1.76828754E12, "maxY": 24060.0, "series": [{"data": [[1.7682876E12, 5774.0], [1.76828766E12, 22486.0], [1.76828754E12, 1553.0], [1.76828772E12, 24060.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7682876E12, 1180.0], [1.76828766E12, 491.0], [1.76828754E12, 249.0], [1.76828772E12, 404.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7682876E12, 2293.6], [1.76828766E12, 2714.9000000000033], [1.76828754E12, 930.7000000000004], [1.76828772E12, 2507.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7682876E12, 5774.0], [1.76828766E12, 22486.0], [1.76828754E12, 1553.0], [1.76828772E12, 24060.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7682876E12, 1583.0], [1.76828766E12, 1062.0], [1.76828754E12, 282.5], [1.76828772E12, 1111.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7682876E12, 4826.3499999999985], [1.76828766E12, 15897.549999999992], [1.76828754E12, 1310.9999999999998], [1.76828772E12, 11345.999999999969]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828772E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 253.5, "minX": 1.0, "maxY": 21899.0, "series": [{"data": [[4.0, 253.5], [2.0, 468.0], [8.0, 1127.0], [9.0, 1238.0], [5.0, 261.0], [10.0, 1115.0], [11.0, 2305.5], [6.0, 327.0], [12.0, 1249.0], [7.0, 10507.0], [15.0, 1414.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1533.0], [2.0, 2297.0], [9.0, 1332.5], [10.0, 1685.0], [11.0, 1553.0], [3.0, 1366.0], [12.0, 1611.0], [13.0, 1683.0], [14.0, 2044.5], [15.0, 2010.0], [1.0, 21899.0], [4.0, 1586.5], [16.0, 2288.5], [17.0, 3313.0], [19.0, 2474.0], [5.0, 1532.0], [6.0, 1390.0], [7.0, 1488.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 253.5, "minX": 1.0, "maxY": 21432.0, "series": [{"data": [[4.0, 253.5], [2.0, 467.0], [8.0, 1127.0], [9.0, 1238.0], [5.0, 261.0], [10.0, 1115.0], [11.0, 2305.5], [6.0, 326.0], [12.0, 1249.0], [7.0, 10507.0], [15.0, 1414.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1139.0], [2.0, 1754.0], [9.0, 913.5], [10.0, 1157.0], [11.0, 1147.0], [3.0, 963.0], [12.0, 1063.0], [13.0, 1215.0], [14.0, 1512.0], [15.0, 1421.0], [1.0, 21432.0], [4.0, 1267.5], [16.0, 1686.5], [17.0, 2476.0], [19.0, 1621.0], [5.0, 1027.0], [6.0, 1027.0], [7.0, 975.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.066666666666666, "minX": 1.76828754E12, "maxY": 8.483333333333333, "series": [{"data": [[1.7682876E12, 8.483333333333333], [1.76828766E12, 8.2], [1.76828754E12, 5.466666666666667], [1.76828772E12, 5.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828772E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76828754E12, "maxY": 7.9, "series": [{"data": [[1.7682876E12, 0.5], [1.76828766E12, 0.5], [1.76828754E12, 0.5], [1.76828772E12, 0.5166666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7682876E12, 7.9], [1.76828766E12, 7.7], [1.76828754E12, 4.716666666666667], [1.76828772E12, 4.883333333333334]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828772E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76828754E12, "maxY": 7.9, "series": [{"data": [[1.7682876E12, 0.5], [1.76828766E12, 0.5], [1.76828754E12, 0.5], [1.76828772E12, 0.5166666666666667]], "isOverall": false, "label": "api/program/fetch/144-success", "isController": false}, {"data": [[1.7682876E12, 7.9], [1.76828766E12, 7.7], [1.76828754E12, 4.716666666666667], [1.76828772E12, 4.883333333333334]], "isOverall": false, "label": "api/program/fetch/144-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828772E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76828754E12, "maxY": 7.9, "series": [{"data": [[1.7682876E12, 0.5], [1.76828766E12, 0.5], [1.76828754E12, 0.5], [1.76828772E12, 0.5166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7682876E12, 7.9], [1.76828766E12, 7.7], [1.76828754E12, 4.716666666666667], [1.76828772E12, 4.883333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828772E12, "title": "Total Transactions Per Second"}},
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

